# Technical Stack

## Principle: do not build from scratch

The fediverse ecosystem is mature enough that the interesting work is composition, integration, and community-scoped adaptation — not reimplementing ActivityPub from zero. Every hour spent on a custom server is an hour not spent on [[Adoption]] or [[Open-data]] integration, which are the actual risk surfaces.

## Candidate bases

### Bonfire (bonfire.cafe) — strongest fit

- **Stack:** Elixir / Phoenix.
- **Why it fits:** explicitly designed for community-scoped federated networks. More composable than Mastodon. Extensions are a first-class concept.
- **Tradeoffs:** smaller community than Mastodon, Elixir talent pool is smaller, less documentation for novel integrations.
- **Status:** active development, used by several fediverse communities.
- **Decision:** lead candidate. Technical spike required — stand up locally in a week, validate fit against Stoep [[Concepts]].

### Hometown (Mastodon fork) — viable backup

- **Stack:** Ruby / Rails.
- **Why it might fit:** already solves the "local-only posting" primitive that is central to Stoep. Large Mastodon talent pool. Familiar ops.
- **Tradeoffs:** Mastodon's DNA is global-first. Retrofitting hyperlocal-by-default fights the grain of the codebase. Less composable than Bonfire.
- **Decision:** fallback if Bonfire spike reveals blockers.

### Smalltown

- Mastodon fork in the same family as Hometown. Similar tradeoffs. Worth surveying during the spike but probably a subset of the Hometown decision.

### Lemmy

- **Stack:** Rust.
- **Why it might fit:** if the primary unit turns out to be threads/boards rather than feeds.
- **Tradeoffs:** Reddit-shaped, which is not how buurten work. Useful as a reference, unlikely to be the base.
- **Decision:** survey only.

## Architecture sketch

```
┌─────────────────────────────────────────────────────┐
│                    Stoep client                     │
│   (web, PWA, accessible, multilingual, Dutch-first) │
└─────────────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│               Federated social core                 │
│     (Bonfire or Hometown fork, ActivityPub)         │
└─────────────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│          Civic integration layer (new)              │
│  Signalen · BAG · omgevingsvergunningen · afval ·   │
│  Stadsarchief · buurtbudget · Common Ground         │
│               AGPL, reusable                        │
└─────────────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│               Gemeente / national APIs              │
└─────────────────────────────────────────────────────┘
```

The **civic integration layer** is the unique contribution. It is a separate service, AGPL-licensed, reusable by other buurtplatforms and other Dutch gemeentes. This is the piece that turns a pilot into a commons.

## Common Ground alignment

Common Ground is the Dutch municipal architecture initiative to decouple data from applications across gemeentes. If Stoep's civic integration layer speaks Common Ground APIs, Stoep is portable to every Dutch city, not just Amsterdam.

This reframes the project from "Amsterdam pilot" to "reference implementation of resident-layer Common Ground," which unlocks much larger funding conversations — VNG (Vereniging van Nederlandse Gemeenten), BZK (Binnenlandse Zaken).

Worth talking to Common Ground people early. They are hungry for resident-facing reference implementations; most Common Ground work to date has been backend-to-backend.

## Licensing

- **Social core + client:** AGPL-3.0. Same as Mastodon, Bonfire.
- **Civic integration layer:** AGPL-3.0. Explicit: this is a Dutch civic commons.
- **Data outputs:** CC-BY-4.0 where residents contribute, CC0 where aggregated from public data with attribution preserved.

AGPL is the right license here because it prevents a future Nextdoor-equivalent from forking a closed version while still allowing gemeentes to self-host.

## Operational principles

- **Hosted in NL / EU.** Non-negotiable for AVG/GDPR and political optics. Hetzner or a Dutch civic host.
- **No third-party analytics.** No Google Analytics, no Segment, no PostHog-cloud. If measurement is needed, self-hosted Plausible or nothing.
- **Minimal PII, maximum minimisation.** BAG verification produces a boolean "lives at address," not a stored address trail.
- **No engagement metrics instrumented.** See [[Concepts]] — this is an explicit anti-feature.
- **Accessibility: WCAG 2.2 AA as baseline.** Gemeente will require it, and it is the right default anyway.
- **Progressive enhancement.** Works on low-end phones, in buurthuizen with old laptops.

## Technical spike plan

One week, before any funding is committed:

1. Stand up Bonfire locally. Document friction.
2. Stand up Hometown locally. Document friction.
3. Prototype a single Signalen integration — pull meldingen for one buurt polygon and display.
4. Prototype a single BAG verification flow.
5. Write a 2-page technical-fit memo that feeds into the one-pager.

Success criterion: by end of week, a clear recommendation for the base stack with evidence.

## Federation at the technical boundary

ActivityPub is the protocol, but *what* federates and *how* are design decisions. Governance layer covered in [[Governance]]; this is the technical shape.

### What federates

- **Buurt-to-buurt within Stoep.** A resident in Indische Buurt following a stadsdeel-wide thread that is mirrored into their local instance.
- **Stoep-to-other-civic-instances.** A Stoep buurt deployment following a Decidim instance's consultation announcement, or a Waag Coöperatie fediverse presence. Bounded, civic in nature.
- **Stoep-to-broader-fediverse.** Optional, per-buurt. Some buurten may want no external federation; others will want to share with the global fediverse. Buurt council decides locally.

### What does not federate by default

- **Identity.** Your `buurtpaspoort` is not pushed to remote instances. Remote viewers see a pseudonymous handle; verification is internal.
- **Address data.** Never. Not in metadata, not derivable from post geolocation.
- **Moderation actions.** Stoep's moderation decisions do not cascade to remote instances — we ask them to respect our norms for our content via ActivityPub flags, but we do not moderate them.

### Federation policies

- **Allowlist vs denylist mode.** Default starts conservative: allowlisted federation with a curated set of vetted civic and Dutch-language instances. Expands outward as trust and operational capacity grow.
- **Published policy.** The list is public. Decisions are explained. Annual review by the ethics committee (see [[Governance]]).
- **Defederation as last resort, not first instinct.** Document the incident, engage the remote instance, escalate to defederation only when documented harm persists.

### Protocol-level concerns

- **ActivityPub is lossy for structured civic data.** Meldingen, buurtbudget proposals, and omgevingsvergunningen have structured metadata that standard Note/Article activities don't carry. Stoep will need custom ActivityPub types for these — worth coordinating with Bonfire / Mobilizon / other civic fediverse projects. Early participation in SocialWG / FEP processes recommended.
- **Deletion propagation.** Resident right-to-delete must propagate across federation. Standard ActivityPub `Delete` works; adversarial instances that ignore deletes become defederation candidates.
- **Rate limiting & abuse.** Each buurt instance hosts far fewer users than a general Mastodon instance but is a higher-value target for political or commercial abuse. Abuse tooling matters.

## Tags

#year/2026 #env/planning #city/amsterdam
