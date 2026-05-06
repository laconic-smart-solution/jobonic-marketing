import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import type { SiteDictionary } from "@/lib/i18n";

const partners = [
  { name: "CCPIT", status: "Name-only (logo pending MOU)" },
  { name: "Business France", status: "Name-only (logo pending MOU)" },
  { name: "Germany Trade & Invest", status: "Name-only (logo pending MOU)" },
  { name: "Zenichub", status: "Name-only (approved)" },
] as const;

export function PartnersSection({ dict }: { dict: SiteDictionary }) {
  return (
    <section className="py-section sm:py-section-lg">
      <div className="container space-y-12 sm:space-y-14">
        <SectionHeading
          eyebrow={dict.sections.partnersEyebrow}
          title={dict.sections.partnersTitle}
          description={dict.sections.partnersSubtitle}
          centered
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-28 flex-col items-center justify-center rounded-2xl border border-border bg-card px-4 text-center shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{partner.name}</p>
              <p className="mt-2 text-[11px] leading-snug text-muted-foreground">{partner.status}</p>
            </div>
          ))}
        </div>

        <figure className="mx-auto max-w-3xl rounded-2xl border border-border bg-muted/30 p-8 sm:p-10">
          <Quote className="h-8 w-8 text-primary/40" aria-hidden />
          <blockquote className="mt-4 font-display text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            {dict.sections.testimonialQuote}
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{dict.sections.testimonialAuthor}</span>
            <span className="mx-2 text-border">·</span>
            {dict.sections.testimonialRole}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
