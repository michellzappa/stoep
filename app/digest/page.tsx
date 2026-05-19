import { TopBar, PageHeader } from "../components/Nav";
import { PhoneFrame } from "../components/PhoneFrame";
import { AppTopBar, TabBar } from "../components/PhoneChrome";
import { T } from "../lib/i18n";

function Stat({ n, label }: { n: string; label: React.ReactNode }) {
  return (
    <div className="flex-1">
      <div className="font-serif italic text-3xl text-[var(--color-stoep)] leading-none">{n}</div>
      <div className="text-[10px] uppercase tracking-widest text-[#6b6658] mt-1">{label}</div>
    </div>
  );
}

function Section({
  title,
  meta,
  children,
}: {
  title: React.ReactNode;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 py-4 border-b border-[#ececec]">
      <div className="flex items-baseline justify-between mb-2">
        <div className="font-serif italic text-[15px]">{title}</div>
        {meta && <div className="text-[10px] uppercase tracking-widest text-[#6b6658]">{meta}</div>}
      </div>
      <div className="text-[12.5px] leading-relaxed text-[#23251f]">{children}</div>
    </div>
  );
}

export default function DigestMock() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <PageHeader
        eyebrow={
          <T
            nl="Mock 03 · Zaterdagochtend · week 17"
            en="Mock 03 · Saturday morning · week 17"
          />
        }
        title={
          <T
            nl="Buurt-digest — de wekelijkse ambient"
            en="Neighborhood digest — the weekly ambient"
          />
        }
        subtitle={
          <T
            nl="Bijna volledig machine-gegenereerd uit open data. Eén scherm dat samenvat wat er die week in de Indische Buurt gebeurd is: meldingen opgelost, nieuwe vergunningen, evenementen, één historische foto, één buurtbudget-voorstel. Dezelfde layout gaat woensdag als A4 naar het buurthuis-prikbord en als PDF naar Mehmets bakkerij."
            en="Almost entirely machine-generated from open data. One screen summarizing what happened in the Indische Buurt that week: reports resolved, new permits, events, one historical photo, one neighborhood-budget proposal. The same layout goes Wednesday as an A4 to the community-center noticeboard and as a PDF to Mehmet's bakery."
          />
        }
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 flex gap-10 flex-wrap">
        <PhoneFrame
          title={<T nl="Digest" en="Digest" />}
          caption={
            <T
              nl="Week-digest · Indische Buurt · 18–24 april 2026"
              en="Weekly digest · Indische Buurt · 18–24 April 2026"
            />
          }
          annot={
            <T
              nl="Eén scrollbaar item, zes secties. Geen notificaties, geen CTA-druk. De digest is óók de reden om de app te openen als er geen resident-activiteit is."
              en="One scrollable item, six sections. No notifications, no CTA pressure. The digest is also the reason to open the app when there is no resident activity."
            />
          }
        >
          <AppTopBar
            left={<span>􀆉</span>}
            center={<T nl="Buurt-digest" en="Neighborhood digest" />}
            right={<span>􀈂</span>}
          />

          <div className="px-4 py-5 bg-[var(--color-stoep-soft)]/50 border-b border-[#e6e2d6]">
            <div className="text-[10px] uppercase tracking-widest text-[#7a3418]">
              <T
                nl="Week 17 · 18–24 april 2026"
                en="Week 17 · 18–24 April 2026"
              />
            </div>
            <div className="font-serif italic text-[22px] leading-tight mt-1">
              <T
                nl="Wat er deze week in de Indische Buurt gebeurde"
                en="What happened in the Indische Buurt this week"
              />
            </div>
            <div className="text-[11px] text-[#6b6658] mt-2">
              <T
                nl="Automatisch samengesteld uit gemeente-data, aangevuld door buurtconnectors · 12.4k weergaven buurtbreed"
                en="Automatically compiled from municipal data, enriched by neighborhood connectors · 12.4k views area-wide"
              />
            </div>
          </div>

          <div className="flex gap-2 px-4 py-4 border-b border-[#ececec]">
            <Stat n="4" label={<T nl="Meldingen opgelost" en="Reports resolved" />} />
            <Stat n="2" label={<T nl="Nieuwe vergunningen" en="New permits" />} />
            <Stat n="1" label={<T nl="Buurtborrel" en="Social" />} />
            <Stat n="37" label={<T nl="Nieuwe posts" en="New posts" />} />
          </div>

          <Section
            title={<T nl="Meldingen · opgelost deze week" en="Reports · resolved this week" />}
            meta="Signalen"
          >
            <ul className="space-y-1.5">
              <li>
                •{" "}
                <T
                  nl="Kapotte lantaarn · Borneostraat 44"
                  en="Broken streetlight · Borneostraat 44"
                />{" "}
                <span className="text-[#4a6b3a]">
                  · <T nl="2 dagen" en="2 days" />
                </span>
              </li>
              <li>
                • <T nl="Graffiti · Celebesstraat 8" en="Graffiti · Celebesstraat 8" />{" "}
                <span className="text-[#4a6b3a]">
                  · <T nl="4 dagen" en="4 days" />
                </span>
              </li>
              <li>
                •{" "}
                <T
                  nl="Overvolle prullenbak · Javaplein"
                  en="Overfull bin · Javaplein"
                />{" "}
                <span className="text-[#4a6b3a]">
                  · <T nl="1 dag" en="1 day" />
                </span>
              </li>
              <li>
                •{" "}
                <T
                  nl="Losliggende stoeptegel · Sumatrastraat 21"
                  en="Loose pavement tile · Sumatrastraat 21"
                />{" "}
                <span className="text-[#4a6b3a]">
                  · <T nl="3 dagen" en="3 days" />
                </span>
              </li>
            </ul>
            <div className="text-[11px] text-[#6b6658] mt-2">
              <T
                nl="Mediane reactietijd: 2,4 dagen · buurt-gemiddelde dit jaar: 3,1 dagen"
                en="Median response time: 2.4 days · area average this year: 3.1 days"
              />
            </div>
          </Section>

          <Section
            title={<T nl="In behandeling" en="In progress" />}
            meta={<T nl="3 open" en="3 open" />}
          >
            <ul className="space-y-1.5">
              <li>
                •{" "}
                <T
                  nl="Kapotte schommel · Speeltuin Javaplein"
                  en="Broken swing · Javaplein playground"
                />{" "}
                <span className="text-[#b54a2a]">
                  · <T nl="dag 2" en="day 2" />
                </span>
              </li>
              <li>
                • <T nl="Fietswrak · Balistraat 58" en="Bike wreck · Balistraat 58" />{" "}
                <span className="text-[#b54a2a]">
                  · <T nl="dag 5" en="day 5" />
                </span>
              </li>
              <li>
                •{" "}
                <T
                  nl="Gat in fietspad · Insulindeweg 112"
                  en="Pothole in bike path · Insulindeweg 112"
                />{" "}
                <span className="text-[#b54a2a]">
                  · <T nl="dag 1" en="day 1" />
                </span>
              </li>
            </ul>
          </Section>

          <Section
            title={<T nl="Vergunningen" en="Permits" />}
            meta={<T nl="Omgevingsloket" en="Omgevingsloket" />}
          >
            <div className="space-y-2">
              <div>
                <div className="font-medium">
                  <T nl="Dakopbouw · Sumatrastraat 27" en="Roof extension · Sumatrastraat 27" />
                </div>
                <div className="text-[11px] text-[#6b6658]">
                  <T
                    nl="Aangevraagd 14 apr · bezwaartermijn tot 26 mei"
                    en="Applied 14 Apr · objection period until 26 May"
                  />
                </div>
              </div>
              <div>
                <div className="font-medium">
                  <T
                    nl="Horeca-terras uitbreiding · Javastraat 112"
                    en="Café terrace extension · Javastraat 112"
                  />
                </div>
                <div className="text-[11px] text-[#6b6658]">
                  <T
                    nl="Verleend · publicatie deze week"
                    en="Granted · published this week"
                  />
                </div>
              </div>
            </div>
          </Section>

          <Section
            title={<T nl="Stadsarchief — foto van de week" en="City archive — photo of the week" />}
            meta={<T nl="Javastraat · 1962" en="Javastraat · 1962" />}
          >
            <div className="h-44 rounded-lg bg-gradient-to-br from-[#c7b99a] via-[#a8946b] to-[#6b5a3d] relative overflow-hidden mt-1">
              <div className="absolute inset-0 flex items-end p-3">
                <div className="text-white text-[11px] bg-black/40 px-2 py-1 rounded">
                  <T
                    nl="Slagerij Smit — waar nu Anatolia staat · foto: J. van Duijn"
                    en="Butcher Smit — where Anatolia stands today · photo: J. van Duijn"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 text-[12px] text-[#3b3a35]">
              <T
                nl="Op nummer 74 zat in 1962 een slagerij. Vandaag is het Bakkerij Anatolia van Mehmet. Heeft iemand nog foto's uit de tussenliggende jaren?"
                en="In 1962, number 74 was a butcher's shop. Today it's Mehmet's Bakery Anatolia. Does anyone have photos from the years in between?"
              />
            </div>
            <button className="text-[12px] text-[var(--color-civic)] underline mt-2">
              <T
                nl="Bijdragen aan de straatgeschiedenis →"
                en="Contribute to the street history →"
              />
            </button>
          </Section>

          <Section
            title={<T nl="Buurtbudget · open voor stem" en="Neighborhood budget · open for votes" />}
            meta={<T nl="Sluit vrijdag" en="Closes Friday" />}
          >
            <div className="rounded-lg border border-[var(--color-stoep-soft)] bg-[var(--color-stoep-soft)]/30 p-3">
              <div className="font-medium">
                <T
                  nl="Verlenging openingstijden speeltuin Javaplein tot 20:00 (zomer)"
                  en="Extend Javaplein playground hours to 20:00 (summer)"
                />
              </div>
              <div className="text-[11px] text-[#6b6658] mt-1">
                <T
                  nl="€2.400 · 47 van 120 stemmen · Buurtvereniging IB-Oost"
                  en="€2,400 · 47 of 120 votes · Neighborhood Association IB-Oost"
                />
              </div>
              <button className="mt-2 text-[12px] font-semibold text-[var(--color-stoep)] underline">
                <T nl="Lees & stem" en="Read & vote" />
              </button>
            </div>
          </Section>

          <Section
            title={<T nl="Evenementen" en="Events" />}
            meta={<T nl="Deze week" en="This week" />}
          >
            <ul className="space-y-1.5">
              <li>
                <T
                  nl="• Vr 26/4 · Buurtborrel · De Badkuip · 17:00"
                  en="• Fri 26/4 · Neighborhood drinks · De Badkuip · 17:00"
                />
              </li>
              <li>
                <T
                  nl="• Za 27/4 · Taalcafé · Buurthuis IJsselstraat · 14:00"
                  en="• Sat 27/4 · Language café · Community house IJsselstraat · 14:00"
                />
              </li>
              <li>
                <T
                  nl="• Zo 28/4 · Ruilmarkt voor kinderen · Javaplein · 11:00"
                  en="• Sun 28/4 · Kids' swap market · Javaplein · 11:00"
                />
              </li>
            </ul>
          </Section>

          <Section
            title={<T nl="Boom van de week" en="Tree of the week" />}
            meta={<T nl="Open data · bomenregister" en="Open data · tree register" />}
          >
            <div className="flex gap-3 items-start">
              <div className="w-16 h-16 rounded-lg bg-[#dfe6d5] flex items-center justify-center text-2xl text-[#4a6b3a]">
                􁒊
              </div>
              <div>
                <div className="font-medium">
                  <T
                    nl="Plataan · Sumatrastraat, ter hoogte van 40"
                    en="Plane tree · Sumatrastraat, near no. 40"
                  />
                </div>
                <div className="text-[11px] text-[#6b6658] mt-0.5">
                  <T
                    nl="Geplant ±1953 · omtrek 286 cm · monumentale status aangevraagd"
                    en="Planted ±1953 · circumference 286 cm · monumental status applied for"
                  />
                </div>
              </div>
            </div>
          </Section>

          <div className="px-4 py-5 text-center text-[11px] text-[#6b6658] bg-[#fafaf7]">
            <T
              nl="Deze digest is automatisch gegenereerd. Bezorgd als print op zaterdag bij:"
              en="This digest is automatically generated. Delivered as print on Saturday at:"
            />
            <br />
            <T
              nl="Buurthuis Tugela · Bibliotheek Javaplein · Bakkerij Anatolia · AH Niasstraat"
              en="Community house Tugela · Javaplein library · Bakery Anatolia · AH Niasstraat"
            />
          </div>
          <div className="h-24" />
          <TabBar active="buurt" />
        </PhoneFrame>

        <div className="max-w-sm space-y-4 text-[14px] leading-relaxed text-[#3b3a35] pt-2">
          <h3 className="font-serif italic text-xl text-[var(--color-ink)]">
            <T nl="De digest is de motor" en="The digest is the engine" />
          </h3>
          <p>
            <T
              nl="Elke sectie is een "
              en="Each section is an "
            />
            <strong>
              <T nl="open-data-hook" en="open-data hook" />
            </strong>
            <T
              nl=": Signalen (meldingen), Omgevingsloket (vergunningen), Stadsarchief (foto), gemeente-participatie (buurtbudget), bomenregister (Boom van de week), evenementen-API. Één laag code per hook, daarna schaalt de digest zichzelf."
              en=": Signalen (reports), Omgevingsloket (permits), City Archive (photo), municipal participation backend (budget), tree register (Tree of the week), events API. One layer of code per hook, after that the digest scales itself."
            />
          </p>
          <p>
            <T
              nl="Dit is ook het "
              en="This is also the "
            />
            <strong>
              <T nl="offline-bridge" en="offline bridge" />
            </strong>
            <T
              nl="-primitief. Dezelfde data wordt zaterdag als A4 geprint en opgehangen in buurthuis, bibliotheek, supermarkt, bakkerij — Henk (78) leest de digest zonder ooit de app te openen."
              en=" primitive. The same data is printed as A4 on Saturday and posted at the community house, library, supermarket, bakery — Henk (78) reads the digest without ever opening the app."
            />
          </p>
          <p>
            <strong>
              <T nl="Voor de gemeente:" en="For the municipality:" />
            </strong>{" "}
            <T
              nl="een publiek verantwoordings-instrument dat niemand hoeft te bouwen. 'Mediane reactietijd: 2,4 dagen' is een feit dat elke week verschijnt — niet als dashboard, maar als buurt-leesstof."
              en="a public accountability instrument nobody needs to build. 'Median response time: 2.4 days' is a fact that publishes weekly — not as a dashboard, but as reading material for the area."
            />
          </p>
          <div className="border-t border-dashed border-[#d9d3c3] pt-4 mt-4 annot">
            <T
              nl="Ontwerp-vraag: hoe voorkomen we dat slechte-week-metrics een shaming-effect krijgen tussen buurten? Waarschijnlijk: geen cross-buurt vergelijking publiceren."
              en="Design question: how do we prevent bad-week metrics from shaming one area vs another? Probably: don't publish cross-area comparisons."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
