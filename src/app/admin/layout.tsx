import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Boxes,
  Calendar,
  Users,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/categories", label: "Categories", icon: FolderTree },
  { href: "/admin/inventory", label: "Inventory", icon: Boxes },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/documents", label: "Documents", icon: FileText },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-24 md:pt-32 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <aside className="lg:col-span-1">
            <div className="mb-4 px-4">
              <span className="text-xs text-red-600 font-extrabold tracking-wider uppercase bg-red-100/80 px-2.5 py-1 rounded-full border border-red-200">
                Admin Panel
              </span>
            </div>
            <nav className="bg-white border border-slate-200 shadow-md rounded-2xl p-3 space-y-1">
              {adminLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all"
                >
                  <link.icon className="w-4 h-4 text-red-600" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="lg:col-span-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
