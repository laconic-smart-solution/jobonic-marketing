import { SectionHeading } from "@/components/shared/section-heading";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);

  return (
    <section className="py-16 sm:py-20">
      <div className="container space-y-8">
        <SectionHeading title={dict.pages.aboutTitle} description={dict.pages.aboutDescription} />
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">Jobonic combines matching, escrow-backed milestones, and corridor-focused operations to support trusted international execution.</p>
      </div>
    </section>
  );
}
