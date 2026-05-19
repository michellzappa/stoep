import Link from "next/link";
import { DOC_GROUPS } from "./lib";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-16 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">
      <aside className="text-sm">
        <div className="sticky top-20">
          <Link
            href="/docs"
            className="block text-xs uppercase tracking-widest text-[var(--color-stoep)] mb-4"
          >
            Stoep · wiki
          </Link>
          {DOC_GROUPS.map((g) => (
            <div key={g.label} className="mb-5">
              <div className="text-[11px] uppercase tracking-wider text-[#6b6658] mb-2">
                {g.label}
              </div>
              <ul className="space-y-1">
                {g.items.map((i) => (
                  <li key={i.slug}>
                    <Link
                      href={`/docs/${i.slug}`}
                      className="text-[#1f1e1a] hover:text-[var(--color-stoep)] hover:underline"
                    >
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-6 text-[11px] text-[#6b6658] leading-relaxed">
            Live-read from <code>~/obsidian/Stoep/</code>. Edits in Obsidian appear on refresh.
          </div>
        </div>
      </aside>
      <main className="min-w-0">{children}</main>
    </div>
  );
}
