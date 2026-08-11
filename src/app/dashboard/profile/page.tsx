"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/animations/fade-in";

export default function ProfilePage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
  });
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Profile</h1>
      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 max-w-lg">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2" />
        </div>
        <Button variant="gold" type="submit">
          {saved ? "Saved!" : "Update Profile"}
        </Button>
      </form>
    </FadeIn>
  );
}
