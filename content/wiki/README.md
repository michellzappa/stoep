# Stoep

**Status:** Exploration — April 2026. Long before build.

**What:** A local social network for Amsterdam buurten. Like Nextdoor, but open source, fediverse-native, and fused with municipal function. Gemeente Amsterdam wants to commission [[MZ]] / [[Envisioning]] to prototype it.

**Name:** *Stoep* — Dutch for "sidewalk" or "front step." The threshold between private and public where neighbors actually encounter each other. The product is the digital stoep.

---

## Why this folder exists

These are building blocks, not a plan. The seeding conversation spanned funding, technical stack, data sources, adoption, and governance. This folder captures each slice as its own concept note so they can be reworked in isolation, backlinked, and iterated before a single line of code is written.

The deliberate order is: pin the concepts → validate with a buurt → then build.

## Map

### Core

| File | What it holds |
|---|---|
| [[Vision]] | Thesis, differentiation from Nextdoor, why fediverse, what "local" means |
| [[Smaller-internets]] | Post-naive / miniverse framing — why buurt-scale is the point, four layers, ecosystem context |
| [[Concepts]] | Core primitives: buurt-as-unit, buurtpaspoort, buurt-digest, straatgeschiedenis, federation, moderation-as-civic-role, offline bridges |
| [[Personas]] | Day-in-the-life scenarios: Aisha, Henk, Mehmet, Lena, Farida — each stress-tests a different design decision |

### Strategy & execution

| File | What it holds |
|---|---|
| [[Funding]] | Grant landscape (Innovatiebudget, SIDN, NLnet, Stimuleringsfonds), structural options (commissioned pilot, matched, coöperatie) |
| [[Adoption]] | Seeding strategy, buurtconnectors, gemeente-as-first-user, physical launch |
| [[Timeline]] | Month-by-month pilot plan with decision gates |
| [[Post-pilot]] | Year 2–5 trajectory: replication, second gemeente, maturity-or-fork at year 5 |
| [[Risks-and-next-steps]] | Graveyard of comparable projects, failure modes, concrete next actions |

### Technical & data

| File | What it holds |
|---|---|
| [[Technical-stack]] | Stack options (Bonfire, Hometown, Lemmy), architecture, licensing, Common Ground fit, federation politics |
| [[Open-data]] | Amsterdam data sources and the product features they enable |

### Governance & rights

| File | What it holds |
|---|---|
| [[Governance]] | Coöperatie U.A. structure, decision rights, buurt council, commercial & political boundaries, moderation ops |
| [[Resident-rights]] | The civic charter: 12 commitments, structurally enforced |
| [[Identity-edge-cases]] | DV survivors, shortstay, tenants without BAG, students, undocumented residents, minors, non-resident stakeholders |

### Research & precedent

| File | What it holds |
|---|---|
| [[Precedents-and-evidence]] | Decidim, Consul, vTaiwan, Commonplace — positive comparables. Ostrom, Putnam, SCP, Movisie — policy evidence base. See also [[Smaller-internets]] for cultural/infra framing |

## Core bet

Neighborhood social networks have a graveyard. The projects that persist either (a) have Nextdoor-style commercial intensity or (b) are tightly fused with municipal function. Path (b) is the only plausible one here, which means the gemeente integration is not a nice-to-have — it is the entire adoption strategy. See [[Risks-and-next-steps]].

## Tags

#year/2026 #env/planning #city/amsterdam
