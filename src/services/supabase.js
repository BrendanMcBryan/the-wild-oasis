import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vrtiehbsmtydorqtqojv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydGllaGJzbXR5ZG9ycXRxb2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3NDAyNDIsImV4cCI6MjAyNzMxNjI0Mn0.uY6qGn8_7mJMQH1ZCQjiRANNiBOKGwKEOcrunHSb4sE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
