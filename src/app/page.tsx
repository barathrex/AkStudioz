import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { EventServicesSection } from "@/components/home/event-services-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ReviewsSection } from "@/components/home/reviews-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <EventServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}
