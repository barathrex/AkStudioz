import Link from "next/link";
import {
  LayoutDashboard,
  Calendar,
  History,
  FileText,
  User,
  Package,
} from "lucide-react";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/bookings", label: "My Bookings", icon: Calendar },
  { href: "/dashboard/history", label: "Booking History", icon: History },
  { href: "/dashboard/documents", label: "Documents", icon: FileText },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-24 md:pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <nav className="glass-card p-4 space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gold hover:bg-white/5 transition-colors mt-4 border-t border-white/10 pt-4"
              >
                <Package className="w-4 h-4" />
                Browse Equipment
              </Link>
            </nav>
          </aside>
          <div className="lg:col-span-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
