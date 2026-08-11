"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogIn, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: string;
}

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/");
      router.refresh();
    } catch {
      // ignore
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-background/40 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center font-bold text-black text-xs sm:text-sm group-hover:scale-105 transition-transform shadow-md">
              AK
            </div>
            <div>
              <span className="font-display text-base sm:text-lg font-bold tracking-wide block leading-none">
                AKStudioz
              </span>
              <span className="text-[9px] sm:text-[10px] text-gold tracking-[0.2em] uppercase block mt-0.5">
                Camera Rentals
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm text-muted-foreground hover:text-gold transition-colors tracking-wide uppercase font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {!loading && user ? (
              <div className="flex items-center gap-3">
                <Link
                  href={user.role === "admin" ? "/admin" : "/dashboard"}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 transition-all group"
                >
                  <div className="w-7 h-7 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold">
                    {user.full_name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-medium text-foreground group-hover:text-gold transition-colors max-w-[120px] truncate">
                    {user.full_name}
                  </span>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="text-xs border-white/10 hover:border-destructive/50 hover:text-destructive"
                >
                  <LogOut className="w-3.5 h-3.5 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">
                    <LogIn className="w-4 h-4 mr-1" />
                    Login
                  </Link>
                </Button>
                <Button variant="gold" size="sm" asChild>
                  <Link href="/products">Book Now</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {!loading && user && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gold/10 border border-gold/20 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">
                    {user.full_name.charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-foreground truncate">{user.full_name}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{user.email}</p>
                  </div>
                </div>
              )}

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-3 rounded-md text-sm text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors uppercase tracking-wide font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-2">
                {!loading && user ? (
                  <>
                    <Button variant="outline" className="w-full justify-start text-xs" asChild>
                      <Link
                        href={user.role === "admin" ? "/admin" : "/dashboard"}
                        onClick={() => setIsOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4 mr-2 text-gold" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-xs text-destructive hover:bg-destructive/10"
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <User className="w-4 h-4 mr-1" />
                        Login
                      </Link>
                    </Button>
                    <Button variant="gold" className="w-full" asChild>
                      <Link href="/products" onClick={() => setIsOpen(false)}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
