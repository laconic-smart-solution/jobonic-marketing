import { BadgeCheck, Gavel, Lock } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import type { SiteDictionary } from "@/lib/i18n";

const icons = [Lock, Gavel, BadgeCheck] as const;

export function TrustArchitectureSection({ dict }: { dict: SiteDictionary }) {
  const trustFeatures = dict.sections.trustFeatures;
  return (
    <section className="border-y border-border bg-muted/40 py-section sm:py-section-lg">
      <div className="container space-y-12 sm:space-y-14">
        <SectionHeading
          eyebrow={dict.sections.trustEyebrow}
          title={dict.sections.trustTitle}
          description={dict.sections.trustSubtitle}
          centered
        />

        <div className="grid gap-6 md:grid-cols-3">
          {trustFeatures.map((feature, i) => {
            const Icon = icons[i] ?? Lock;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
