import { getSupabase } from '../lib/supabase.js';

/**
 * GET /api/search?q=<query>
 * Busca restaurantes en la biblioteca pública Reboot.
 *
 * Devuelve hasta 10 sugerencias con su análisis más reciente (contando solo
 * registros con restaurant_name no nulo). Si hay coincidencia exacta, el
 * primer resultado contiene el análisis completo para mostrar directamente.
 */
export default async function handler(req, res) {
  // CORS para el frontend (puede moverse a otro dominio en el futuro)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(503).json({ error: 'db_unavailable' });
  }

  const q = (req.query?.q || '').toString().trim();
  if (!q || q.length < 2) {
    return res.status(200).json({ results: [] });
  }
  if (q.length > 100) {
    return res.status(400).json({ error: 'query_too_long' });
  }

  try {
    const client = getSupabase();
    // ILIKE busca insensitive, con % a ambos lados.
    // Orden: coincidencia exacta primero, luego por recencia.
    const { data, error } = await client
      .from('menu_analyses')
      .select('id, restaurant_name, analysis_json, created_at, is_menu')
      .not('restaurant_name', 'is', null)
      .eq('is_menu', true)
      .ilike('restaurant_name', `%${q}%`)
      .order('created_at', { ascending: false })
      .limit(30);

    if (error) {
      console.error('search error:', error);
      return res.status(500).json({ error: 'db_error' });
    }

    // Dedupe por nombre (case-insensitive), quedándonos con el más reciente
    const seen = new Map();
    for (const row of data || []) {
      const key = row.restaurant_name.trim().toLowerCase();
      if (!seen.has(key)) seen.set(key, row);
    }
    const dedupe = Array.from(seen.values()).slice(0, 10);

    // Prioridad: si el query es match exacto (caseinsensitive), ese va primero
    const lowerQ = q.toLowerCase();
    dedupe.sort((a, b) => {
      const aExact = a.restaurant_name.trim().toLowerCase() === lowerQ ? 0 : 1;
      const bExact = b.restaurant_name.trim().toLowerCase() === lowerQ ? 0 : 1;
      return aExact - bExact;
    });

    const results = dedupe.map((row) => ({
      id: row.id,
      name: row.restaurant_name,
      createdAt: row.created_at,
      summary: row.analysis_json?.summary || null,
    }));

    return res.status(200).json({ results });
  } catch (err) {
    console.error('search unexpected:', err);
    return res.status(500).json({ error: 'internal_error' });
  }
}

export const config = {
  api: { bodyParser: false },
};
