# Patch: new character-creation pages, Sim Businesses, Avatar Guidelines

Unzip over the repo root (overwrites matching files).

## DELETE this file after unzipping (zips can't delete)
- src/character-creation/merits-and-flaws.md   (replaced by merits.md; no more Flaws)

## New pages
- /character-creation/cathartic-vices/
- /character-creation/backgrounds/
- /character-creation/merits/
- /the-sim/businesses/
- /the-sim/avatar-guidelines/

## Replaced pages
- /character-creation/ (now "Make Your Character")
- /character-creation/natures-and-demeanors/

## Also edited
- base.njk nav (The Sim + Character Creation menus), index.njk homepage card links,
  merits links in makinglilum.md, makinghuman.md, humans/practices.md

No CSS change, so no ?v= bump needed. Purge Cloudflare for the HTML changes if pages look stale.
