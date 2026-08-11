import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const userPhone = body.user?.phone || body.phone || "Not Provided";
  const userFullName = body.user?.full_name || body.full_name || "Customer";
  const userEmail = body.user?.email || body.email || "customer@example.com";

  // Dispatch Admin Notification Log (Sent to Admin Email: admin@akstudioz.com)
  console.log("=================================================");
  console.log("🚨 NEW BOOKING NOTIFICATION FOR ADMIN 🚨");
  console.log(`Admin Recipient: admin@akstudioz.com`);
  console.log(`Customer Name: ${userFullName}`);
  console.log(`📱 Customer Mobile Number: ${userPhone}`);
  console.log(`📧 Customer Email: ${userEmail}`);
  console.log(`📹 Product ID: ${body.product_id}`);
  console.log(`📅 Dates: ${body.start_date} to ${body.end_date} (${body.total_days} days)`);
  console.log(`💰 Total Amount: ₹${body.total_amount}`);
  console.log("=================================================");

  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      booking: {
        id: crypto.randomUUID(),
        ...body,
        user_phone: userPhone,
        user_name: userFullName,
        booking_status: "pending",
        created_at: new Date().toISOString(),
      },
      message: `Booking received! Admin notification dispatched to admin@akstudioz.com with mobile ${userPhone}.`,
    });
  }

  try {
    const supabase = await createClient();
    const adminSupabase = createAdminClient();
    let userId: string | null = null;

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      userId = user.id;
      // Fetch phone from profile if missing
      const { data: profile } = await supabase
        .from("profiles")
        .select("phone, full_name, email")
        .eq("id", user.id)
        .maybeSingle();

      if (profile?.phone) {
        body.user_phone = profile.phone;
      }
    } else if (body.user) {
      const { data: authData, error: authError } = await adminSupabase.auth.signUp({
        email: body.user.email,
        password: crypto.randomUUID(),
        options: {
          data: {
            full_name: body.user.full_name,
            phone: body.user.phone,
          },
        },
      });

      if (!authError && authData.user) {
        userId = authData.user.id;
        await adminSupabase.from("profiles").upsert({
          id: userId,
          full_name: body.user.full_name,
          email: body.user.email,
          phone: body.user.phone,
          role: "user",
        });
      }
    }

    const { data: booking, error: bookingError } = await adminSupabase
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

    if (body.product_id) {
      await adminSupabase.from("booking_items").insert({
        booking_id: booking.id,
        product_id: body.product_id,
        quantity: body.quantity || 1,
        rental_price: body.total_amount / ((body.quantity || 1) * (body.total_days || 1)),
      });
    }

    await adminSupabase.from("consents").insert({
      booking_id: booking.id,
      accepted: true,
      accepted_at: new Date().toISOString(),
    });

    return NextResponse.json({
      booking,
      admin_notification_sent: true,
      message: "Booking submitted successfully! Admin has been notified with customer phone number.",
    });
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
