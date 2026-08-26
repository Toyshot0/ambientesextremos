// ============================================================
// CONFIGURACIÓN DE SUPABASE — completa estos dos valores
// Los encuentras en: Supabase → Settings → API
// ============================================================
const SUPABASE_URL = 'PEGA-AQUI-TU-PROJECT-URL';
const SUPABASE_ANON_KEY = 'PEGA-AQUI-TU-ANON-PUBLIC-KEY';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
