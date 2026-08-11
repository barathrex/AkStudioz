import { FadeIn } from "@/components/animations/fade-in";

export const metadata = { title: "Booking History" };

export default function HistoryPage() {
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Booking History</h1>
      <div className="glass-card p-8 text-center text-muted-foreground">
        <p>No completed bookings yet.</p>
      </div>
    </FadeIn>
  );
}
