import { FadeIn } from "@/components/animations/fade-in";

export const metadata = { title: "Documents" };

export default function DocumentsPage() {
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">Documents</h1>
      <div className="glass-card p-8 text-center text-muted-foreground">
        <p>No documents uploaded yet.</p>
      </div>
    </FadeIn>
  );
}
