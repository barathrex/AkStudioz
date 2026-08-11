import { products } from "@/lib/mock-data";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(products);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*, product_images(*), categories(*)")
      .eq("status", "active");

    if (error) throw error;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(products);
  }
}
