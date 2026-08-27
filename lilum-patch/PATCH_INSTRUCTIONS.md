# Patch: Lilum lore, creation guide, and Blood Arts reorganization

This reorganizes the Lilum content from the `RbN_Lilum` document across the
right pages, following the plan we agreed on. It builds on what a
collaborator had already started (`kindred.md`, `makinglilum.md`, and
`vitaeandcost.md` already existed) — this patch completes and reorganizes
that work rather than starting from scratch.

## What changed

**Rewritten:**
- `src/denizens/kindred.md` — the Lilum overview/lore page. Added the missing
  "What You Know That a Citizen Does Not" section, and linked every bloodline
  in the summary table to its own page.
- `src/character-creation/makinglilum.md` — stripped down to **just** the
  character creation mechanics (attributes, Arts, Psyche, freebies, rolling
  an Art). It previously also had Vitae, Ghouls, Stability/Eldritch, and all
  six bloodline write-ups crammed onto one 363-line page — those moved to
  their proper homes below.
- `src/denizens/kindred/vitaeandcost.md` — now the complete "ongoing play"
  reference: Vitae, feeding, Tether, the stake, Ghouls, Stability/Eldritch,
  and Health/Torpor/Final Death. (This file was also missing its front
  matter entirely, which I fixed — it wouldn't have rendered with the site's
  layout/styling before.)
- All six bloodline pages (`ventrue.md`, `toreador.md`, `malkavian.md`,
  `gangrel.md`, `nosferatu.md`, and `true-brujah.md` → **renamed to
  `brujah.md`** per your decision) — replaced with the new document's richer
  write-ups (full suggested builds, Promise, Bane).
- `src/character-creation/merits-and-flaws.md` — replaced the old generic
  Vampire merit/flaw list with the new **"Kindred (Lilum) Merits"** section
  under its own heading, noting Lilum have no Flaws at all in this system.

**New pages:**
- `src/denizens/kindred/blood-arts.md` — all eleven common Blood Arts
  (Animalism through Temporis), fully public.
- `src/denizens/kindred/thaumaturgy.md` — the four Restricted Paths. Public
  reference page (Restricted refers to in-fiction access — needing an NPC
  teacher and staff approval to actually *learn* it — not to site visibility;
  it's not hidden the way Dreamborne/Bystander are).

**Small link fixes**, unrelated to the reorganization but found along the
way: `src/character-creation/index.md`, `src/denizens/half-damned.md`, and
`src/denizens/half-damned/ghoul.md` all had stray links to the old
`/denizens/vampire/` path, which no longer exists. Updated to
`/denizens/kindred/`.

**Deleted** (do this by hand — a zip can't delete files):
- `src/denizens/vampire.md` — a stale duplicate of `kindred.md` with the old,
  simpler mechanics. Nothing in the live site links to it anymore.
- `src/denizens/kindred/true-brujah.md` — replaced by `brujah.md`.

## How to apply

1. Delete the two files listed above from your local repo.
2. Unzip this patch, then copy its `src/` folder into your repo's `src/`
   folder, letting it merge/overwrite.
3. Run `npm start` and spot-check:
   - `/denizens/kindred/` shows the lore and a linked bloodline table
   - `/character-creation/makinglilum/` is now much shorter and links out to
     Vitae, Blood Arts, Thaumaturgy, and each bloodline
   - `/denizens/kindred/brujah/` works; `/denizens/kindred/true-brujah/`
     should 404
   - `/denizens/kindred/blood-arts/` and `/denizens/kindred/thaumaturgy/`
     both load
4. Commit and push.

Nothing outside this list was touched — the Wandering Isle content, the
Werewolf/Shifters and other splat restructuring, and everything else your
collaborators have been building is untouched.
