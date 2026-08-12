import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return false;
  if (url.includes("your_supabase") || url.includes("your-supabase")) return false;
  if (
    key.includes("your_supabase") ||
    key.includes("your-anon-public-key") ||
    key === "your-anon-public-key" ||
    key.length < 30
  ) {
    return false;
  }
  return true;
}
