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
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 lg:py-16">
        <div className="lg:col-span-1">
          <p className="font-display text-lg font-semibold text-primary-foreground">Jobonic</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/65">{dict.footer.blurb}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/50">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-foreground/75 transition hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-primary-foreground/75 transition hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <p className="text-center text-xs text-primary-foreground/45">© {new Date().getFullYear()} Jobonic</p>
        </div>
      </div>
    </footer>
  );
}
