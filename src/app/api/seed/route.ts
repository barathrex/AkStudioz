import { createAdminClient } from "@/lib/supabase/admin";
import { categories as mockCategories, products as mockProducts } from "@/lib/mock-data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // In production, we require the secret parameter to match SUPABASE_SERVICE_ROLE_KEY to prevent abuse.
  // In development, we can bypass this check if the secret parameter is not provided.
  if (process.env.NODE_ENV !== "development" && secret !== process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createAdminClient();

    // 1. Clear existing data in reverse order of dependencies
    await supabase.from("consents").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    await supabase.from("booking_items").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    await supabase.from("bookings").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    await supabase.from("product_images").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    await supabase.from("products").delete().neq("id", "00000000-0000-0000-0000-000000000000");
    await supabase.from("categories").delete().neq("id", "00000000-0000-0000-0000-000000000000");

    // 2. Map mock category IDs to UUIDs for Supabase compatibility
    const categoryIdMap: Record<string, string> = {};
    const seededCategories = [];

    for (const cat of mockCategories) {
      const categoryUuid = crypto.randomUUID();
      categoryIdMap[cat.id] = categoryUuid;

      seededCategories.push({
        id: categoryUuid,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        image_url: cat.image_url,
      });
    }

    const { error: catError } = await supabase.from("categories").insert(seededCategories);
    if (catError) throw catError;

    // 3. Seed products and images
    for (const prod of mockProducts) {
      const productUuid = crypto.randomUUID();
      const mappedCategoryId = categoryIdMap[prod.category_id] || null;

      const { error: prodError } = await supabase.from("products").insert({
        id: productUuid,
        category_id: mappedCategoryId,
        name: prod.name,
        slug: prod.slug,
        description: prod.description,
        specifications: prod.specifications,
        included_accessories: prod.included_accessories,
        rental_price: prod.rental_price,
        security_deposit: prod.security_deposit,
        stock: prod.stock,
        status: prod.status,
      });

      if (prodError) throw prodError;

      if (prod.product_images && prod.product_images.length > 0) {
        const seededImages = prod.product_images.map((img) => ({
          id: crypto.randomUUID(),
          product_id: productUuid,
          image_url: img.image_url,
          is_primary: img.is_primary,
        }));

        const { error: imgError } = await supabase.from("product_images").insert(seededImages);
        if (imgError) throw imgError;
      }
    }

    return NextResponse.json({ success: true, message: "Database seeded successfully!" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
