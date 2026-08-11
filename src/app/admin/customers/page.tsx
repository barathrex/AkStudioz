import { FadeIn } from "@/components/animations/fade-in";

export const metadata = { title: "Admin - Customers" };

export default function AdminCustomersPage() {
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Customers</h1>
      <div className="glass-card p-8 text-center text-muted-foreground">
        <p>No customers registered yet.</p>
      </div>
    </FadeIn>
  );
}
