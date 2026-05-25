import { TopBar, PageHeader } from "../components/Nav";
import { AppTopBar } from "../components/PhoneChrome";
import { PhoneFrame } from "../components/PhoneFrame";
import { CivicItem, ThemePill } from "../components/CivicUI";
import { T } from "../lib/i18n";

function InboxItem({
  source,
  title,
  meta,
  action,
}: {
  source: React.ReactNode;
  title: React.ReactNode;
  meta: React.ReactNode;
  action: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#e6e2d6] bg-white p-3">
      <div className="text-[10px] uppercase tracking-widest text-[var(--color-civic)]">{source}</div>
      <div className="mt-1 font-semibold text-[13px] leading-snug">{title}</div>
      <div className="mt-1 text-[11px] text-[#6b6658]">{meta}</div>
      <button className="mt-3 text-[12px] font-semibold text-[var(--color-civic)] underline underline-offset-2">
        {action} →
      </button>
    </div>
  );
}

export default function InboxMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={<T nl="Mock 05 · civic informatieflow" en="Mock 05 · civic information flow" />}
        title={<T nl="Civic inbox — push op locatie en thema" en="Civic inbox — push by location and theme" />}
        subtitle={
          <T
            nl="Uitwijken.nl moet de informatie die nu verspreid zit over websites, nieuwsbrieven, portalen en platformen contextualiseren. Niet als algoritmische feed, maar als publieke relevantielaag."
            en="Uitwijken.nl should contextualize information now scattered across websites, newsletters, portals, and platforms. Not as an algorithmic feed, but as a public relevance layer."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 flex gap-10 flex-wrap">
        <PhoneFrame
          title={<T nl="Inbox" en="Inbox" />}
          caption={<T nl="Relevantie op basis van jouw plekken en thema's" en="Relevance based on your places and themes" />}
          annot={
            <T
              nl="Dit is de push-shift: bewoners hoeven niet actief te zoeken naar plannen, vergunningen en consultaties die hen raken."
              en="This is the push shift: residents do not have to actively search for plans, permits, and consultations that affect them."
            />
          }
        >
          <AppTopBar left={<T nl="Filters" en="Filters" />} center={<T nl="Civic inbox" en="Civic inbox" />} right={<span>✓</span>} />
          <div className="px-4 py-3 border-b border-[#ececec]">
            <div className="text-[10px] uppercase tracking-widest text-[#6b6658] mb-2">
              <T nl="Je volgt" en="You follow" />
            </div>
            <div className="flex flex-wrap gap-2">
              <ThemePill label={<T nl="Javastraat" en="Javastraat" />} active />
              <ThemePill label={<T nl="Indische Buurt" en="Indische Buurt" />} active />
              <ThemePill label={<T nl="Zorg" en="Care" />} active />
              <ThemePill label={<T nl="Openbare ruimte" en="Public space" />} active />
            </div>
          </div>
          <div className="space-y-2 bg-[#fafaf7] px-4 py-4">
            <InboxItem
              source={<T nl="Omgevingsloket" en="Permits" />}
              title={<T nl="Terrasuitbreiding aangevraagd op Javastraat 112" en="Terrace expansion requested at Javastraat 112" />}
              meta={<T nl="Raakt jouw straat · bezwaar tot 26 juni" en="Affects your street · objection until 26 June" />}
              action={<T nl="Bekijk op kaart" en="View on map" />}
            />
            <InboxItem
              source={<T nl="Stadsdeel Oost" en="Oost district" />}
              title={<T nl="Conceptplan herinrichting Javaplein gepubliceerd" en="Draft plan for Javaplein redesign published" />}
              meta={<T nl="Openbare ruimte · feedback gevraagd" en="Public space · feedback requested" />}
              action={<T nl="Geef feedback" en="Give feedback" />}
            />
            <InboxItem
              source={<T nl="Evenementen" en="Events" />}
              title={<T nl="Zorg-inloop in buurthuis past bij jouw thema" en="Care walk-in at community center matches your theme" />}
              meta={<T nl="Vrijdag · 9 minuten lopen" en="Friday · 9 min walk" />}
              action={<T nl="Zet in agenda" en="Add to calendar" />}
            />
            <InboxItem
              source={<T nl="Buurtvraag" en="Area question" />}
              title={<T nl="Budgetvraag bijna quorum in jouw buurt" en="Budget question nearly reaches quorum in your neighborhood" />}
              meta={<T nl="216 reacties nodig · sluit vrijdag" en="216 responses needed · closes Friday" />}
              action={<T nl="Beantwoord" en="Answer" />}
            />
          </div>
        </PhoneFrame>

        <div className="max-w-md pt-3">
          <div className="text-xs uppercase tracking-widest text-[var(--color-uitwijken)] mb-3">
            <T nl="Publieke relevantie" en="Public relevance" />
          </div>
          <h2 className="font-serif italic text-3xl leading-tight mb-4">
            <T nl="Geen For You-feed, maar een civic inbox." en="Not a For You feed, but a civic inbox." />
          </h2>
          <p className="text-[15px] leading-relaxed text-[#3b3a35] mb-4">
            <T
              nl="De gebruiker controleert wat zichtbaar wordt door locaties en thema's te volgen. De stad kan informatie beter brengen, maar niet commercieel sturen."
              en="The user controls what appears by following locations and themes. The city can communicate better, but not commercially steer attention."
            />
          </p>
          <CivicItem
            role="government"
            title={<T nl="Overheid brengt plannen en vragen" en="Government brings plans and questions" />}
            meta={<T nl="Zichtbaar binnen relevante locatie en thema's" en="Visible within relevant locations and themes" />}
          />
        </div>
      </div>
    </div>
  );
}
