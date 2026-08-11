import { getCategories } from "@/lib/data";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Admin - Categories" };

export default async function AdminCategoriesPage() {
  const categories = await getCategories();
  return (
    <FadeIn>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-display font-bold">Categories</h1>
        <Button variant="gold" size="sm">Add Category</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="glass-card p-6 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
