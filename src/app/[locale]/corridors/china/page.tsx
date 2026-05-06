import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { platformLocaleBaseUrl } from "@/data/site-data";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function CorridorPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const corridor = dict.corridors.china;
  const appBase = platformLocaleBaseUrl(locale);

  return (
    <>
      <PageHero
        eyebrow={corridor.heroEyebrow}
        title={corridor.heroTitle}
        description={corridor.heroDescription}
        ctaLabel={corridor.heroCtaLabel}
      />
      <section className="py-16">
        <div className="container space-y-8">
          <SectionHeading title={corridor.name} description={corridor.description} />
          <div className="grid gap-4 md:grid-cols-3">
            {corridor.services.map((service) => (
              <Card key={service} className="rounded-2xl border-slate-200">
                <CardContent className="pt-6 text-sm text-slate-700">{service}</CardContent>
              </Card>
            ))}
          </div>
          <a
            href={`${appBase}/find-work`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            {corridor.pageCtaLabel}
          </a>
        </div>
      </section>
    </>
  );
}
