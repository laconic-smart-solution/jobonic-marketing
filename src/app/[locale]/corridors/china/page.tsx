import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { corridors, PLATFORM_URL } from "@/data/site-data";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const corridor = corridors.find((item) => item.slug === "china");

export default function CorridorPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  if (!corridor) return null;

  return (
    <>
      <PageHero eyebrow="China Corridor" title="Thailand to China service corridor" description="Bridge Thai SMEs and operators to China with Mandarin-enabled support and secure contract milestones." ctaLabel="Find Corridor Talent" />
      <section className="py-16">
        <div className="container space-y-8">
          <SectionHeading title={corridor.name} description={corridor.description} />
          <div className="grid gap-4 md:grid-cols-3">
            {corridor.services.map((service) => (
              <Card key={service} className="rounded-2xl border-slate-200"><CardContent className="pt-6 text-sm text-slate-700">{service}</CardContent></Card>
            ))}
          </div>
          <a href={PLATFORM_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">Post a China Service Need</a>
        </div>
      </section>
    </>
  );
}
