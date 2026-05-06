import { Landmark, Scale, ShieldCheck, Workflow } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import type { SiteDictionary } from "@/lib/i18n";

const icons = [ShieldCheck, Workflow, Scale, Landmark] as const;

export function BenefitsSection({ dict }: { dict: SiteDictionary }) {
  return (
    <section className="border-y border-border bg-muted/40 py-section sm:py-section-lg">
      <div className="container space-y-14 sm:space-y-16">
        <SectionHeading
          eyebrow={dict.sections.benefitsEyebrow}
          title={dict.sections.benefitsTitle}
          description={dict.sections.benefitsSubtitle}
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.sections.benefits.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
