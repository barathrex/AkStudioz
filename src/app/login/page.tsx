"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/animations/fade-in";
import { ShieldCheck, UserCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.user?.role === "admin" || email.includes("admin")) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        const data = await res.json();
        setError(data.error || "Login failed. Please check credentials.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const setAdminDemo = () => {
    setEmail("admin@akstudioz.com");
    setPassword("admin123456");
  };

  return (
    <div className="pt-24 md:pt-32 min-h-screen flex items-center justify-center section-padding bg-slate-50">
      <FadeIn className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center font-extrabold text-white text-xl mx-auto mb-4 shadow-lg">
            AK
          </div>
          <h1 className="text-3xl font-display font-extrabold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-1 text-sm">Sign in to AKStudioz Camera Rentals</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
          {/* Quick Access Helper */}
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl space-y-2">
            <span className="text-xs font-bold text-red-600 block flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Admin Access Test Demo:
            </span>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={setAdminDemo}
                className="w-full text-[11px] h-8 border-red-200 text-red-600 hover:bg-red-600 hover:text-white font-bold"
              >
                Fill Admin Credentials
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                {error}
              </div>
            )}
            <div>
              <Label htmlFor="email" className="text-xs font-bold text-slate-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="mt-1.5 border-slate-200 focus:border-red-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-xs font-bold text-slate-700">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1.5 border-slate-200 focus:border-red-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-xs text-red-600 font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button variant="gold" type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-red-600 font-bold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
