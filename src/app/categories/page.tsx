import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

export const metadata = {
  title: "Categories",
  description: "Browse equipment categories at AKStudioz Camera Rentals.",
};

export default async function CategoriesPage() {
  const categories = await getCategories();
  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Browse</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4">Categories</h1>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <StaggerItem key={cat.id}>
                <Link href={`/categories/${cat.slug}`} className="group block relative aspect-[16/10] rounded-xl overflow-hidden glass-card">
                  <Image src={cat.image_url!} alt={cat.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={75} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-2xl font-bold group-hover:text-gold transition-colors">{cat.name}</h2>
                    <p className="text-muted-foreground mt-2">{cat.description}</p>
                    <span className="inline-flex items-center text-gold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
