import Image from "next/image";
import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import type { SiteDictionary } from "@/lib/i18n";

const partners = [
  {
    name: "Franco-Thai Chamber of Commerce",
    src: "/partners/ftcc-bangkok.png",
    external: false,
  },
  {
    name: "China Council for the Promotion of International Trade",
    src: "/partners/ccpit.png",
    external: false,
  },
  {
    name: "Business France",
    src: "/partners/business-france.png",
    external: false,
  },
  {
    name: "Germany Trade & Invest",
    src: "/partners/gtai.png",
    external: false,
  },
  {
    name: "Alliance Française",
    src: "/partners/alliance-francaise.png",
    external: false,
  },
  {
    name: "Zenichub",
    src: "/partners/zenichub.svg",
    external: false,
  },
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

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name}>
              <div className="flex h-24 items-center justify-center rounded-2xl border border-border bg-card px-3 py-4 shadow-sm sm:h-28">
                <div className="relative h-14 w-full max-w-[9.5rem] sm:h-16 sm:max-w-[11rem]">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 180px"
                    unoptimized={partner.external || partner.src.endsWith(".svg")}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

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
