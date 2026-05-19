import Link from "next/link";
import { TopBar, PageHeader } from "./components/Nav";
import { T } from "./lib/i18n";

type Mock = {
  slug: string;
  number: string;
  title: { nl: string; en: string };
  persona: { nl: string; en: string };
  summary: { nl: string; en: string };
  tests: { nl: string; en: string };
};

const mocks: Mock[] = [
  {
    slug: "feed",
    number: "01",
    title: { nl: "Buurt-feed", en: "Neighborhood feed" },
    persona: { nl: "Aisha · maandagavond", en: "Aisha · Monday evening" },
    summary: {
      nl: "Chronologisch, proximity-scoped. Resident-posts en civic items door elkaar. Geen engagement-ranking, geen 'For You'.",
      en: "Chronological, proximity-scoped. Resident posts and civic items interleaved. No engagement-ranking, no 'For You'.",
    },
    tests: {
      nl: "Daily-use primitive · bedrijfspaspoort-markering · buurtbudget inline",
      en: "Daily-use primitive · business-passport marking · neighborhood budget inline",
    },
  },
  {
    slug: "melding",
    number: "02",
    title: { nl: "Melding maken", en: "Report an issue" },
    persona: { nl: "Aisha · woensdagochtend", en: "Aisha · Wednesday morning" },
    summary: {
      nl: "Long-press op de kaart → foto → categorie → verzonden naar Signalen. De melding verschijnt direct in de feed, zichtbaar voor buren.",
      en: "Long-press on the map → photo → category → submitted to Signalen. The report lands immediately in the feed, visible to neighbors.",
    },
    tests: {
      nl: "Civic-interface laag · read-and-write over gemeente-data · Signalen integratie",
      en: "Civic-interface layer · read-and-write over municipal data · Signalen integration",
    },
  },
  {
    slug: "digest",
    number: "03",
    title: { nl: "Wekelijkse buurt-digest", en: "Weekly neighborhood digest" },
    persona: { nl: "Voor iedereen · zaterdagochtend", en: "For everyone · Saturday morning" },
    summary: {
      nl: "Machine-gegenereerd uit open data. Meldingen opgelost, nieuwe vergunningen, evenementen, één Stadsarchief-foto, één buurtbudget-voorstel.",
      en: "Machine-generated from open data. Reports resolved, new permits, events, one Stadsarchief photo, one neighborhood-budget proposal.",
    },
    tests: {
      nl: "Reden om de app te openen · identiek aan print-versie op buurthuis-prikbord",
      en: "Reason to open the app · identical to the print version on the community-center noticeboard",
    },
  },
  {
    slug: "adres",
    number: "04",
    title: { nl: "Straatgeschiedenis", en: "Street history" },
    persona: { nl: "Per adres · Javastraat 143", en: "Per address · Javastraat 143" },
    summary: {
      nl: "Stadsarchief-foto's, vergunning-historie, bouwjaar, monumentstatus, boom van de straat. Ambient context die de plek rooted maakt.",
      en: "Stadsarchief photos, permit history, build year, monument status, street tree. Ambient context that roots the platform in place.",
    },
    tests: {
      nl: "Delight-laag · onreproduceerbaar voor Nextdoor · laag-effort voor hoge engagement",
      en: "Delight layer · not reproducible by Nextdoor · low-effort for high engagement",
    },
  },
  {
    slug: "onboarding",
    number: "05",
    title: {
      nl: "Buurtpaspoort — getrapte verificatie",
      en: "Neighborhood passport — tiered verification",
    },
    persona: {
      nl: "Lena · 4 maanden in NL, shortstay",
      en: "Lena · 4 months in NL, short-stay",
    },
    summary: {
      nl: "Drie tiers: read-only bezoeker → vouched (2 buren) → BAG-geverifieerd. Niemand wordt uitgesloten door bureaucratische vorm.",
      en: "Three tiers: read-only visitor → vouched (2 neighbors) → BAG-verified. Nobody is excluded by bureaucratic form.",
    },
    tests: {
      nl: "Identity edge-cases · DV, shortstay, huurders zonder BAG · welcome zonder trust-dilutie",
      en: "Identity edge cases · DV survivors, short-stay, tenants without BAG · welcoming without trust dilution",
    },
  },
  {
    slug: "moderatie",
    number: "06",
    title: { nl: "Buurtconnector-dashboard", en: "Neighborhood-connector dashboard" },
    persona: { nl: "Farida · dagelijks", en: "Farida · daily" },
    summary: {
      nl: "Moderation queue, council-appeals, outreach-lijst. Desktop. Zichtbare, betaalde, roulerende civic rol — geen Trust & Safety team.",
      en: "Moderation queue, council appeals, outreach list. Desktop. Visible, paid, rotating civic role — no Trust & Safety team.",
    },
    tests: {
      nl: "Moderation-as-civic-role · sustainability · governance zichtbaar",
      en: "Moderation-as-civic-role · sustainability · governance visible",
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={<T nl="Pilot · Indische Buurt · 2026" en="Pilot · Indische Buurt · 2026" />}
        title={
          <T
            nl="Stoep — zes mock-schermen om mee te denken"
            en="Stoep — six mock screens to think with"
          />
        }
        subtitle={
          <T
            nl="Geen plan, geen build. Zes schermen die de primitieven concreet maken: wat een bewoner ziet, wat een buurtconnector doet, hoe de civic-laag aanvoelt. Alle teksten zijn tweetalig (NL/EN) — wissel met de toggle rechtsboven. Gebaseerd op de concepten-notities in ~/obsidian/Stoep."
            en="Not a plan, not a build. Six screens that make the primitives concrete: what a resident sees, what a neighborhood-connector does, how the civic layer feels. All copy is bilingual (NL/EN) — toggle top-right. Based on the concept notes in ~/obsidian/Stoep."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mocks.map((m) => (
            <Link
              key={m.slug}
              href={`/${m.slug}`}
              className="group border border-[#e6e2d6] rounded-2xl p-6 bg-white hover:bg-[var(--color-stoep-soft)]/40 transition"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-serif italic text-2xl text-[var(--color-stoep)]">
                  {m.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#6b6658]">
                  <T {...m.persona} />
                </span>
              </div>
              <h2 className="font-serif italic text-2xl mb-2 group-hover:underline">
                <T {...m.title} />
              </h2>
              <p className="text-[14px] text-[#3b3a35] leading-relaxed mb-4">
                <T {...m.summary} />
              </p>
              <div className="text-[11px] uppercase tracking-wider text-[#6b6658] border-t border-dashed border-[#d9d3c3] pt-3">
                <T nl="Stress-test — " en="Stress-tests — " />
                <T {...m.tests} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-dashed border-[#d9d3c3] pt-6 text-[13px] text-[#6b6658] leading-relaxed max-w-3xl">
          <p className="mb-2">
            <strong className="text-[var(--color-ink)]">
              <T nl="Leesvolgorde voor een pitch-gesprek:" en="Reading order for a pitch meeting:" />
            </strong>{" "}
            <T
              nl="01 → 03 → 04 → 02 → 05 → 06. Begin bij de dagelijkse textuur, laat dan de civic-laag zien, daarna governance."
              en="01 → 03 → 04 → 02 → 05 → 06. Start with daily texture, then the civic layer, then governance."
            />
          </p>
          <p>
            <strong className="text-[var(--color-ink)]">
              <T nl="Wat dit niet is:" en="What this is not:" />
            </strong>{" "}
            <T
              nl="een ontwerp. De intent is om aannames tastbaar te maken zodat ze uit elkaar geplukt kunnen worden tijdens co-design. Alle content is plausibel-maar-verzonnen."
              en="a design. The intent is to make assumptions tangible so they can be picked apart in co-design. All content is plausible-but-invented."
            />
          </p>
        </div>
      </div>
    </div>
  );
}
