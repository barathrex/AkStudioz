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

    // Use upsert to safely handle the auto-trigger that already creates a profile on signUp
    if (data.user) {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        full_name,
        email,
        phone: phone || "",
        role: "user",
      }, { onConflict: "id" });
    }

    return NextResponse.json({
      user: data.user,
      message: data.user?.email_confirmed_at
        ? "Registration successful"
        : "Registration successful! Please check your email to confirm your account.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Registration failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

