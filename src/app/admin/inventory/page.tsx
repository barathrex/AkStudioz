import { getProducts } from "@/lib/data";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata = { title: "Admin - Inventory" };

export default async function AdminInventoryPage() {
  const products = await getProducts();
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Inventory</h1>
      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 font-medium text-muted-foreground">Product</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Total Stock</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Available</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Rented</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-white/5">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4">{p.stock}</td>
                <td className="p-4 text-green-400">{p.stock}</td>
                <td className="p-4 text-muted-foreground">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}
