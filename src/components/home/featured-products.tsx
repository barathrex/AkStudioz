import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

export async function FeaturedProducts() {
  const featured = await getProducts({ featured: true });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Top Picks
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
              Featured Products
            </h2>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0" asChild>
            <Link href="/products">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <StaggerItem key={product.id}>
              <Link
                href={`/products/${product.slug}`}
                className="group block glass-card overflow-hidden hover:border-gold/30 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.product_images?.[0]?.image_url || ""}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={75}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 glass px-2 py-1 rounded text-xs text-gold">
                    {product.stock} Available
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gold">
                        {formatCurrency(product.rental_price)}
                      </span>
                      <span className="text-xs text-muted-foreground">/day</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
