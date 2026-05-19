import Link from "next/link";
import { LangToggle, T } from "../lib/i18n";

export function TopBar() {
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
          <Link href="/feed" className="hover:underline">
            <T nl="Feed" en="Feed" />
          </Link>
          <Link href="/melding" className="hover:underline">
            <T nl="Melding" en="Report" />
          </Link>
          <Link href="/digest" className="hover:underline">
            <T nl="Digest" en="Digest" />
          </Link>
          <Link href="/adres" className="hover:underline">
            <T nl="Adres" en="Address" />
          </Link>
          <Link href="/onboarding" className="hover:underline">
            <T nl="Onboarding" en="Onboarding" />
          </Link>
          <Link href="/moderatie" className="hover:underline">
            <T nl="Moderatie" en="Moderation" />
          </Link>
          <Link href="/docs" className="hover:underline">
            <T nl="Wiki" en="Wiki" />
          </Link>
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
