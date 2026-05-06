import { CorridorMap } from "@/components/shared/corridor-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PLATFORM_URL } from "@/data/site-data";
import type { SiteDictionary } from "@/lib/i18n";

export function HeroSection({ dict }: { dict: SiteDictionary }) {
  return (
    <section className="bg-gradient-to-b from-violet-50 via-white to-white py-16 sm:py-24">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{dict.hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{dict.hero.title}</h1>
          <p className="mt-6 text-lg text-slate-600">{dict.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full"><a href={PLATFORM_URL} target="_blank" rel="noreferrer">{dict.hero.primaryCta}</a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/5"><a href={PLATFORM_URL} target="_blank" rel="noreferrer">{dict.hero.secondaryCta}</a></Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {dict.hero.chips.map((chip) => (
              <Badge key={chip} variant="outline" className="rounded-full border-slate-300 bg-white px-3 py-1 text-slate-700">{chip}</Badge>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-violet-100">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl"><CorridorMap /></div>
        </div>
      </div>
    </section>
  );
}
