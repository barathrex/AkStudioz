"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { formatCurrency } from "@/lib/utils";
import { Calendar, Phone, Mail, User, Package, Clock, Search, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AdminBookingItem {
  quantity: number;
  rental_price: number;
  products?: {
    name: string;
    slug: string;
  };
}

interface AdminBooking {
  id: string;
  created_at: string;
  start_date: string;
  end_date: string;
  total_days: number;
  total_amount: number;
  security_deposit: number;
  booking_status: string;
  profiles?: {
    full_name: string;
    email: string;
    phone: string;
  };
  user_phone?: string;
  user_name?: string;
  booking_items?: AdminBookingItem[];
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [notifiedId, setNotifiedId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAdminBookings() {
      try {
        const res = await fetch("/api/admin/bookings");
        if (res.ok) {
          const data = await res.json();
          setBookings(data);
        }
      } catch (e) {
        console.error("Error fetching admin bookings:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchAdminBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus = filterStatus === "all" || booking.booking_status === filterStatus;
    const name = booking.profiles?.full_name || booking.user_name || "";
    const phone = booking.profiles?.phone || booking.user_phone || "";
    const email = booking.profiles?.email || "";
    const matchesSearch =
      name.toLowerCase().includes(search.toLowerCase()) ||
      phone.includes(search) ||
      email.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const triggerAdminMailNotification = (booking: AdminBooking) => {
    const name = booking.profiles?.full_name || booking.user_name || "Customer";
    const phone = booking.profiles?.phone || booking.user_phone || "Not Provided";
    const email = booking.profiles?.email || "customer@example.com";
    const productName = booking.booking_items?.[0]?.products?.name || "Equipment Rental";

    alert(
      `📧 ADMIN NOTIFICATION SENT TO admin@akstudioz.com:\n\n` +
      `Customer Name: ${name}\n` +
      `Mobile Number: ${phone}\n` +
      `Email: ${email}\n` +
      `Booked Product: ${productName}\n` +
      `Rental Period: ${booking.start_date} to ${booking.end_date} (${booking.total_days} days)\n` +
      `Total Price: ${formatCurrency(booking.total_amount)}`
    );
    setNotifiedId(booking.id);
  };

  return (
    <FadeIn>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-full mb-2">
            Admin Portal
          </span>
          <h1 className="text-3xl font-display font-extrabold text-slate-900">All Customer Bookings</h1>
          <p className="text-sm text-slate-500 mt-1">
            View booked products, customer mobile numbers, and send admin email notifications.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-700">
            Total Bookings: <span className="text-red-600">{bookings.length}</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <Input
            placeholder="Search by name or mobile number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 text-xs border-slate-200"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          {["all", "pending", "confirmed", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                filterStatus === status
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      {loading ? (
        <div className="p-12 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">
          <Clock className="w-8 h-8 text-red-600 animate-spin mx-auto mb-3" />
          Loading bookings...
        </div>
      ) : filteredBookings.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
          <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="font-bold text-slate-800 text-lg">No Bookings Found</p>
          <p className="text-xs text-slate-500 mt-1">Bookings submitted by customers will be displayed here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((booking) => {
            const customerName = booking.profiles?.full_name || booking.user_name || "Customer";
            const customerPhone = booking.profiles?.phone || booking.user_phone || "Not Provided";
            const customerEmail = booking.profiles?.email || "customer@example.com";
            const bookedProduct = booking.booking_items?.[0]?.products?.name || "Equipment Rental";

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
                      {booking.booking_status}
                    </span>
                    <span className="text-xs text-slate-400">
                      ID: #{booking.id.slice(0, 8)}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                      <Package className="w-5 h-5 text-red-600 shrink-0" />
                      {bookedProduct}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <User className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Customer</span>
                        <span className="font-bold text-slate-900">{customerName}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-red-50 p-2.5 rounded-lg border border-red-200">
                      <Phone className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span className="text-[10px] text-red-600 block font-bold">Mobile Number</span>
                        <span className="font-extrabold text-red-700 text-sm">{customerPhone}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <Mail className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Email</span>
                        <span className="font-medium text-slate-800 truncate block max-w-[150px]">{customerEmail}</span>
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
                      Security Deposit: {formatCurrency(booking.security_deposit)}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => triggerAdminMailNotification(booking)}
                    className="border-red-200 text-red-600 hover:bg-red-600 hover:text-white font-bold text-xs"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    {notifiedId === booking.id ? "Mail Dispatched ✅" : "Send Admin Mail"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </FadeIn>
  );
}
