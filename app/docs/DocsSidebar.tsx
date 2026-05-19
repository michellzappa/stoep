"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOC_GROUPS } from "./doc-groups";

function activeSlug(pathname: string): string | null {
  if (pathname === "/docs") return "readme";
  const match = pathname.match(/^\/docs\/([^/]+)/);
  return match?.[1] ?? null;
}

export function DocsSidebar() {
  const pathname = usePathname();
  const current = activeSlug(pathname);

  return (
    <aside className="text-sm">
      <div className="sticky top-20">
        <Link
          href="/docs"
          className={`block text-xs uppercase tracking-widest mb-4 ${
            current === "readme"
              ? "text-[var(--color-stoep)] font-semibold"
              : "text-[var(--color-stoep)]"
          }`}
        >
          Stoep · wiki
        </Link>
        {DOC_GROUPS.map((g) => {
          const groupActive = g.items.some((i) => i.slug === current);
          return (
            <div key={g.label} className="mb-5">
              <div
                className={`text-[11px] uppercase tracking-wider mb-2 ${
                  groupActive
                    ? "text-[var(--color-stoep)] font-semibold"
                    : "text-[#6b6658]"
                }`}
              >
                {g.label}
              </div>
              <ul className="space-y-1">
                {g.items.map((i) => {
                  const isActive = i.slug === current;
                  return (
                    <li key={i.slug}>
                      <Link
                        href={`/docs/${i.slug}`}
                        aria-current={isActive ? "page" : undefined}
                        className={`block py-0.5 pl-2 -ml-2 border-l-2 transition-colors ${
                          isActive
                            ? "border-[var(--color-stoep)] text-[var(--color-stoep)] font-semibold"
                            : "border-transparent text-[#1f1e1a] hover:text-[var(--color-stoep)] hover:underline"
                        }`}
                      >
                        {i.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="mt-6 text-[11px] text-[#6b6658] leading-relaxed">
          Live-read from <code>~/obsidian/Stoep/</code>. Edits in Obsidian appear on refresh.
        </div>
      </div>
    </aside>
  );
}
