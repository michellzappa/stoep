# Governance

The coöperatie is the promise that Stoep outlives the pilot. This file turns that promise into shape.

## Legal form

**Coöperatie U.A.** (Uitgesloten Aansprakelijkheid) — the Dutch cooperative with excluded member liability. Standard structure for civic-commons stewardship; the form used by Waag Coöperatie, PublicSpaces, and several Dutch data-coöperatieven.

Why this form:

- Members, not shareholders. No equity to sell, no exit to maximise.
- Formal governance (statuten, ledenvergadering, bestuur) that funders and gemeentes recognise.
- Flexible on commercial activity if needed (service contracts, grants, membership dues).
- Aligned with [[Funding|funding]] narrative: this is infrastructure, not a startup.

## Founding members (target composition)

| Member type | Voting weight | Rationale |
|---|---|---|
| **Gemeente Amsterdam** (CTO Office) | 1 vote | Commissioner, data provider, principal adopter. Intentionally one vote — not control. |
| **[[Envisioning]]** | 1 vote | Technical steward through pilot. Gradually steps back. |
| **Waag Coöperatie** or **PublicSpaces** | 1 vote | Civic credibility, governance expertise, mission alignment. |
| **Participating buurten** (via representative) | 1 vote per buurt, capped | The residents whose platform this is. Weight grows as buurten join. |
| **Open State Foundation** or similar | 1 vote (optional) | Independent civic-tech oversight. |

No founder has majority. This is the durable shape — no capture, no rollup.

## Phasing: Envisioning → coöperatie

A clean transition avoids the two failure modes: too-early formalisation (empty bureaucracy) and too-late (founder lock-in).

- **Pilot (months 0–6):** Envisioning is prime contractor. Gemeente is commissioner. No coöperatie yet. Written commitment from both sides to form the coöperatie post-pilot.
- **Bridge (months 7–9):** Coöperatie is incorporated. Founding members join. Statuten are ratified. Envisioning transfers IP and stewardship. Envisioning becomes one member among several.
- **Steady state (year 2+):** Coöperatie holds the platform. Envisioning can continue as a service contractor (paid for engineering, research) but no longer steward. Gemeente is commissioner, not owner.

Articulate this from day one: **"we are building it to give it away."** Rhetorically powerful, politically necessary, distinguishes Stoep from every proprietary pilot gemeentes have lived through.

## Decision rights

Not every decision is the same. A working governance model separates them.

| Decision class | Who decides | Mechanism |
|---|---|---|
| Platform direction, major features | Bestuur + ledenvergadering | Consent-based (not consensus, not majority) |
| Per-buurt moderation & norms | Buurt council (local moderators + rotating residents) | Locally defined, publicly documented |
| Federation allow/deny | Bestuur + ethics committee | Written policy, reviewed annually |
| Data access for research / policy | Ethics committee + resident consultation | DPIA-gated, opt-in |
| Financial (budgets, grants, contracts) | Bestuur | Annual approval by ledenvergadering |
| Inter-buurt federation / scaling | Bestuur + new-buurt co-design process | Each buurt joins on its own terms |
| Dissolution / exit | Ledenvergadering | Two-thirds majority, explicit data-portability plan |

## Data ownership

Three layers, three owners.

- **Resident content** (posts, photos, contributions) — owned by the resident. Portable. Deletable. See [[Resident-rights]].
- **Platform operational data** (accounts, federation metadata, system logs) — stewarded by the coöperatie. Minimised by policy.
- **Civic data piped through** (meldingen, omgevingsvergunningen, afval schedules, Stadsarchief) — remains owned by gemeente or national registries. Stoep is a conduit, not a warehouse. See [[Open-data]].

Aggregate / anonymised buurt statistics derived from Stoep use are coöperatie-owned, published openly under CC-BY, available to residents and researchers alike. No private data brokerage, ever.

## Ethics committee

Standing committee, separate from the bestuur. Three to five members, rotating terms, independent from funders.

- Reviews: federation decisions, moderation appeals that escalate beyond buurt council, research requests, new data integrations, identity edge cases (see [[Identity-edge-cases]]).
- Composition: an AVG / legal expert, a civic-tech practitioner, a resident representative, a social worker or community-ethics specialist, optionally one academic.
- Quarterly published meeting summaries. Transparency is the legitimacy.

## Buurt council (per buurt)

Local layer. Every active buurt on Stoep has one.

