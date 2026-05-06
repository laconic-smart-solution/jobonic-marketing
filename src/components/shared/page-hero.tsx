import { Button } from "@/components/ui/button";
import { PLATFORM_URL } from "@/data/site-data";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
}

export function PageHero({ eyebrow, title, description, ctaLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.1),transparent_50%)]"
        aria-hidden
      />
      <div className="container relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          ) : null}
          <h1 className="font-display mt-4 text-display-sm text-foreground sm:text-display">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{description}</p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-xl px-8">
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer">
              {ctaLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
