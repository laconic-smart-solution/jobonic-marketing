import { HeroVisualMockup } from "@/components/shared/hero-visual-mockup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { platformLocaleBaseUrl } from "@/data/site-data";
import type { Locale, SiteDictionary } from "@/lib/i18n";

export function HeroSection({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const appBase = platformLocaleBaseUrl(locale);
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,hsl(var(--primary)/0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background))_85%)]" aria-hidden />

      <div className="container relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              <span className="text-xs font-medium text-muted-foreground">{dict.hero.eyebrow}</span>
            </div>

            <h1 className="font-display mt-6 text-display-sm text-foreground sm:text-display lg:text-display-lg">
              {dict.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {dict.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" className="h-12 rounded-xl px-8 text-base shadow-sm">
                <a href={`${appBase}/find-talent`} target="_blank" rel="noreferrer">
                  {dict.hero.primaryCta}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-border bg-card px-8 text-base hover:bg-muted/80"
              >
                <a href={`${appBase}/find-work`} target="_blank" rel="noreferrer">
                  {dict.hero.secondaryCta}
                </a>
              </Button>
            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {dict.hero.socialProof}
            </p>
            <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:max-w-md">
              {dict.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="font-display mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-2">
              {dict.hero.chips.map((chip) => (
                <Badge
                  key={chip}
                  variant="outline"
                  className="rounded-lg border-border bg-card/80 px-3 py-1 text-xs font-normal text-muted-foreground"
                >
                  {chip}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <HeroVisualMockup dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
