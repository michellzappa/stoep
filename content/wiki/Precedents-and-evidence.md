# Precedents and Evidence

[[Risks-and-next-steps|The graveyard]] covers what failed. This file covers what works — internationally — and what the research actually says about the underlying social goals.

## International civic-tech precedents

Positive comparables. Every one of these is running, studied, and instructive.

### Decidim — Barcelona, then global

- **What:** [Decidim](https://decidim.org/) — open-source civic participation platform. Ruby on Rails. Free software under AGPL ([source](https://github.com/decidim/decidim)).
- **Origin:** [Barcelona en Comú](https://barcelonaencomu.cat/), 2016. [Decidim Barcelona](https://decidim.barcelona/) became the reference deployment.
- **Scale:** used by hundreds of municipalities including Helsinki, Mexico City, [NYC Civic Engagement Commission](https://www.participate.nyc.gov/) (participate.nyc.gov), Milan, Lisbon, Zurich, many Dutch pilots.
- **Why it matters to Stoep:**
  - Proves a municipal commons software project can become international infrastructure.
  - AGPL, meta-governance ([Decidim Association](https://meta.decidim.org/assemblies/the-association)), residents-first framing are all patterns to borrow.
  - The weakness: Decidim is *participation* first (voting, proposals), not *neighborhood social* first. Stoep's differentiation is the day-to-day civic/social layer underneath the participation features. Decidim-style features could plug in *on top* of Stoep.
- **Relationship:** study Decidim's [statutes and governance model](https://meta.decidim.org/assemblies/the-association). Possibly federate with Decidim instances for cross-cutting consultation.

### Consul / Decide Madrid

- **What:** [CONSUL Democracy](https://www.consuldemocracy.org/) — open-source participation software, similar space to Decidim ([GitHub](https://github.com/consuldemocracy/consuldemocracy)).
- **Origin:** Madrid, 2015 ([Decide Madrid](https://decide.madrid.es/) case study: [consuldemocracy.org use case](https://docs.consuldemocracy.org/use_cases/spain/madrid)).
- **Status:** still deployed in many cities, though Decide Madrid itself has waned with political changes in Madrid.
- **Lesson:** political sponsorship matters. A platform tied to one administration's identity becomes vulnerable when politics shift. Stoep should be cross-party legible from day one.

### vTaiwan / Polis

- **What:** [Polis](https://compdemocracy.org/) — deliberation tool that surfaces consensus across factions rather than maximising engagement.
- **Origin:** Taiwan's [g0v](https://g0v.tw/intl/en/) civic-hacker community, 2014 ([vTaiwan](https://info.vtaiwan.tw/)).
- **Use cases:** Uber regulation, alcohol sales, youth policy — each produced implementable consensus ([case studies](https://compdemocracy.org/case-studies/)).
- **Why it matters:** the Polis algorithm is the only widely-adopted civic-tech primitive that *actively reduces* polarisation. Could be a Stoep primitive for buurt-level consultations with genuine disagreement.
- **Available:** Polis is open source ([compDemocracy/polis](https://github.com/compdemocracy/polis)). Low-cost to integrate.

### Commonplace (UK)

- **What:** [Commonplace](https://www.commonplace.is/) — place-based engagement platform used by UK councils and developers.
- **Status:** commercial, closed.
- **Lesson:** the market exists. The UK has paid for this category. But the closed commercial model has limits Stoep's open model can exceed.

### CitizenLab

- **What:** [Go Vocal](https://www.govocal.com/) (formerly CitizenLab) — commercial civic engagement platform, Belgian-origin, used across EU.
- **Lesson:** similar to Commonplace. Demonstrates municipal willingness to pay for this category; justifies Stoep's open alternative.

### Meta-Gov and the civic fediverse

- **[Metagov](https://metagov.org/)** is a research collective studying online governance. Good source for governance design literature ([Govbase](https://github.com/metagov/govbase) catalogues tools and projects).
- Several fediverse instances are explicitly civic: [social.coop](https://social.coop/), [climatejustice.rocks](https://climatejustice.rocks/), various gemeente experiments. None yet at Stoep's proposed depth of integration with municipal data.

### SocialHub / Fediverse governance

- **[SocialHub](https://socialhub.activitypub.rocks/)** — primary forum for ActivityPub implementation and fediverse governance discussion.
- **Lesson:** ActivityPub ecosystem has mature governance practices around defederation, consent, and cross-instance moderation. Stoep should join these conversations early, not reinvent.

### Buurtgericht.nu and Dutch buurt initiatives

- Dutch buurt-tech and community platforms worth studying: [Buurkracht](https://www.buurkracht.nl/), [Buurtwerkplaatsen](https://buurtwerkplaatsen.nl/) (Amsterdam), [Buurttender](https://buurttender.nl/).
- **Status:** mixed, often small and local. (Buurtgericht.nu appears defunct — treat as historical reference only.)
- **Lesson:** there's Dutch-specific language and design vocabulary already developed. Study before building.

## Research base: social capital, cohesion, eenzaamheid

Stoep needs to land inside a policy frame, not just a tech frame. What does the literature actually say?

### Putnam — *Bowling Alone* (2000) and after

- **Bridging vs bonding capital.** Bonding = within-group, bridging = across-group. Neighborhoods are primarily bonding territory but need bridging for cohesion. ([*Bowling Alone*](https://en.wikipedia.org/wiki/Bowling_Alone))
- **Decline of civic participation.** Putnam's thesis is contested but the directional trend is real in NL data too.
- **Implication for Stoep:** must create *bridging* opportunities (cross-cultural, cross-age, cross-class) to be a civic good rather than a clustering amplifier.

### Ostrom — *Governing the Commons* (1990)

- **Design principles for commons:** clear boundaries, local governance, conflict resolution, graduated sanctions, nested institutions. ([Ostrom Workshop overview](https://ostromworkshop.indiana.edu/research/governing-the-commons.html))
- **Applicability:** Stoep is a digital commons. Ostrom's principles apply directly. [[Governance]] should be readable as a Dutch municipal implementation of Ostrom's design principles.
- **Key insight:** commons work when governance is *close to the resource*. Stoep's buurt-council-first model fits.

### SCP (Sociaal en Cultureel Planbureau)

- [Sociaal en Cultureel Planbureau](https://www.scp.nl/) — Dutch government research bureau. Publishes regularly on sociale samenhang, vertrouwen, civic participation.
- **Relevant publications:** [*Burgerperspectieven*](https://www.scp.nl/publicaties-scp/2025/06/burgerperspectieven-2025-bericht-2) (quarterly, via Continu Onderzoek Burgerperspectieven); [*De sociale staat van Nederland*](https://www.scp.nl/publicaties-scp/2020/09/de-sociale-staat-van-nederland-2020) (periodic); [*Samenleven in de toekomst*](https://www.scp.nl/publicaties-scp/2024/12/samenleven-in-de-toekomst) on sociale samenhang and trust.
- **Data point (worth verifying for the pitch):** trust in neighbors in NL has been declining, particularly in urban buurten with high population churn ([SCP news, Dec 2024](https://www.scp.nl/actueel/nieuws/2024/12/10/sociale-samenhang-in-nederland-stabiel-maar-grote-verschillen-baren-zorgen)). Stoep's pitch lands squarely on this.

### Movisie

- [Movisie](https://www.movisie.nl/) — Dutch knowledge institute for social issues. Their work on [eenzaamheid](https://www.movisie.nl/eenzaamheid), buurtinitiatieven, and vrijwilligerswerk is the applied-research backbone for any Dutch civic-infrastructure pitch.
- **Relevant:** what interventions actually reduce loneliness? Evidence is thin; most things don't work; sustained, low-pressure, low-threshold contact works better than programmatic interventions ([routekaart eenzaamheid](https://www.movisie.nl/publicatie/routekaart-eenzaamheid-inwoners-voorkomen-verminderen), [bewonersinitiatieven](https://www.movisie.nl/artikel/ondersteunen-bewonersinitiatieven-die-eenzaamheid-willen-verminderen)). Stoep's design — ambient, low-pressure, local — fits this evidence better than most alternatives.

### RIVM and GGD Amsterdam

- **[RIVM](https://www.rivm.nl/):** data on neighborhood health, wellbeing, isolation ([eenzaamheid monitor](https://www.rivm.nl/mentale-gezondheid/monitor/volwassenen/eenzaamheid); [Handvatten Ontmoeten](https://www.rivm.nl/documenten/handvatten-ontmoeten) for buurt-level social health).
- **[GGD Amsterdam](https://ggd.amsterdam.nl/onderzoek/gezondheidsmonitors/):** *Amsterdamse Gezondheidsmonitor*, buurt-level wellbeing data; explore via [Gezondheid in Beeld](https://ggdgezondheidinbeeld.nl/).
- **Use:** baseline data for pilot buurt selection and outcome measurement. Stoep can tie into GGD outcome measurement rather than inventing its own.

### Academic work on thin trust and parochial trust

- Literature distinguishes *thick trust* (close relationships), *thin trust* (generalised trust in strangers), *parochial trust* (trust within local community) — see [social capital](https://en.wikipedia.org/wiki/Social_capital#Bonding,_bridging_and_linking) and Feldman's work on neighborhood trust.
- Stoep's design target is **parochial trust infrastructure** — the "I know this is a real neighbor even if I don't know them personally" layer.
- Worth referencing in the pitch as a specific policy goal.

### DSA, AVG, and regulatory context

- **[Digital Services Act](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package):** Stoep is small enough to be exempt from most provisions. Still worth voluntarily adopting DSA-style transparency as credibility signal.
- **[AVG / GDPR](https://www.autoriteitpersoonsgegevens.nl/):** full compliance is table stakes. Stoep should exceed it, publicly ([AP guidance on apps](https://www.autoriteitpersoonsgegevens.nl/themas/internet-slimme-apparaten/smartphone-apps)).
- **NL-specific:** AP scrutiny of neighborhood surveillance patterns (e.g. [brief on datadeler-apps](https://www.autoriteitpersoonsgegevens.nl/documenten/brief-ap-aan-bzk-over-datadeler-apps)); [ministerial caution on buurtapps](https://www.binnenlandsbestuur.nl/ruimte-en-milieu/asiel-en-inburgering/overheid-past-terughoudendheid-bij-buurtapps). Check for new AP opinions before launch.

## Policy outcomes Stoep should claim

What a policy-maker can write in a memo to justify funding, grounded in the research above:

1. **Increase parochial trust** in participating buurten (measurable via [GGD monitor](https://ggd.amsterdam.nl/onderzoek/gezondheidsmonitors/), survey before/after).
2. **Reduce eenzaamheid among at-risk demographics** (elderly, newcomers, single parents), via ambient buurt connection. Evidence base exists ([Movisie](https://www.movisie.nl/eenzaamheid), [RIVM](https://www.rivm.nl/mentale-gezondheid/monitor/volwassenen/eenzaamheid)); intervention shape fits.
3. **Increase quality and legitimacy of civic participation** in buurtbudget, inspraak, and right-to-challenge processes — via visible, low-threshold, scoped participation.
4. **Improve meldingen quality and response legibility** — more meldingen from more residents, with visible resolution reducing frustration.
5. **Digital sovereignty** — reduce buurt dependence on US-owned platforms, aligned with [PublicSpaces](https://publicspaces.net/) principles ([manifesto](https://english.publicspaces.net/publicspaces-manifesto/)) and [Nederlandse Digitaliseringsstrategie](https://www.digitaleoverheid.nl/nederlandse-digitaliseringsstrategie-nds/).

Each of these is measurable or at least legible. Each lives in a policy vocabulary gemeente and ministry people already use.

## What the research does *not* support

Worth stating openly:

- Neighborhood tech does not, by itself, create cohesion where there is none. Stoep will work in buurten that already have civic density (see [[Adoption]]). It will not magically activate atomised buurten.
- There is weak evidence that digital neighborhood platforms reduce loneliness in isolation; the mechanism that works is digital-plus-physical (the [[Concepts|offline bridges]] are not optional).
- Engagement metrics from other platforms don't predict civic outcomes. This is why Stoep's adoption KPIs (see [[Adoption]]) are civic not engagement-shaped.

Honesty about the evidence base is itself a credibility signal in Dutch government circles.

## Tags

#year/2026 #env/planning #city/amsterdam
