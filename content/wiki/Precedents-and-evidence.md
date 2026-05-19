# Precedents and Evidence

[[Risks-and-next-steps|The graveyard]] covers what failed. This file covers what works — internationally — and what the research actually says about the underlying social goals.

## International civic-tech precedents

Positive comparables. Every one of these is running, studied, and instructive.

### Decidim — Barcelona, then global

- **What:** open-source civic participation platform. Ruby on Rails. Free software under AGPL.
- **Origin:** Barcelona en Comú, 2016. Decidim Barcelona became the reference deployment.
- **Scale:** used by hundreds of municipalities including Helsinki, Mexico City, NYC Civic Engagement Commission, Milan, Lisbon, Zurich, many Dutch pilots.
- **Why it matters to Stoep:**
  - Proves a municipal commons software project can become international infrastructure.
  - AGPL, meta-governance (the Decidim Association), residents-first framing are all patterns to borrow.
  - The weakness: Decidim is *participation* first (voting, proposals), not *neighborhood social* first. Stoep's differentiation is the day-to-day civic/social layer underneath the participation features. Decidim-style features could plug in *on top* of Stoep.
- **Relationship:** study Decidim's statuten and governance model. Possibly federate with Decidim instances for cross-cutting consultation.

### Consul / Decide Madrid

- **What:** open-source participation software, similar space to Decidim.
- **Origin:** Madrid, 2015.
- **Status:** still deployed in many cities, though Decide Madrid itself has waned with political changes in Madrid.
- **Lesson:** political sponsorship matters. A platform tied to one administration's identity becomes vulnerable when politics shift. Stoep should be cross-party legible from day one.

### vTaiwan / Polis

- **What:** deliberation tool that surfaces consensus across factions rather than maximising engagement.
- **Origin:** Taiwan's g0v civic-hacker community, 2014.
- **Use cases:** Uber regulation, alcohol sales, youth policy — each produced implementable consensus.
- **Why it matters:** the Polis algorithm is the only widely-adopted civic-tech primitive that *actively reduces* polarisation. Could be a Stoep primitive for buurt-level consultations with genuine disagreement.
- **Available:** Polis is open source (compDemocracy/polis). Low-cost to integrate.

### Commonplace (UK)

- **What:** place-based engagement platform used by UK councils and developers.
- **Status:** commercial, closed.
- **Lesson:** the market exists. The UK has paid for this category. But the closed commercial model has limits Stoep's open model can exceed.

### CitizenLab

- **What:** commercial civic engagement platform, Belgian-origin, used across EU.
- **Lesson:** similar to Commonplace. Demonstrates municipal willingness to pay for this category; justifies Stoep's open alternative.

### Meta-Gov and the civic fediverse

- **Meta-Gov** is a research collective studying online governance. Good source for governance design literature.
- Several fediverse instances are explicitly civic: social.coop, climatejustice.rocks, various gemeente experiments. None yet at Stoep's proposed depth of integration with municipal data.

### SocialHub / Fediverse governance

- **Lesson:** ActivityPub ecosystem has mature governance practices around defederation, consent, and cross-instance moderation. Stoep should join these conversations early, not reinvent.

### Buurtgericht.nu and Dutch buurt initiatives

- **Buurtgericht.nu, Buurtwerkplaats**, various Dutch buurt-tech projects.
- **Status:** mixed, often small and local.
- **Lesson:** there's Dutch-specific language and design vocabulary already developed. Study before building.

## Research base: social capital, cohesion, eenzaamheid

Stoep needs to land inside a policy frame, not just a tech frame. What does the literature actually say?

### Putnam — *Bowling Alone* (2000) and after

- **Bridging vs bonding capital.** Bonding = within-group, bridging = across-group. Neighborhoods are primarily bonding territory but need bridging for cohesion.
- **Decline of civic participation.** Putnam's thesis is contested but the directional trend is real in NL data too.
- **Implication for Stoep:** must create *bridging* opportunities (cross-cultural, cross-age, cross-class) to be a civic good rather than a clustering amplifier.

