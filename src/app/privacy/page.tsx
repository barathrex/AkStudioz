import { FadeIn } from "@/components/animations/fade-in";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
              <p>AKStudioz Camera Rentals respects your privacy and is committed to protecting your personal data.</p>
              <h2 className="text-lg font-semibold text-foreground">Data Collection</h2>
              <p>We collect name, email, phone number, and identity documents for rental verification purposes only.</p>
              <h2 className="text-lg font-semibold text-foreground">Document Storage</h2>
              <p>Identity documents are stored securely in encrypted private storage. We never store document images in our database.</p>
              <h2 className="text-lg font-semibold text-foreground">Data Usage</h2>
              <p>Your data is used solely for rental processing, verification, and communication regarding your bookings.</p>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p>For privacy-related inquiries, contact us at info@akstudioz.com.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
