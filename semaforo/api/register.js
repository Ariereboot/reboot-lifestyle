import { getSupabase, sha256Hex } from '../lib/supabase.js';

const IP_HASH_SALT = process.env.IP_HASH_SALT || 'reboot-salt-fallback';

/**
 * POST /api/register
 * Body (form-urlencoded or JSON): { nombre, apellido, email, codigo, telefono, pais, retos[], consentimiento, source, utm_* }
 * Escribe el registro en Supabase (tabla reboot30_registros).
 */
export default async function handler(req, res) {
  // CORS para el form en GitHub Pages o dominio custom
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(503).json({ error: 'db_unavailable', message: 'Registro temporalmente no disponible.' });
  }

  const body = req.body || {};

  // Validación mínima
  const nombre = (body.nombre || '').toString().trim();
  const email = (body.email || '').toString().trim().toLowerCase();
  if (!nombre || nombre.length > 200) {
    return res.status(400).json({ error: 'bad_request', message: 'Falta tu nombre.' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return res.status(400).json({ error: 'bad_request', message: 'Email inválido.' });
  }

  // Normalizar retos (puede venir como array, como string, o como campos repetidos)
  let retos = [];
  if (Array.isArray(body.retos)) {
    retos = body.retos.map((r) => String(r).trim()).filter(Boolean);
  } else if (typeof body.retos === 'string' && body.retos) {
    retos = [body.retos.trim()];
  }
  retos = retos.slice(0, 10); // safety cap

  // Consentimiento puede venir como "true"/"on"/true/etc.
  const consentimientoRaw = body.consentimiento;
  const consentimiento =
    consentimientoRaw === true ||
    consentimientoRaw === 'true' ||
    consentimientoRaw === 'on' ||
    consentimientoRaw === '1' ||
    consentimientoRaw === 'yes';

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    'unknown';

  const row = {
    nombre,
    apellido: (body.apellido || '').toString().trim().slice(0, 200) || null,
    email,
    codigo_pais: (body.codigo || body.codigo_pais || '').toString().trim().slice(0, 10) || null,
    telefono: (body.telefono || '').toString().trim().slice(0, 30) || null,
    pais: (body.pais || '').toString().trim().slice(0, 80) || null,
    retos,
    consentimiento,
    source: (body.source || '').toString().trim().slice(0, 120) || null,
    utm_source: (body.utm_source || '').toString().trim().slice(0, 120) || null,
    utm_medium: (body.utm_medium || '').toString().trim().slice(0, 120) || null,
    utm_campaign: (body.utm_campaign || '').toString().trim().slice(0, 120) || null,
    user_agent: (req.headers['user-agent'] || '').slice(0, 300) || null,
    ip_hash: sha256Hex(ip + IP_HASH_SALT),
  };

  try {
    const client = getSupabase();
    const { data, error } = await client
      .from('reboot30_registros')
      .insert(row)
      .select('id')
      .single();

    if (error) {
      console.error('reboot30 insert error:', error);
      return res.status(500).json({ error: 'db_error', message: 'No pudimos guardar tu registro. Intenta otra vez.' });
    }
    return res.status(200).json({ ok: true, id: data.id });
  } catch (err) {
    console.error('reboot30 unexpected error:', err);
    return res.status(500).json({ error: 'internal_error', message: 'Algo falló. Intenta otra vez en un minuto.' });
  }
}

export const config = {
  api: { bodyParser: { sizeLimit: '100kb' } },
};