- 5–9 members: rotating residents + active moderators + one stadsdeel liaison (non-voting observer).
- Terms: 6–12 months, staggered to preserve continuity.
- Publicly elected or drawn by lot from volunteers — buurt decides its own method.
- Scope: moderation appeals, local norms evolution, community health.
- Compensated modestly. Not volunteer-forever; burnout kills these projects.

## Commercial & political boundaries

The rules before they're tested.

### Commercial actors

- **Local businesses (baker, huisarts, kapper):** can hold a `bedrijfspaspoort` tied to a registered KVK address in the buurt. Can post about buurt-relevant things: openings, closures, events, health announcements. Cannot post generic promotions. Cannot run ads. No "sponsored posts" ever.
- **Landlords:** no rental listings on Stoep. That market has its own channels and injecting it poisons neighborhood trust.
- **Non-local businesses:** no access. Buurt is not a marketing surface.

### Political actors

- **Sitting stadsdeelcommissieleden:** can post about their work. Must be identified as such. No hiding behind resident identity.
- **Campaign period (6 weeks before stadsdeel / gemeenteraad elections):** stricter rules. No campaign posts, no endorsements from within the platform. Candidates can answer resident questions in a neutral format (Q&A structure, not feed posts). The ethics committee reviews any incident.
- **Parties and campaign workers:** no organised campaigning. This is not a feature, it's a boundary.

### Gemeente as actor

Gemeente posts as gemeente — clearly labelled, from verified gemeente accounts, subject to the same moderation norms as residents. Meldingen status updates from Signalen are machine-posted and clearly marked. No gemeente-boosted feed ranking. Parity with residents is the principle.

## Moderation operations

Moderation-as-civic-role (see [[Concepts]]) is the right *principle*. The *ops reality* needs design.

### Workload budget

- Typical buurt of 2,000 adults → estimate 1–3 moderator-hours per week at steady state. Depends heavily on local tensions. Budget 5 hours/week per buurt in the pilot to be safe.
- Pilot stadsdeel should have 3–5 active moderators per buurt, rotating the on-call role.

### Tooling

- Queue of flagged content, visible to all buurt moderators.
- Soft actions first (hide, reply-with-norm-reminder), hard actions (ban, defederate a user) only via consensus or council.
- All moderator actions logged, aggregate stats public, individual actions visible to the affected resident.

### Escalation

- Resident → buurt moderator (local, first line).
- Buurt moderator → buurt council (appeal, hard actions).
- Buurt council → ethics committee (systemic, cross-buurt).
- Ethics committee → coöperatie bestuur (legal, existential).
- At every level: written record, right to be heard, right to appeal upward.

### Burnout prevention

- Terms are bounded, not open-ended.
- Compensation is real, not symbolic.
- On-call rotation, not always-on.
- Mental health support budget in coöperatie operating costs.
- Anonymised incident debriefs so moderators learn from each other without shaming.

## Safety taxonomy

Types of content and the response shape for each.

| Category | Examples | Response |
|---|---|---|
| Illegal content | Threats, CSAM, incitement | Immediate removal, law enforcement referral per NTD protocol |
| Hate speech / discrimination | Racial, ethnic, religious, sexual-orientation attacks | Removal, written warning, pattern-based ban |
| Harassment / doxxing | Targeting an individual, exposing private info | Removal, ban if repeated, support offered to target |
| Commercial spam | Non-local ads, promotion of unrelated businesses | Removal, warning, `bedrijfspaspoort` revocation if applicable |
| Political campaigning | See boundaries above | Removal during campaign windows, reshape in non-campaign windows |
| Misinformation / hoaxes | Buurt-relevant false claims | Contextual response (correction, labelling), removal only in extreme cases |
| Interpersonal conflict | Neighbor disputes spilling onto platform | De-escalation, mediation offered, moderator non-intervention in lawful disagreement |

Rule of thumb: remove the illegal, label the false, mediate the interpersonal. Not every disagreement is a moderation problem.

## Federation at the governance boundary

See [[Technical-stack]] for the technical layer. Governance layer:

- **Default:** federate with PublicSpaces-aligned instances, other Dutch civic instances, vetted municipal fediverse deployments.
- **Block by policy:** instances whose documented norms permit harassment, CSAM, or organised hate. Published allowlist/denylist, reviewed quarterly.
- **Resident choice:** residents can follow federated content but cannot be forced into federated moderation norms. Stoep's norms apply inside Stoep.
- **Incident response:** if a federated instance hosts content that harms Stoep residents, defederation is a governance decision, not a panic response.

## Tags

#year/2026 #env/planning #city/amsterdam
