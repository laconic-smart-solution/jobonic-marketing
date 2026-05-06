import { Button } from "@/components/ui/button";
import { PLATFORM_URL } from "@/data/site-data";
import type { SiteDictionary } from "@/lib/i18n";

export function BottomCtaSection({ dict }: { dict: SiteDictionary }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{dict.sections.bottomTitle}</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {dict.sections.bottomCtas.map((cta, index) => (
              <Button key={cta} asChild size="lg" variant={index === 0 ? "default" : "secondary"} className="rounded-full">
                <a href={PLATFORM_URL} target="_blank" rel="noreferrer">{cta}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
