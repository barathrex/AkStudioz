import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

export async function CategoriesSection() {
  const categories = await getCategories();
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">
            Our Categories
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Rental Categories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From cinema cameras to event equipment, we have everything you need
            for your next production.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <StaggerItem key={category.id}>
              <Link
                href={`/categories/${category.slug}`}
                className="group relative block aspect-[4/3] rounded-xl overflow-hidden glass-card"
              >
                <Image
                  src={category.image_url!}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Products <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
