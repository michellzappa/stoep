import { TopBar, PageHeader } from "../components/Nav";
import { PhoneFrame } from "../components/PhoneFrame";
import { AppTopBar, TabBar } from "../components/PhoneChrome";
import { T } from "../lib/i18n";

function Tier({
  label,
  level,
  active,
  can,
  cannot,
  path,
  activeLabel,
  pathPrefix,
}: {
  label: React.ReactNode;
  level: React.ReactNode;
  active?: boolean;
  can: React.ReactNode[];
  cannot: React.ReactNode[];
  path?: React.ReactNode;
  activeLabel?: React.ReactNode;
  pathPrefix?: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        active
          ? "border-[var(--color-stoep)] bg-[var(--color-stoep-soft)]/40"
          : "border-[#e6e2d6] bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-[#6b6658]">{level}</div>
          <div className="font-serif italic text-[16px] leading-tight">{label}</div>
        </div>
        {active && (
          <div className="text-[10px] uppercase tracking-widest bg-[var(--color-stoep)] text-white px-2 py-1 rounded-full">
            {activeLabel ?? <T nl="Nu jij" en="You" />}
          </div>
        )}
      </div>
      <div className="mt-2 text-[11.5px] space-y-1">
        {can.map((c, i) => (
          <div key={i} className="flex gap-1.5">
            <span className="text-[#4a6b3a]">✓</span>
            <span>{c}</span>
          </div>
        ))}
        {cannot.map((c, i) => (
          <div key={i} className="flex gap-1.5 text-[#6b6658]">
            <span>·</span>
            <span>{c}</span>
          </div>
        ))}
      </div>
      {path && (
        <div className="mt-3 pt-2 border-t border-dashed border-[#d9d3c3] text-[11px] text-[var(--color-civic)]">
          {pathPrefix ?? <T nl="Volgende stap: " en="Next step: " />}
          {path}
        </div>
      )}
    </div>
  );
}

