import { categories as mockCategories, products as mockProducts } from "./mock-data";
import { isSupabaseConfigured } from "./supabase/client";
import { createClient } from "./supabase/server";
import { Category, Product } from "@/types";

export async function getCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured()) {
    return mockCategories;
  }
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error fetching categories from Supabase, falling back to mock data:", err);
    return mockCategories;
  }
}

export async function getProducts(options?: { categorySlug?: string; featured?: boolean }): Promise<Product[]> {
  if (!isSupabaseConfigured()) {
    let filtered = mockProducts;
    if (options?.categorySlug) {
      const cat = mockCategories.find((c) => c.slug === options.categorySlug);
      if (cat) {
        filtered = filtered.filter((p) => p.category_id === cat.id);
      } else {
        return [];
      }
    }
    if (options?.featured) {
      filtered = filtered.slice(0, 4);
    }
    return filtered;
  }

  try {
    const supabase = await createClient();
    
    // First, if categorySlug filter is present, resolve the category ID
    let categoryId: string | null = null;
    if (options?.categorySlug) {
      const { data: category, error: catErr } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", options.categorySlug)
        .single();
      
      if (catErr || !category) {
        return [];
      }
      categoryId = category.id;
    }

    let query = supabase
      .from("products")
      .select("*, product_images(*), categories(*)")
      .eq("status", "active");

    if (categoryId) {
      query = query.eq("category_id", categoryId);
    }

    if (options?.featured) {
      query = query.limit(4);
    }

    const { data, error } = await query;
    if (error) throw error;
    
    // Normalize data: products from Supabase might have product_images or categories array
    // conforming to the Product type
    return (data || []) as Product[];
  } catch (err) {
    console.error("Error fetching products from Supabase, falling back to mock data:", err);
    let filtered = mockProducts;
    if (options?.categorySlug) {
      const cat = mockCategories.find((c) => c.slug === options.categorySlug);
      if (cat) {
        filtered = filtered.filter((p) => p.category_id === cat.id);
      } else {
        return [];
      }
    }
    if (options?.featured) {
      filtered = filtered.slice(0, 4);
    }
    return filtered;
  }
}

export async function getProduct(slugOrId: string): Promise<Product | null> {
  if (!isSupabaseConfigured()) {
    return mockProducts.find((p) => p.slug === slugOrId || p.id === slugOrId) || null;
  }
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*, product_images(*), categories(*)")
      .or(`id.eq.${slugOrId},slug.eq.${slugOrId}`)
      .single();
    if (error) throw error;
    return data as Product;
  } catch (err) {
    console.error(`Error fetching product ${slugOrId} from Supabase, falling back to mock data:`, err);
    return mockProducts.find((p) => p.slug === slugOrId || p.id === slugOrId) || null;
  }
}
