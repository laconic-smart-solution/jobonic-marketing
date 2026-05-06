"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PLATFORM_URL, platformLocaleBaseUrl } from "@/data/site-data";
import { localeLabels, locales, localizePath, type Locale, type SiteDictionary } from "@/lib/i18n";

function withLocale(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

function getFilterItems(appBase: string, type: "find-work" | "find-talent", dict: SiteDictionary) {
  const base = `${appBase}/${type}`;
  return [
    { label: dict.nav.all, href: base },
    { label: dict.nav.africa, href: `${base}?country=africa` },
    { label: dict.nav.china, href: `${base}?country=china` },
    { label: dict.nav.germany, href: `${base}?country=germany` },
  ];
}

export function SiteHeader({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const pathname = usePathname();
  const appBase = platformLocaleBaseUrl(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href={withLocale(locale, "/")}
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {dict.brand}
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {[
            { label: dict.nav.findWork, items: getFilterItems(appBase, "find-work", dict) },
            { label: dict.nav.findTalent, items: getFilterItems(appBase, "find-talent", dict) },
          ].map((menu) => (
            <DropdownMenu key={menu.label}>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground">
                {menu.label}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>{menu.label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {menu.items.map((item) => (
                  <DropdownMenuItem key={`${menu.label}-${item.label}`} asChild>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}

          <Link
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            href={withLocale(locale, "/")}
          >
            {dict.nav.corridors}
          </Link>
          <Link
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            href={withLocale(locale, "/business")}
          >
            {dict.nav.forBusiness}
          </Link>
          <a
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            href={`${appBase}/pricing`}
            target="_blank"
            rel="noreferrer"
          >
            {dict.nav.pricing}
          </a>
          <a
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            href={`${appBase}/about`}
            target="_blank"
            rel="noreferrer"
          >
            {dict.nav.about}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground">
              <Globe2 className="h-4 w-4" />
              {localeLabels[locale]}
              <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-24">
              {locales.map((lang) => (
                <DropdownMenuItem key={lang} asChild>
                  <Link href={localizePath(pathname, lang)}>{localeLabels[lang]}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="hidden h-10 rounded-xl px-5 sm:inline-flex">
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer">
              {dict.nav.getStarted}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
