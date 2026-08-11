import { Package, Users, Calendar, IndianRupee, Boxes } from "lucide-react";
import { getProducts } from "@/lib/data";
import { FadeIn } from "@/components/animations/fade-in";
import { formatCurrency } from "@/lib/utils";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const products = await getProducts();
  const stats = [
    { label: "Total Products", value: products.length.toString(), icon: Package },
    { label: "Total Customers", value: "0", icon: Users },
    { label: "Pending Bookings", value: "0", icon: Calendar },
    { label: "Today's Bookings", value: "0", icon: Calendar },
    { label: "Revenue", value: formatCurrency(0), icon: IndianRupee },
    { label: "Available Inventory", value: products.reduce((s, p) => s + p.stock, 0).toString(), icon: Boxes },
  ];

  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-5 h-5 text-gold" />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
