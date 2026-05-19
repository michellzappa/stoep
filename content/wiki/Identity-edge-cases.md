# Identity Edge Cases

BAG verification is elegant — until it isn't. Every exception is a real person whose ability to use Stoep (or whose safety while using it) depends on thoughtful design. The gemeente *will* ask about each of these in the first meeting. Having preliminary answers shows the pitch has moral seriousness.

Principle: **verification is a spectrum, not a binary.** A useful buurtpaspoort admits multiple verification paths at different privilege levels, not one strict check.

## Verification tiers

| Tier | How | Privileges |
|---|---|---|
| **Verified resident** | BAG address + DigiD, or address postcard | Full: post, vote on buurtbudget, hold `buurtpaspoort` in this buurt |
| **Vouched resident** | 2–3 verified residents or a buurtconnector vouch | Full participation, flagged as vouched for 3 months then promoted |
| **Verified affiliate** | `bedrijfspaspoort` via KVK, or employment verification | Limited: post buurt-relevant business / institutional info only |
| **Read-only visitor** | Email confirmation | View public posts and civic data; cannot post |
| **Masked-address resident** | Verified via a protected pathway (see DV section) | Full participation, address never surfaced, privacy flag on account |

Multiple verification paths let Stoep be welcoming without collapsing its trust model.

## Domestic violence survivors and people at risk

Hardest case. Someone in a shelter, recently relocated, under an injunction, or trapped in an abusive household cannot have their address surface in public.

Design responses:

- **Masked-address tier.** Verified privately via a trusted intermediary (Veilig Thuis, a shelter, GGD) without the address entering Stoep's data model as a link-able attribute.
- **No public display of address, ever.** Not even "lives on this straat." Other residents see buurt-level only, and only if the resident opts in.
- **No directory listing.** Some buurten will want a resident directory; those with the privacy flag are excluded by default.
- **No "find my neighbors" features that could enable stalking.** Proximity is buurt-polygon only, not geocoded.
- **Safe-exit protocol.** Account can be transferred to a new buurt (on relocation) with full content portability and zero breadcrumbs at the old one.
- **Emergency button.** Direct, one-tap route to Veilig Thuis. Not on the main UI (would feel performative) but present and discoverable.

Partnership needed: Veilig Thuis or Blijf Groep should be consulted in pilot design. Possibly as members of the [[Governance|ethics committee]].

## Shortstay / expat / tourists

Someone in the buurt for 3 months without BAG registration. Genuinely part of daily buurt life, but not permanent.

- **Read-only by default.** They can see civic data, events, meldingen status. This is welcoming.
- **Limited-participation tier.** Via buurtconnector vouch, they can comment on specific threads and join events. Cannot vote on buurtbudget or hold `buurtpaspoort`.
- **Expires.** Affiliation expires after 6 months without re-verification. Prevents "shortstay forever" drift.
- **Buurt decides the threshold.** Some buurten may want higher inclusion, others tighter. Local norm.

## Tenants without BAG registration

Subtenants, rent-by-the-room residents in *zolderkamers* and shared housing, people whose landlords haven't registered the tenancy — common in Amsterdam's tight rental market.

- **Alternative verification paths:**
  - Utility bill in the resident's name at the address.
  - Signed letter from landlord (with landlord verification).
  - Two verified residents vouching.
  - Huisarts or school registration at the address.
- **Grace period.** Provisional access while verification works through.
- **No punishment for the tenant.** If a landlord is committing registration fraud, that's between landlord and gemeente, not the tenant's problem.

## Students

Changing addresses every academic year. Often registered on paper at parents' address, living elsewhere in practice.

- **eduID integration** (Dutch student identity federation) as a verification path.
- **Short-horizon buurtpaspoort** that expires with the academic year, renews automatically on re-verification.
- **Dual-buurt option.** Students can hold active status in two buurten (parental home + student address) with reduced privileges in each.

## Undocumented residents

Amsterdam has a significant undocumented population, many long-term residents who are part of the buurt social fabric. Excluding them is both a civic failure and a political statement Stoep cannot afford.

- **Vouched access** via buurtconnectors or recognised migrant-rights organisations (ASKV, Here to Support).
- **No data that could be subpoenaed by immigration authorities.** Minimal retention, no address-linked storage, no persistent identifier beyond the pseudonymous account.
- **Gemeente has no special view** (see [[Resident-rights]]) — this policy exists because of exactly this population among others.
- **Ethics committee involvement** in how this tier is implemented. Not a technical decision alone.

## Minors

Children of residents, aged 12–17.

- **Parental gating** for account creation under 16. Parent's verified account links to child's account.
- **No direct messaging** for under-16s. Threads only, in public contexts.
- **No adult-only content visibility.** Separate youth-scoped channels for buurt-youth topics (scouting, schools, youth events).
- **Age-appropriate moderation.** Stricter norms for youth-facing spaces.
- **Under 12:** not on Stoep. Schools and buurt-youth organisations are the right channels, not social software.
- **School integration.** Buurtscholen (schools in the buurt) can have institutional accounts that minors interact with without individual youth accounts. Reduces surface.

## People in shelters, crisis housing, or without fixed address

Daklozen, people in maatschappelijke opvang, people at transitional addresses.

- **Affiliated-to-buurt verification** via shelter staff or social workers who are themselves verified.
- **No address display** (same mechanism as DV survivors).
- **Partnership** with HVO-Querido, Leger des Heils, Volksbond, de Regenboog — organisations that could serve as verification anchors.
- **Acknowledge limits.** Stoep is not a replacement for social services. The goal is not to exclude; the goal is not to overreach either.

## Non-resident stakeholders

People deeply invested in the buurt who don't live there.

- **Local business owners** with `bedrijfspaspoort` (see [[Governance]] → commercial boundaries).
- **Teachers at buurt schools**, **huisartsen**, **buurthuiswerkers**, **sociaal werkers** — institutional affiliation verification.
- **Scope limited to their role.** A teacher at a buurt-school can post about school events and engage with school-related threads. Not full resident participation.
- **Clearly labelled.** `Werkt in de buurt — [School X]` appears next to their name.

## Verification errors and appeals

BAG data has errors. Gemeente registration lags reality. Postcards get lost. Every verification system must have an appeal path.

- **Appeal process.** Resident submits counter-evidence, reviewed by buurtconnector + one moderator, then ethics committee if contested.
- **Turnaround commitment.** Initial response within 5 working days.
- **Burden of proof is low.** The goal is inclusion; the cost of wrongly excluding is high, the cost of wrongly including is (usually) low.
- **Log of appeal outcomes** published quarterly (anonymised).

## Face or video verification — considered and declined

Some platforms use video selfies for identity verification. Stoep should not.

- Excludes people without high-end smartphones or good lighting.
- Bias in face recognition is well documented against darker skin tones, older faces, women.
- AVG-burdensome.
- Creates a biometric database that becomes a target.

Address-based verification with multiple paths is the right answer, not biometrics.

## Open questions (for co-design)

- Should `bedrijfspaspoort` businesses be visible in a public directory, or only in their posts? Privacy vs civic utility tradeoff.
- Vouch threshold: 2, 3, or 5 verified residents? How to prevent vouching cartels?
- When a resident moves from buurt A to buurt B, should their old buurt see a "[name] moved to a new buurt" line, or is it silent? Community attachment vs privacy.
- Multi-resident households — one account per adult, or shared? Shared is messy; individual is formal.
- Short-stay residents who become long-term — at what point does the upgrade to verified happen automatically?

These belong in the first co-design sessions with residents.

## Tags

#year/2026 #env/planning #city/amsterdam
