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
import { PLATFORM_URL } from "@/data/site-data";
import { localeLabels, locales, localizePath, type Locale, type SiteDictionary } from "@/lib/i18n";

function withLocale(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

const DEV_PLATFORM_BASE = process.env.NEXT_PUBLIC_DEV_PLATFORM_BASE;

function getDevFilterItems(type: "find-work" | "find-talent", dict: SiteDictionary) {
  const base = `${DEV_PLATFORM_BASE}/${type}`;
  return [
    { label: dict.nav.all, href: base },
    { label: dict.nav.africa, href: `${base}?country=africa` },
    { label: dict.nav.china, href: `${base}?country=china` },
    { label: dict.nav.germany, href: `${base}?country=germany` },
  ];
}

export function SiteHeader({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href={withLocale(locale, "/")} className="text-xl font-bold tracking-tight text-primary">
          Jobonic
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {[
            { label: dict.nav.findWork, items: getDevFilterItems("find-work", dict) },
            { label: dict.nav.findTalent, items: getDevFilterItems("find-talent", dict) },
          ].map((menu) => (
            <DropdownMenu key={menu.label}>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                {menu.label}
                <ChevronDown className="h-4 w-4" />
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

          <Link className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href={withLocale(locale, "/")}>{dict.nav.corridors}</Link>
          <Link className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href={withLocale(locale, "/business")}>{dict.nav.forBusiness}</Link>
          <a
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            href={`${DEV_PLATFORM_BASE}/pricing`}
            target="_blank"
            rel="noreferrer"
          >
            {dict.nav.pricing}
          </a>
          <a
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            href={`${DEV_PLATFORM_BASE}/about`}
            target="_blank"
            rel="noreferrer"
          >
            {dict.nav.about}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Globe2 className="h-4 w-4" />
              {localeLabels[locale]}
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-24">
              {locales.map((lang) => (
                <DropdownMenuItem key={lang} asChild>
                  <Link href={localizePath(pathname, lang)}>{localeLabels[lang]}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="rounded-full px-5">
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer">{dict.nav.getStarted}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
