"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Package, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

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
}

export default function DashboardPage() {
  const [bookings, setBookings] = useState<UserBooking[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ak_user_bookings");
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading bookings in dashboard:", e);
    }
  }, []);

  return (
    <FadeIn>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-full mb-2">
            Overview
          </span>
          <h1 className="text-3xl font-display font-extrabold text-slate-900">User Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your active rentals and account details.</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <Link href="/products">
            Browse Catalog <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-bold uppercase">Active Bookings</span>
            <Calendar className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900">{bookings.length}</div>
          <span className="text-[11px] text-slate-400">Reserved equipment</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-bold uppercase">Total Spend</span>
            <Package className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-3xl font-extrabold text-red-600">
            {formatCurrency(bookings.reduce((sum, b) => sum + (b.total_amount || 0), 0))}
          </div>
          <span className="text-[11px] text-slate-400">Total rental investment</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-bold uppercase">KYC Status</span>
            <FileText className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-xl font-extrabold text-emerald-600 flex items-center gap-1.5 mt-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Verified
          </div>
          <span className="text-[11px] text-slate-400">Documents submitted</span>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
          <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">No Active Bookings</h2>
          <p className="text-xs text-slate-500 mb-6 max-w-md mx-auto">
            Browse our cinema cameras, lenses, and lighting equipment to make your first rental.
          </p>
          <Button variant="gold" asChild>
            <Link href="/products">
              Explore Equipment Catalog <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Recent Equipment Rentals</h2>
            <Link href="/dashboard/bookings" className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1">
              View All ({bookings.length}) <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {bookings.slice(0, 3).map((booking) => (
              <div key={booking.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-900">{booking.product_name || "Equipment Rental"}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    📅 {booking.start_date} → {booking.end_date} ({booking.total_days} Days)
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-base font-extrabold text-red-600">
                    {formatCurrency(booking.total_amount)}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-700 uppercase">
                    {booking.booking_status || "Confirmed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </FadeIn>
  );
}
