# Post-Pilot (Year 2–5)

Funders do not fund 6-month things. They fund 5-year trajectories packaged as 6-month things. This file is the trajectory.

The pilot (see [[Timeline]]) answers *does this work for one buurt?* Post-pilot answers *what does success look like at the scale the project deserves?*

## Principle: scale via replication, not via platform growth

Stoep is not a product that grows by adding users. It is an *institution* that scales by spawning more instances in more buurten, each locally governed, each federated.

Growth metric is not MAU. Growth metric is **number of actively self-governing buurten**. A healthy year adds 4–10 buurten with sustainable local [[Governance|buurt councils]], not 40 buurten with dependency on central support.

## Year 2 — prove replicability

*Goal: go from one buurt to three, all in the same stadsdeel.*

- **Second buurt** in the pilot stadsdeel. Different demographics from the first — stress-test assumptions.
- **Third buurt** added in the second half of year 2. By now the stadsdeel has a visible civic layer.
- **Coöperatie formally incorporated.** Founding members take seats. Statuten ratified. First annual ledenvergadering held.
- **Envisioning transitions** from prime steward to service contractor, gradually. By end of year 2, the coöperatie runs the platform; Envisioning is one member, contracted for specific engineering work.
- **Second funding cycle.** NLnet continuation grant. New gemeente budget commitment. SIDN follow-on. Goal: coöperatie has runway through year 3 with no single funder above 40%.
- **Documentation hardening.** Playbook for onboarding a new buurt, published. Open-source repos mature, AGPL releases tagged, third-party contributions welcomed.

Gate end of year 2: *can a new buurt launch Stoep without Envisioning writing code for them?* If yes, the institution is real.

## Year 3 — second stadsdeel, first federation

*Goal: beyond the first stadsdeel. Start federating across buurten meaningfully.*

- **First buurt in a second stadsdeel.** Probably at invitation, not push — wait for demand. Noord if pilot was Oost, or vice versa.
- **Cross-buurt federation in practice.** Stadsdeel-wide topics (OV diversions, omgevingsvergunningen affecting multiple buurten, citywide consultations) flow naturally. Governance for city-wide threads clarified.
- **Commercial boundaries tested.** First attempted misuse by a politician, a landlord, a commercial actor will happen this year if not before. How it's handled becomes part of the public record and sets precedent. Handle publicly, not in private.
- **Inclusion audit.** Independent review of who is and isn't using Stoep, demographic breakdowns, exclusion patterns. Published. Drives identity-edge-case work for year 4.
- **Research partnership.** Formal collaboration with a Dutch university (UvA, VU, TU Delft, Erasmus) studying Stoep as a civic infrastructure case. First academic output. Credibility asset.

Gate end of year 3: *is the governance model holding?* If factions have captured buurten, if moderators are burning out, if the coöperatie bestuur is dysfunctional — this is when those problems surface. Address them or the project calcifies.

## Year 4 — second gemeente

*Goal: Stoep becomes Dutch civic infrastructure, not an Amsterdam project.*

- **First deployment in another gemeente.** Probably Utrecht (historically early-adopter), possibly Rotterdam or Groningen. Initiated by the new gemeente, not pushed by the coöperatie.
- **Civic integration layer becomes portable.** The AGPL component that talks to Signalen / BAG / Stadsarchief is deployed against Utrecht's equivalent systems. This is where [[Technical-stack|Common Ground]] alignment pays off.
- **Formal VNG conversation.** Stoep pitched as a reference implementation of resident-layer Common Ground at VNG events. Ministerie van BZK interest surfaces.
- **Coöperatie expansion.** New gemeentes join as members, or a parallel governance structure emerges for cross-gemeente decisions. Federated governance mirroring federated platform.
- **Funding diversification.** National grants (Rijk-level), EU structural funds (Interreg), possibly a civic foundation endowment.

Gate end of year 4: *is it a Dutch civic commons or an Amsterdam artefact?* The answer determines whether it is infrastructure or a case study.

## Year 5 — maturity or fork

Two plausible shapes at year 5.

### Shape A — mature commons

- Stoep is running in 15–30 buurten across 3–5 gemeentes.
- Coöperatie has sustainable funding, professional staff, and a bestuur with deep institutional memory.
- Federation operates smoothly across gemeentes. Cross-gemeente standards (buurtpaspoort portability, federation norms) are written.
- Envisioning is a minor member, paid occasionally for specialist work. Not essential.
- Academic literature references Stoep as a successful case in the civic-commons tradition.
- National policy conversation ("should Stoep be part of standard gemeente digital infrastructure?") is genuine, not speculative.

### Shape B — productive fork

- The Dutch-specific AGPL integration layer (civic integration with Signalen, BAG, etc.) is reused by other initiatives. Stoep itself may have plateaued or fragmented, but the infrastructure it built is durable.
- Other projects inherit the civic-integration codebase, the governance playbook, the adoption methodology. Stoep's contribution is diffuse but real.
- This is also success, differently shaped.

Failure shape (acknowledged to plan around): the coöperatie fails, funding dries up, the platforms persist in a few buurten as local artefacts, the broader ambition ends. Even this is not nothing — the buurten that benefited benefited.

## Scaling primitives to invest in

Things that make replication cheaper for each new buurt:

- **Onboarding-a-new-buurt playbook.** Written, tested, iterated. From first conversation to launched buurt in <90 days.
- **Civic-integration adapter kit.** Pluggable integrations per gemeente (Signalen config, BAG config, local participation backend config).
- **Governance template.** Buurt council composition, norms template, appeals process, compensation structure — customisable per buurt but with sensible defaults.
- **Translation matrix.** Multi-lingual UI kit covering major languages in Dutch buurten (NL, EN, AR, TR, PL, ES, tigrinya, amazigh).
- **Offline-bridge toolkit.** Printed-digest templates, buurthuis partnership model, SMS fallback configuration.

## What to explicitly avoid

- **International expansion before national saturation.** Stoep is Dutch civic infrastructure. If a German or UK project wants to fork, fine — fork. But Stoep-the-coöperatie should not try to operate in other countries. Scope discipline.
- **Moving upstream to compete with Decidim, Consul, etc.** Those tools are good at what they do. Stoep is a *different* primitive — daily buurt social layer. Don't drift.
- **Adding engagement features.** Retention that comes from engagement hacks is exactly what Stoep is not. Every year includes a pointed reminder of this in governance meetings.
- **Commercial rescue.** If funding dries up, explore coöperatie dissolution and orderly handoff before accepting commercial rescue that compromises the charter (see [[Resident-rights]]).

## Exit scenarios

Any durable institution plans its exit.

- **Voluntary dissolution.** Ledenvergadering two-thirds vote. Published dissolution plan includes data portability for every resident, handover of civic integrations, AGPL code remains public.
- **Acquisition resistance.** Statuten explicitly prohibit sale to commercial entities. Not merely preferred — structurally impossible under the chosen legal form.
- **Fork tolerance.** The AGPL license means anyone can fork the code. That's fine. The coöperatie is the institution, not the code.
- **Deprecation plan.** If a buurt falls dormant, a graceful wind-down protocol activates: exported archive to residents, civic integrations gracefully disconnected, server spun down within 6 months of confirmed inactivity.

## Tags

#year/2026 #env/planning #city/amsterdam
