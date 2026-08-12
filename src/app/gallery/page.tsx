import Image from "next/image";
import { galleryImages } from "@/lib/mock-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

export const metadata = {
  title: "Gallery",
  description: "View our portfolio of camera and event equipment rentals.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4">Gallery</h1>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image src={image.src} alt={image.alt || `Gallery ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
