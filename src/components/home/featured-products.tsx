import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Tag } from "lucide-react";
import { getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

export async function FeaturedProducts() {
  const featured = await getProducts({ featured: true });

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <FadeIn>
            <span className="inline-block text-red-600 text-xs font-bold tracking-[0.25em] uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-3">
              Most Popular Rentals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900">
              Featured Equipment
            </h2>
          </FadeIn>
          <FadeIn>
            <Button variant="outline" className="border-slate-200 hover:border-red-500 hover:text-red-600 font-semibold" asChild>
              <Link href="/products">
                View Complete Catalog <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <StaggerItem key={product.id}>
              <div className="group rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-red-500 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={product.product_images?.[0]?.image_url || ""}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={75}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-white backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                      <Tag className="w-3 h-3 text-red-500" />
                      {product.stock} In Stock
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {product.specifications && product.specifications.length > 0 && (
                      <div className="space-y-1 mb-4 pt-2 border-t border-slate-100">
                        {product.specifications.slice(0, 2).map((spec, i) => (
                          <p key={i} className="text-[11px] text-slate-600 flex items-center gap-1.5 truncate">
                            <CheckCircle className="w-3 h-3 text-red-500 shrink-0" />
                            {spec}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-baseline justify-between pt-3 border-t border-slate-100 mb-4">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Rental Rate</span>
                      <span className="text-xl font-extrabold text-red-600">
                        {formatCurrency(product.rental_price)}
                      </span>
                      <span className="text-xs text-slate-500">/day</span>
                    </div>
                    <span className="text-[11px] text-slate-400 text-right">
                      Deposit: {formatCurrency(product.security_deposit)}
                    </span>
                  </div>

                  <Button variant="gold" className="w-full text-xs" asChild>
                    <Link href={`/book/${product.slug}`}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
