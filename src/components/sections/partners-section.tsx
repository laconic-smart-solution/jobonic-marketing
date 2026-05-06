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
    <section className="bg-white py-16 sm:py-20">
      <div className="container space-y-10">
        <SectionHeading title={dict.sections.partnersTitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex h-24 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-center">
              <p className="text-sm font-semibold text-slate-700">{partner.name}</p>
              <p className="mt-1 text-[10px] text-slate-500">{partner.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
