import { analyzeMenu } from '../lib/analyzeMenu.js';
import { checkRateLimit } from '../lib/rateLimit.js';
import { logAnalysis, sha256Hex, findCachedByHash, countAnalysesByIp } from '../lib/supabase.js';

const ACCEPTED_MEDIA = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
]);
const IP_HASH_SALT = process.env.IP_HASH_SALT || 'reboot-salt-fallback';
const MAX_PAYLOAD_B64 = 13_500_000; // ~10MB actual bytes; multi-page menus need headroom

// VIP key — users who pass this as X-Reboot-VIP header bypass rate limit + beta cap.
// Set REBOOT_VIP_KEY as a Vercel env var; if not set, no one has VIP access.
const VIP_KEY = process.env.REBOOT_VIP_KEY || null;

// Beta mode: limit fresh analyses per IP until Reboot 30 launches.
// Cache hits and library searches don't count against this.
const BETA_LIMIT = 3;
const BETA_END_ISO = '2026-05-04T00:00:00Z';
// Counting window: only analyses created after this timestamp count.
// Set to a recent-past date so new users start with the full quota.
const BETA_WINDOW_START_ISO = '2026-04-20T00:00:00Z';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    'unknown';

  // VIP bypass: if the client presents a valid VIP key, skip rate + beta limits.
  const isVip = VIP_KEY && req.headers['x-reboot-vip'] === VIP_KEY;

  if (!isVip) {
    const limit = checkRateLimit(ip);
    if (!limit.allowed) {
      return res.status(429).json({
        error: 'rate_limit_exceeded',
        message: 'Superaste los análisis permitidos por ahora. Intenta de nuevo en una hora.',
      });
    }
  }

  // Accept three shapes:
  //   1. { files: [{ base64, mediaType }, ...] }   multi-page preferred
  //   2. { fileBase64, mediaType }                 single file (current)
  //   3. { imageBase64, mediaType }                legacy
  const body = req.body || {};
  let files = [];
  if (Array.isArray(body.files) && body.files.length > 0) {
    files = body.files;
  } else {
    const singleData = body.fileBase64 ?? body.imageBase64;
    if (singleData) files = [{ base64: singleData, mediaType: body.mediaType }];
  }

  if (files.length === 0) {
    return res.status(400).json({ error: 'bad_request', message: 'Falta el archivo.' });
  }
  if (files.length > 8) {
    return res.status(400).json({ error: 'too_many_files', message: 'Máximo 8 páginas por análisis.' });
  }

  // Validate each file + compute total payload size
  let totalSize = 0;
  for (const f of files) {
    if (!f?.base64 || typeof f.base64 !== 'string') {
      return res.status(400).json({ error: 'bad_request', message: 'Archivo inválido.' });
    }
    if (!ACCEPTED_MEDIA.has(f.mediaType)) {
      return res.status(400).json({
        error: 'unsupported_media_type',
        message: 'Formato no soportado. Sube foto (JPG, PNG, WebP) o PDF.',
      });
    }
    totalSize += f.base64.length;
  }
  if (totalSize > MAX_PAYLOAD_B64) {
    return res.status(413).json({
      error: 'payload_too_large',
      message: 'Los archivos juntos pesan demasiado. Intenta con imágenes más pequeñas o menos páginas.',
    });
  }

  // For cache/log purposes we use a hash of all files concatenated.
  const concatForHash = files.map((f) => f.base64).join('|');
  // mediaType used for single-file legacy response fields
  const primaryMediaType = files[0].mediaType;

  const t0 = Date.now();
  const payloadKB = Math.round(totalSize / 1024);
  const imageHash = sha256Hex(concatForHash);
  const ipHash = sha256Hex(ip + IP_HASH_SALT);

  // CACHE: if we've analyzed this exact set of image(s) before, return it instantly.
  // Cache hits never count toward the beta quota.
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const cached = await findCachedByHash(imageHash);
    if (cached) {
      return res.status(200).json({
        ...cached.analysis_json,
        analysisId: cached.id,
        cached: true,
        _timing: { totalMs: Date.now() - t0, payloadKB, mediaType: primaryMediaType, source: 'cache', files: files.length },
      });
    }
  }

  // BETA LIMIT: before launch, each IP gets 3 fresh analyses (VIPs exempt).
  const inBeta = Date.now() < new Date(BETA_END_ISO).getTime();
  if (!isVip && inBeta && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const usedCount = await countAnalysesByIp(ipHash, BETA_WINDOW_START_ISO);
    if (usedCount >= BETA_LIMIT) {
      return res.status(429).json({
        error: 'beta_limit_reached',
        message: 'Usaste tus 3 análisis de la beta. El 4 de mayo arranca Reboot 30 y se libera el acceso completo.',
        beta: {
          limit: BETA_LIMIT,
          used: usedCount,
          remaining: 0,
          endsAt: BETA_END_ISO,
          ctaUrl: 'https://rebootlifestyle.github.io/reboot-lifestyle/reboot30.html?utm_source=semaforo&utm_medium=beta_limit&utm_campaign=reboot30',
        },
      });
    }
  }

  try {
    const result = await analyzeMenu({
      files,
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    const tClaude = Date.now() - t0;

    // Silent log to Supabase (skipped if env vars absent).
    let analysisId = null;
    let betaRemaining = null;
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const logged = await logAnalysis({
        analysisJson: result,
        imageHash,
        imageBytes: Math.round(totalSize * 0.75),
        userAgent: req.headers['user-agent']?.slice(0, 300) || null,
        ipHash,
      });
      analysisId = logged?.id || null;

      // After counting this fresh analysis, report beta remaining for UI hints.
      // VIPs don't get a beta counter.
      if (!isVip && inBeta) {
        const usedAfter = await countAnalysesByIp(ipHash, BETA_WINDOW_START_ISO);
        betaRemaining = Math.max(0, BETA_LIMIT - usedAfter);
      }
    }

    return res.status(200).json({
      ...result,
      analysisId,
      beta: !isVip && inBeta ? { limit: BETA_LIMIT, remaining: betaRemaining, endsAt: BETA_END_ISO } : null,
      vip: isVip || undefined,
      _timing: { claudeMs: tClaude, totalMs: Date.now() - t0, payloadKB, mediaType: primaryMediaType, files: files.length },
    });
  } catch (err) {
    const elapsed = Date.now() - t0;
    console.error('analyze error:', err);
    if (err.code === 'INVALID_RESPONSE') {
      return res.status(502).json({
        error: 'invalid_model_response',
        message: 'El modelo devolvió algo inesperado. Intenta con otra foto o PDF.',
        _debug: { elapsedMs: elapsed, payloadKB, mediaType, errName: err?.name, errMessage: err?.message?.slice(0, 300) },
      });
    }
    const isTimeout = err?.name === 'AbortError' || /timeout|timed out/i.test(err?.message || '');
    return res.status(500).json({
      error: isTimeout ? 'timeout' : 'internal_error',
      message: isTimeout
        ? 'El menú es muy grande y el análisis tardó más de lo esperado. Intenta con una parte del menú o una foto más corta.'
        : 'Algo falló del lado nuestro. Intenta de nuevo en un minuto.',
      _debug: {
        elapsedMs: elapsed,
        payloadKB,
        mediaType,
        errName: err?.name,
        errMessage: err?.message?.slice(0, 500),
        errCode: err?.code,
        errStatus: err?.status,
      },
    });
  }
}

// Vercel Node.js body parser supports JSON up to ~5MB by default; we bump it for PDFs.
export const config = {
  api: { bodyParser: { sizeLimit: '10mb' } },
};
