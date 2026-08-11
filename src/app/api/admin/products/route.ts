import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ id: crypto.randomUUID(), ...body, message: "Created (demo mode)" });
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("products").insert(body).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Create failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
