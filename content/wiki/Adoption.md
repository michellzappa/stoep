# Adoption

The hard part isn't building Stoep. The hard part is getting buurten to actually use it. Nextdoor's lesson: presence ≠ adoption, and the failure mode is a ghost town or a complaint board.

Adoption comes from a reason to check it this week, not from "a better Nextdoor exists."

## What makes a buurt actually show up

### Anchor on existing buurt infrastructure

Every Amsterdam buurt already has WhatsApp groups, a buurtplatform, a buurtbudget, active bewonersinitiatieven, sometimes a buurtvereniging. Don't compete with WhatsApp; be the persistent layer *underneath* it — archive, map, directory, events — that WhatsApp is structurally bad at.

### Tie to buurtbudget / right-to-challenge

Amsterdam already gives buurten money to spend collectively. If Stoep is where proposals are posted, discussed, and voted on, it has a recurring reason to exist. **This is the single strongest hook.** See [[Open-data]] → Participation.

### Local civic utility, not social feed

Lost cats and "who's drilling at 22:00" are Nextdoor territory. The differentiated primitives are:

- shared tools library
- skill swaps
- gemeente-issue reporting with visible status (via Signalen)
- buurt events calendar
- local merchant directory
- AED / defibrillator map
- straatvertegenwoordigers directory

### Hyperlocal scope, federated reach

Default view is your straat + surrounding blocks, not the whole stadsdeel. The fediverse part means buurten can federate when relevant (city-wide topics) but daily use feels like ~200 neighbors, not 20,000. See [[Concepts]] → buurt-as-unit.

## Seeding strategy

This is where most projects die. The rule is: **one stadsdeel, then one buurt inside it.** Not Amsterdam-wide at launch.

### 1. Pick the right buurt

Existing civic density, not a blank canvas.

- Active bewonersinitiatief.
- Engaged stadsdeelcommissie.
- Ideally a physical buurthuis.
- Candidates often cited: Indische Buurt, Van der Pekbuurt, parts of Nieuw-West.

**Ask the stadsdeel directly** which buurten have the most active civic infrastructure. Don't pick based on data; pick based on people.

### 2. Co-design with 10–20 residents before coding

Not a survey. Actual sessions in the buurthuis.

- What do they currently do in WhatsApp that's broken?
- What do they wish existed?
- What would they lose if Stoep disappeared tomorrow?

This phase also creates your first 20 users, who feel ownership. That ownership is non-negotiable for what comes next.

### 3. Recruit buurtconnectors

3–5 trusted locals — often already running WhatsApp groups or active in the buurtvereniging — who onboard their networks.

- Pay them modestly, or give them moderator status with actual authority.
- This is how Nextdoor seeded in the US, and it replicates.
- Do not call them "ambassadors." Call them *buurtconnectors* or *straatvertegenwoordigers*.

### 4. Pair with a physical launch

- Buurtborrel at the buurthuis.
- Printed flyers with QR.
- Posters in the buurthuis and local supermarket.
- Coverage in the stadsdeelkrant.

Digital-only launches in neighborhoods almost always fail. See [[Risks-and-next-steps]].

### 5. Gemeente commits to using it

**Single biggest lever.** If the stadsdeel:

- Posts official buurt announcements there first.
- Handles meldingen responses there.
- Publishes buurtbudget proposals there for consultation.

…then residents have a reason beyond social. This is the fusion-with-municipal-function that path (b) of [[Risks-and-next-steps|the adoption graveyard]] requires.

## Design choices that shape appeal

| Choice | Why |
|---|---|
| Real names + BAG verification | Anonymity poisons buurt discourse. Verification is a trust advantage Nextdoor cannot match in NL. |
| Dutch-first, multilingual-capable | Auto-translation between NL/EN/AR/TR is a concrete feature WhatsApp groups don't offer. |
| Moderation as civic role | Moderators are neighbors with visible names under publicly written norms. Appeals go to a buurt council. |
| No algorithmic feed | Product differentiator and selling point to gemeente — no engagement-maximisation harms. |
| Offline bridges | Printed digest on the buurthuis noticeboard, SMS fallback for elderly residents. Solves the "only young techies" problem that kills these projects. |

See [[Concepts]] for depth on each.

## Adoption KPIs for the pilot

Not engagement. Not time-on-app. The only metrics that matter for a civic pilot:

- **% of buurt adults registered and verified** after 6 months. Target 15–25% for a real pilot; anything below 10% is a failing pilot.
- **% of active users per month** of the registered base. Target 40%+.
- **Number of meldingen submitted via Stoep** per month. Grows linearly = working civic layer.
- **Buurtbudget proposals submitted / discussed on Stoep.** This is the recurring-reason-to-return signal.
- **Retention at 3 months.** If this is high, the product is real. If low, the pilot failed and that's OK — now you know.
- **Buurtconnector survival.** If the 3–5 buurtconnectors are still engaged at month 6, the governance model holds.

Explicitly not KPIs: DAU, session length, posts-per-user, notifications-clicked. Optimising these destroys the thing you're building.

## Speculative but worth considering

- **Buurtpaspoort** as a lightweight verified identity that works across federated instances, so moving stadsdelen doesn't mean starting over. Could become a civic primitive beyond Stoep. See [[Concepts]].
- **Integration with Meldingen Openbare Ruimte.** If reporting a broken streetlight happens in Stoep and status updates are visible to the whole buurt, it becomes the default civic interface.

## Tags

#year/2026 #env/planning #city/amsterdam
