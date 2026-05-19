import { TopBar, PageHeader } from "../components/Nav";
import { PhoneFrame } from "../components/PhoneFrame";
import { AppTopBar, TabBar, BuurtHeader } from "../components/PhoneChrome";
import { T } from "../lib/i18n";

function PostCard({
  author,
  address,
  when,
  chip,
  body,
  replies,
  avatar,
  ghost,
}: {
  author: string;
  address: React.ReactNode;
  when: React.ReactNode;
  chip?: { label: React.ReactNode; kind: "biz" | "moss" | "ghost" };
  body: React.ReactNode;
  replies?: number;
  avatar: string;
  ghost?: boolean;
}) {
  return (
    <div className={`px-4 py-4 ${ghost ? "bg-[#fafaf7]" : ""}`}>
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold text-white shrink-0"
          style={{ background: avatar }}
        >
          {author
            .split(" ")
            .map((s) => s[0])
            .join("")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-[13px]">{author}</span>
            {chip?.kind === "biz" && <span className="chip">􀐫 {chip.label}</span>}
            {chip?.kind === "moss" && <span className="chip chip-moss">{chip.label}</span>}
            {chip?.kind === "ghost" && <span className="chip chip-ghost">{chip.label}</span>}
          </div>
          <div className="text-[11px] text-[#6b6658] mb-1">
            {address} · {when}
          </div>
          <div className="text-[13.5px] leading-relaxed text-[#23251f]">{body}</div>
          {replies !== undefined && (
            <div className="text-[11px] text-[#6b6658] mt-3 flex gap-4">
              <span>
                􀌤 {replies} <T nl="reacties" en="replies" />
              </span>
              <span>
                􀈂 <T nl="Delen" en="Share" />
              </span>
              <span>
                􁁛 <T nl="Opslaan" en="Save" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CivicCard({
  icon,
  kind,
  title,
  meta,
  body,
  cta,
  color = "civic",
}: {
  icon: string;
  kind: React.ReactNode;
  title: React.ReactNode;
  meta: React.ReactNode;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  color?: "civic" | "stoep" | "moss";
}) {
  const bg =
    color === "civic"
      ? "bg-[var(--color-civic-soft)]/50 border-[var(--color-civic-soft)]"
      : color === "moss"
        ? "bg-[#dfe6d5]/50 border-[#dfe6d5]"
        : "bg-[var(--color-stoep-soft)]/50 border-[var(--color-stoep-soft)]";
  return (
    <div className={`mx-4 my-3 rounded-xl border ${bg} p-3`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base">{icon}</span>
        <span className="text-[10px] uppercase tracking-widest text-[#164a72]">{kind}</span>
      </div>
      <div className="font-semibold text-[13.5px] leading-snug">{title}</div>
      <div className="text-[11px] text-[#6b6658] mt-0.5">{meta}</div>
      {body && <div className="text-[13px] text-[#23251f] mt-2 leading-relaxed">{body}</div>}
      {cta && (
        <button className="mt-3 text-[12px] font-semibold text-[var(--color-civic)] underline underline-offset-2">
          {cta} →
        </button>
      )}
    </div>
  );
}

export default function FeedMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={
          <T
            nl="Mock 01 · Aisha · maandagavond 21:18"
            en="Mock 01 · Aisha · Monday evening 21:18"
          />
        }
        title={
          <T
            nl="Buurt-feed — chronologisch, geen ranking"
            en="Neighborhood feed — chronological, no ranking"
          />
        }
        subtitle={
          <T
            nl="Aisha opent Stoep na de bedtijd van haar kinderen. Twee resident-posts sinds zondag, een paar civic-items ertussen. Geen 'trending', geen 'For You', geen follower-aantallen. De feed is proximity-scoped (Javastraat + aangrenzende blokken, ±230 actieve buren) en voelt kleiner dan één WhatsApp-groep."
            en="Aisha opens Stoep after her kids' bedtime. Two resident posts since Sunday, a few civic items interleaved. No 'trending', no 'For You', no follower counts. The feed is proximity-scoped (Javastraat + adjacent blocks, ±230 active neighbors) and feels smaller than one WhatsApp group."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 flex gap-12 flex-wrap">
        <PhoneFrame
          title="Indische Buurt"
          caption={<T nl="State A — feed bij opening" en="State A — feed on open" />}
          annot={
            <T
              nl="Gemengd: resident-post, civic-item (Signalen-melding van buur), resident-post met bedrijfspaspoort-markering. Chip-taal maakt de herkomst zichtbaar zonder te shouten."
              en="Mixed: resident post, civic item (Signalen report from a neighbor), resident post with business-passport marking. Chip taxonomy makes origin visible without shouting."
            />
          }
        >
          <AppTopBar
            left={<T nl="Kaart" en="Map" />}
            center="Stoep"
            right={<span>􀌏</span>}
          />
          <BuurtHeader />

          <div className="divider" />
          <PostCard
            author="Sanne V."
            address={<T nl="Javastraat 181 · 3 deuren verderop" en="Javastraat 181 · 3 doors down" />}
            when={<T nl="Zo · 20:42" en="Sun · 20:42" />}
            avatar="#4a6b3a"
            body={
              <T
                nl="Wie heeft er nog een peuter-fietszitje liggen dat weg kan? Die van ons is te klein geworden, zoek er een voor Mila (2)."
                en="Anyone got a toddler bike seat they no longer need? Ours is too small now, looking for one for Mila (2)."
              />
            }
            replies={4}
          />
          <div className="divider" />

          <CivicCard
            icon="􀑁"
            kind={<T nl="Melding · Signalen" en="Report · Signalen" />}
            title={
              <T
                nl="Kapotte schommel gemeld in speeltuin Javaplein"
                en="Broken swing reported in Javaplein playground"
              />
            }
            meta={
              <T
                nl="Door Aisha R. · 1 uur geleden · 3 buren bevestigen"
                en="By Aisha R. · 1h ago · 3 neighbors confirm"
              />
            }
            body={
              <T
                nl="Status: In behandeling (gemeente · afdeling Groen). Verwachte reactie: 3 werkdagen."
                en="Status: In progress (municipality · Green works). Expected response: 3 working days."
              />
            }
            cta={<T nl="Ik zie hem ook" en="I see it too" />}
          />

          <div className="divider" />
          <PostCard
            author="Mehmet A."
            address={<T nl="Bakkerij Anatolia · Javastraat 74" en="Bakery Anatolia · Javastraat 74" />}
            when={<T nl="Ma · 06:12" en="Mon · 06:12" />}
            avatar="#b54a2a"
            chip={{
              label: <T nl="Werkt in de buurt" en="Works in the area" />,
              kind: "biz",
            }}
            body={
              <T
                nl="Deze week verse simit op dinsdag en donderdag. Ook Ramadan-broodjes beschikbaar."
                en="This week fresh simit on Tuesday and Thursday. Ramadan breads also available."
              />
            }
            replies={2}
          />
          <div className="divider" />

          <CivicCard
            icon="􀤂"
            kind={<T nl="Buurtbudget — open voor stem" en="Neighborhood budget — open for voting" />}
            title={
              <T
                nl="Verlenging openingstijden speeltuin Javaplein tot 20:00 (zomer)"
                en="Extend Javaplein playground hours to 20:00 (summer)"
              />
            }
            meta={
              <T
                nl="Voorstel · €2.400 · sluit vrijdag 24 april"
                en="Proposal · €2,400 · closes Friday 24 April"
              />
            }
            body={
              <T
                nl="Ingediend door Buurtvereniging IB-Oost. 47 stemmen tot nu toe (quorum 120)."
                en="Submitted by Neighborhood Association IB-Oost. 47 votes so far (quorum 120)."
              />
            }
            cta={<T nl="Lees voorstel · stem" en="Read proposal · vote" />}
            color="stoep"
          />

          <div className="divider" />
          <PostCard
            author="Joris M."
            address="Balistraat 12"
            when={<T nl="Ma · 19:55" en="Mon · 19:55" />}
            avatar="#1e5a8a"
            body={
              <T
                nl="Iemand ervaring met de nieuwe parkeergarage Oostpoort? Werkt de app wel op Android?"
                en="Anyone with experience at the new Oostpoort parking garage? Does the app actually work on Android?"
              />
            }
            replies={7}
          />
          <div className="divider" />

          <CivicCard
            icon="􀇾"
            kind={<T nl="Omgevingsvergunning" en="Building permit" />}
            title={
              <T
                nl="Dakopbouw aangevraagd · Sumatrastraat 27"
                en="Roof extension applied for · Sumatrastraat 27"
              />
            }
            meta={
              <T
                nl="Aangevraagd 14 april · bezwaartermijn tot 26 mei"
                en="Applied 14 April · objection period until 26 May"
              />
            }
            cta={<T nl="Bekijk op gemeente" en="View on municipal site" />}
            color="moss"
          />

          <div className="divider" />
          <PostCard
            author="Farida K."
            address={<T nl="Buurtconnector · Indische Buurt" en="Neighborhood-connector · Indische Buurt" />}
            when={<T nl="Ma · 20:10" en="Mon · 20:10" />}
            avatar="#7a3418"
            chip={{
              label: <T nl="Buurtconnector" en="Connector" />,
              kind: "moss",
            }}
            body={
              <T
                nl="Volgende buurtborrel: vrijdag 26/4, 17:00 bij De Badkuip. Gratis, iedereen welkom. Ik ben er tot 19:30 voor vragen over Stoep — kom langs, geen aanmelding nodig."
                en="Next neighborhood drinks: Friday 26/4, 17:00 at De Badkuip. Free, everyone welcome. I'll be there until 19:30 for Stoep questions — drop by, no sign-up needed."
              />
            }
            replies={11}
          />
          <div className="h-24" />
          <TabBar active="feed" />
        </PhoneFrame>

        <div className="max-w-sm space-y-4 text-[14px] leading-relaxed text-[#3b3a35] pt-2">
          <h3 className="font-serif italic text-xl text-[var(--color-ink)]">
            <T nl="Wat deze feed bewijst" en="What this feed demonstrates" />
          </h3>
          <p>
            <strong>
              <T nl="Dichtheid zonder druk." en="Density without pressure." />
            </strong>{" "}
            <T
              nl="Binnen zes items zit: ruilen (fietszitje), publieke infrastructuur (melding), lokaal ondernemen (bedrijfspaspoort), civic-participatie (buurtbudget), omgeving (vergunning), sociaal weefsel (borrel). Geen enkel item duwt Aisha om te posten."
              en="Within six items: giveaway (bike seat), public infrastructure (report), local business (business-passport), civic participation (neighborhood budget), environment (permit), social fabric (drinks). Not one item pushes Aisha to post."
            />
          </p>
          <p>
            <strong>
              <T nl="Herkomst is zichtbaar." en="Provenance is visible." />
            </strong>{" "}
            <T
              nl="Chips tonen waar een post vandaan komt: een resident, een bedrijfspaspoort, een buurtconnector, een gemeente-systeem. Dit is de anti-engagement-stance als UI-primitief."
              en="Chips show where a post comes from: a resident, a business-passport, a connector, a municipal system. This is the anti-engagement stance as a UI primitive."
            />
          </p>
          <p>
            <strong>
              <T nl="Civic-items zijn niet ads." en="Civic items are not ads." />
            </strong>{" "}
            <T
              nl="Ze zijn de reden dat Aisha opent, ook als er geen resident-activiteit is. Het buurt-digest (mock 03) is dezelfde logica wekelijks verpakt."
              en="They are the reason Aisha opens the app, even with no resident activity. The neighborhood digest (mock 03) is the same logic packaged weekly."
            />
          </p>
          <div className="border-t border-dashed border-[#d9d3c3] pt-4 mt-4 annot">
            <T
              nl="Open vraag voor gemeente: willen we Signalen-items standaard zichtbaar maken voor de hele buurt, of alleen voor de melder en buren binnen 50m? AVG-check nodig."
              en="Open question for the municipality: should Signalen items be visible to the whole area by default, or only to the reporter and neighbors within 50m? GDPR check required."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
