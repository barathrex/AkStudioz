import { FadeIn } from "@/components/animations/fade-in";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl font-display font-bold mb-8">Terms & Conditions</h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
              <p>By renting equipment from AKStudioz Camera Rentals, you agree to the following terms and conditions.</p>
              <h2 className="text-lg font-semibold text-foreground">Rental Agreement</h2>
              <p>All rentals require acceptance of our rental agreement. Equipment must be returned in the same condition as received. Any damage or missing accessories will incur additional charges.</p>
              <h2 className="text-lg font-semibold text-foreground">Payment</h2>
              <p>Full rental amount and security deposit must be paid before equipment pickup. Security deposits are refundable upon safe return of equipment.</p>
              <h2 className="text-lg font-semibold text-foreground">Pickup & Return</h2>
              <p>Equipment pickup and return must be done from our office during business hours. Late returns may incur additional daily charges.</p>
              <h2 className="text-lg font-semibold text-foreground">Liability</h2>
              <p>The renter is fully responsible for the equipment from pickup until return. Insurance coverage is recommended for high-value items.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
