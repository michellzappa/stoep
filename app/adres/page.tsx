import { TopBar, PageHeader } from "../components/Nav";
import { PhoneFrame } from "../components/PhoneFrame";
import { AppTopBar, TabBar } from "../components/PhoneChrome";
import { T } from "../lib/i18n";

function HistoryPhoto({
  year,
  caption,
  gradient,
}: {
  year: string;
  caption: React.ReactNode;
  gradient: string;
}) {
  return (
    <div className="shrink-0 w-48">
      <div className={`h-32 rounded-lg ${gradient} relative overflow-hidden`}>
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-[10px] px-2 py-1">
          {year}
        </div>
      </div>
      <div className="text-[11px] text-[#3b3a35] mt-1.5 leading-snug">{caption}</div>
    </div>
  );
}

function Fact({
  label,
  value,
  meta,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <div className="py-2 flex justify-between items-start gap-3">
      <div className="text-[12px] text-[#6b6658]">{label}</div>
      <div className="text-[12.5px] text-right">
        <div>{value}</div>
        {meta && <div className="text-[10px] text-[#6b6658]">{meta}</div>}
      </div>
    </div>
  );
}

export default function AdresMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={
          <T
            nl="Mock 04 · Javastraat 143 · adres-pagina"
            en="Mock 04 · Javastraat 143 · address page"
          />
        }
        title={
          <T
            nl="Straatgeschiedenis — elk adres is een klein museum"
            en="Street history — every address is a small museum"
          />
        }
        subtitle={
          <T
            nl="Adres-pagina's zijn geen social feature; ze zijn de rooted-in-place laag die Nextdoor structureel niet kan matchen. Stadsarchief, BAG, vergunningenregister, bomenregister, monumentenlijst — gecombineerd tot één pagina waar 'wat was hier in 1935?' een klik is in plaats van een post."
            en="Address pages aren't a social feature; they're the rooted-in-place layer Nextdoor structurally can't match. Stadsarchief, BAG (address registry), permit register, tree register, monument list — combined into one page where 'what was here in 1935?' is a click, not a post."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 flex gap-10 flex-wrap">
        <PhoneFrame
          title={<T nl="Adres" en="Address" />}
          caption={
            <T
              nl="Javastraat 143 — scroll-pagina"
              en="Javastraat 143 — scrollable page"
            />
          }
          annot={
            <T
              nl="Foto's doen het meeste werk. De facts eronder zijn BAG/BGT/monument-data — gratis content per adres in Amsterdam. Buur-bijdragen (onderaan) maken er ook een participatieprimitief van."
              en="Photos do most of the work. The facts below come from BAG/BGT/monument data — free content per address in Amsterdam. Neighbor contributions (bottom) make it a participation primitive too."
            />
          }
        >
          <AppTopBar left={<span>􀆉</span>} center="Javastraat 143" right={<span>􀋧</span>} />

          <div className="relative">
            <div className="h-44 bg-gradient-to-br from-[#c4b492] via-[#8c7a56] to-[#4a3d2a]" />
            <div className="absolute top-3 left-3 chip chip-ghost">
              􀥞 <T nl="Gemeentelijk monument" en="Municipal monument" />
            </div>
            <div className="absolute bottom-3 left-3 text-white text-[11px] bg-black/40 px-2 py-1 rounded">
              <T
                nl="Huidig · 2024 · foto: Google Street View"
                en="Current · 2024 · photo: Google Street View"
              />
            </div>
          </div>

          <div className="px-4 py-4 border-b border-[#ececec]">
            <div className="text-[10px] uppercase tracking-widest text-[var(--color-stoep)]">
              <T nl="Adres" en="Address" />
            </div>
            <div className="font-serif italic text-[22px] leading-tight">Javastraat 143</div>
            <div className="text-[12px] text-[#6b6658] mt-1">
              <T
                nl="Indische Buurt · Stadsdeel Oost · 1094 HC"
                en="Indische Buurt · Oost district · 1094 HC"
              />
            </div>
          </div>

          <div className="px-4 py-3 border-b border-[#ececec]">
            <Fact label={<T nl="Bouwjaar" en="Build year" />} value="1909" meta="BAG" />
            <Fact
              label={<T nl="Type" en="Type" />}
              value={<T nl="Woonhuis · 4 lagen" en="Residential · 4 floors" />}
            />
            <Fact
              label={<T nl="Oppervlakte (woningen)" en="Area (per unit)" />}
              value="72 m² · 84 m² · 68 m²"
              meta="BAG"
            />
            <Fact
              label={<T nl="Monument" en="Monument" />}
              value={<T nl="Gemeentelijk" en="Municipal" />}
              meta={<T nl="nr. OAM-2011-0742" en="no. OAM-2011-0742" />}
            />
            <Fact
              label={<T nl="Energie" en="Energy" />}
              value={<T nl="Label D" en="Label D" />}
              meta="RVO · 2019"
            />
          </div>

          <div className="px-4 py-4 border-b border-[#ececec]">
            <div className="font-serif italic text-[15px] mb-2">
              <T nl="Door de jaren" en="Through the years" />
            </div>
            <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2">
              <HistoryPhoto
                year="1912"
                gradient="bg-gradient-to-br from-[#d4c7ab] to-[#8a7956]"
                caption={
                  <T
                    nl="Nieuwbouw, 3 jaar oud. Hoekwoning met kruidenierswinkel op nr. 141."
                    en="New build, 3 years old. Corner house with grocer at no. 141."
                  />
                }
              />
              <HistoryPhoto
                year="1935"
                gradient="bg-gradient-to-br from-[#b8a988] to-[#5d4f35]"
                caption={
                  <T
                    nl="Straatbeeld richting Molukkenstraat. Melkman met paard-en-wagen zichtbaar."
                    en="Street view toward Molukkenstraat. Milkman with horse-and-wagon visible."
                  />
                }
              />
              <HistoryPhoto
                year="1962"
                gradient="bg-gradient-to-br from-[#9e8e6b] to-[#4a3f2a]"
                caption={
                  <T
                    nl="Ingrijpende gevelschildering. Slagerij op nr. 74 (nu Bakkerij Anatolia)."
                    en="Major façade repaint. Butcher at no. 74 (now Bakery Anatolia)."
                  />
                }
              />
              <HistoryPhoto
                year="1988"
                gradient="bg-gradient-to-br from-[#c4a878] to-[#6b5030]"
                caption={
                  <T
                    nl="Renovatie-project woningbouwvereniging. Kozijnen vernieuwd."
                    en="Housing-association renovation project. Window frames replaced."
                  />
                }
              />
              <HistoryPhoto
                year="2011"
                gradient="bg-gradient-to-br from-[#a39474] to-[#5d4f35]"
                caption={
                  <T
                    nl="Monumentstatus toegekend. Foto door Stadsarchief bij inspectie."
                    en="Monument status granted. Photo by city archive during inspection."
                  />
                }
              />
            </div>
            <div className="text-[11px] text-[#6b6658] mt-2">
              <T
                nl="Bron: Stadsarchief Amsterdam · publieke collectie · CC-BY"
                en="Source: City Archive Amsterdam · public collection · CC-BY"
              />
            </div>
          </div>

          <div className="px-4 py-4 border-b border-[#ececec]">
            <div className="font-serif italic text-[15px] mb-2">
              <T nl="Vergunning-historie" en="Permit history" />
            </div>
            <div className="space-y-2 text-[12.5px]">
              <div>
                <div className="font-medium">
                  <T nl="Dakkapel verleend · 2018" en="Dormer granted · 2018" />
                </div>
                <div className="text-[10px] text-[#6b6658]">OLO-2018-09843</div>
              </div>
              <div>
                <div className="font-medium">
                  <T
                    nl="Gevelreiniging · 2011 (monument)"
                    en="Façade cleaning · 2011 (monument)"
                  />
                </div>
                <div className="text-[10px] text-[#6b6658]">OLO-2011-0742</div>
              </div>
              <div>
                <div className="font-medium">
                  <T
                    nl="Kozijnvervanging · 1988"
                    en="Window frame replacement · 1988"
                  />
                </div>
                <div className="text-[10px] text-[#6b6658]">
                  <T nl="Historisch register" en="Historic register" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 border-b border-[#ececec]">
            <div className="font-serif italic text-[15px] mb-2">
              <T nl="Op de stoep" en="On the sidewalk" />
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-14 h-14 rounded-lg bg-[#dfe6d5] flex items-center justify-center text-2xl text-[#4a6b3a]">
                􁒊
              </div>
              <div className="text-[12.5px]">
                <div className="font-medium">
                  <T
                    nl="Plataan (Platanus × hispanica)"
                    en="Plane tree (Platanus × hispanica)"
                  />
                </div>
                <div className="text-[#6b6658] text-[11px] mt-0.5">
                  <T
                    nl="Geplant 1953 · omtrek 214 cm · ID boom 06-JAV-143"
                    en="Planted 1953 · circumference 214 cm · tree ID 06-JAV-143"
                  />
                </div>
                <button className="text-[11px] text-[var(--color-civic)] underline mt-1">
                  <T nl="Melding voor deze boom →" en="Report about this tree →" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 bg-[#fafaf7]">
            <div className="font-serif italic text-[15px] mb-2">
              <T nl="Bijdragen van buren" en="Contributions from neighbors" />
            </div>
            <div className="text-[12.5px] text-[#3b3a35] leading-relaxed">
              <div className="border-l-2 border-[var(--color-stoep)] pl-3 mb-3">
                <div className="text-[11px] text-[#6b6658] mb-1">
                  <T
                    nl="Wim de J. · woont hier sinds 1984"
                    en="Wim de J. · lives here since 1984"
                  />
                </div>
                <T
                  nl="Op nr. 141 zat een kruidenier tot begin jaren '80 (de Boer). Mijn moeder haalde daar de boodschappen, zij kende alle buren bij naam."
                  en="At no. 141 there was a grocer until the early '80s (de Boer). My mother did her shopping there and knew every neighbor by name."
                />
              </div>
              <div className="border-l-2 border-[var(--color-stoep)] pl-3">
                <div className="text-[11px] text-[#6b6658] mb-1">
                  <T
                    nl="Anna P. · oud-bewoner · 1978–2003"
                    en="Anna P. · former resident · 1978–2003"
                  />
                </div>
                <T
                  nl="Foto uit 1988 klopt — de kozijnen zijn toen vervangen door woningbouwvereniging Onze Woning. Voordien donkergroen, daarna wit."
                  en="1988 photo is accurate — the frames were replaced that year by housing association Onze Woning. Dark green before, white after."
                />
              </div>
            </div>
            <button className="mt-3 text-[12px] font-semibold text-[var(--color-stoep)] underline">
              􀯻{" "}
              <T
                nl="Deel je verhaal over dit adres"
                en="Share your story about this address"
              />
            </button>
          </div>

          <div className="h-24" />
          <TabBar active="buurt" />
        </PhoneFrame>

        <div className="max-w-sm space-y-4 text-[14px] leading-relaxed text-[#3b3a35] pt-2">
          <h3 className="font-serif italic text-xl text-[var(--color-ink)]">
            <T nl="Waarom adres-pagina's werken" en="Why address pages work" />
          </h3>
          <p>
            <strong>
              <T nl="Zero-effort content." en="Zero-effort content." />
            </strong>{" "}
            <T
              nl="Elk adres in Amsterdam heeft uit de doos al Stadsarchief-foto's, BAG-data, monumentstatus, boomregistratie, vergunning-historie. Eén integratie-laag vult 150.000 pagina's tegelijk."
              en="Every address in Amsterdam comes pre-populated with city-archive photos, BAG data, monument status, tree registration, permit history. One integration layer fills 150,000 pages at once."
            />
          </p>
          <p>
            <strong>
              <T nl="Invitation, geen demand." en="Invitation, not demand." />
            </strong>{" "}
            <T
              nl="De buur-bijdragen-sectie onderaan staat er juist omdat de pagina zonder bijdragen al vol is. Ouderen met verhalen (Wim, 40 jaar woonachtig) zien een reden om iets te delen, jongeren een reden om te lezen."
              en="The neighbor-contributions section at the bottom exists precisely because the page is already full without them. Elders with stories (Wim, 40 years resident) see a reason to share; younger people, a reason to read."
            />
          </p>
          <p>
            <strong>
              <T nl="Discovery-primitief." en="Discovery primitive." />
            </strong>{" "}
            <T
              nl="Vanuit de feed, melding-locatie, digest-foto — elk pad leidt naar een adres-pagina. De pagina is een rustpunt dat de plek "
              en="From the feed, report location, digest photo — every path leads to an address page. The page is a quiet anchor that makes the location feel "
            />
            <em>
              <T nl="geworteld" en="rooted" />
            </em>{" "}
            <T
              nl="maakt in plaats van performatief."
              en="rather than performative."
            />
          </p>
          <div className="border-t border-dashed border-[#d9d3c3] pt-4 mt-4 annot">
            <T
              nl="Te ontwerpen: moderatie van bijdragen (feitelijke correcties vs. herinneringen), en DV-privacy (bewoners-naam-vermelding opt-in, nooit default)."
              en="Still to design: moderation of contributions (factual corrections vs. memories), and DV privacy (resident-name mention opt-in, never default)."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
