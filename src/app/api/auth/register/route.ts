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

    // Check if email already exists in profiles
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .maybeSingle();

    if (existingProfile) {
      return NextResponse.json(
        { error: "An account with this email address already exists. Please sign in." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase().trim(),
      password,
      options: {
        data: {
          full_name,
          phone: phone || "",
        },
      },
    });

    if (error) throw error;

    // Supabase Auth returns an empty identities array if identity protection is active and user exists
    if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
      return NextResponse.json(
        { error: "An account with this email address already exists. Please sign in." },
        { status: 400 }
      );
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


