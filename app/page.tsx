import Link from "next/link";
import { TopBar, PageHeader } from "./components/Nav";
import { T } from "./lib/i18n";

type Mock = {
  slug: string;
  number: string;
  title: { nl: string; en: string };
  lens: { nl: string; en: string };
  summary: { nl: string; en: string };
  proves: { nl: string; en: string };
};

const mocks: Mock[] = [
  {
    slug: "map",
    number: "01",
    title: { nl: "Kaartlens", en: "Map lens" },
    lens: { nl: "Locatie + thema", en: "Location + theme" },
    summary: {
      nl: "De hoofdinteractie: zoom van straat naar buurt naar stad en filter civic objecten op thema, rol en urgentie.",
      en: "The main interaction: zoom from street to neighborhood to city and filter civic objects by theme, role, and urgency.",
    },
    proves: {
      nl: "Cascading geography · geen platte groep · kaart als ruggengraat",
      en: "Cascading geography · not a flat group · map as backbone",
    },
  },
  {
    slug: "themes",
    number: "02",
    title: { nl: "Themaweergave", en: "Theme view" },
    lens: { nl: "Zorg in de Indische Buurt", en: "Care in the Indische Buurt" },
    summary: {
      nl: "Een thema door meerdere schaalniveaus heen: bewonerssignalen, plannen, events, diensten en ondernemersbijdragen.",
      en: "One theme across multiple scales: resident signals, plans, events, services, and entrepreneur contributions.",
    },
    proves: {
      nl: "Subjectmodel · AI-clustering · rollen in context",
      en: "Subject model · AI clustering · roles in context",
    },
  },
  {
    slug: "vragen",
    number: "03",
    title: { nl: "Vragen & budget", en: "Questions & budget" },
    lens: { nl: "€300k buurtbudget", en: "€300k neighborhood budget" },
    summary: {
      nl: "Een vragenlijst die bewoners helpt prioriteren: welk thema, welke plek, welke actie, welk budget.",
      en: "A questionnaire that helps residents prioritize: which theme, which place, which action, which budget.",
    },
    proves: {
      nl: "Democratisch mechanisme · gestructureerde feedback · besluitvorming",
      en: "Democratic mechanism · structured feedback · decision-making",
    },
  },
  {
    slug: "events",
    number: "04",
    title: { nl: "Events & actie", en: "Events & action" },
    lens: { nl: "Van digitaal naar fysiek", en: "Digital to physical" },
    summary: {
      nl: "Lokale events als eerste reden om terug te komen, gekoppeld aan thema's, plekken, organisaties en acties.",
      en: "Local events as the first reason to return, connected to themes, places, organizations, and actions.",
    },
    proves: {
      nl: "Adoptiehaak · fysieke community · ondernemers en voorzieningen",
      en: "Adoption hook · physical community · entrepreneurs and facilities",
    },
  },
  {
    slug: "inbox",
    number: "05",
    title: { nl: "Civic inbox", en: "Civic inbox" },
    lens: { nl: "Push in plaats van zoeken", en: "Push instead of search" },
    summary: {
      nl: "Vergunningen, plannen, consultaties en open data worden relevant gemaakt op basis van jouw locaties en thema's.",
      en: "Permits, plans, consultations, and open data become relevant based on your locations and themes.",
    },
    proves: {
      nl: "Overheidsinformatie · context · open data als productlaag",
      en: "Government information · context · open data as product layer",
    },
  },
  {
    slug: "governance",
    number: "06",
    title: { nl: "Rollen & governance", en: "Roles & governance" },
    lens: { nl: "Van, voor en door samenleving", en: "From, for, and by society" },
    summary: {
      nl: "Laat zien hoe bewoners, overheid en ondernemers deelnemen zonder dat de stad of een bedrijf eigenaar wordt.",
      en: "Shows how residents, government, and entrepreneurs participate without the city or a company owning the platform.",
    },
    proves: {
      nl: "Drie rollen · formeel/informeel · moderatiebord · eigenaarschap",
      en: "Three roles · formal/informal · moderation board · ownership",
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={<T nl="Amsterdam · 2026" en="Amsterdam · 2026" />}
        title={
          <T
            nl="Uitwijken.nl — society-owned civic layer"
            en="Uitwijken.nl — society-owned civic layer"
          />
        }
        subtitle={
          <T
            nl="Een proof-of-concept voor instant communities op basis van waar je bent en wat je belangrijk vindt. Geen nieuwe feed, maar een kaart- en themalaag waar bewoners, overheid en ondernemers samen lokale informatie, vragen, events, diensten en beslissingen kunnen organiseren."
            en="A proof-of-concept for instant communities based on where you are and what you care about. Not a new feed, but a map-and-theme layer where residents, government, and entrepreneurs organize local information, questions, events, services, and decisions."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mocks.map((m) => (
            <Link
              key={m.slug}
              href={`/${m.slug}`}
              className="group border border-[#e6e2d6] rounded-xl p-6 bg-white hover:bg-[var(--color-uitwijken-soft)]/35 transition"
            >
              <div className="flex items-baseline justify-between gap-3 mb-3">
                <span className="font-serif italic text-2xl text-[var(--color-uitwijken)]">
                  {m.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#6b6658] text-right">
                  <T {...m.lens} />
                </span>
              </div>
              <h2 className="font-serif italic text-2xl mb-2 group-hover:underline">
                <T {...m.title} />
              </h2>
              <p className="text-[14px] text-[#3b3a35] leading-relaxed mb-4">
                <T {...m.summary} />
              </p>
              <div className="text-[11px] uppercase tracking-wider text-[#6b6658] border-t border-dashed border-[#d9d3c3] pt-3">
                <T nl="Bewijst — " en="Proves — " />
                <T {...m.proves} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-dashed border-[#d9d3c3] pt-6 text-[13px] text-[#6b6658] leading-relaxed max-w-3xl">
          <p className="mb-2">
            <strong className="text-[var(--color-ink)]">
              <T nl="Pitchvolgorde:" en="Pitch order:" />
            </strong>{" "}
            <T
              nl="01 → 02 → 03 → 04 → 05 → 06. Begin met de ruggengraat, bewijs daarna thema's, besluitvorming, fysieke actie, civic informatie en eigenaarschap."
              en="01 → 02 → 03 → 04 → 05 → 06. Start with the backbone, then prove themes, decision-making, physical action, civic information, and ownership."
            />
          </p>
          <p>
            <strong className="text-[var(--color-ink)]">
              <T nl="Wat dit niet meer is:" en="What this no longer is:" />
            </strong>{" "}
            <T
              nl="een buurt-feed met gemeentelijke integraties. De feed kan later bestaan, maar de kern is nu de dynamische combinatie van locatie, thema, rollen en actie."
              en="a neighborhood feed with municipal integrations. A feed may exist later, but the core is now the dynamic combination of location, theme, roles, and action."
            />
          </p>
        </div>
      </div>
    </div>
  );
}
