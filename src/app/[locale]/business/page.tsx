import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessCategories, PLATFORM_URL } from "@/data/site-data";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function BusinessPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);

  return (
    <>
      <PageHero eyebrow={dict.nav.forBusiness} title={dict.pages.businessTitle} description={dict.pages.businessDescription} ctaLabel={dict.pages.bookDemo} />
      <section className="py-16 sm:py-20">
        <div className="container space-y-10">
          <SectionHeading title="Designed for enterprise and SME teams" description="Run repeatable B2B operations through a corridor-ready marketplace model with escrow and arbitration." />
          <div className="grid gap-5 md:grid-cols-2">
            {businessCategories.map((category) => (
              <Card key={category} className="rounded-2xl border-slate-200">
                <CardHeader><CardTitle className="text-xl">{category}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Structured contracts, verified milestones, and delivery transparency for cross-border collaboration.</CardContent>
              </Card>
            ))}
          </div>
          <Button asChild size="lg"><a href={PLATFORM_URL} target="_blank" rel="noreferrer">{dict.pages.bookDemo}</a></Button>
        </div>
      </section>
    </>
  );
}
