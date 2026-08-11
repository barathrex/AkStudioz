import { products } from "@/lib/mock-data";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!isSupabaseConfigured()) {
    const product = products.find((p) => p.id === id || p.slug === id);
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*, product_images(*), categories(*)")
      .or(`id.eq.${id},slug.eq.${id}`)
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch {
    const product = products.find((p) => p.id === id || p.slug === id);
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(product);
  }
}
