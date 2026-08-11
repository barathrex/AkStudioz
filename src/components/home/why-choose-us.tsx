import { Shield, Clock, Award, Headphones, Truck, Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

const features = [
  {
    icon: Shield,
    title: "100% Insured Equipment",
    description: "Every camera, lens, and light is tested and covered for seamless worry-free production.",
  },
  {
    icon: Clock,
    title: "Instant Verification",
    description: "Fast KYC verification and flexible rental pickup or door delivery options.",
  },
  {
    icon: Award,
    title: "Cinema Grade Quality",
    description: "Top brand gear including Sony, RED, Canon, Aputure, DJI, and Novastar.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description: "On-call technician support during production and event live streaming.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-red-500 text-xs font-bold tracking-[0.25em] uppercase bg-red-950/60 px-3 py-1 rounded-full border border-red-800/60 mb-3">
            Why Choose AKStudioz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Built For Media Professionals
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base">
            We empower filmmakers, event planners, and content creators with pristine gear and reliable service.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-8 hover:border-red-500 transition-all duration-300 shadow-xl group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
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
