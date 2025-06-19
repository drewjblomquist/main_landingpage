import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all sections
    const { data, error } = await supabase
      .from('sections')
      .select('*')
      .order('id', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    // Update a section
    const { id, name, content, image_url, visible } = req.body;
    if (!id) return res.status(400).json({ error: 'Missing section id' });
    const { data, error } = await supabase
      .from('sections')
      .update({ name, content, image_url, visible, updated_at: new Date() })
      .eq('id', id)
      .select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 