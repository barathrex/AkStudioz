import { FadeIn } from "@/components/animations/fade-in";
import { BOOKING_STATUS_LABELS } from "@/types";

export const metadata = { title: "My Bookings" };

export default function BookingsPage() {
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">My Bookings</h1>
      <div className="glass-card p-8 text-center text-muted-foreground">
        <p>No bookings yet. Book equipment to see them here.</p>
        <p className="text-xs mt-4">
          Status flow: {Object.values(BOOKING_STATUS_LABELS).slice(0, 7).join(" → ")}
        </p>
      </div>
    </FadeIn>
  );
}
