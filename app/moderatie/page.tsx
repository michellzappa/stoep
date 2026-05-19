import { TopBar, PageHeader } from "../components/Nav";
import { T } from "../lib/i18n";

function StatBox({
  n,
  label,
  sub,
}: {
  n: string;
  label: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <div className="border border-[#e6e2d6] rounded-xl p-4 bg-white">
      <div className="font-serif italic text-[28px] leading-none">{n}</div>
      <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mt-1">{label}</div>
      {sub && <div className="text-[11px] text-[#3b3a35] mt-1">{sub}</div>}
    </div>
  );
}

function QueueItem({
  severity,
  severityLabel,
  kind,
  author,
  address,
  when,
  body,
  reason,
  reporter,
  actions,
}: {
  severity: "laag" | "midden" | "hoog";
  severityLabel: React.ReactNode;
  kind: React.ReactNode;
  author: string;
  address: React.ReactNode;
  when: React.ReactNode;
  body: React.ReactNode;
  reason: React.ReactNode;
  reporter: React.ReactNode;
  actions: React.ReactNode[];
}) {
  const sevColor =
    severity === "hoog"
      ? "bg-[#b54a2a] text-white"
      : severity === "midden"
        ? "bg-[var(--color-stoep-soft)] text-[#7a3418]"
        : "bg-[#efece4] text-[#6b6658]";
  return (
    <div className="border border-[#e6e2d6] rounded-xl bg-white p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`${sevColor} text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full`}>
            {severityLabel}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-[#6b6658]">{kind}</span>
        </div>
        <div className="text-[11px] text-[#6b6658]">{when}</div>
      </div>
      <div>
        <div className="text-[12px] text-[#6b6658] mb-1">
          <strong className="text-[var(--color-ink)]">{author}</strong> · {address}
        </div>
        <div className="text-[14px] leading-relaxed text-[#23251f] bg-[#fafaf7] rounded-lg p-3 border-l-2 border-[#d9d3c3]">
          "{body}"
        </div>
      </div>
      <div className="text-[12px] text-[#3b3a35]">
        <strong>
          <T nl="Gemeld door:" en="Reported by:" />
        </strong>{" "}
        {reporter} ·{" "}
        <strong>
          <T nl="Reden:" en="Reason:" />
        </strong>{" "}
        {reason}
      </div>
      <div className="flex gap-2 flex-wrap pt-2 border-t border-dashed border-[#e6e2d6]">
        {actions.map((a, i) => (
          <button
            key={i}
            className={`text-[12px] px-3 py-1.5 rounded-lg border ${
              i === 0
                ? "border-[#d9d3c3] text-[#3b3a35]"
                : i === actions.length - 1
                  ? "border-[var(--color-civic)] text-[var(--color-civic)]"
                  : "border-[#d9d3c3] text-[#3b3a35]"
            }`}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ModeratieMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={
          <T
            nl="Mock 06 · Farida · buurtconnector · desktop"
            en="Mock 06 · Farida · neighborhood connector · desktop"
          />
        }
        title={
          <T
            nl="Buurtconnector-dashboard — moderation as civic role"
            en="Connector dashboard — moderation as civic role"
          />
        }
        subtitle={
          <T
            nl="Farida checkt twee keer per dag in. De queue is klein, de zwaarste beslissingen gaan naar de buurtraad, niet naar haar alleen. Haar werk is deels op het platform, deels in de buurt — het dashboard houdt beide zichtbaar. Geen Trust & Safety team, wel betaalde, roterende, aanspreekbare buren."
            en="Farida checks in twice a day. The queue is small; the heaviest decisions go to the neighborhood council, not to her alone. Her work is partly on the platform, partly in the neighborhood — the dashboard keeps both visible. No Trust & Safety team, but paid, rotating, accountable neighbors."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Top bar with Farida context */}
        <div className="border border-[#e6e2d6] bg-white rounded-xl p-5 mb-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#7a3418] text-white flex items-center justify-center font-semibold">
              FK
            </div>
            <div>
              <div className="font-serif italic text-[20px] leading-tight">Farida K.</div>
              <div className="text-[12px] text-[#6b6658]">
                <T
                  nl="Buurtconnector Indische Buurt · roterend 2 jaar · €400/maand · ±10u/week"
                  en="Connector Indische Buurt · 2-year rotation · €400/month · ±10h/week"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-[11.5px]">
            <div className="chip chip-moss">
              􀉩{" "}
              <T
                nl="Mede-connectors: Joris, Ayse"
                en="Co-connectors: Joris, Ayse"
              />
            </div>
            <div className="chip chip-ghost">
              􀉪 <T nl="Raad: 7 leden" en="Council: 7 members" />
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatBox
            n="3"
            label={<T nl="In de queue" en="In the queue" />}
            sub={<T nl="Mediane wachttijd: 1u 12min" en="Median wait: 1h 12min" />}
          />
          <StatBox
            n="1"
            label={<T nl="Naar raad" en="To council" />}
            sub={<T nl="Wekelijkse sessie di 19:00" en="Weekly session Tue 19:00" />}
          />
          <StatBox
            n="2"
            label={<T nl="Outreach open" en="Outreach open" />}
            sub={<T nl="Nieuwe buren afgelopen 7 dagen" en="New neighbors in last 7 days" />}
          />
          <StatBox
            n="4.6"
            label={<T nl="Buurt-gezondheidsindex" en="Area health index" />}
            sub={<T nl="Intern — niet publiek" en="Internal — not public" />}
          />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Queue */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif italic text-[20px]">
                <T nl="Moderatie-queue" en="Moderation queue" />
              </h2>
              <div className="text-[11px] uppercase tracking-widest text-[#6b6658]">
                <T nl="Community-norms · editable" en="Community norms · editable" />
              </div>
            </div>

            <QueueItem
              severity="hoog"
              severityLabel={<T nl="hoog" en="high" />}
              kind={<T nl="Conflict · resident-op-resident" en="Conflict · resident-vs-resident" />}
              author="Joris M."
              address="Balistraat 12"
              when={<T nl="34 min geleden" en="34 min ago" />}
              body={
                <T
                  nl="Die nieuwe mensen op nummer 8 zijn echt een probleem — al drie keer deze week te luid. Sommige mensen horen hier niet thuis."
                  en="Those new people at number 8 are really a problem — too loud three times this week. Some people don't belong here."
                />
              }
              reporter={
                <T
                  nl="2 buren · reden: 'sommige mensen horen hier niet thuis' - discriminatoir"
                  en="2 neighbors · reason: 'some people don't belong here' — potentially discriminatory"
                />
              }
              reason={
                <T
                  nl="Mogelijk indirect discriminatoir · buurt-code artikel 4"
                  en="Possibly indirect discrimination · area code article 4"
                />
              }
              actions={[
                <T key="1" nl="Overleg met Joris" en="Talk with Joris" />,
                <T key="2" nl="Verberg + nudge" en="Hide + nudge" />,
                <T key="3" nl="Naar buurtraad" en="To council" />,
              ]}
            />

            <QueueItem
              severity="midden"
              severityLabel={<T nl="midden" en="medium" />}
              kind={<T nl="Commercieel · resident-account" en="Commercial · resident account" />}
              author="Nadia S."
              address="Molukkenstraat 44"
              when={<T nl="1u geleden" en="1h ago" />}
              body={
                <T
                  nl="TIP: mijn zus begint een schoonmaakservice! €15/uur, stuur me een DM!"
                  en="TIP: my sister is starting a cleaning service! €15/hour, DM me!"
                />
              }
              reporter={
                <T
                  nl="Auto-detect (commerciële keywords) + 1 buur"
                  en="Auto-detect (commercial keywords) + 1 neighbor"
                />
              }
              reason={
                <T
                  nl="Commerciële post via resident-account · suggereer bedrijfspaspoort"
                  en="Commercial post via resident account · suggest business-passport"
                />
              }
              actions={[
                <T key="1" nl="Nudge naar bedrijfspaspoort" en="Nudge to business-passport" />,
                <T key="2" nl="Laat staan" en="Leave it" />,
                <T key="3" nl="Verberg" en="Hide" />,
              ]}
            />

            <QueueItem
              severity="laag"
              severityLabel={<T nl="laag" en="low" />}
              kind={<T nl="Norm-nudge · tone" en="Norm nudge · tone" />}
              author="Erik V."
              address="Sumatrastraat 117"
              when={<T nl="2u geleden" en="2h ago" />}
              body={
                <T
                  nl="Kan de gemeente nou eens iets DOEN?? Prullenbak is al 4 dagen vol en jullie lopen met oogkleppen op!!"
                  en="Can the municipality DO SOMETHING for once?? Bin has been full for 4 days and you're walking around with blinders on!!"
                />
              }
              reporter={
                <T
                  nl="Auto-detect (all-caps, directe beschuldiging)"
                  en="Auto-detect (all-caps, direct accusation)"
                />
              }
              reason={
                <T
                  nl="Tone · feit klopt (melding staat op dag 5). Nudge richting zakelijke melding."
                  en="Tone · the fact is correct (report is on day 5). Nudge toward factual report."
                />
              }
              actions={[
                <T key="1" nl="Laat staan" en="Leave it" />,
                <T key="2" nl="Persoonlijk bericht" en="Personal message" />,
                <T key="3" nl="Verberg" en="Hide" />,
              ]}
            />

            {/* Resolved / today */}
            <div className="pt-4 border-t border-[#e6e2d6]">
              <div className="text-[11px] uppercase tracking-widest text-[#6b6658] mb-3">
                <T
                  nl="Afgehandeld vandaag · 5 items"
                  en="Handled today · 5 items"
                />
              </div>
              <div className="text-[12px] space-y-1.5 text-[#3b3a35]">
                <div>
                  <T
                    nl={'✓ 08:14 — Verberg + nudge · "spam-achtig promootje voor thuis­verkoop"'}
                    en={'✓ 08:14 — Hide + nudge · "spammy promo for a home-sale"'}
                  />
                </div>
                <div>
                  <T
                    nl="✓ 09:02 — Laat staan · kritiek op gemeente (inhoudelijk, binnen norm)"
                    en="✓ 09:02 — Leave it · critique of municipality (substantive, within norm)"
                  />
                </div>
                <div>
                  <T
                    nl={'✓ 10:35 — Nudge naar DV-contact · vermoeden intimidatie ("doorgestuurd aan J. via privé")'}
                    en={'✓ 10:35 — Nudge to DV contact · suspected intimidation ("forwarded to J. privately")'}
                  />
                </div>
                <div>
                  <T
                    nl="✓ 12:12 — Overleg met raad · grenszaak Javastraat 89"
                    en="✓ 12:12 — Consult council · edge case Javastraat 89"
                  />
                </div>
                <div>
                  <T
                    nl="✓ 13:48 — Verwijderen + educatie · persoonsgegevens derde gedeeld"
                    en="✓ 13:48 — Remove + educate · third-party personal data shared"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="border border-[#e6e2d6] bg-white rounded-xl p-4">
              <div className="font-serif italic text-[16px] mb-2">
                <T nl="Buurtraad · agenda di 19:00" en="Council · agenda Tue 19:00" />
              </div>
              <ol className="text-[12.5px] space-y-2 list-decimal list-inside text-[#3b3a35]">
                <li>
                  <T
                    nl={'Appeal Joris M. ("nieuwe mensen op nr. 8") · 15 min'}
                    en={'Appeal Joris M. ("new people at no. 8") · 15 min'}
                  />
                </li>
                <li>
                  <T
                    nl="Herziening norm 3 · all-caps beleid · 20 min"
                    en="Review norm 3 · all-caps policy · 20 min"
                  />
                </li>
                <li>
                  <T
                    nl="Buurtborrel 26/4 · rolverdeling · 10 min"
                    en="Drinks 26/4 · role distribution · 10 min"
                  />
                </li>
                <li>
                  <T
                    nl="Rotatie: Ayse stapt uit in juni, werving nieuwe connector · 15 min"
                    en="Rotation: Ayse steps out in June, recruit new connector · 15 min"
                  />
                </li>
              </ol>
              <button className="mt-3 text-[12px] font-semibold text-[var(--color-civic)] underline">
                <T nl="Voeg agendapunt toe →" en="Add agenda item →" />
              </button>
            </div>

            <div className="border border-[#e6e2d6] bg-white rounded-xl p-4">
              <div className="font-serif italic text-[16px] mb-2">
                <T nl="Outreach · open" en="Outreach · open" />
              </div>
              <div className="space-y-3 text-[12.5px]">
                <div>
                  <div className="font-medium">Lena K. · Javastraat 143-2</div>
                  <div className="text-[11px] text-[#6b6658]">
                    <T
                      nl="Vouch-verzoek bij prof. Van Leeuwen · status: uitstaand"
                      en="Vouch request to prof. Van Leeuwen · status: pending"
                    />
                  </div>
                  <div className="text-[11px] text-[var(--color-civic)] mt-0.5">
                    <T
                      nl="Naar borrel 26/4 brengen voor 2e vouch"
                      en="Bring to drinks 26/4 for 2nd vouch"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-medium">Henk D. · Van der Pekstraat (Noord)</div>
                  <div className="text-[11px] text-[#6b6658]">
                    <T
                      nl="Offline-bezoek donderdag · digest-kopie + bin-reminder demo"
                      en="Offline visit Thursday · digest copy + bin-reminder demo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#e6e2d6] bg-white rounded-xl p-4">
              <div className="font-serif italic text-[16px] mb-2">
                <T nl="Community-norms" en="Community norms" />
              </div>
              <div className="text-[12px] text-[#3b3a35] leading-relaxed">
                <T
                  nl="De buurt-code is een levend document, editeerbaar via consultatie. Laatste wijziging: 14 apr — art. 7 over DV-zichtbaarheid."
                  en="The area code is a living document, editable via consultation. Last change: 14 Apr — art. 7 on DV visibility."
                />
              </div>
              <button className="text-[12px] text-[var(--color-civic)] underline mt-2">
                <T nl="Open buurt-code →" en="Open area code →" />
              </button>
            </div>

            <div className="border border-[#e6e2d6] bg-[var(--color-stoep-soft)]/40 rounded-xl p-4">
              <div className="font-serif italic text-[16px] mb-2">
                <T nl="Jouw weeksignalen" en="Your weekly signals" />
              </div>
              <div className="text-[12.5px] space-y-1.5 text-[#3b3a35]">
                <div>
                  <T
                    nl="· 7u 40m geregistreerd (doel 10u)"
                    en="· 7h 40m logged (target 10h)"
                  />
                </div>
                <div>
                  <T
                    nl="· 2 persoonlijke bezoeken gepland"
                    en="· 2 personal visits scheduled"
                  />
                </div>
                <div>
                  <T
                    nl="· 1 burnout-flag: neem morgen vrij?"
                    en="· 1 burnout flag: take tomorrow off?"
                  />
                </div>
              </div>
              <div className="text-[11px] text-[#6b6658] mt-3 italic">
                <T
                  nl="Burnout-flag wordt alleen aan jou getoond. De raad ziet alleen dat je tijd opneemt."
                  en="The burnout flag is only shown to you. The council only sees that you're taking time off."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-dashed border-[#d9d3c3] pt-6 text-[14px] text-[#3b3a35] max-w-3xl leading-relaxed">
          <h3 className="font-serif italic text-xl text-[var(--color-ink)] mb-2">
            <T
              nl={<>Wat dit dashboard <em>weigert</em> te zijn</>}
              en={<>What this dashboard <em>refuses</em> to be</>}
            />
          </h3>
          <p className="mb-2">
            <T
              nl="Geen cross-buurt vergelijking. Geen 'top-moderator'-leaderboard. Geen AI-auto-ban. Geen publieke moderation-log met namen. Geen KPI die Farida kan gamen door meer te verbergen."
              en="No cross-area comparison. No 'top moderator' leaderboard. No AI auto-ban. No public moderation log with names. No KPI Farida can game by hiding more."
            />
          </p>
          <p className="annot">
            <T
              nl="De keuze is principieel: moderatie is werk in een publieke rol, niet een productiviteits-sport. De zwaarste beslissingen horen bij de raad omdat één mens niet de grens moet trekken tussen 'luid' en 'discriminatoir'."
              en="The choice is principled: moderation is work in a public role, not a productivity sport. The heaviest decisions belong to the council because one person shouldn't draw the line between 'loud' and 'discriminatory'."
            />
          </p>
        </div>
      </div>
    </div>
  );
}
