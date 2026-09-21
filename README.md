# Golfery brand system

One repo, three consumers: the hosted brand page (people), the `/on-brand` skill (Claude), and any Cowork session pointed at this folder.

## What is here

| Path | What it is |
|---|---|
| `tokens/brand-tokens.json` | Single source of truth. Edit here first. |
| `docs/brand-system.md` | How to apply the tokens: photo, video, voice, guardrails, refusal list. |
| `facts.md` | Prices, bay names, hours, codes, media opt-outs. Owned by Kel and Hannah. |
| `AGENTS.md` | Instructions for Claude. |
| `skills/on-brand/SKILL.md` | The Cowork skill. |
| `assets/logos/` | Logo SVGs exported from Figma. See the README in that folder. |
| `index.html`, `site/` | The page. Static, no build step. It fetches the two files above and renders them. |

## Deploy

1. Create a private GitHub repo and push this folder.
2. In Vercel: Add New, Project, import the repo. Framework preset "Other". No build command, output directory blank.
3. Set `repo` in `site/config.js` to the GitHub URL so the sidebar links to it.
4. Optional: turn on Vercel Deployment Protection if the page should be team-only. `facts.md` and the docs are served as static files, so treat the site as public unless protected.

Every push to `main` redeploys. To change the brand, edit the JSON or the markdown in GitHub's web editor and commit.

## Preview locally

The page uses `fetch`, so open it through a server: `npx serve` or `python3 -m http.server`, then visit the printed URL.

## Use from Cowork

Clone the repo next to your content folders, or add it as a Cowork project folder. Install `skills/on-brand` as a skill. Claude reads the same files this page renders, so the page is always an accurate picture of what it will produce.

## White logo files

Already done. The four Chalk White marks are in `assets/logos/`:

```
golfery-wordmark-white.svg            golfery-symbol-white.svg
golfery-wordmark-descriptor-white.svg golfery-badge-white.svg
```

They were built from the real Figma `White` variants and then recolored to Chalk White `#FFFAF7`,
which keeps the authentic geometry. Regenerating them from the green files with `sed` is not
needed, and is also riskier than it looks: the badge ring is a `stroke` rather than a `fill`, so a
substitution that only targets fills leaves part of the mark the wrong color.

The page keeps a mask-tint fallback for any colorway whose file is missing, so it degrades
gracefully, but with these four present it never fires. Node ids and the recolor rationale are in
`assets/logos/README.md`.

## Changelog

- 0.5.0: Founder decisions applied and the open items section removed. Flagpole White keeps its name; new page white is Chalk White (#FFFAF7, proposed). Bays updated to five with Indian Valley. Brand essence, voice and tagline system folded in from the brand doc. Consent rules now follow the Member Agreement. Pricing loaded into facts.md. Category color code and pricing page patterns added.
- 0.4.0: White (#FFFFFF) added and set as the page background. Cream and grey become panels. Type weights aligned with golfery.com (Playfair 500/600, 500 italic). Patterns from the site added. Descriptor changed to "Marin's social sports club".
- 0.3.0: First deploy.
