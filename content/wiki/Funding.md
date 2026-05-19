# Funding

## The realistic money

Amsterdam doesn't usually commission custom software outright. Four funding sources cover the realistic space, in rough order of fit.

### Innovatiebudget / Digitale Stad grants

Gemeente Amsterdam internal innovation budgets, routed through the CTO Office (Chief Technology Office, Weesperstraat) or specific stadsdelen.

- **Size:** €25k – €150k for pilots.
- **Requires:** Municipal sponsor/department willing to co-own.
- **Fit:** High. Stoep is exactly the shape of project this budget exists for.
- **Timeline:** Slow. Dutch government pace. Budget cycles matter.

### SIDN Fonds

Dutch funder, explicit scope "internet for everyone." Fediverse and decentralised social are directly in scope.

- **Size:** €10k – €75k.
- **Application:** Lightweight.
- **Fit:** High. Stoep ticks every SIDN box.
- **Timeline:** Rolling-ish, multiple rounds per year.

### NLnet / NGI (Next Generation Internet)

EU-funded, Amsterdam-adjacent. NLnet runs NGI Zero Entrust and NGI0 Commons Fund; both back fediverse infrastructure regularly.

- **Size:** €5k – €50k.
- **Application:** Technical, moderate effort.
- **Fit:** Very high for the infrastructure/commons framing. Less fit for pure product work.
- **Timeline:** Rolling deadlines, fast turnaround (weeks).
- **Leverage:** Runs in parallel with municipal funding and de-risks municipal timelines.

### Stimuleringsfonds Creatieve Industrie

If framed as civic/design research rather than infrastructure.

- **Size:** variable.
- **Fit:** Medium. Works as an additional stream, not a primary one.
- **Use:** Fund the co-design phase (buurthuis sessions, research outputs) rather than the build.

## Structural options

Three models for how "the city bootstraps it":

### Commissioned pilot

City pays [[Envisioning]] to build a neighborhood pilot in one stadsdeel (e.g., Oost or Noord).

- **Deliverable:** running instance + governance playbook.
- **IP:** you retain. AGPL the code.
- **Runway:** 6 months typical.
- **Risk:** single-funder dependency, political timing.

### Matched funding

City puts in €X, Envisioning raises matching from SIDN / NLnet.

- **Pattern:** common, de-risks both sides.
- **Political advantage:** gemeente sees external validation; funders see municipal commitment.
- **Execution:** write the pitch once, present to both sides in parallel.

### Coöperatie U.A.

Spin up a Dutch coöperatie as the long-term steward. City is a founding member, not the owner. This is the model Waag and PublicSpaces use.

- **Timing:** *after* validation, not at launch. Creating the coöperatie too early is structure before substance.
- **Members:** gemeente, Envisioning, participating buurten, strategic allies (Waag / PublicSpaces / Open State).
- **Governance:** explicit in the statuten from day one.

## Recommended path

1. **Now:** commissioned pilot, one stadsdeel, 6 months. Envisioning as prime.
2. **In parallel:** NLnet NGI0 application for infrastructure / commons layer. Rolling deadline, independent timeline.
3. **During pilot:** nurture relationships with SIDN and Stimuleringsfonds for continuation funding.
4. **Post-validation:** form the coöperatie with gemeente, Envisioning, Waag / PublicSpaces as founding members.

The reason for this order: a coöperatie without a working pilot is empty bureaucracy; a pilot without a coöperatie is acceptable for 12 months. A coöperatie that owns a validated pilot is a durable Dutch civic institution.

## Budget rough-cut (pilot)

Indicative, for a 6-month one-buurt pilot:

| Line | Range |
|---|---|
| Engineering (Bonfire/Hometown fork, data integrations, deploy) | €60k–90k |
| Research / co-design (buurthuis sessions, buurtconnectors) | €20k–30k |
| Hosting, security, legal (AVG/GDPR review, AGPL publication) | €10k–15k |
| Community / physical launch (flyers, buurtborrel, printed digests) | €5k–10k |
| Governance playbook + handover documentation | €10k–15k |
| **Total** | **€105k–160k** |

Fits inside a single Innovatiebudget grant at the high end, or splits cleanly across gemeente + NLnet.

## Pitch framing that works with Dutch government

Order matters. Lead with sovereignty, end with cohesion.

1. **Digital sovereignty / PublicSpaces principles** — they explicitly want alternatives to US platforms.
2. **AVG / GDPR-native by design** — contrast with Nextdoor's data practices.
3. **Open source as procurement risk reduction** — no vendor lock-in, no platform risk.
4. **Common Ground alignment** — the reference implementation angle. See [[Technical-stack]].
5. **Neighborhood cohesion / eenzaamheid policy goals** — the social outcome that makes it legible to policy people.

## Tags

#year/2026 #env/planning #city/amsterdam
