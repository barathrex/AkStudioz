import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getProducts, getCategories } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

export const metadata = {
  title: "Products",
  description: "Browse our premium camera and event equipment rentals.",
};

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">
              Equipment
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4">
              Our Products
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Browse our complete inventory of professional cameras, accessories,
              lighting, and event equipment.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap gap-3 justify-center mb-12">
            <Link
              href="/products"
              className="px-4 py-2 rounded-full text-sm bg-gold text-black font-medium"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="px-4 py-2 rounded-full text-sm glass hover:border-gold/30 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 glass px-2 py-1 rounded text-xs text-gold">
                      {product.stock} in stock
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gold">
                          {formatCurrency(product.rental_price)}
                        </span>
                        <span className="text-xs text-muted-foreground">/day</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                    </div>
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
