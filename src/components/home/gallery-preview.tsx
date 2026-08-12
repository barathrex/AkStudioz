import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/mock-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
              Our Gallery
            </h2>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0" asChild>
            <Link href="/gallery">
              View Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, i) => (
            <StaggerItem key={i}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt || `Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
