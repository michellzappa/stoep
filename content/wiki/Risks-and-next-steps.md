# Risks and Next Steps

## The graveyard

Neighborhood social networks have a long list of failures. Worth studying before building another one.

| Project | Country | Status | What killed it |
|---|---|---|---|
| **Mijnbuurtje** | NL | Moribund | Thin value prop, no municipal fusion, ghost town |
| **Buurbook** | NL | Gone | Commercial model, no civic utility |
| **Hoplr** | BE/NL | Partially active | Commercial, closed, gemeente-adjacent but not fused |
| **Various gemeente pilots** | NL | Mostly ended | Procurement, no seeding strategy, no owner post-pilot |
| **Nextdoor** | US → global | Commercial success, civic failure | Toxic discourse, surveillance model, gemeente-hostile |

**The pattern.** Projects that persist either:

- (a) have commercial intensity Nextdoor-style — advertising, growth teams, aggressive engagement loops — or
- (b) are tightly fused with municipal function.

Stoep's only plausible path is (b). Which means **the gemeente integration is not a nice-to-have. It is the entire adoption strategy.** See [[Adoption]].

## Failure modes to counter-design

### Ghost town at launch

- **Cause:** not enough seed density; users arrive, find nothing, leave, don't come back.
- **Counter:** co-design with 10–20 residents before coding. Seed the [[Concepts|buurt-digest]] with civic data from day one so there is always content. Buurtconnector recruitment. Physical launch.

### Complaint board

- **Cause:** the only people motivated to post are angry people. Discourse degrades, normal people leave.
- **Counter:** civic utility primitives (tools library, events, straatgeschiedenis) designed in from the start — not social feed primitives. [[Concepts|Moderation-as-civic-role]] with publicly written norms. Meldingen flow to Signalen, so complaints have a real resolution path instead of being rhetoric.

### Only young techies use it

- **Cause:** digital-only onboarding, unfamiliar UX.
- **Counter:** [[Concepts|offline bridges]] from launch. Printed buurt-digest on the buurthuis noticeboard. SMS fallback. Physical QR flyers. Buurtconnector onboarding in person.

### Loses momentum post-pilot

- **Cause:** no owner after the 6-month pilot budget ends.
- **Counter:** coöperatie U.A. as long-term steward. Continuation funding lined up during the pilot (SIDN, NLnet, next gemeente budget cycle). See [[Funding]].

### Gemeente loses interest mid-pilot

- **Cause:** political turnover, budget reallocation, scope creep from gemeente side.
- **Counter:** the NLnet / SIDN parallel track means municipal funding is not a single point of failure. Matched funding model. Clear written scope in the commissioning contract.

### AVG/GDPR incident

- **Cause:** BAG verification done poorly, data leak, sensitive buurt information exposed.
- **Counter:** data minimisation from day one. AVG review before launch. No third-party analytics. No engagement metrics instrumented. See [[Technical-stack]].

### Captured by a faction

- **Cause:** a local faction dominates moderation, drives out dissenters.
- **Counter:** rotating moderators, publicly written norms, buurt council appeals, federation as governance exit — residents can keep their instance even if governance fails.

## Honest risks that may not be solvable

- **Dutch civic participation is declining generally.** Stoep will not reverse this trend; at best it supports the subset of buurten that are already actively civic.
- **WhatsApp is deeply entrenched and actually works.** Stoep is additive, not a replacement. If residents are asked to "switch," they will not. Frame correctly.
- **Open source burnout.** The civic integration layer will need sustained maintenance past year 1. The coöperatie has to solve this or it breaks.
- **Language politics.** Dutch-first but multilingual-native is the right design but will draw criticism from several sides. Accept and document the position.

## Concrete next steps

In rough order:

1. **One-pager** in Dutch + English: problem, approach, pilot scope (one stadsdeel, 6 months), budget range (€105k–160k per [[Funding]]), governance. One page each.
2. **Identify the municipal sponsor.** Likely CTO Office or a specific stadsdeel digitalisering lead. Marineterrein contacts can route.
3. **Parallel-track an NLnet NGI0 application.** Rolling deadlines, fast turnaround. Don't depend on municipal timelines alone. See [[Funding]].
4. **Technical spike:** stand up Bonfire locally, validate fit in one week. Stand up one Signalen integration, one BAG verification flow, one Stadsarchief lookup. See [[Technical-stack]], [[Open-data]].
5. **Map 3–4 high-value open data APIs** to specific [[Concepts|concept]] features. Confirm they actually work end-to-end before the pitch.
6. **Identify the pilot buurt.** Ask the stadsdeel which buurten have the most active civic infrastructure. See [[Adoption]].
7. **Open conversations with Waag Futurelab, PublicSpaces, Open State Foundation, Common Ground community.** Alignment and allies before funding ask goes in.
8. **Draft coöperatie structure** in sketch form. Don't form yet — but know the shape when the pilot delivers.

## Tags

#year/2026 #env/planning #city/amsterdam
