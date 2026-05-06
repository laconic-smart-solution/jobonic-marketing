import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { Locale, SiteDictionary } from "@/lib/i18n";

const categories = [
  "Market research contracts",
  "Trade agent retainers",
  "Logistics coordination",
  "Business development",
  "Supplier audit",
  "ASEAN market entry coordination",
] as const;

export function BusinessBannerSection({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="rounded-3xl border border-violet-200 bg-violet-50 p-8 shadow-md shadow-violet-100 sm:p-10">
          <SectionHeading title={dict.sections.businessTitle} description={dict.sections.businessDescription} />
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-violet-200 bg-white px-3 py-1 text-xs text-slate-700">{category}</span>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 rounded-full"><Link href={`/${locale}/business`}>{dict.sections.businessCta}</Link></Button>
        </div>
      </div>
    </section>
  );
}
