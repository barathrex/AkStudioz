import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategories, getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);
  return { title: category?.name || "Category" };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = await getProducts({ categorySlug: slug });

  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <Link href="/categories" className="inline-flex items-center text-sm text-muted-foreground hover:text-gold mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Categories
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{category.name}</h1>
            <p className="text-muted-foreground mb-12">{category.description}</p>
          </FadeIn>

          {categoryProducts.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">No products in this category yet.</p>
          ) : (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <StaggerItem key={product.id}>
                  <Link href={`/products/${product.slug}`} className="group block glass-card overflow-hidden hover:border-gold/30 transition-colors">
                    <div className="relative aspect-[4/3]">
                      <Image src={product.product_images?.[0]?.image_url || ""} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h2 className="font-semibold group-hover:text-gold transition-colors">{product.name}</h2>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-gold font-bold">{formatCurrency(product.rental_price)}/day</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </div>
  );
}
