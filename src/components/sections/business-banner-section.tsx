import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { Locale, SiteDictionary } from "@/lib/i18n";

export function BusinessBannerSection({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const categories = dict.sections.businessCategories;
  return (
    <section className="py-section sm:py-section-lg">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] via-card to-card px-8 py-12 shadow-sm sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <SectionHeading title={dict.sections.businessTitle} description={dict.sections.businessDescription} />
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-lg border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="mt-10 h-12 rounded-xl px-8 text-base shadow-sm">
              <Link href={`/${locale}/business`}>{dict.sections.businessCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
