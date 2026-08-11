import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProduct } from "@/lib/data";
import { BookingFlow } from "@/components/booking/booking-flow";
import { FadeIn } from "@/components/animations/fade-in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  return {
    title: product ? `Book ${product.name}` : "Book Equipment",
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <div className="pt-24 md:pt-32">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-gold mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {product.name}
            </Link>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Book {product.name}
            </h1>
            <p className="text-muted-foreground mb-12">
              Complete the steps below to reserve your equipment.
            </p>
          </FadeIn>
          <BookingFlow product={product} />
        </div>
      </section>
    </div>
  );
}
