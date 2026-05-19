# Concepts

Core primitives. Each is a building block that can be prototyped, tested, and iterated before the whole product exists. Some are architectural, some are product, some are civic.

## Buurt-as-unit

The atomic scope is the gemeente's own administrative buurt polygon, fetched from data.amsterdam.nl. Not a radius, not a tech-chosen hexagon, not a neighborhood the user draws. This matters because:

- It matches how gemeente communicates, budgets, and reports.
- It is legible to every Amsterdammer — people already know their buurt.
- It makes the platform's "local" and the city's "local" the same thing, which is the whole adoption lever.

Federation lets buurten connect upward to stadsdeel or city-wide for specific topics, but daily default stays local.

## Buurtpaspoort

Verified, portable identity tied to a BAG address. You live at a real address in this buurt, full stop.

- Verification via gemeente-linked flow (possibly DigiD, possibly an address postcard, possibly both).
- Identity is portable across federated instances. Moving stadsdelen does not mean starting over — your civic history, contributions, reputation follow you.
- Real names. Anonymity poisons buurt discourse; Nextdoor got this right and it is worth copying.
- Could become a civic primitive beyond Stoep — a lightweight verified-neighbor identity that other municipal services could recognise.

Speculative but high-leverage.

## Buurt-digest

Weekly auto-generated summary for each buurt: N meldingen resolved, M new omgevingsvergunningen, K upcoming evenementen, one historical photo of a street in the buurt, one featured tree, one buurtbudget proposal open for voting.

- Almost entirely machine-generated from [[Open-data|open data]].
- Printed version posted on the buurthuis noticeboard and supermarket bulletin. This is the offline bridge.
- Emailable, subscribable, federates.
- Doubles as the "reason to open the app this week" without relying on user-generated activity.

## Straatgeschiedenis

Per-street timeline combining Stadsarchief photos, permit history, building age, monument status, and resident contributions. Every address becomes a small museum.

- Ambient context that makes the platform feel *rooted in place*.
- Impossible for Nextdoor to match — they don't have the data and wouldn't integrate it if they did.
- High engagement for low effort: residents discover what their own house looked like in 1935.
- Natural invitation to contribute: "do you have a photo of this corner before the renovatie?"

## Federation

ActivityPub at the core. See [[Technical-stack]] for which codebase.

- Each buurt could be its own federated community (or each stadsdeel, depending on scaling economics).
- Inter-buurt federation for city-wide topics (OV diversions, gemeentewide consultations, stadsbrede evenementen).
- Cross-gemeente federation later: Amsterdam Oost federates with Utrecht Lombok if the Common Ground layer lines up.
- Federation is also the governance exit: if gemeente steward fails, residents keep their instance.

## Moderation-as-civic-role

Moderators are neighbors with visible names, operating under publicly-written community norms. Appeals go to a buurt council, not a Trust & Safety team.

- Rotating or elected, not appointed-for-life.
- Paid modestly or compensated with public recognition — not volunteer forever (that model burns out).
- Norms are a living document, editable through buurt consultation.
- This is both a product feature and a political stance: governance visible, accountable, and local.

## Offline bridges

Every failure mode of "neighborhood app" resolves to: only young techies used it. Counter-design from day one.

- Printed weekly [[Concepts|buurt-digest]] on the buurthuis noticeboard.
- SMS fallback for urgent buurt-wide messages (elderly, low-tech residents).
- Paper QR flyers with address-verified signup in buurthuis, supermarket, library.
- Physical launch events (buurtborrels) as the primary recruitment channel — see [[Adoption]].

## Smaller-internet scope

Default experience is deliberately **smaller than one WhatsApp group** — roughly 200 neighbors on your straat, not a city feed. This is not a launch constraint to outgrow; it is the post-naive bet that legitimacy and civic outcomes come from bounded community, not scale. See [[Smaller-internets]].

## No engagement metrics

Explicit anti-feature.

- No algorithmic feed, no "trending," no "For You."
- Chronological, proximity-scoped.
- No public follower counts, no post counts, no gamification.
- This is a product differentiator *and* a funding story. A municipality will pay for infrastructure that explicitly rejects engagement-maximisation. They will not pay for Nextdoor with Dutch skin.

## Multilingual-native

Amsterdam buurten are genuinely multilingual. Auto-translation between NL, EN, AR, TR at minimum.

- Authoring in any language; others read in theirs.
- Translation as a first-class primitive, not a bolt-on.
- This is a concrete feature WhatsApp groups cannot offer and a direct inclusion win that gemeente will fund.

## Civic interface layer

The platform is a *read-and-write interface* over gemeente data, not a silo. See [[Open-data]] and [[Technical-stack]].

- Meldingen reported in Stoep flow to Signalen (SIA).
- Buurtbudget votes flow to the participation backend.
- Omgevingsvergunningen surface ambiently.
- Inspraak / consultations scoped to the buurt appear where residents actually are, not buried on amsterdam.nl.

This is what makes it civic infrastructure and not another social app.

## Tags

#year/2026 #env/planning #city/amsterdam
