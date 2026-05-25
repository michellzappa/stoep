import { TopBar, PageHeader } from "../components/Nav";
import { AppTopBar } from "../components/PhoneChrome";
import { PhoneFrame } from "../components/PhoneFrame";
import { CivicItem, RoleTag, ScaleRail, ThemePill } from "../components/CivicUI";
import { T } from "../lib/i18n";

function SignalBar({ label, value }: { label: React.ReactNode; value: string }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-[11px] text-[#6b6658]">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#efece4]">
        <div className="h-full rounded-full bg-[var(--color-uitwijken)]" style={{ width: value }} />
      </div>
    </div>
  );
}

export default function ThemeViewMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={<T nl="Mock 02 · thematische community" en="Mock 02 · thematic community" />}
        title={<T nl="Themaweergave — zorg op meerdere schalen" en="Theme view — care across scales" />}
        subtitle={
          <T
            nl="Dezelfde plek kan vanuit veel onderwerpen worden bekeken. Hier laat Uitwijken.nl zien hoe een breed thema zoals zorg bewonerssignalen, gemeentebeleid, events en lokale diensten verbindt."
            en="The same place can be viewed through many subjects. Here Uitwijken.nl shows how a broad theme like care connects resident signals, municipal policy, events, and local services."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 flex gap-10 flex-wrap">
        <PhoneFrame
          title={<T nl="Thema" en="Theme" />}
          caption={<T nl="Zorg · Indische Buurt" en="Care · Indische Buurt" />}
          annot={
            <T
              nl="AI kan helpen clusteren, maar het productdoel blijft civic: betekenisvolle onderwerpen op de juiste schaal."
              en="AI can help cluster, but the product goal stays civic: meaningful subjects at the right scale."
            />
          }
        >
          <AppTopBar left={<T nl="Kaart" en="Map" />} center={<T nl="Zorg" en="Care" />} right={<span>⋯</span>} />
          <ScaleRail active="buurt" />
          <div className="px-4 py-3 border-b border-[#ececec] flex gap-2 overflow-x-auto">
            <ThemePill label={<T nl="Mantelzorg" en="Informal care" />} active />
            <ThemePill label={<T nl="Eenzaamheid" en="Loneliness" />} active />
            <ThemePill label={<T nl="Jeugd" en="Youth" />} />
          </div>
          <div className="px-4 py-4 border-b border-[#ececec]">
            <div className="text-[10px] uppercase tracking-widest text-[#6b6658]">
              <T nl="Samengevat uit 42 signalen" en="Summarized from 42 signals" />
            </div>
            <div className="mt-1 font-serif italic text-[22px] leading-tight">
              <T nl="Zorgvragen zijn vooral straat- en buurtgebonden." en="Care needs are mostly street and neighborhood-bound." />
            </div>
            <div className="mt-3 space-y-3">
              <SignalBar label={<T nl="Ouderen zoeken praktische hulp" en="Older residents need practical help" />} value="72%" />
              <SignalBar label={<T nl="Meer ontmoetingsplekken gewenst" en="More meeting places requested" />} value="58%" />
              <SignalBar label={<T nl="Onduidelijkheid over voorzieningen" en="Services are hard to understand" />} value="46%" />
            </div>
          </div>
          <div className="space-y-2 bg-[#fafaf7] px-4 py-4">
            <CivicItem
              role="resident"
              title={<T nl="Burenhulp gevraagd rond Balistraat" en="Neighbor help requested around Balistraat" />}
              meta={<T nl="Straat · 11 bewoners volgen dit" en="Street · 11 residents follow this" />}
              body={<T nl="Boodschappen, bezoek, kleine klussen." en="Groceries, visits, small tasks." />}
            />
            <CivicItem
              role="government"
              title={<T nl="Gemeente vraagt feedback op zorgpunt Oost" en="City asks feedback on Care Point Oost" />}
              meta={<T nl="Buurt · vragenlijst open" en="Neighborhood · questionnaire open" />}
            />
            <CivicItem
              role="entrepreneur"
              title={<T nl="Apotheek organiseert inloopmiddag" en="Pharmacy hosts walk-in afternoon" />}
              meta={<T nl="Ondernemer · vrijdag 14:00" en="Entrepreneur · Friday 14:00" />}
            />
          </div>
        </PhoneFrame>

        <div className="max-w-md pt-3">
          <div className="text-xs uppercase tracking-widest text-[var(--color-uitwijken)] mb-3">
            <T nl="Rollen rond hetzelfde thema" en="Roles around the same theme" />
          </div>
          <div className="space-y-3">
            <div className="rounded-lg border border-[#e6e2d6] bg-white p-4">
              <RoleTag role="resident" />
              <p className="mt-3 text-[14px] leading-relaxed">
                <T nl="Bewoners brengen lived experience in: waar is hulp nodig, wat werkt niet, wie wordt gemist?" en="Residents bring lived experience: where is help needed, what is not working, who is being missed?" />
              </p>
            </div>
            <div className="rounded-lg border border-[#e6e2d6] bg-white p-4">
              <RoleTag role="government" />
              <p className="mt-3 text-[14px] leading-relaxed">
                <T nl="Overheid brengt plannen, voorzieningen, budgetten en formele vragen in." en="Government brings plans, services, budgets, and formal questions." />
              </p>
            </div>
            <div className="rounded-lg border border-[#e6e2d6] bg-white p-4">
              <RoleTag role="entrepreneur" />
              <p className="mt-3 text-[14px] leading-relaxed">
                <T nl="Ondernemers brengen ruimtes, diensten en praktische capaciteit in." en="Entrepreneurs bring spaces, services, and practical capacity." />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
