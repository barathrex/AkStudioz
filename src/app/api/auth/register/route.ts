import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password, full_name, phone } = await request.json();

  if (!email || !password || !full_name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      user: { id: crypto.randomUUID(), email, full_name },
      message: "Registered (demo mode)",
    });
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name, phone } },
    });

    if (error) throw error;

    if (data.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        full_name,
        email,
        phone: phone || "",
        role: "user",
      });
    }

    return NextResponse.json({ user: data.user });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Registration failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
