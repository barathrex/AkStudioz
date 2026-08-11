import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Camera Rentals", href: "/categories/camera-rentals" },
    { label: "Accessories", href: "/categories/camera-accessories" },
    { label: "Lighting", href: "/categories/lighting" },
    { label: "Event Equipment", href: "/categories/event-equipment" },
    { label: "Event Services", href: "/categories/event-services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center font-extrabold text-white text-sm shadow-md">
                AK
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white">AKStudioz</span>
                <span className="block text-[10px] text-red-500 tracking-[0.2em] font-semibold uppercase">
                  Camera Rentals
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Premium cinema cameras, equipment, and event services for filmmakers,
              content creators, and event organizers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-6">
              Equipment Categories
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />
                Chennai, Tamil Nadu, India
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                info@akstudioz.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} AKStudioz Camera Rentals. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
