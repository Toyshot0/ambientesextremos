// ============================================================
// CONFIGURACIÓN DE SUPABASE — completa estos dos valores
// Los encuentras en: Supabase → Settings → API
// ============================================================
const SUPABASE_URL = 'https://fblvhybvftuwajjvltws.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_pR9sDQtJRGzTYqvWUn_Odg_885o3JeR';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
