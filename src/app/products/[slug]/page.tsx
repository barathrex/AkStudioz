import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Package } from "lucide-react";
import { getProduct, getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/booking/booking-button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const allProducts = await getProducts();
  const related = allProducts
    .filter((p) => p.category_id === product.category_id && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-gold mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden glass-card">
                <Image
                  src={product.product_images?.[0]?.image_url || ""}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="glass-card p-6 mb-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Rental Price</p>
                      <p className="text-2xl font-bold text-gold">
                        {formatCurrency(product.rental_price)}
                        <span className="text-sm text-muted-foreground font-normal">/day</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Security Deposit</p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(product.security_deposit)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Available Stock</p>
                      <p className="text-2xl font-bold flex items-center gap-2">
                        <Package className="w-5 h-5 text-gold" />
                        {product.stock}
                      </p>
                    </div>
                  </div>
                </div>

                <BookingButton product={product} />

                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Specifications</h3>
                  <ul className="space-y-2">
                    {product.specifications.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Included Accessories</h3>
                  <ul className="space-y-2">
                    {product.included_accessories.map((acc) => (
                      <li key={acc} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        {acc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          {related.length > 0 && (
            <FadeIn className="mt-24">
              <h2 className="text-2xl font-display font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="group glass-card overflow-hidden hover:border-gold/30 transition-colors"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.product_images?.[0]?.image_url || ""}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-gold transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-gold text-sm mt-1">
                        {formatCurrency(p.rental_price)}/day
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-white/10 lg:hidden z-40">
        <Button variant="gold" className="w-full" asChild>
          <Link href={`/book/${product.slug}`}>Book Now — {formatCurrency(product.rental_price)}/day</Link>
        </Button>
      </div>
    </div>
  );
}
