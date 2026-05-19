import { TopBar, PageHeader } from "../components/Nav";
import { PhoneFrame } from "../components/PhoneFrame";
import { AppTopBar, TabBar } from "../components/PhoneChrome";
import { T } from "../lib/i18n";

function MapMock({ pin }: { pin?: { x: number; y: number; label?: React.ReactNode } }) {
  return (
    <div className="relative h-[340px] w-full bg-[#e9ddc9]/40 overflow-hidden">
      <svg viewBox="0 0 400 340" className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="streets" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d9d3c3" strokeWidth="1" />
          </pattern>
          <pattern id="blocks" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect x="8" y="8" width="44" height="44" fill="#f3ecd9" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="340" fill="url(#blocks)" />
        <rect width="400" height="340" fill="url(#streets)" />
        <rect x="140" y="110" width="110" height="90" rx="6" fill="#cfe0b8" opacity="0.7" />
        <text x="195" y="158" textAnchor="middle" fontSize="10" fill="#4a6b3a" fontStyle="italic">
          Speeltuin Javaplein
        </text>
        <text x="20" y="70" fontSize="9" fill="#7a3418" transform="rotate(-90 20 70)">
          Balistraat
        </text>
        <text x="300" y="30" fontSize="9" fill="#7a3418">
          Javastraat
        </text>
        <text x="80" y="280" fontSize="9" fill="#7a3418">
          Sumatrastraat
        </text>
        <path
          d="M 30 30 L 370 30 L 370 310 L 30 310 Z"
          fill="none"
          stroke="#b54a2a"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />
      </svg>
      {pin && (
        <div
          className="absolute"
          style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -100%)" }}
        >
          <div className="flex flex-col items-center">
            {pin.label && (
              <div className="bg-[var(--color-ink)] text-white text-[10px] px-2 py-1 rounded-md mb-1 whitespace-nowrap">
                {pin.label}
              </div>
            )}
            <div className="w-4 h-4 rounded-full bg-[var(--color-stoep)] border-2 border-white shadow-md" />
            <div className="w-[2px] h-3 bg-[var(--color-stoep)]" />
          </div>
        </div>
      )}
      <div className="absolute top-3 left-3 bg-white/90 text-[10px] px-2 py-1 rounded-md text-[#6b6658] border border-[#e6e2d6]">
        <T
          nl="Indische Buurt · buurtpolygoon"
          en="Indische Buurt · neighborhood polygon"
        />
      </div>
      <div className="absolute bottom-3 right-3 bg-white/90 text-[10px] px-2 py-1 rounded-md text-[#6b6658] border border-[#e6e2d6]">
        ©data.amsterdam · PDOK
      </div>
    </div>
  );
}

