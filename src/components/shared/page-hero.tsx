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
    <section className="bg-gradient-to-b from-violet-50 to-white py-16 sm:py-20">
      <div className="container">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg text-slate-600">{description}</p>
          <Button asChild size="lg" className="mt-8 rounded-full">
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer">{ctaLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
