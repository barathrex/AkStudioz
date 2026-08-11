import { createAdminClient } from "@/lib/supabase/admin";
import { categories as mockCategories, products as mockProducts } from "@/lib/mock-data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (process.env.NODE_ENV === "production" && key !== process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createAdminClient();

    // 1. Seed Categories
    const categoryIdMap = new Map<string, string>();

    for (const cat of mockCategories) {
      const { data: existing } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", cat.slug)
        .maybeSingle();

      if (existing) {
        categoryIdMap.set(cat.id, existing.id);
        await supabase
          .from("categories")
          .update({
            name: cat.name,
            description: cat.description,
            image_url: cat.image_url,
          })
          .eq("id", existing.id);
      } else {
        const newId = crypto.randomUUID();
        const { data: inserted, error } = await supabase
          .from("categories")
          .insert({
            id: newId,
            name: cat.name,
            slug: cat.slug,
            description: cat.description,
            image_url: cat.image_url,
          })
          .select()
          .single();

        if (error) throw error;
        categoryIdMap.set(cat.id, inserted.id);
      }
    }

    // 2. Seed Products
    for (const prod of mockProducts) {
      const realCatId = categoryIdMap.get(prod.category_id);

      const { data: existingProd } = await supabase
        .from("products")
        .select("id")
        .eq("slug", prod.slug)
        .maybeSingle();

      let targetProductId = existingProd?.id;

      if (existingProd) {
        await supabase
          .from("products")
          .update({
            category_id: realCatId,
            name: prod.name,
            description: prod.description,
            specifications: prod.specifications,
            included_accessories: prod.included_accessories,
            rental_price: prod.rental_price,
            security_deposit: prod.security_deposit,
            stock: prod.stock,
            status: prod.status,
          })
          .eq("id", existingProd.id);
      } else {
        const newProdId = crypto.randomUUID();
        const { data: insertedProd, error: pErr } = await supabase
          .from("products")
          .insert({
            id: newProdId,
            category_id: realCatId,
            name: prod.name,
            slug: prod.slug,
            description: prod.description,
            specifications: prod.specifications,
            included_accessories: prod.included_accessories,
            rental_price: prod.rental_price,
            security_deposit: prod.security_deposit,
            stock: prod.stock,
            status: prod.status,
          })
          .select()
          .single();

        if (pErr) throw pErr;
        targetProductId = insertedProd.id;
      }

      // Seed Product Images
      if (targetProductId && prod.product_images) {
        for (const img of prod.product_images) {
          const { data: existingImg } = await supabase
            .from("product_images")
            .select("id")
            .eq("product_id", targetProductId)
            .maybeSingle();

          if (!existingImg) {
            await supabase.from("product_images").insert({
              id: crypto.randomUUID(),
              product_id: targetProductId,
              image_url: img.image_url,
              is_primary: img.is_primary ?? true,
            });
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${mockCategories.length} categories and ${mockProducts.length} products successfully!`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
