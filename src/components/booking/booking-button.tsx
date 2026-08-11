"use client";

import Link from "next/link";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BookingButtonProps {
  product: Product;
}

export function BookingButton({ product }: BookingButtonProps) {
  return (
    <Button variant="gold" size="xl" className="w-full hidden lg:flex" asChild>
      <Link href={`/book/${product.slug}`}>
        Book Now — {formatCurrency(product.rental_price)}/day
      </Link>
    </Button>
  );
}
