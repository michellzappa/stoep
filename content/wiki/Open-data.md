# Open Data

Amsterdam has unusually rich open data for a European city. Leaning on it is what turns Stoep from "another social app" into a civic interface that Nextdoor structurally cannot replicate.

## Primary sources

| Source | What's in it | API? | License |
|---|---|---|---|
| **data.amsterdam.nl** | Meldingen, buurt/wijk polygons, demographics, events, permits, construction, parking, trees, monuments | Yes, most datasets | Mostly CC0 or CC-BY |
| **Signalen (SIA)** | Amsterdam's open-source meldingen platform. The one to integrate deepest with | Yes | Open source |
| **BAG** (Basisregistratie Adressen en Gebouwen) | National: addresses, buildings | Yes | Open |
| **BGT** (Basisregistratie Grootschalige Topografie) | Topography, public space | Yes | Open |
| **BRK** (Basisregistratie Kadaster) | Cadastre | Paid, limited free | Restricted |
| **CBS buurt/wijk statistics** | Demographics, income, household composition at buurt level | Yes | Open |
| **Amsterdam OIS** (Onderzoek & Statistiek) | Surveys, leefbaarheidsindex, veiligheidsindex | Partial | Mixed |
| **Stadsarchief** | Historical photos, maps, documents per address | Yes | Varies per object |
| **Parkeren, afval, evenementen APIs** | Operational city data, frequently updated | Yes | Open |

Most Amsterdam open data is CC0 or CC-BY. Attribution is cheap; licensing is not a blocker. Budget real engineering time for the integration layer — APIs are decent but unevenly documented.

## How the data becomes product

### Identity and scoping

- **Buurt polygons.** Pull gemeente's own administrative boundaries. Every user's "local" is the administratively real buurt, which matches how gemeente communicates and budgets. See [[Concepts]] → buurt-as-unit.
- **BAG address verification.** The trust layer. You live at a real address in this buurt. See [[Concepts]] → buurtpaspoort.

### Civic layer (the differentiator)

- **Live Meldingen feed for the buurt.** Broken streetlights, overflowing bins, graffiti — pulled from Signalen with status updates. Residents see what neighbors reported and what gemeente is doing. This alone is a weekly reason to open the app.
- **Permits & construction.** Omgevingsvergunningen in your buurt surfaced automatically. On Nextdoor, "what's being built at number 47?" is a manual post. On Stoep it is ambient.
- **Evenementen.** Official events overlaid with resident-created ones.
- **Afvalkalender** per address, pulled from the gemeente API. Pushed reminders; neighbor-visible "who's putting out the big bin on Thursday" coordination.
- **Parking zone changes, road closures, tram diversions** — all API-available.

### Place and history

- **Straatgeschiedenis.** Every address has a Stadsarchief lookup: historical photos of your street, old maps, who lived there. Hugely engaging, zero effort to populate, impossible for Nextdoor to match. See [[Concepts]] → straatgeschiedenis.
- **Monument status, tree species on your street, year of construction** — ambient context that makes the platform feel rooted in place.

### Demographics and leefbaarheid — handle carefully

- Buurt-level CBS/OIS stats as context, not as judgement. "Your buurt has X% households with children under 12" helps a parent find playmates; "leefbaarheidsscore 6.2" risks stigmatization. Surface selectively. Never score a buurt publicly.

### Participation

- **Buurtbudget proposals and voting**, pulled from or pushed to the gemeente participation infrastructure.
- **Right-to-challenge submissions.**
- **Inspraak / consultations** scoped to the buurt — currently buried on amsterdam.nl, could live where residents actually are.

## Data-shaped features that don't exist yet

- **[[Concepts|Buurt digest]].** Weekly auto-generated summary: 3 meldingen resolved, 2 new permits, 1 upcoming evenement, 1 historical photo of a street in your buurt. Printed version on the buurthuis noticeboard. Almost entirely machine-generated.
- **[[Concepts|Straatgeschiedenis]].** Per-street timeline combining Stadsarchief, permit history, and resident contributions.
- **Boom van de week.** The city publishes tree data; a small feature highlighting one tree in your buurt builds attachment to place. Sounds trivial, works.
- **Afval reminders tied to your address**, with neighbor-visible "who's putting out the big bin on Thursday" coordination.

## Architectural principle

The platform is a *read-and-write* interface over gemeente data, not a silo.

- Meldingen created in Stoep flow to Signalen.
- Buurtbudget votes flow to the participation backend.
- This makes Stoep genuinely useful to the gemeente (higher-quality civic input) and genuinely useful to residents (one place instead of six portals).

Build the integration layer as a separate AGPL-licensed service, usable by other buurtplatforms and other gemeentes. See [[Technical-stack]].

## Spike priorities

For the 1-week technical spike, validate in this order:

1. **Signalen meldingen by buurt polygon.** Highest weekly-use value, most differentiated.
2. **BAG address verification flow.** Gates everything; derisk early.
3. **Omgevingsvergunningen surfacing.** High passive-engagement value.
4. **Stadsarchief photo lookup by address.** High delight value, proves the "rooted in place" story.

If any of these four have blockers, the product story weakens significantly. If all four work, the civic integration layer is a concrete deliverable for funders.

## Allies to talk to

- **Waag Futurelab.** Worked on open data civic interfaces, has relationships with gemeente data teams.
- **Amsterdam Economic Board.** Cross-cutting convener, useful for introductions.
- **Open State Foundation.** National civic tech context, open data advocacy.
- **Common Ground community.** See [[Technical-stack]] — reference implementation story sits here.

## Tags

#year/2026 #env/planning #city/amsterdam
