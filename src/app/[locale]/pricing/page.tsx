import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PLATFORM_URL } from "@/data/site-data";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const plans = [
  { title: "Starter", details: "For first-time corridor projects and pilot contracts." },
  { title: "Growth", details: "For recurring cross-border service buyers and teams." },
  { title: "Business", details: "For larger organizations with multi-country needs." },
] as const;

export default function PricingPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);

  return (
    <section className="py-16 sm:py-20">
      <div className="container space-y-10">
        <SectionHeading title={dict.pages.pricingTitle} description={dict.pages.pricingDescription} centered />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.title} className="rounded-2xl">
              <CardHeader><CardTitle>{plan.title}</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-600">{plan.details}</CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center"><Button asChild className="rounded-full" size="lg"><a href={PLATFORM_URL} target="_blank" rel="noreferrer">{dict.nav.getStarted}</a></Button></div>
      </div>
    </section>
  );
}
