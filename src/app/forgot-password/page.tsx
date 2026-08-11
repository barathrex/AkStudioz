"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/animations/fade-in";

export default function ForgotPasswordPage() {
  return (
    <div className="pt-24 md:pt-32 min-h-screen flex items-center justify-center section-padding">
      <FadeIn className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-display font-bold">Reset Password</h1>
          <p className="text-muted-foreground mt-2">Enter your email to receive a reset link</p>
        </div>
        <form className="glass-card p-8 space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" className="mt-2" required />
          </div>
          <Button variant="gold" type="submit" className="w-full">Send Reset Link</Button>
          <p className="text-center text-sm text-muted-foreground">
            <Link href="/login" className="text-gold hover:underline">Back to Login</Link>
          </p>
        </form>
      </FadeIn>
    </div>
  );
}
