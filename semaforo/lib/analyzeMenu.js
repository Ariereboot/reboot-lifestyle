import Anthropic from '@anthropic-ai/sdk';
import { SEMAFORO_SYSTEM_PROMPT } from './prompt.js';

// Haiku 4.5: 3-5x faster than Sonnet for image-based menu analysis.
// Quality is more than sufficient for our 40-dish coach-tone task.
// If we ever need Sonnet's nuance back, flip this constant.
const MODEL = 'claude-haiku-4-5';
// 8192 tokens cover ~40 dishes with full explanations + substitutions.
// Haiku generates these in ~17-25s, well within Vercel Hobby's 60s cap.
const MAX_TOKENS = 8192;

const IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const PDF_TYPE = 'application/pdf';

/**
 * Analyze a menu (one or more images/PDFs) via Claude multimodal.
 * Accepts:
 *   - files: [{ base64, mediaType }, ...]  (preferred, supports multi-page menus)
 *   - fileBase64 + mediaType                (single file, backward compat)
 *   - imageBase64 + mediaType               (legacy)
 * Images become `image` blocks; PDFs become `document` blocks.
 * @returns {Promise<object>} parsed JSON matching the schema defined in the system prompt
 */
export async function analyzeMenu({ files, fileBase64, mediaType, apiKey, imageBase64 }) {
  // Normalize input to a files[] array
  let fileList = [];
  if (Array.isArray(files) && files.length > 0) {
    fileList = files;
  } else {
    const data = fileBase64 ?? imageBase64;
    if (data) fileList = [{ base64: data, mediaType }];
  }
  if (fileList.length === 0) {
    const err = new Error('UNSUPPORTED_MEDIA_TYPE: no file provided');
    err.code = 'UNSUPPORTED_MEDIA_TYPE';
    throw err;
  }

  const client = new Anthropic({ apiKey });

  // Build content blocks: one per file, then the user prompt text
  const contentBlocks = fileList.map((f) => {
    if (IMAGE_TYPES.has(f.mediaType)) {
      return { type: 'image', source: { type: 'base64', media_type: f.mediaType, data: f.base64 } };
    }
    if (f.mediaType === PDF_TYPE) {
      return { type: 'document', source: { type: 'base64', media_type: f.mediaType, data: f.base64 } };
    }
    const err = new Error(`UNSUPPORTED_MEDIA_TYPE: ${f.mediaType}`);
    err.code = 'UNSUPPORTED_MEDIA_TYPE';
    throw err;
  });

  const instruction = fileList.length > 1
    ? `Analiza este menú. Son ${fileList.length} páginas/imágenes del mismo menú — trátalas como un solo menú continuo y numera los platos sin repetir.`
    : 'Analiza este menú.';

  contentBlocks.push({ type: 'text', text: instruction });

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: [
      {
        type: 'text',
        text: SEMAFORO_SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [
      {
        role: 'user',
        content: contentBlocks,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  if (!textBlock) {
    const err = new Error('INVALID_RESPONSE: no text block returned');
    err.code = 'INVALID_RESPONSE';
    throw err;
  }

  const raw = textBlock.text;
  return parseModelJson(raw, response.stop_reason);
}

/**
 * Extracts a JSON object from a model response that may include:
 * - Pure JSON (happy path)
 * - JSON inside ```json fenced blocks
 * - JSON preceded/followed by explanatory text
 * - Truncated JSON (when stop_reason === "max_tokens") — we try to repair
 */
export function parseModelJson(raw, stopReason = null) {
  if (typeof raw !== 'string' || raw.length === 0) {
    const err = new Error('INVALID_RESPONSE: empty text');
    err.code = 'INVALID_RESPONSE';
    throw err;
  }

  // Fast path: parse as-is
  try {
    return JSON.parse(raw);
  } catch {}

  // Strip markdown fences if present
  let cleaned = raw.trim();
  const fenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) cleaned = fenceMatch[1].trim();

  // Extract the outermost {...} span
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    const span = cleaned.slice(firstBrace, lastBrace + 1);
    try {
      return JSON.parse(span);
    } catch {}

    // Try repairing truncation: close open arrays/objects based on stack
    if (stopReason === 'max_tokens') {
      const repaired = attemptRepair(cleaned.slice(firstBrace));
      if (repaired) {
        try {
          const parsed = JSON.parse(repaired);
          parsed._truncated = true; // flag so UI can mention it
          return parsed;
        } catch {}
      }
    }
  }

  // All strategies failed
  const preview = raw.slice(0, 300).replace(/\s+/g, ' ');
  const err = new Error(`INVALID_RESPONSE: could not parse JSON (stop_reason=${stopReason}, preview="${preview}")`);
  err.code = 'INVALID_RESPONSE';
  throw err;
}

/**
 * Best-effort: close dangling brackets in a truncated JSON string.
 * Returns repaired string or null.
 */
function attemptRepair(text) {
  // Truncate after the last complete item in items[] if detectable
  const itemsIdx = text.indexOf('"items"');
  if (itemsIdx === -1) return null;

  // Walk the string counting braces/brackets; cut at last boundary that
  // gives balanced structure when we add closers.
  let depth = 0;
  let inString = false;
  let escape = false;
  let lastSafeCut = -1;
  const stack = [];
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (escape) { escape = false; continue; }
    if (c === '\\') { escape = true; continue; }
    if (c === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (c === '{' || c === '[') { stack.push(c === '{' ? '}' : ']'); depth++; }
    else if (c === '}' || c === ']') { stack.pop(); depth--; }
    // mark a safe cut right after commas at depth 2 (inside items array)
    if (c === ',' && depth === 2) lastSafeCut = i;
  }

  if (lastSafeCut === -1) return null;
  const truncated = text.slice(0, lastSafeCut);
  // Rebuild closers for whatever is still open
  const prefix = truncated;
  const stillOpen = [];
  let d = 0, inStr = false, esc = false;
  for (let i = 0; i < prefix.length; i++) {
    const c = prefix[i];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (c === '"') { inStr = !inStr; continue; }
    if (inStr) continue;
    if (c === '{') stillOpen.push('}');
    else if (c === '[') stillOpen.push(']');
    else if (c === '}' || c === ']') stillOpen.pop();
  }
  return prefix + stillOpen.reverse().join('');
}
