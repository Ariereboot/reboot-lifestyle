import { getSupabase } from '../lib/supabase.js';

/**
 * GET /api/menu?id=<analysisId>
 * Devuelve un análisis guardado específico con todo su detalle.
 * Solo expone data "pública": nombre del restaurante y el análisis JSON.
 * NO expone user-agent, IP hash ni ubicación precisa.
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(503).json({ error: 'db_unavailable' });
  }

  const idRaw = req.query?.id;
  const id = parseInt(idRaw, 10);
  if (!id || Number.isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'bad_request', message: 'ID inválido.' });
  }

  try {
    const client = getSupabase();
    const { data, error } = await client
      .from('menu_analyses')
      .select('id, restaurant_name, analysis_json, created_at, is_menu')
      .eq('id', id)
      .eq('is_menu', true)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: 'not_found' });
    }

    return res.status(200).json({
      id: data.id,
      name: data.restaurant_name,
      createdAt: data.created_at,
      analysis: data.analysis_json,
    });
  } catch (err) {
    console.error('menu get unexpected:', err);
    return res.status(500).json({ error: 'internal_error' });
  }
}

export const config = {
  api: { bodyParser: false },
};
