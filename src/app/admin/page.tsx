import { getProducts } from "@/lib/data";
import { FadeIn } from "@/components/animations/fade-in";
import Link from "next/link";
import { Package, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const products = await getProducts();
  const totalStock = products.reduce((acc, p) => acc + (p.stock || 0), 0);

  return (
    <FadeIn>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Control Center
          </span>
          <h1 className="text-3xl font-display font-extrabold text-slate-900 mt-2">Admin Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">Manage catalog, customer bookings, and equipment rentals.</p>
        </div>
        <Button variant="gold" size="sm" asChild>
          <Link href="/admin/bookings">
            View All Bookings <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-bold uppercase">Total Products</span>
            <Package className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900">{products.length}</div>
          <span className="text-[11px] text-slate-400">Available in catalog</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-bold uppercase">Total Inventory</span>
            <Package className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900">{totalStock}</div>
          <span className="text-[11px] text-slate-400">Total units in stock</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-bold uppercase">Recent Bookings</span>
            <Calendar className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-3xl font-extrabold text-red-600">Active</div>
          <span className="text-[11px] text-slate-400">With customer mobile details</span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 font-bold uppercase">Admin Email</span>
            <Users className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-sm font-extrabold text-slate-900 truncate">admin@akstudioz.com</div>
          <span className="text-[11px] text-slate-400">Notification recipient</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/admin/bookings"
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all font-bold text-slate-800 text-sm flex items-center justify-between"
          >
            <span>📅 Bookings & Customer Phone Numbers</span>
            <ArrowRight className="w-4 h-4 text-red-600" />
          </Link>
          <Link
            href="/admin/products"
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all font-bold text-slate-800 text-sm flex items-center justify-between"
          >
            <span>📹 Products & Price Management</span>
            <ArrowRight className="w-4 h-4 text-red-600" />
          </Link>
          <Link
            href="/admin/categories"
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all font-bold text-slate-800 text-sm flex items-center justify-between"
          >
            <span>📁 Category Setup</span>
            <ArrowRight className="w-4 h-4 text-red-600" />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
