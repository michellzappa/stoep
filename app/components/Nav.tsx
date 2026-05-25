"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangToggle, T } from "../lib/i18n";

type NavLink = {
  href: string;
  nl: string;
  en: string;
  prefix?: boolean;
};

const NAV_LINKS: readonly NavLink[] = [
  { href: "/map", nl: "Kaart", en: "Map" },
  { href: "/themes", nl: "Thema", en: "Theme" },
  { href: "/vragen", nl: "Vragen", en: "Questions" },
  { href: "/events", nl: "Events", en: "Events" },
  { href: "/inbox", nl: "Inbox", en: "Inbox" },
  { href: "/governance", nl: "Governance", en: "Governance" },
  { href: "/docs", nl: "Wiki", en: "Wiki", prefix: true },
];

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
          <span className="w-6 h-6 rounded-md bg-[var(--color-uitwijken)] inline-block" />
          <span className="font-serif italic text-xl">Uitwijken.nl</span>
          <span className="text-xs uppercase tracking-widest text-[#6b6658] ml-2">
            civic layer · v0.3
          </span>
        </Link>
        <div className="flex items-center gap-3 text-sm flex-wrap justify-end">
          {NAV_LINKS.map(({ href, nl, en, prefix }) => {
            const active = isNavActive(pathname, href, prefix);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-semibold text-[var(--color-uitwijken)] underline underline-offset-4 decoration-[var(--color-uitwijken)]"
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
      <div className="text-xs uppercase tracking-widest text-[var(--color-uitwijken)] mb-2">
        {eyebrow}
      </div>
      <h1 className="font-serif italic text-4xl leading-tight mb-3">{title}</h1>
      <p className="max-w-2xl text-[15px] text-[#3b3a35] leading-relaxed">{subtitle}</p>
    </div>
  );
}
