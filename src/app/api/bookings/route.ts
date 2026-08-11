import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      booking: {
        id: crypto.randomUUID(),
        ...body,
        booking_status: "pending",
        created_at: new Date().toISOString(),
      },
      message: "Booking created (demo mode)",
    });
  }

  try {
    const supabase = await createClient();
    let userId: string | null = null;

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      userId = user.id;
    } else if (body.user) {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: body.user.email,
        password: crypto.randomUUID(),
        options: {
          data: {
            full_name: body.user.full_name,
            phone: body.user.phone,
          },
        },
      });
      if (authError) throw authError;
      userId = authData.user?.id || null;

      if (userId) {
        await supabase.from("profiles").upsert({
          id: userId,
          full_name: body.user.full_name,
          email: body.user.email,
          phone: body.user.phone,
          role: "user",
        });
      }
    }

    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .insert({
        user_id: userId,
        start_date: body.start_date,
        end_date: body.end_date,
        total_days: body.total_days,
        total_amount: body.total_amount,
        security_deposit: body.security_deposit,
        booking_status: "pending",
      })
      .select()
      .single();

    if (bookingError) throw bookingError;

    await supabase.from("booking_items").insert({
      booking_id: booking.id,
      product_id: body.product_id,
      quantity: body.quantity,
      rental_price: body.total_amount / (body.quantity * body.total_days),
    });

    await supabase.from("consents").insert({
      booking_id: booking.id,
      accepted: true,
      accepted_at: new Date().toISOString(),
    });

    return NextResponse.json({ booking });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Booking failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json([]);
  }

  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { data, error } = await supabase
      .from("bookings")
      .select("*, booking_items(*, products(*))")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch bookings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
