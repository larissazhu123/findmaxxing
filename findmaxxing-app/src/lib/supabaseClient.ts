import { createClient } from "@supabase/supabase-js";

// Check if environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(`
    Missing Supabase environment variables!
    
    Please create a .env.local file in the findmaxxing-app directory with:
    
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
    
    Get these values from your Supabase project dashboard.
  `);
  
  // Create a mock client for development
  supabase = createClient(
    "https://placeholder.supabase.co",
    "placeholder-key",
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
} else {
  supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
    { auth: { persistSession: true, autoRefreshToken: true } }
  );
}

export { supabase };
