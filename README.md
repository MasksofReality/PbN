# Requiem by Night — Website

The public site for Requiem by Night, built with [Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages.

## For staff: how to edit a page (no coding needed)

1. Every page is a plain text file ending in `.md` inside `src/`. Find the page you want (e.g. `src/denizens/vampire.md`).
2. Open it, edit the text (it's just Markdown — `**bold**`, `## headings`, `- lists`), and save.
3. Commit and push to `main`. The site rebuilds and redeploys automatically in about a minute (see `.github/workflows/deploy.yml`).

You do **not** need to touch anything in `_includes/`, `assets/`, or `.eleventy.js` to edit page content.

## Adding a brand-new page

1. Copy an existing `.md` file in the same section as a starting template (e.g. copy `src/denizens/vampire.md` to `src/denizens/newsplat.md`).
2. Update the frontmatter at the top (between the `---` lines): `title`, `designation`, `eyebrow`.
3. Write your content below the frontmatter in Markdown.
4. Add a link to it in the navigation: edit `src/_includes/layouts/base.njk` and add an `<a href="...">` line in the relevant `nav-group`.

## Running the site locally (optional, for previewing before you push)

```
npm install
npm start
```

This serves the site at `http://localhost:8080` and rebuilds live as you edit files.

To just build the static output (into `_site/`) without serving it:

```
npm run build
```

## Connecting the custom domain

1. In your domain registrar, add a `CNAME` record pointing `www` (or your chosen subdomain) at `<your-github-username>.github.io`.
2. In this repo's root, create a file named `CNAME` (no extension) containing just your domain, e.g.:
   ```
   requiembynight.com
   ```
3. In the repo's GitHub Settings → Pages, set the custom domain and enable "Enforce HTTPS."

## Known open items

- **Discord & SL landing point links are placeholders.** Once you have the real URLs, replace them in these two spots:
  1. `src/_includes/layouts/base.njk` — search for `#DISCORD_INVITE_LINK_HERE` and `#SL_LANDING_POINT_HERE` (footer, appears on every page)
  2. `src/the-sim/join-us.md` — search for the same two placeholder strings (the two big connect cards)

  Just replace the placeholder text with your real URL inside the `href="..."` quotes, leaving everything else the same.

- **`/contact/` page doesn't exist yet.** The footer has a "Contact the Staff" link pointing to `/contact/`, left over from the original site plan — this 404s until that page is built. Worth building or removing before Grand Opening.

## Resolved

- **Timeline date discrepancy (resolved):** the Basilica's founding year differed between the World Bible (100 TE) and the Mortal Timeline doc (115 TE). Per the "most recent doc wins" rule, the World Bible (modified 6/28) is newer than the Mortal Timeline (last modified 3/26), so the site uses 100 TE. Worth updating the Mortal Timeline doc itself to match, since it still says 115 TE.
- **Naming collision (resolved):** Kai confirmed "Basilica Purgatory" (the city) and "Isle of Purgatory" (the nearby Hedge Isle resort) are both intentional and stay as-is.

- **Cathayan → Hellion (resolved):** Kai confirmed Cathayan is retired sitewide in favor of Hellion, using the newer Hellion Stat Info doc as canon (Ego/Shadow dual souls, Essence, Thousand Hells, five Dharma paths: Devil Tiger, Incandescent Owl, Hymn of the Autumnal Vigil, Song of the Dancing Dragon, Spirit of the Living Earth, plus the Rare path of a Thousand Whispers). The old "Cathayan/Quejin" five-Dharma system referenced in the World Bible, Character Creation Guide, and Factions doc is superseded — those source docs still contain the old references and should be updated to match if anyone edits them directly.
- **Faction list conflict (resolved):** two versions existed across source docs. Per Kai's "most recent doc wins" rule: the Discord Structure doc (modified 7/2, the newest of the conflicting docs) names the factions Veil Keepers, Ashen Court, **Thorned Circle, God Machine Guild, Lost Mirror** — matching the original Glossary doc. The detailed BasilicaAchlys_Factions doc (modified 6/28, older) used **Sovereign Club, Searu Institute, Circle of Bone and Ivy** instead for the same three faction slots — this version is now superseded on the site. Flagged with a callout on the live Factions page since a full reversal like this is worth a staff sanity-check in case the Discord doc's role list was simply never updated rather than intentionally reverted.

## Content not on this public site (by design)

Discord server structure, Storyteller Operations Guide, event calendar internals, staff roster, and all "⚠ Storyteller Eyes Only" sections from the World Bible. These live in Discord / internal docs only.
