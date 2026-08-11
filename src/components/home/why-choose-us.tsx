import { Shield, Clock, Award, Headphones } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "All equipment is professionally maintained and tested before every rental.",
  },
  {
    icon: Clock,
    title: "Flexible Rentals",
    description:
      "Daily, weekly, and custom rental periods to fit your production schedule.",
  },
  {
    icon: Award,
    title: "Expert Support",
    description:
      "Our team of professionals provides technical guidance and on-set support.",
  },
  {
    icon: Headphones,
    title: "24/7 Assistance",
    description:
      "Round-the-clock support for urgent requirements and technical issues.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            Why AKStudioz
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Why Choose Us
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="text-center glass-card p-8 hover:border-gold/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
