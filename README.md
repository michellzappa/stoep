# Stoep wireframes

Interactive mock screens and concept notes for **Stoep** — a proposed open, hyperlocal neighborhood network for Amsterdam buurten. The name is Dutch for *sidewalk* or *front step*: the threshold between private and public where neighbors actually meet. Stoep is envisioned as the digital equivalent: not a living room (WhatsApp), not a city square (Twitter), but the civic-social layer in between.

## What Stoep is about

Stoep is an exploration (2026) into whether Amsterdam can host a **local social network** that is:

- **Open source and federated** (ActivityPub / fediverse-native), not a closed commercial silo like Nextdoor
- **Hyperlocal by default** — scoped to a gemeente-defined *buurt*, not engagement-ranked city-wide feeds
- **Fused with municipal function** — meldingen, open data, buurtbudget, permits — as a first-class civic interface, not an afterthought

The core bet: neighborhood platforms that last either run on commercial intensity or on tight integration with public function. Stoep pursues the second path.

**Status:** concept and wireframes only. This repo is for thinking, pitching, and co-design — not a product build.

## What’s in this repo

| Area | Purpose |
|------|---------|
| **`/` (home)** | Index of six phone-framed mock screens for the Indische Buurt pilot |
| **`/feed`, `/melding`, …** | Individual wireframes (bilingual NL/EN) |
| **`/docs`** | Wiki rendered from `content/wiki/` — vision, governance, stack, adoption, risks, etc. |

The six mocks stress-test key primitives: neighborhood feed, civic reporting (Signalen), weekly digest from open data, street history per address, tiered *buurtpaspoort* verification, and a neighborhood-connector moderation dashboard.

## Run locally

```bash
pnpm install
pnpm dev
```

App runs at [http://localhost:3777](http://localhost:3777).

## Related

- Concept notes: `content/wiki/` (also browsable at `/docs`)
- Main product exploration repo: [github.com/michellzappa/stoep](https://github.com/michellzappa/stoep)
