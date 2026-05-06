import { SectionHeading } from "@/components/shared/section-heading";
import type { SiteDictionary } from "@/lib/i18n";

export function HowItWorksSection({ dict }: { dict: SiteDictionary }) {
  return (
    <section className="py-section sm:py-section-lg">
      <div className="container space-y-14 sm:space-y-16">
        <SectionHeading
          eyebrow={dict.sections.howEyebrow}
          title={dict.sections.howTitle}
          description={dict.sections.howSubtitle}
          centered
        />

        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {dict.sections.howSteps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 lg:block lg:gap-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/25 bg-background font-display text-sm font-semibold text-primary lg:mb-5">
                {index + 1}
              </div>
              <div className="min-w-0 pt-0.5 lg:pt-0">
                <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
