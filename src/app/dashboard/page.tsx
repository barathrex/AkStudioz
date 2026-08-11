import Link from "next/link";
import { Calendar, Package, FileText, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Active Bookings", value: "0", icon: Calendar },
          { label: "Total Rentals", value: "0", icon: Package },
          { label: "Documents", value: "0", icon: FileText },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-5 h-5 text-gold" />
            </div>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 text-center">
        <Package className="w-12 h-12 text-gold mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">No Active Bookings</h2>
        <p className="text-muted-foreground mb-6">
          Browse our equipment and make your first rental.
        </p>
        <Button variant="gold" asChild>
          <Link href="/products">
            Browse Equipment <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </FadeIn>
  );
}
