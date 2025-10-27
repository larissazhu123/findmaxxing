import { createClient, type SupabaseClient } from "@supabase/supabase-js";
// If you have generated DB types, import them and use SupabaseClient<Database>
/* import type { Database } from "./database.types"; */

export const supabase: SupabaseClient /* <Database> */ = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);