### Ostrom — *Governing the Commons* (1990)

- **Design principles for commons:** clear boundaries, local governance, conflict resolution, graduated sanctions, nested institutions.
- **Applicability:** Stoep is a digital commons. Ostrom's principles apply directly. [[Governance]] should be readable as a Dutch municipal implementation of Ostrom's design principles.
- **Key insight:** commons work when governance is *close to the resource*. Stoep's buurt-council-first model fits.

### SCP (Sociaal en Cultureel Planbureau)

- Dutch government research bureau. Publishes regularly on sociale samenhang, vertrouwen, civic participation.
- **Relevant publications:** *Burgerperspectieven*, quarterly; *De sociale staat van Nederland*, periodic; specific studies on buurt-level cohesion.
- **Data point (worth verifying for the pitch):** trust in neighbors in NL has been declining, particularly in urban buurten with high population churn. Stoep's pitch lands squarely on this.

### Movisie

- Dutch knowledge institute for social issues. Their work on eenzaamheid, buurtinitiatieven, and vrijwilligerswerk is the applied-research backbone for any Dutch civic-infrastructure pitch.
- **Relevant:** what interventions actually reduce loneliness? Evidence is thin; most things don't work; sustained, low-pressure, low-threshold contact works better than programmatic interventions. Stoep's design — ambient, low-pressure, local — fits this evidence better than most alternatives.

### RIVM and GGD Amsterdam

- **RIVM:** data on neighborhood health, wellbeing, isolation.
- **GGD Amsterdam:** *Amsterdamse Gezondheidsmonitor*, buurt-level wellbeing data.
- **Use:** baseline data for pilot buurt selection and outcome measurement. Stoep can tie into GGD outcome measurement rather than inventing its own.

### Academic work on thin trust and parochial trust

- Literature distinguishes *thick trust* (close relationships), *thin trust* (generalised trust in strangers), *parochial trust* (trust within local community).
- Stoep's design target is **parochial trust infrastructure** — the "I know this is a real neighbor even if I don't know them personally" layer.
- Worth referencing in the pitch as a specific policy goal.

### DSA, AVG, and regulatory context

- **DSA (Digital Services Act):** Stoep is small enough to be exempt from most provisions. Still worth voluntarily adopting DSA-style transparency as credibility signal.
- **AVG / GDPR:** full compliance is table stakes. Stoep should exceed it, publicly.
- **NL-specific:** AP (Autoriteit Persoonsgegevens) guidance on buurt-apps and neighborhood platforms. Check for existing opinions.

## Policy outcomes Stoep should claim

What a policy-maker can write in a memo to justify funding, grounded in the research above:

1. **Increase parochial trust** in participating buurten (measurable via GGD monitor, survey before/after).
2. **Reduce eenzaamheid among at-risk demographics** (elderly, newcomers, single parents), via ambient buurt connection. Evidence base exists; intervention shape fits.
3. **Increase quality and legitimacy of civic participation** in buurtbudget, inspraak, and right-to-challenge processes — via visible, low-threshold, scoped participation.
4. **Improve meldingen quality and response legibility** — more meldingen from more residents, with visible resolution reducing frustration.
5. **Digital sovereignty** — reduce buurt dependence on US-owned platforms, aligned with PublicSpaces principles and national digital strategy.

Each of these is measurable or at least legible. Each lives in a policy vocabulary gemeente and ministry people already use.

## What the research does *not* support

Worth stating openly:

- Neighborhood tech does not, by itself, create cohesion where there is none. Stoep will work in buurten that already have civic density (see [[Adoption]]). It will not magically activate atomised buurten.
- There is weak evidence that digital neighborhood platforms reduce loneliness in isolation; the mechanism that works is digital-plus-physical (the [[Concepts|offline bridges]] are not optional).
- Engagement metrics from other platforms don't predict civic outcomes. This is why Stoep's adoption KPIs (see [[Adoption]]) are civic not engagement-shaped.

Honesty about the evidence base is itself a credibility signal in Dutch government circles.

## Tags

#year/2026 #env/planning #city/amsterdam
