# Vision

## Thesis

Amsterdam buurten already have dense social infrastructure — WhatsApp groups, bewonersinitiatieven, buurtverenigingen, stadsdeelcommissies, buurthuizen. What they lack is a persistent, civic-first digital layer that is *theirs*. Nextdoor colonised this space in the US and entered NL; it is corporate, engagement-maximising, surveillance-prone, and structurally hostile to municipal integration.

Stoep is the alternative: an open source, fediverse-native neighborhood network, hyperlocal by default, designed from the ground up to be *fused with gemeente function* rather than adjacent to it. Strategically, it is a **miniverse** in the [post-naive internet](https://www.mozillafoundation.org/en/nothing-personal/the-post-naive-internet-era/) sense — infrastructure for one community's needs, not a bid to replace big tech for everyone. See [[Smaller-internets]].

## What "local" means here

The atomic unit is the *buurt* as defined by the gemeente's own administrative polygon — not an arbitrary radius, not a tech-chosen hexagon. Default view scopes to your straat and surrounding blocks: roughly 200 neighbors, not 20,000. See [[Concepts]] → buurt-as-unit.

Federation lets buurten connect upward (stadsdeel, city, national) when the topic warrants it, but daily texture feels like a front stoop, not a feed.

## Differentiation from Nextdoor

| Dimension | Nextdoor | Stoep |
|---|---|---|
| Ownership | US-listed corporation | Dutch coöperatie stewardship (long-term) |
| Revenue model | Ads, data | Grants + municipal contracts |
| Feed | Engagement-ranked | Chronological, proximity-scoped |
| Identity | Real names, address-adjacent | Real names, BAG-verified addresses |
| Moderation | Trust & Safety team | Neighbors under publicly-written norms, buurt council appeals |
| Data practices | Criticised under AVG/GDPR | GDPR-native by design, data minimisation |
| Municipal integration | Ad-hoc, commercial | First-class; meldingen, buurtbudget, omgevingsvergunningen |
| Federation | Closed silo | ActivityPub, portable identity |
| Code | Proprietary | AGPL, reusable across Dutch gemeentes |

## Why fediverse

Three reasons, in order of importance:

1. **Public-sector procurement fit.** PublicSpaces principles and the Dutch digital sovereignty agenda explicitly favour federated, open infrastructure over US silos. This unlocks funding conversations that a proprietary build would fail.
2. **Portability of identity and content.** A resident moving from Oost to Noord should not lose their civic history. ActivityPub makes this structural.
3. **Commons reusability.** If Stoep speaks ActivityPub and [[Technical-stack|Common Ground]] APIs, the reference implementation is portable to every Dutch gemeente. Amsterdam funds the prototype; the infrastructure becomes a Dutch civic commons. This reframes the project from "Amsterdam pilot" to "resident-layer Common Ground reference," which is a much larger funding story.

## What Stoep is not

- Not a replacement for WhatsApp. WhatsApp is where urgent, intimate buurt chatter lives and should stay. Stoep is the *persistent layer underneath* — archive, directory, events, map, civic interface — that WhatsApp is structurally bad at.
- Not a Nextdoor clone with a Dutch wrapper. The feed primitive is different; the unit of scope is different; the identity model is different; the moderation model is different.
- Not a generic social app. It is a resident-facing frontend over municipal data and civic process.
- Not building from scratch. See [[Technical-stack]].

## Name

*Stoep* evokes the physical threshold between home and street where Dutch neighbors have always encountered each other informally. The product is the digital stoep: not a living room (too private, WhatsApp), not a plein (too public, Twitter), but the in-between where people actually meet.

## Tags

#year/2026 #env/planning #city/amsterdam