export default function OnboardingMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={
          <T
            nl="Mock 05 · Lena · 27 · week 4 in Amsterdam"
            en="Mock 05 · Lena · 27 · week 4 in Amsterdam"
          />
        }
        title={
          <T
            nl="Buurtpaspoort — getrapte, uitnodigende verificatie"
            en="Neighborhood passport — tiered, welcoming verification"
          />
        }
        subtitle={
          <T
            nl="Lena is een Pools-Nederlandse masterstudente, onderhuurder van een professor. Geen BAG-registratie. Nextdoor-model: geweigerd. WhatsApp-model: in de groep zonder trust-signaal. Stoep-model: drie tiers, nooit 'nee'. Read-only vanaf dag één, vouched via twee buren, BAG-geverifieerd als de registratie rond is."
            en="Lena is a Polish-Dutch master's student, subletting from a professor. No BAG (address registry) entry. Nextdoor model: rejected. WhatsApp model: in the group with no trust signal. Stoep model: three tiers, never 'no'. Read-only from day one, vouched via two neighbors, BAG-verified when her registration is sorted."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 flex gap-8 flex-wrap">
        {/* Screen 1: welcome */}
        <PhoneFrame
          title={<T nl="Welkom" en="Welcome" />}
          caption={
            <T
              nl="State A — eerste opening zonder account"
              en="State A — first open without account"
            />
          }
          annot={
            <T
              nl="De welkomst-pagina erkent Lena's situatie expliciet. Geen paywall, geen 'je mag niet meedoen'. De framing is 'hoe kun je meedoen' — een lijst van drie paden, niet een gate."
              en="The welcome page acknowledges Lena's situation explicitly. No paywall, no 'you can't join'. The framing is 'here's how to join' — a list of three paths, not a gate."
            />
          }
        >
          <AppTopBar
            left={<span></span>}
            center={<T nl="Welkom op Stoep" en="Welcome to Stoep" />}
            right={<span></span>}
          />
          <div className="px-5 py-6 bg-[var(--color-stoep-soft)]/50 border-b border-[#e6e2d6]">
            <div className="font-serif italic text-[26px] leading-tight">
              <T
                nl={<>Welkom op <span className="text-[var(--color-stoep)]">de stoep</span> van de Indische Buurt.</>}
                en={<>Welcome to <span className="text-[var(--color-stoep)]">the sidewalk</span> of the Indische Buurt.</>}
              />
            </div>
            <div className="text-[12.5px] text-[#3b3a35] mt-3 leading-relaxed">
              <T
                nl="Stoep is de digitale voordeur van je buurt. Meldingen, evenementen, buren, buurtbudget — op één plek, van jou en je buren."
                en="Stoep is the digital front door of your neighborhood. Reports, events, neighbors, neighborhood budget — one place, by you and your neighbors."
              />
            </div>
            <div className="text-[11px] text-[#6b6658] italic mt-3">
              <T
                nl="Lena, welkom in Amsterdam. Je bent hier nog niet BAG-geregistreerd — dat hoeft geen probleem te zijn."
                en="Lena, welcome to Amsterdam. You're not BAG-registered here yet — that doesn't have to be a problem."
              />
            </div>
          </div>

          <div className="px-4 py-4">
            <div className="text-[10px] uppercase tracking-widest text-[#6b6658] mb-3">
              <T nl="Kies een pad · nu of later" en="Choose a path · now or later" />
            </div>
            <div className="space-y-2.5">
              <button className="w-full border border-[#e6e2d6] rounded-xl p-3 text-left bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-[13px]">
                      <T nl="Lezen als bezoeker" en="Read as a visitor" />
                    </div>
                    <div className="text-[11px] text-[#6b6658]">
                      <T
                        nl="Alleen e-mail. Geen verificatie. Lees de feed & digest."
                        en="Email only. No verification. Read the feed & digest."
                      />
                    </div>
                  </div>
                  <span className="text-[var(--color-stoep)]">→</span>
                </div>
              </button>
              <button className="w-full border border-[#e6e2d6] rounded-xl p-3 text-left bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-[13px]">
                      <T nl="Ik heb DigiD / BAG" en="I have DigiD / BAG" />
                    </div>
                    <div className="text-[11px] text-[#6b6658]">
                      <T
                        nl="Verifieer je adres met DigiD — direct volledig account."
                        en="Verify your address with DigiD — full account immediately."
                      />
                    </div>
                  </div>
                  <span className="text-[var(--color-stoep)]">→</span>
                </div>
              </button>
              <button className="w-full border border-[#e6e2d6] rounded-xl p-3 text-left bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-[13px]">
                      <T nl="Laat me vouchen door buren" en="Have neighbors vouch for me" />
                    </div>
                    <div className="text-[11px] text-[#6b6658]">
                      <T
                        nl="Twee geverifieerde buren bevestigen dat je hier woont."
                        en="Two verified neighbors confirm you live here."
                      />
                    </div>
                  </div>
                  <span className="text-[var(--color-stoep)]">→</span>
                </div>
              </button>
              <button className="w-full border border-[#e6e2d6] rounded-xl p-3 text-left bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-[13px]">
                      <T
                        nl="Ik heb een andere situatie"
                        en="My situation is different"
                      />
                    </div>
                    <div className="text-[11px] text-[#6b6658]">
                      <T
                        nl="DV-situatie, shortstay, ongedocumenteerd — praat met een buurtconnector."
                        en="Domestic violence, short-stay, undocumented — talk with a neighborhood connector."
                      />
                    </div>
                  </div>
                  <span className="text-[var(--color-stoep)]">→</span>
                </div>
              </button>
            </div>

            <div className="text-[10.5px] text-[#6b6658] mt-5 leading-relaxed italic border-t border-dashed border-[#d9d3c3] pt-4">
              <T
                nl="Stoep is een bewoners-platform. Je gegevens worden niet verkocht, niet getoond aan adverteerders, en nooit gedeeld met gemeente zonder jouw toestemming. Volledig "
                en="Stoep is a residents' platform. Your data isn't sold, isn't shown to advertisers, and is never shared with the municipality without your consent. Full "
              />
              <span className="underline">
                <T nl="resident-rights-charter →" en="resident-rights charter →" />
              </span>
            </div>
          </div>
          <div className="h-20" />
        </PhoneFrame>

        {/* Screen 2: tier overview */}
        <PhoneFrame
          title={<T nl="Mijn paspoort" en="My passport" />}
          caption={
            <T
              nl="State B — Lena als bezoeker · ziet haar groeipad"
              en="State B — Lena as visitor · sees her growth path"
            />
          }
          annot={
            <T
              nl="De drie tiers staan open op één scherm — nooit verborgen. Lena ziet altijd waar ze nu staat en wat haar stappen zijn. Geen shame, wel duidelijkheid."
              en="All three tiers are exposed on one screen — never hidden. Lena can always see where she stands and what her next steps are. No shame, just clarity."
            />
          }
        >
          <AppTopBar
            left={<span>􀆉</span>}
            center={<T nl="Mijn buurtpaspoort" en="My neighborhood passport" />}
            right={<span>􀍟</span>}
          />
          <div className="px-4 py-4 border-b border-[#ececec]">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#1e5a8a] text-white flex items-center justify-center font-semibold text-lg">
                LK
              </div>
              <div>
                <div className="font-serif italic text-[18px] leading-tight">Lena Kowalczyk</div>
                <div className="text-[11px] text-[#6b6658]">
                  <T
                    nl="Indische Buurt · sinds 12 april 2026"
                    en="Indische Buurt · since 12 April 2026"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 space-y-3">
            <Tier
              level={<T nl="Tier 1 · bezoeker" en="Tier 1 · visitor" />}
              label={<T nl="Lezen & events bijwonen" en="Read & attend events" />}
              active
              can={[
                <T key="1" nl="Feed & digest lezen" en="Read feed & digest" />,
                <T key="2" nl="Buurt-evenementen bijwonen" en="Attend neighborhood events" />,
                <T key="3" nl="Adres-pagina's bekijken" en="Browse address pages" />,
              ]}
              cannot={[
                <T key="1" nl="Nog niet posten of reageren" en="Can't post or reply yet" />,
                <T key="2" nl="Geen buurtbudget-stem" en="No neighborhood-budget vote" />,
              ]}
              path={<T nl="Twee buren vouchen → tier 2" en="Two neighbors vouch → tier 2" />}
            />
            <Tier
              level={<T nl="Tier 2 · vouched" en="Tier 2 · vouched" />}
              label={<T nl="Volwaardig actief · zonder BAG" en="Fully active · without BAG" />}
              can={[
                <T key="1" nl="Posten, reageren, meldingen maken" en="Post, reply, create reports" />,
                <T
                  key="2"
                  nl="Meedoen aan buurtbudget-stem (advies)"
                  en="Participate in neighborhood-budget voting (advisory)"
                />,
                <T
                  key="3"
                  nl="Buurt-evenementen organiseren"
                  en="Organize neighborhood events"
                />,
              ]}
              cannot={[
                <T
                  key="1"
                  nl="Formele gemeente-consultaties tellen als 'advies' (niet als stem)"
                  en="Formal municipal consultations count as 'advice' (not as vote)"
                />,
              ]}
              path={<T nl="BAG-registratie geregeld → tier 3" en="BAG registration sorted → tier 3" />}
            />
            <Tier
              level={<T nl="Tier 3 · BAG-geverifieerd" en="Tier 3 · BAG-verified" />}
              label={<T nl="Vol bewoner · alle rechten" en="Full resident · all rights" />}
              can={[
                <T
                  key="1"
                  nl="Volledige buurtbudget-stem (zwaar gewicht)"
                  en="Full neighborhood-budget vote (heavy weight)"
                />,
                <T key="2" nl="Lid buurtcouncil mogelijk" en="Council membership possible" />,
                <T
                  key="3"
                  nl="Identiteit portable via fediverse bij verhuizing"
                  en="Identity portable via fediverse when you move"
                />,
              ]}
              cannot={[]}
            />
          </div>

          <div className="mx-4 p-3 rounded-xl bg-[var(--color-civic-soft)]/60 text-[12px] my-3">
            <div className="font-semibold mb-1">
              <T nl="Lena — je volgende stap" en="Lena — your next step" />
            </div>
            <div className="text-[#3b3a35] leading-relaxed">
              <T
                nl="Prof. van Leeuwen is al geverifieerd. Vraag hem om te vouchen. Eén buur erbij (bv. op de buurtborrel van 26/4) en je bent op tier 2."
                en="Prof. van Leeuwen is already verified. Ask him to vouch. One more neighbor (e.g. at the 26/4 drinks) and you're on tier 2."
              />
            </div>
            <button className="mt-2 text-[12px] font-semibold text-[var(--color-civic)] underline">
              <T nl="Vraag vouch aan →" en="Request a vouch →" />
            </button>
          </div>
          <div className="h-24" />
          <TabBar active="ik" />
        </PhoneFrame>

        {/* Screen 3: vouching flow */}
        <PhoneFrame
          title={<T nl="Vouch" en="Vouch" />}
          caption={
            <T
              nl="State C — professor ontvangt vouch-verzoek"
              en="State C — professor receives vouch request"
            />
          }
          annot={
            <T
              nl="Vouching is visible en reciprocal. Professor ziet wie vraagt, wat het betekent, en wat het hem kost. Dit is sociale infrastructuur, geen dark-pattern."
              en="Vouching is visible and reciprocal. The professor sees who's asking, what it means, and what it costs him. This is social infrastructure, not a dark pattern."
            />
          }
        >
          <AppTopBar
            left={<span>􀆉</span>}
            center={<T nl="Vouch-verzoek" en="Vouch request" />}
            right={<span></span>}
          />
          <div className="px-5 py-6 border-b border-[#ececec]">
            <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-2">
              <T nl="Aan: Prof. J. van Leeuwen" en="To: Prof. J. van Leeuwen" />
            </div>
            <div className="font-serif italic text-[20px] leading-tight">
              <T
                nl="Lena Kowalczyk vraagt of je wilt bevestigen dat zij op jouw adres woont."
                en="Lena Kowalczyk is asking you to confirm she lives at your address."
              />
            </div>
          </div>

          <div className="px-4 py-4 space-y-3 text-[12.5px]">
            <div className="flex gap-3 items-start">
              <div className="w-12 h-12 rounded-full bg-[#1e5a8a] text-white flex items-center justify-center font-semibold text-[13px]">
                LK
              </div>
              <div className="flex-1">
                <div className="font-semibold">Lena Kowalczyk</div>
                <div className="text-[11px] text-[#6b6658]">
                  <T
                    nl="27 · student UvA · sinds 12 apr · onderhuur Javastraat 143-2"
                    en="27 · UvA student · since 12 Apr · sublet Javastraat 143-2"
                  />
                </div>
                <div className="text-[12px] mt-2 italic">
                  <T
                    nl={'"Hoi Joris — we spraken vorige week. Als je wilt vouchen voor Stoep zou dat super zijn, dan kan ik meedoen in de buurt."'}
                    en={'"Hi Joris — we spoke last week. If you\'d vouch for me on Stoep that would be great, then I can join the neighborhood."'}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#e6e2d6] p-3">
              <div className="text-[10px] uppercase tracking-widest text-[#6b6658] mb-2">
                <T nl="Wat je bevestigt" en="What you're confirming" />
              </div>
              <ul className="space-y-1.5">
                <li>
                  <T
                    nl="• Lena woont op Javastraat 143-2 (jouw adres)"
                    en="• Lena lives at Javastraat 143-2 (your address)"
                  />
                </li>
                <li>
                  <T
                    nl="• Ze is een echte persoon die je kent"
                    en="• She's a real person you know"
                  />
                </li>
                <li>
                  <T
                    nl="• Jouw vouch is zichtbaar voor buurtconnectors (niet publiek)"
                    en="• Your vouch is visible to connectors (not public)"
                  />
                </li>
              </ul>
              <div className="text-[11px] text-[#6b6658] mt-3 italic">
                <T
                  nl="Valse vouches zijn een overtreding van de buurt-code en kunnen leiden tot verlies van je eigen paspoort."
                  en="False vouches violate the area code and can cost you your own passport."
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-[var(--color-stoep)] text-white font-semibold py-3 rounded-xl text-[13px]">
                <T nl="Ja, ik vouch" en="Yes, I vouch" />
              </button>
              <button className="flex-1 border border-[#e6e2d6] font-semibold py-3 rounded-xl text-[13px] text-[#6b6658]">
                <T nl="Niet nu" en="Not now" />
              </button>
            </div>

            <div className="text-[11px] text-[#6b6658] pt-2 border-t border-dashed border-[#d9d3c3]">
              <T
                nl="Lena heeft 1 van 2 vouches nodig voor tier 2. De andere kan van elke geverifieerde buur komen — ook iemand die ze pas ontmoet op de borrel."
                en="Lena needs 1 of 2 vouches to reach tier 2. The other can come from any verified neighbor — including someone she meets at the drinks."
              />
            </div>
          </div>

          <div className="h-20" />
        </PhoneFrame>

        <div className="w-full text-[14px] text-[#3b3a35] max-w-3xl leading-relaxed mt-4">
          <h3 className="font-serif italic text-xl text-[var(--color-ink)] mb-2">
            <T nl="De politiek van verificatie" en="The politics of verification" />
          </h3>
          <p className="mb-3">
            <T
              nl="Dit is waar de meeste neighbourhood-apps falen. "
              en="This is where most neighborhood apps fail. "
            />
            <strong>
              <T nl="Te streng" en="Too strict" />
            </strong>{" "}
            <T
              nl="(alleen BAG) → Nextdoor, en Lena's worden uitgesloten. "
              en="(BAG only) → Nextdoor, and Lenas get excluded. "
            />
            <strong>
              <T nl="Te los" en="Too loose" />
            </strong>{" "}
            <T
              nl="(e-mail) → WhatsApp, en trust-signalen zijn nul. Tiered + vouched is het middenpad en tegelijk het "
              en="(email) → WhatsApp, and trust signals are zero. Tiered + vouched is the middle path and simultaneously the "
            />
            <em>
              <T nl="governance-primitief" en="governance primitive" />
            </em>
            <T
              nl=": buren maken verifieerbare uitspraken over buren, niet een centrale autoriteit."
              en=": neighbors make verifiable claims about neighbors, not a central authority."
            />
          </p>
          <p className="annot">
            <T
              nl="Edge cases die deze flow nog moet absorberen (zie Identity-edge-cases.md): DV-survivors (adres verbergen), ongedocumenteerd (vouchen zonder adres-publicatie), minors (ouders vouchen niet automatisch), niet-resident stakeholders (Mehmet → bedrijfspaspoort)."
              en="Edge cases this flow still needs to absorb (see Identity-edge-cases.md): DV survivors (hide address), undocumented residents (vouch without address publication), minors (parents don't vouch automatically), non-resident stakeholders (Mehmet → business-passport)."
            />
          </p>
        </div>
      </div>
    </div>
  );
}
