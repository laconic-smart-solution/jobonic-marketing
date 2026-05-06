import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale, SiteDictionary } from "@/lib/i18n";

const corridorThemeClass = {
  africa: "border-teal-200/80 shadow-teal-500/5",
  china: "border-amber-200/80 shadow-amber-500/5",
  germany: "border-stone-200/80 shadow-stone-500/5",
} as const;

export function CorridorsSection({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const corridors = Object.values(dict.corridors);
  return (
    <section className="py-section sm:py-section-lg">
      <div className="container space-y-12 sm:space-y-14">
        <SectionHeading
          eyebrow={dict.sections.corridorsEyebrow}
          title={dict.sections.corridorsTitle}
          description={dict.sections.corridorsSubtitle}
          centered
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {corridors.map((corridor) => (
            <Card
              key={corridor.slug}
              className={`group flex flex-col rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${corridorThemeClass[corridor.slug]}`}
            >
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-xl sm:text-2xl">{corridor.shortName}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">{corridor.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {corridor.tags.map((tag) => (
                    <Badge
                      key={`${corridor.slug}-${tag}`}
                      variant="secondary"
                      className="rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="mt-8 inline-flex w-full rounded-xl border-border bg-background hover:bg-muted/60"
                >
                  <Link href={`/${locale}/corridors/${corridor.slug}`} className="inline-flex items-center justify-center gap-1">
                    {dict.sections.explorePrefix} {corridor.shortName}
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
