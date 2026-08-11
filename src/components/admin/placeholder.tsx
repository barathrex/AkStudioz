import { FadeIn } from "@/components/animations/fade-in";

export default function AdminPlaceholder({ title }: { title: string }) {
  return (
    <FadeIn>
      <h1 className="text-3xl font-display font-bold mb-8">{title}</h1>
      <div className="glass-card p-8 text-center text-muted-foreground">
        <p>Coming soon.</p>
      </div>
    </FadeIn>
  );
}
