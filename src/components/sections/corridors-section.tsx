import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { corridors } from "@/data/site-data";
import type { Locale, SiteDictionary } from "@/lib/i18n";

const corridorThemeClass = { teal: "border-teal-100 shadow-teal-100/60", amber: "border-amber-100 shadow-amber-100/60", stone: "border-slate-200 shadow-slate-200/60" } as const;

export function CorridorsSection({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container space-y-10">
        <SectionHeading title={dict.sections.corridorsTitle} description={dict.sections.corridorsSubtitle} />

        <div className="grid gap-6 lg:grid-cols-3">
          {corridors.map((corridor) => (
            <Card key={corridor.slug} className={`rounded-2xl border shadow-lg ${corridorThemeClass[corridor.theme]}`}>
              <CardHeader><CardTitle className="text-2xl">{corridor.shortName}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">{corridor.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {corridor.tags.map((tag) => (
                    <Badge key={`${corridor.slug}-${tag}`} className="rounded-full bg-slate-100 text-slate-700">{tag}</Badge>
                  ))}
                </div>
                <Button asChild variant="outline" className="mt-6 w-full rounded-full">
                  <Link href={`/${locale}/corridors/${corridor.slug}`}>Explore {corridor.shortName}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
