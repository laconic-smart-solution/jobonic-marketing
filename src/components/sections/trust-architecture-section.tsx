import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trustFeatures } from "@/data/site-data";
import type { SiteDictionary } from "@/lib/i18n";

export function TrustArchitectureSection({ dict }: { dict: SiteDictionary }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="container space-y-10">
        <SectionHeading title={dict.sections.trustTitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {trustFeatures.map((feature) => (
            <Card key={feature.title} className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardHeader><CardTitle className="text-xl">{feature.title}</CardTitle></CardHeader>
              <CardContent><p className="text-sm leading-relaxed text-slate-600">{feature.description}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
