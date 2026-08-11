import Link from "next/link";
import Image from "next/image";
import { Camera, Video, Plane, Radio } from "lucide-react";
import { eventServices } from "@/lib/mock-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Video,
  Plane,
  Radio,
};

export function EventServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Popular Event Services
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventServices.map((service) => {
            const Icon = iconMap[service.icon] || Camera;
            return (
              <StaggerItem key={service.title}>
                <Link
                  href="/categories/event-services"
                  className="group block glass-card overflow-hidden hover:border-gold/30 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gold/20 backdrop-blur flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
