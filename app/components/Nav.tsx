"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangToggle, T } from "../lib/i18n";

const NAV_LINKS = [
  { href: "/feed", nl: "Feed", en: "Feed" },
  { href: "/melding", nl: "Melding", en: "Report" },
  { href: "/digest", nl: "Digest", en: "Digest" },
  { href: "/adres", nl: "Adres", en: "Address" },
  { href: "/onboarding", nl: "Onboarding", en: "Onboarding" },
  { href: "/moderatie", nl: "Moderatie", en: "Moderation" },
  { href: "/docs", nl: "Wiki", en: "Wiki", prefix: true },
] as const;

function isNavActive(pathname: string, href: string, prefix?: boolean) {
  if (prefix) return pathname === href || pathname.startsWith(`${href}/`);
  return pathname === href;
}

export function TopBar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-20 bg-[var(--color-paper)]/90 backdrop-blur border-b border-[#e6e2d6]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between flex-wrap gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[var(--color-stoep)] inline-block" />
          <span className="font-serif italic text-xl">Stoep</span>
          <span className="text-xs uppercase tracking-widest text-[#6b6658] ml-2">
            wireframes · v0.2
          </span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {NAV_LINKS.map(({ href, nl, en, prefix }) => {
            const active = isNavActive(pathname, href, prefix);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-semibold text-[var(--color-stoep)] underline underline-offset-4 decoration-[var(--color-stoep)]"
                    : "text-[#3b3a35] hover:underline"
                }
              >
                <T nl={nl} en={en} />
              </Link>
            );
          })}
          <LangToggle />
        </div>
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
      <div className="text-xs uppercase tracking-widest text-[var(--color-stoep)] mb-2">
        {eyebrow}
      </div>
      <h1 className="font-serif italic text-4xl leading-tight mb-3">{title}</h1>
      <p className="max-w-2xl text-[15px] text-[#3b3a35] leading-relaxed">{subtitle}</p>
    </div>
  );
}
