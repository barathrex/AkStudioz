import { ContactSection } from "@/components/home/contact-section";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata = {
  title: "About",
  description: "Learn about AKStudioz Camera Rentals — premium equipment for creators and events.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4">About AKStudioz</h1>
          </FadeIn>
          <FadeIn delay={0.2} className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              AKStudioz Camera Rentals is Chennai&apos;s premier destination for professional camera and event equipment rentals. Founded with a passion for visual storytelling, we provide filmmakers, content creators, and event professionals with access to industry-leading gear.
            </p>
            <p>
              From cinema cameras like the Sony FX3 and Canon EOS R5 C to complete event setups including LED walls, lighting rigs, and professional photography services — we equip your vision with the tools it deserves.
            </p>
            <p>
              Every piece of equipment in our inventory is meticulously maintained, tested, and ready for your next production. Our team of experienced professionals provides technical support and guidance to ensure your project runs smoothly.
            </p>
          </FadeIn>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
