# Timeline

Month-by-month view of the 6-month pilot, with decision gates. Written so a sponsor can read it and know exactly what they're buying, and so the team knows when to stop, pivot, or proceed.

## Month 0 — pre-pilot setup

Before the clock starts on the funded work.

- One-pager (NL + EN) final and approved by sponsor.
- Funding committed (commissioned pilot or matched).
- Municipal sponsor identified and signed-on. Likely CTO Office lead.
- Pilot buurt selected with stadsdeel input. Criteria: active bewonersinitiatief, buurthuis, engaged stadsdeelcommissielid, not the richest or most contested buurt.
- [[Technical-stack|Technical spike]] complete. Base stack decision made (Bonfire vs Hometown) with memo.
- Buurtconnectors identified — 3–5 people who already hold informal trust in the buurt. Compensation agreed.
- Ethics framework drafted ([[Resident-rights]] + [[Governance]] preliminary).
- Legal: AVG counsel engaged for DPIA.

**Gate 0:** if any of the above isn't locked, don't start month 1. Unfunded setup fails.

## Month 1 — co-design and architecture

Before building. First user contact is critical.

- **Co-design sessions** in the buurthuis: 2–3 sessions of 10–20 residents each, facilitated. Output: documented resident needs, pain points, hoped-for features, language preferences, concerns.
- **Infrastructure setup.** Server provisioned in NL. DNS. AGPL repo public. CI/CD. Hosting and security baseline.
- **DPIA drafted** and circulated for review.
- **Integration scouting.** Map the three highest-value open-data endpoints (Signalen meldingen, BAG verification, Stadsarchief lookup) to working prototypes.
- **Governance skeleton** drafted: buurt council composition, moderator role, norms template.
- **Translation workflow** established for NL/EN/AR/TR across UI.

Deliverables end of month: co-design report, base platform running locally with no real users yet, DPIA v0, governance skeleton.

**Gate 1 (end of month 1):** *Did residents validate the core concept?* If co-design sessions revealed the concept is wrong — wrong primitives, wrong scope, wrong trust model — now is when to say so. Cheaper to pivot here than in month 3.

## Month 2 — alpha with seed residents

Private, ~50 residents from the co-design group and their immediate circles.

- **Alpha launch** to co-design participants + buurtconnectors' immediate networks.
- **Identity verification paths** live: BAG primary, buurtconnector vouch secondary.
- **Signalen integration** producing real meldingen feed for the buurt polygon.
- **[[Concepts|Buurt-digest]] v1** — manual/semi-automated weekly summary, printed prototype delivered to the buurthuis noticeboard.
- **Moderation tooling v1.**
- Weekly resident-feedback conversations (structured interviews, not surveys).

Deliverables: working alpha, first weekly digest on the buurthuis wall, 50 verified residents, first set of posts and meldingen flowing.

**Gate 2 (end of month 2):** *Does it feel like theirs?* Qualitative: the seed residents use Stoep unprompted. They tell neighbors. They ask for features. The buurtconnectors are not dragging it along alone. If not, investigate before scaling.

## Month 3 — first expansion and physical launch

Public in the buurt, not public-public.

- **Physical launch event:** buurtborrel at the buurthuis. Printed flyers with QR codes delivered to every address in the pilot buurt. Posters in supermarket, library, café.
- **Onboarding flow** polished: first-60-seconds designed, multilingual, accessible.
- **BAG verification** scaled (postcard option enabled for residents who want it).
- **[[Concepts|Buurt-digest]] automated** weekly; printed version reliable.
- **Buurtbudget integration** if the stadsdeel has a proposal round in this window — the highest-leverage civic hook.
- **Omgevingsvergunningen** live feed.
- **Stadsarchief lookup** live — the delight feature.

Target scale end of month: 150–250 verified residents.

**Gate 3 (end of month 3):** *Are the civic flows working end-to-end?* Specifically: meldingen submitted through Stoep are arriving in Signalen with correct metadata. Buurtbudget proposals (if any) are getting engagement. Digest is being read. If these integrations are broken or friction-heavy, the civic differentiation fails.

## Month 4 — iterate on signal

Quiet month of refinement. No big features.

- Fix what the first 250 residents are actually hitting.
- Accessibility review against WCAG 2.2 AA with actual users — elderly residents, residents with visual or motor difficulties, non-native Dutch speakers.
- Moderation load assessed. First buurt-council-equivalent convened (informal in the pilot, formalised later).
- SMS fallback live for elderly and low-tech residents.
- First defederation or federation decision made consciously (if relevant).

**Gate 4 (end of month 4):** *Is adoption trending toward the target?* Target ranges from [[Adoption]]: 15–25% of buurt adults verified by end-of-pilot. If month 4 shows <8%, the pilot is in trouble; time to diagnose honestly.

## Month 5 — scale within the buurt

Try to reach the whole buurt.

- **Second physical push:** another buurtborrel, coverage in the stadsdeelkrant, presence at a buurt event if any.
- **Referral mechanisms** (but not viral loops — a resident invites specific neighbors, not a growth hack).
- **Gemeente visible in the platform.** Stadsdeel posts an official announcement in Stoep before anywhere else. Signalen status updates visibly handled. This is the moment the gemeente becomes a resident-facing actor.
- **Buurt council formed** properly: rotating membership, written norms, first appeal heard.
- **Begin continuation funding conversations.** NLnet follow-up, SIDN, next gemeente budget cycle.

Target scale: 400–600 verified residents (~20–30% of adults).

**Gate 5 (end of month 5):** *Does it survive without the founding team's constant attention?* If moderators, buurt council, and buurtconnectors are carrying the platform, it's real. If everything still routes through Envisioning engineers, the governance isn't working.

## Month 6 — handover and reporting

Pilot closes, not the platform.

- **Handover plan** to coöperatie. Statuten drafted, founding-member conversations complete.
- **Public pilot report:** adoption metrics, civic metrics, qualitative findings, what didn't work, what to change. Published openly.
- **Coöperatie incorporation** in progress (even if not complete by month 6, the trajectory is clear).
- **Continuation funding** secured or within weeks of securing.
- **Buurt celebration** event — explicitly thank residents, moderators, buurtconnectors.
- **Second-buurt selection** begins, based on learnings.

**Final gate (end of month 6):** *Should this continue?*

Honest answers:
- If yes (adoption met, civic flows working, residents want it, gemeente signals continuation): transition to coöperatie and [[Post-pilot|year 2+ roadmap]].
- If no (adoption below 8%, civic flows broken, residents indifferent): shut it down gracefully, publish the retrospective, don't zombie-run a failed pilot. Funders respect honesty; zombies they don't fund next time.
- If partial (some buurten work, others don't): scope appropriately and continue smaller.

## What each gate protects against

| Gate | Protects against |
|---|---|
| 0 | Unfunded, unsponsored start — the "nice idea, bad execution" failure |
| 1 | Building the wrong product — premature commitment to unvalidated concept |
| 2 | Building something nobody who already said they wanted it actually uses |
| 3 | Shipping a platform that looks nice but doesn't do civic work |
| 4 | Scaling to a number instead of to real adoption |
| 5 | Founder-dependent operation that dies when the engineers leave |
| Final | Zombie pilot, face-saving continuation of failed work |

## Parallel-track funding

During the whole pilot:

- NLnet NGI0 application submitted month 1, decision typically month 3–4.
- SIDN Fonds application month 2–3.
- Continuation gemeente conversation opened month 4.
- Coöperatie formation workshops with Waag / PublicSpaces from month 4.

Funding should never depend on a single source. See [[Funding]].

## Tags

#year/2026 #env/planning #city/amsterdam
