import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  if (!isSupabaseConfigured()) {
    // Return sample mock admin bookings when database is in fallback mode
    return NextResponse.json([
      {
        id: "demo-booking-1",
        created_at: new Date().toISOString(),
        start_date: "2026-08-15",
        end_date: "2026-08-18",
        total_days: 3,
        total_amount: 7500,
        security_deposit: 50000,
        booking_status: "confirmed",
        profiles: {
          full_name: "Barath Rex",
          email: "barathrex@gmail.com",
          phone: "+91 98765 43210",
        },
        booking_items: [
          {
            quantity: 1,
            rental_price: 2500,
            products: {
              name: "Sony FX3 Cinema Camera",
              slug: "sony-fx3-cinema-camera",
            },
          },
        ],
      },
      {
        id: "demo-booking-2",
        created_at: new Date().toISOString(),
        start_date: "2026-08-20",
        end_date: "2026-08-22",
        total_days: 2,
        total_amount: 2400,
        security_deposit: 25000,
        booking_status: "pending",
        profiles: {
          full_name: "Rajesh Kumar",
          email: "rajesh@productionhouse.com",
          phone: "+91 91234 56789",
        },
        booking_items: [
          {
            quantity: 1,
            rental_price: 1200,
            products: {
              name: "DJI RS 4 Pro Gimbal",
              slug: "dji-rs4-pro-gimbal",
            },
          },
        ],
      },
    ]);
  }

  try {
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("bookings")
      .select("*, profiles(*), booking_items(*, products(*))")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch admin bookings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
