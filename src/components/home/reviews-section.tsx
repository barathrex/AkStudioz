import { Star } from "lucide-react";
import { reviews } from "@/lib/mock-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

export function ReviewsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Customer Reviews
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <div className="glass-card p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                  &ldquo;{review.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gold">{review.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
