import { getProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Admin - Products" };

export default async function AdminProductsPage() {
  const products = await getProducts();
  return (
    <FadeIn>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-display font-bold">Products</h1>
        <Button variant="gold" size="sm">Add Product</Button>
      </div>
      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Price/Day</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Stock</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
              <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-gold">{formatCurrency(p.rental_price)}</td>
                <td className="p-4">{p.stock}</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded text-xs bg-green-500/10 text-green-400">{p.status}</span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}
