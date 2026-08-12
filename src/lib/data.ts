import { categories as mockCategories, products as mockProducts } from "./mock-data";
import { isSupabaseConfigured } from "./supabase/client";
import { createPublicClient } from "./supabase/server";
import { Category, Product } from "@/types";

export async function getCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured()) {
    return mockCategories;
  }
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");
    if (error || !data || data.length === 0) {
      return mockCategories;
    }
    return data;
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
        return mockProducts.filter((p) => p.category_id === "1");
      }
    }
    if (options?.featured) {
      filtered = filtered.slice(0, 4);
    }
    return filtered;
  }

  try {
    const supabase = createPublicClient();
    
    let categoryId: string | null = null;
    if (options?.categorySlug) {
      const { data: category } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", options.categorySlug)
        .single();
      
      if (category) {
        categoryId = category.id;
      }
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
    if (error || !data || data.length === 0) {
      let filtered = mockProducts;
      if (options?.categorySlug) {
        const cat = mockCategories.find((c) => c.slug === options.categorySlug);
        if (cat) {
          filtered = filtered.filter((p) => p.category_id === cat.id);
        }
      }
      if (options?.featured) {
        filtered = filtered.slice(0, 4);
      }
      return filtered;
    }
    
    return data as Product[];
  } catch (err) {
    console.error("Error fetching products from Supabase, falling back to mock data:", err);
    let filtered = mockProducts;
    if (options?.categorySlug) {
      const cat = mockCategories.find((c) => c.slug === options.categorySlug);
      if (cat) {
        filtered = filtered.filter((p) => p.category_id === cat.id);
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
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("products")
      .select("*, product_images(*), categories(*)")
      .or(`id.eq.${slugOrId},slug.eq.${slugOrId}`)
      .single();
    if (error || !data) {
      return mockProducts.find((p) => p.slug === slugOrId || p.id === slugOrId) || null;
    }
    return data as Product;
  } catch (err) {
    console.error(`Error fetching product ${slugOrId} from Supabase, falling back to mock data:`, err);
    return mockProducts.find((p) => p.slug === slugOrId || p.id === slugOrId) || null;
  }
}
