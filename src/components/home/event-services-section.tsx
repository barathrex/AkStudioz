import Link from "next/link";
import { Camera, Video, Radio, Monitor, ArrowRight, CheckCircle2 } from "lucide-react";
import { eventServices } from "@/lib/mock-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

const iconMap = {
  Camera,
  Video,
  Radio,
  Monitor,
};

export function EventServicesSection() {
  return (
    <section className="section-padding bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-red-600 text-xs font-bold tracking-[0.25em] uppercase bg-red-100/80 px-3 py-1 rounded-full border border-red-200 mb-3">
            Full Event Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Event & Production Services
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base">
            Turnkey photography, live streaming, LED wall setups, and crew support for corporate events, weddings, and concerts.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {eventServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Camera;
            return (
              <StaggerItem key={service.title}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:border-red-500 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-xs font-bold text-red-600">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Turnkey Setup Included
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="text-center">
          <Button variant="gold" size="lg" asChild>
            <Link href="/contact">
              Request Service Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
