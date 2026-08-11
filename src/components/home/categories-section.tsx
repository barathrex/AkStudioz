import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

export async function CategoriesSection() {
  const categories = await getCategories();
  return (
    <section className="section-padding bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-red-600 text-xs font-bold tracking-[0.25em] uppercase bg-red-100/80 px-3 py-1 rounded-full border border-red-200">
            Browse By Category
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-4">
            Rental Categories
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-base">
            From 8K cinema cameras to modular LED walls, find the right equipment with transparent daily prices.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <StaggerItem key={category.id}>
              <Link
                href={`/categories/${category.slug}`}
                className="group relative block aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-red-500 transition-all duration-300"
              >
                <Image
                  src={category.image_url!}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-red-400 group-hover:translate-x-1 transition-transform">
                    Explore Equipment <ArrowRight className="w-4 h-4 ml-1" />
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
