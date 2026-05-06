import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { platformLocaleBaseUrl } from "@/data/site-data";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function PricingPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const appBase = platformLocaleBaseUrl(locale);

  return (
    <section className="py-16 sm:py-20">
      <div className="container space-y-10">
        <SectionHeading title={dict.pages.pricingTitle} description={dict.pages.pricingDescription} centered />
        <div className="grid gap-6 md:grid-cols-3">
          {dict.pages.pricingPlans.map((plan) => (
            <Card key={plan.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">{plan.details}</CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <a href={appBase} target="_blank" rel="noreferrer">
              {dict.nav.getStarted}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
