"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FadeIn } from "@/components/animations/fade-in";
import { formatCurrency } from "@/lib/utils";
import { Calendar, Phone, Mail, User, Package, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserBooking {
  id: string;
  created_at: string;
  start_date: string;
  end_date: string;
  total_days: number;
  total_amount: number;
  security_deposit: number;
  booking_status: string;
  product_name?: string;
  product_slug?: string;
  user_name?: string;
  user_phone?: string;
  user_email?: string;
  booking_items?: Array<{
    quantity: number;
    rental_price: number;
    products?: {
      name: string;
      slug: string;
    };
  }>;
}

function BookingsListContent() {
  const searchParams = useSearchParams();
  const successId = searchParams.get("success");
  const [bookings, setBookings] = useState<UserBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      let remoteBookings: UserBooking[] = [];
      try {
        const res = await fetch("/api/bookings");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            remoteBookings = data;
          }
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }

      let localBookings: UserBooking[] = [];
      try {
        const stored = localStorage.getItem("ak_user_bookings");
        if (stored) {
          localBookings = JSON.parse(stored);
        }
      } catch (e) {
        console.error("Error loading local bookings:", e);
      }

      // Merge remote and local bookings by ID
      const combinedMap = new Map<string, UserBooking>();
      localBookings.forEach((b) => combinedMap.set(b.id, b));
      remoteBookings.forEach((b) => combinedMap.set(b.id, b));

      const merged = Array.from(combinedMap.values()).sort(
        (a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
      );

      setBookings(merged);
      setLoading(false);
    }

    loadBookings();
  }, []);

  return (
    <>
      {/* Success Notification Banner */}
      {successId && (
        <div className="p-4 mb-8 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 shadow-md animate-fade-in">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-extrabold text-emerald-900 text-sm">Booking Confirmed Successfully!</h3>
            <p className="text-xs text-emerald-700 mt-0.5">
              Your equipment reservation (ID: <span className="font-mono font-bold">#{successId.slice(0, 10)}</span>) is active. Our crew will contact you for pickup or delivery.
            </p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="p-12 text-center text-slate-400 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <Clock className="w-8 h-8 text-red-600 animate-spin mx-auto mb-3" />
          Loading your bookings...
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
          <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h2 className="font-bold text-slate-800 text-lg">No Active Bookings Found</h2>
          <p className="text-xs text-slate-500 mt-1 mb-6">You haven&apos;t reserved any equipment yet.</p>
          <Button variant="gold" asChild>
            <Link href="/products">Explore Equipment Catalog</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => {
            const productName =
              booking.product_name ||
              booking.booking_items?.[0]?.products?.name ||
              "Cinema Equipment Package";
            const productSlug =
              booking.product_slug ||
              booking.booking_items?.[0]?.products?.slug ||
              "";

            return (
              <div
                key={booking.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide ${
                        booking.booking_status === "confirmed"
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                          : booking.booking_status === "completed"
                          ? "bg-blue-100 text-blue-700 border border-blue-300"
                          : "bg-amber-100 text-amber-700 border border-amber-300"
                      }`}
                    >
                      {booking.booking_status || "confirmed"}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      ID: #{booking.id.slice(0, 10)}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-extrabold text-slate-900 text-xl flex items-center gap-2">
                      <Package className="w-5 h-5 text-red-600 shrink-0" />
                      {productName}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <User className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Reserved By</span>
                        <span className="font-bold text-slate-900">{booking.user_name || "Customer"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-red-50 p-2.5 rounded-lg border border-red-200">
                      <Phone className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span className="text-[10px] text-red-600 block font-bold">Contact Mobile</span>
                        <span className="font-extrabold text-red-700 text-sm">{booking.user_phone || "Verified"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <Mail className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Email</span>
                        <span className="font-medium text-slate-800 truncate block max-w-[150px]">
                          {booking.user_email || "customer@example.com"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  <div className="text-left lg:text-right">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-red-600" />
                      <span>{booking.start_date} → {booking.end_date}</span>
                      <span className="font-bold text-slate-800">({booking.total_days} Days)</span>
                    </div>
                    <div className="text-2xl font-extrabold text-red-600">
                      {formatCurrency(booking.total_amount)}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Refundable Deposit: {formatCurrency(booking.security_deposit)}
                    </div>
                  </div>

                  {productSlug && (
                    <Button variant="outline" size="sm" asChild className="border-slate-200 text-xs">
                      <Link href={`/products/${productSlug}`}>
                        View Gear Specs
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default function BookingsPage() {
  return (
    <FadeIn>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-full mb-2">
            My Rentals
          </span>
          <h1 className="text-3xl font-display font-extrabold text-slate-900">My Bookings</h1>
          <p className="text-sm text-slate-500 mt-1">
            Track your reserved equipment, rental dates, and deposit status.
          </p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <Link href="/products">
            Book More Equipment <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>

      <Suspense
        fallback={
          <div className="p-12 text-center text-slate-400 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Clock className="w-8 h-8 text-red-600 animate-spin mx-auto mb-3" />
            Loading your bookings...
          </div>
        }
      >
        <BookingsListContent />
      </Suspense>
    </FadeIn>
  );
}