export default function MeldingMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={
          <T
            nl="Mock 02 · Aisha · woensdag 08:47"
            en="Mock 02 · Aisha · Wednesday 08:47"
          />
        }
        title={
          <T
            nl="Melding maken — read-and-write over Signalen"
            en="Report an issue — read-and-write over Signalen"
          />
        }
        subtitle={
          <T
            nl="Op weg naar school ziet Aisha een kapotte schommel. Drie stappen: long-press op de kaart (pin), foto + beschrijving, bevestiging. De melding gaat direct naar Signalen en verschijnt tegelijk in de buurt-feed. Geen dubbele registratie, geen ander portaal."
            en="Walking to school Aisha sees a broken swing. Three steps: long-press on the map (pin), photo + description, confirmation. The report goes straight to Signalen and simultaneously lands in the neighborhood feed. No double registration, no separate portal."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 flex gap-8 flex-wrap">
        {/* Step 1 */}
        <PhoneFrame
          title={<T nl="Kaart" en="Map" />}
          caption={<T nl="Step 1 — long-press op locatie" en="Step 1 — long-press on location" />}
          annot={
            <T
              nl="Kaart scopet naar buurt-polygoon. Long-press zet een pin. Geen zoekveld nodig voor 90% van meldingen — het zijn dingen die je ziet."
              en="Map scopes to the neighborhood polygon. Long-press drops a pin. No search field needed for 90% of reports — these are things you see."
            />
          }
        >
          <AppTopBar
            left={<T nl="Feed" en="Feed" />}
            center={<T nl="Kaart" en="Map" />}
            right={<span>􀊫</span>}
          />
          <MapMock pin={{ x: 48, y: 48, label: <T nl="Nieuwe melding" en="New report" /> }} />
          <div className="px-4 py-4">
            <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-2">
              <T nl="Recente meldingen in de buurt" en="Recent reports nearby" />
            </div>
            <div className="space-y-2 text-[12.5px]">
              <div className="flex justify-between">
                <span>
                  􀑂{" "}
                  <T
                    nl="Kapotte lantaarn · Borneostraat 44"
                    en="Broken streetlight · Borneostraat 44"
                  />
                </span>
                <span className="text-[#4a6b3a]">
                  <T nl="Opgelost" en="Resolved" />
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  􀑁{" "}
                  <T nl="Overvolle prullenbak · Javaplein" en="Overfull bin · Javaplein" />
                </span>
                <span className="text-[#b54a2a]">
                  <T nl="In behandeling" en="In progress" />
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  􀣮 <T nl="Graffiti · Celebesstraat 8" en="Graffiti · Celebesstraat 8" />
                </span>
                <span className="text-[#6b6658]">
                  <T nl="Ontvangen" en="Received" />
                </span>
              </div>
            </div>
            <button className="w-full mt-5 bg-[var(--color-stoep)] text-white text-[13px] font-semibold py-3 rounded-xl">
              <T
                nl="+ Nieuwe melding op deze locatie"
                en="+ New report at this location"
              />
            </button>
          </div>
          <div className="h-24" />
          <TabBar active="kaart" />
        </PhoneFrame>

        {/* Step 2 */}
        <PhoneFrame
          title={<T nl="Melding" en="Report" />}
          caption={<T nl="Step 2 — foto & categorie" en="Step 2 — photo & category" />}
          annot={
            <T
              nl="Categorieën zijn de Signalen-categorieën 1-op-1. Adres & coördinaten zijn auto-ingevuld. Aisha hoeft alleen te typen wat niet uit data komt."
              en="Categories map 1:1 to Signalen categories. Address & coordinates are auto-filled. Aisha only has to type what can't be derived from data."
            />
          }
        >
          <AppTopBar
            left={<T nl="Annuleren" en="Cancel" />}
            center={<T nl="Nieuwe melding" en="New report" />}
            right={
              <span className="text-[var(--color-stoep)] font-semibold">
                <T nl="Verzend" en="Submit" />
              </span>
            }
          />
          <div className="px-4 py-4 space-y-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-2">
                <T nl="Locatie" en="Location" />
              </div>
              <div className="border border-[#e6e2d6] rounded-lg p-3 flex items-center gap-3">
                <div className="w-14 h-14 rounded-md bg-[#e9ddc9]/60 flex items-center justify-center text-[var(--color-stoep)]">
                  􀎫
                </div>
                <div className="flex-1 text-[12.5px]">
                  <div className="font-medium">Speeltuin Javaplein</div>
                  <div className="text-[#6b6658] text-[11px]">
                    52.3631° N, 4.9331° E · Indische Buurt
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-2">
                <T nl="Foto" en="Photo" />
              </div>
              <div className="h-40 rounded-lg bg-gradient-to-br from-[#cfe0b8] to-[#7a8d4f] relative overflow-hidden">
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/40 text-white text-[11px] px-3 py-1.5 m-2 rounded-md">
                    <T
                      nl="IMG_4821.jpg · net genomen"
                      en="IMG_4821.jpg · just taken"
                    />
                  </div>
                </div>
              </div>
              <button className="text-[12px] text-[var(--color-civic)] mt-2 underline">
                􀌞 <T nl="Foto vervangen" en="Replace photo" />
              </button>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-2">
                <T nl="Categorie · Signalen" en="Category · Signalen" />
              </div>
              <div className="space-y-1.5">
                <div className="border border-[var(--color-stoep)] bg-[var(--color-stoep-soft)]/40 rounded-lg px-3 py-2 text-[13px] font-medium flex justify-between">
                  <span>
                    <T
                      nl="Speelvoorzieningen · schade"
                      en="Play equipment · damage"
                    />
                  </span>
                  <span className="text-[var(--color-stoep)]">✓</span>
                </div>
                <div className="border border-[#e6e2d6] rounded-lg px-3 py-2 text-[13px] text-[#6b6658]">
                  <T nl="Openbaar groen" en="Public greenery" />
                </div>
                <div className="border border-[#e6e2d6] rounded-lg px-3 py-2 text-[13px] text-[#6b6658]">
                  <T nl="Afval · prullenbak" en="Waste · bin" />
                </div>
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-2">
                <T nl="Korte beschrijving" en="Short description" />
              </div>
              <div className="border border-[#e6e2d6] rounded-lg p-3 text-[13px] leading-relaxed">
                <T
                  nl="Schommel hangt scheef, één ketting kapot. Kinderen kunnen hem nog wel pakken maar het is niet veilig."
                  en="Swing is hanging crooked, one chain broken. Kids can still grab it but it isn't safe."
                />
              </div>
            </div>

            <label className="flex items-start gap-2 text-[12px] text-[#3b3a35]">
              <input type="checkbox" defaultChecked className="mt-0.5 accent-[var(--color-stoep)]" />
              <span>
                <T
                  nl="Zichtbaar voor buren in de feed (anders alleen bij gemeente)."
                  en="Visible to neighbors in the feed (otherwise municipality only)."
                />{" "}
                <span className="text-[#6b6658]">
                  <T
                    nl="Aanbevolen — buren kunnen bevestigen of aanvullen."
                    en="Recommended — neighbors can confirm or add detail."
                  />
                </span>
              </span>
            </label>
          </div>
          <div className="h-20" />
        </PhoneFrame>

        {/* Step 3 */}
        <PhoneFrame
          title={<T nl="Verzonden" en="Submitted" />}
          caption={
            <T
              nl="Step 3 — bevestiging & feed-echo"
              en="Step 3 — confirmation & feed echo"
            />
          }
          annot={
            <T
              nl="Eén actie, twee bestemmingen: Signalen-ticket (voor gemeente) en feed-kaart (voor buren). 'In behandeling' binnen minuten voelt als werkend bestuur."
              en="One action, two destinations: Signalen ticket (for the municipality) and a feed card (for neighbors). 'In progress' within minutes feels like working government."
            />
          }
        >
          <AppTopBar
            left={<T nl="Feed" en="Feed" />}
            center={<T nl="Melding 24-04-1138" en="Report 24-04-1138" />}
            right={<span>􀈂</span>}
          />
          <div className="px-5 py-6 text-center border-b border-[#ececec]">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#dfe6d5] flex items-center justify-center text-[#4a6b3a] text-2xl mb-3">
              ✓
            </div>
            <div className="font-serif italic text-xl">
              <T nl="Bedankt, Aisha" en="Thank you, Aisha" />
            </div>
            <div className="text-[12px] text-[#6b6658] mt-1">
              <T
                nl="Melding SIA-2026-18221 is aangemaakt"
                en="Report SIA-2026-18221 has been created"
              />
            </div>
          </div>

          <div className="px-4 py-4 space-y-3 text-[13px]">
            <div className="flex justify-between">
              <span className="text-[#6b6658]">
                <T nl="Status" en="Status" />
              </span>
              <span className="font-semibold">
                <T
                  nl="Ontvangen · in behandeling"
                  en="Received · in progress"
                />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6b6658]">
                <T nl="Verantwoordelijk" en="Owner" />
              </span>
              <span>
                <T
                  nl="Gemeente · Stadsbeheer Oost"
                  en="Municipality · City Works Oost"
                />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6b6658]">
                <T nl="Richtlijn reactietijd" en="Target response time" />
              </span>
              <span>
                <T nl="3 werkdagen" en="3 working days" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6b6658]">
                <T nl="Zichtbaar in feed" en="Visible in feed" />
              </span>
              <span>
                <T nl="Ja · 230 buren" en="Yes · 230 neighbors" />
              </span>
            </div>
          </div>

          <div className="mx-4 p-3 rounded-xl bg-[var(--color-stoep-soft)]/40 text-[12.5px]">
            <div className="font-semibold mb-1">
              <T nl="Buurt-echo" en="Neighborhood echo" />
            </div>
            <div className="text-[#3b3a35]">
              <T
                nl="Je melding staat nu bovenaan in de feed. Buren kunnen bevestigen ('ik zie hem ook') wat gemeente helpt prioriteren."
                en="Your report is now at the top of the feed. Neighbors can confirm ('I see it too') which helps the municipality prioritize."
              />
            </div>
          </div>

          <div className="px-4 mt-4">
            <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-2">
              <T nl="Tijdlijn" en="Timeline" />
            </div>
            <div className="space-y-3 text-[12.5px]">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-stoep)] mt-1.5 shrink-0" />
                <div>
                  <div className="font-medium">
                    <T nl="Melding aangemaakt" en="Report created" />
                  </div>
                  <div className="text-[#6b6658] text-[11px]">
                    <T
                      nl="24 apr · 08:47 · Stoep → Signalen"
                      en="24 Apr · 08:47 · Stoep → Signalen"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d9d3c3] mt-1.5 shrink-0" />
                <div>
                  <div className="text-[#6b6658]">
                    <T nl="In behandeling" en="In progress" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d9d3c3] mt-1.5 shrink-0" />
                <div>
                  <div className="text-[#6b6658]">
                    <T
                      nl="Opgelost — je krijgt een bevestiging"
                      en="Resolved — you'll get a confirmation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-24" />
          <TabBar active="kaart" />
        </PhoneFrame>

        <div className="w-full text-[14px] text-[#3b3a35] max-w-3xl leading-relaxed mt-4">
          <h3 className="font-serif italic text-xl text-[var(--color-ink)] mb-2">
            <T
              nl="Waarom dit de kern-integratie is"
              en="Why this is the core integration"
            />
          </h3>
          <p className="mb-3">
            <T
              nl="Signalen is de zwaarste integratie van de vier spike-prioriteiten. Als dit werkt, heeft de gemeente een concrete reden om Stoep te willen: "
              en="Signalen is the heaviest integration among the four spike priorities. If this works, the municipality has a concrete reason to want Stoep: "
            />
            <em>
              <T
                nl="hogere-kwaliteit inputs"
                en="higher-quality inputs"
              />
            </em>{" "}
            <T
              nl="(foto, locatie, buur-bevestiging) en "
              en="(photo, location, neighbor confirmation) and "
            />
            <em>
              <T
                nl="publieke zichtbaarheid van resolutie"
                en="public visibility of resolution"
              />
            </em>{" "}
            <T
              nl="— twee dingen waar de huidige melden-app slecht in is."
              en="— two things the current reporting app does poorly."
            />
          </p>
          <p className="annot">
            <T
              nl="AVG-aandachtspunten: gezichten op foto's (automatische blurring), adres-specifieke klachten (niet auto-publiek), misbruikgevoelige categorieën (overlast van buren — uitsluiten van feed-echo)."
              en="GDPR considerations: faces in photos (auto-blur), address-specific complaints (not auto-public), abuse-prone categories (neighbor nuisance — exclude from feed-echo)."
            />
          </p>
        </div>
      </div>
    </div>
  );
}
