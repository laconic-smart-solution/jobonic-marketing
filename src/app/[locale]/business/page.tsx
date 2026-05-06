import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { platformLocaleBaseUrl } from "@/data/site-data";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function BusinessPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const appBase = platformLocaleBaseUrl(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.nav.forBusiness}
        title={dict.pages.businessTitle}
        description={dict.pages.businessDescription}
        ctaLabel={dict.pages.bookDemo}
      />
      <section className="py-16 sm:py-20">
        <div className="container space-y-10">
          <SectionHeading title={dict.pages.businessSectionTitle} description={dict.pages.businessSectionDescription} />
          <div className="grid gap-5 md:grid-cols-2">
            {dict.sections.businessCategories.map((category) => (
              <Card key={category} className="rounded-2xl border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">{dict.pages.businessCardDescription}</CardContent>
              </Card>
            ))}
          </div>
          <Button asChild size="lg">
            <a href={appBase} target="_blank" rel="noreferrer">
              {dict.pages.bookDemo}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
