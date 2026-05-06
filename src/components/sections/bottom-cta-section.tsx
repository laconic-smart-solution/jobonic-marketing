import Link from "next/link";

import { Button } from "@/components/ui/button";
import { platformLocaleBaseUrl } from "@/data/site-data";
import type { Locale, SiteDictionary } from "@/lib/i18n";

function withLocale(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

export function BottomCtaSection({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const appBase = platformLocaleBaseUrl(locale);
  const ctas = dict.sections.bottomCtas;
  const hrefs = [`${appBase}/find-talent`, `${appBase}/find-work`, withLocale(locale, "/business")] as const;

  return (
    <section className="pb-section sm:pb-section-lg">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground px-8 py-14 text-center text-primary-foreground shadow-xl sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,hsl(var(--primary)/0.35),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{dict.sections.bottomTitle}</h2>
            <p className="mt-4 text-base text-primary-foreground/75 sm:text-lg">{dict.sections.bottomSubtitle}</p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {ctas.map((cta, index) => (
                <Button
                  key={cta}
                  asChild
                  size="lg"
                  variant={index === 0 ? "secondary" : "outline"}
                  className={
                    index === 0
                      ? "h-12 rounded-xl border-0 bg-background px-8 text-base font-semibold text-foreground shadow-sm hover:bg-background/90"
                      : "h-12 rounded-xl border-primary-foreground/25 bg-transparent px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                  }
                >
                  {index < 2 ? (
                    <a href={hrefs[index]} target="_blank" rel="noreferrer">
                      {cta}
                    </a>
                  ) : (
                    <Link href={hrefs[index]}>{cta}</Link>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
