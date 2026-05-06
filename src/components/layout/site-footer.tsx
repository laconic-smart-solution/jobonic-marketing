import Link from "next/link";

import { platformLocaleBaseUrl } from "@/data/site-data";
import type { Locale, SiteDictionary } from "@/lib/i18n";

function withLocale(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

export function SiteFooter({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const appBase = platformLocaleBaseUrl(locale);
  const columns = [
    {
      title: dict.footer.jobonic,
      links: [
        { label: dict.nav.about, href: `${appBase}/find-talent` },
        { label: dict.nav.pricing, href: `${appBase}/pricing` },
        { label: dict.nav.forBusiness, href: withLocale(locale, "/business") },
      ],
    },
    {
      title: dict.footer.corridors,
      links: [
        { label: dict.nav.africa, href: withLocale(locale, "/corridors/africa") },
        { label: dict.nav.china, href: withLocale(locale, "/corridors/china") },
        { label: dict.nav.germany, href: withLocale(locale, "/corridors/germany") },
      ],
    },
    {
      title: dict.footer.forBusiness,
      links: [
        { label: "B2B Contracts", href: withLocale(locale, "/business") },
        { label: "Book a Demo", href: appBase },
        { label: "Enterprise Escrow", href: appBase },
      ],
    },
    {
      title: dict.footer.legal,
      links: [
        { label: dict.footer.privacy, href: `${appBase}/privacy` },
        { label: dict.footer.terms, href: `${appBase}/terms` },
        { label: dict.footer.trust, href: `${appBase}/contact` },
      ],
    },
  ] as const;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-lg font-bold text-primary">Jobonic</p>
          <p className="mt-3 text-sm text-slate-600">{dict.footer.blurb}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">{column.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-primary">{link.label}</a>
                  ) : (
                    <Link href={link.href} className="hover:text-primary">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
