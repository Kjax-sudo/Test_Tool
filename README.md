# Golfery brand system

One repo, three consumers: the hosted brand page (people), the `/on-brand` skill (Claude), and any Cowork session pointed at this folder.

## What is here

| Path | What it is |
|---|---|
| `tokens/brand-tokens.json` | Single source of truth. Edit here first. |
| `docs/brand-system.md` | How to apply the tokens: photo, video, voice, guardrails, refusal list. |
| `facts.md` | Prices, bay names, hours, codes. Owned by the GM. |
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
