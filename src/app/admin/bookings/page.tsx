import { FadeIn } from "@/components/animations/fade-in";

export const metadata = { title: "Admin - Bookings" };

export default function AdminBookingsPage() {
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Bookings</h1>
      <div className="glass-card p-8 text-center text-muted-foreground">
        <p>No bookings yet. Bookings will appear here once customers start renting.</p>
      </div>
    </FadeIn>
  );
}
