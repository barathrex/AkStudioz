import Link from "next/link";
import Image from "next/image";
import { getProducts, getCategories } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { CheckCircle, Tag } from "lucide-react";

export const metadata = {
  title: "Products Catalog | AKStudioz Camera Rentals",
  description: "Browse professional cinema cameras, lenses, lighting and event equipment.",
};

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div className="pt-24 md:pt-32 min-h-screen bg-slate-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="inline-block text-red-600 text-xs font-bold tracking-[0.25em] uppercase bg-red-100/80 px-3 py-1 rounded-full border border-red-200 mb-3">
            Available Equipment ({products.length})
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900">
            Equipment Catalog
          </h1>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-base">
            Rent cinema cameras, lenses, lighting kits, and event equipment with clear daily rates and transparent deposits.
          </p>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn className="flex flex-wrap gap-2 justify-center mb-12">
          <Link
            href="/products"
            className="px-4 py-2 rounded-full bg-red-600 text-white text-xs font-bold shadow-md"
          >
            All Products ({products.length})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-red-500 hover:text-red-600 text-xs font-bold transition-all shadow-sm"
            >
              {cat.name}
            </Link>
          ))}
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <div className="group rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-red-500 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={product.product_images?.[0]?.image_url || ""}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-white backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                      <Tag className="w-3 h-3 text-red-500" />
                      {product.stock} in stock
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-extrabold text-slate-900 text-xl mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
                      {product.name}
                    </h2>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {product.specifications && product.specifications.length > 0 && (
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                        {product.specifications.slice(0, 2).map((spec, idx) => (
                          <p key={idx} className="text-xs text-slate-600 flex items-center gap-1.5 truncate">
                            <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            {spec}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-baseline justify-between pt-3 border-t border-slate-100 mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Daily Rate</span>
                      <span className="text-2xl font-extrabold text-red-600">
                        {formatCurrency(product.rental_price)}
                      </span>
                      <span className="text-xs text-slate-500">/day</span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      Deposit: {formatCurrency(product.security_deposit)}
                    </span>
                  </div>

                  <Button variant="gold" className="w-full text-xs" asChild>
                    <Link href={`/book/${product.slug}`}>Book This Item</Link>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
