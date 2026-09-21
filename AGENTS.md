# AGENTS.md

Instructions for Claude (Cowork, Claude Code, or chat) when producing anything for The Golfery.

## Read these first, in this order

1. `tokens/brand-tokens.json`: exact values. Colors, approved and banned pairings, type scale, canvas sizes, safe zones, logo files, templates. If anything else disagrees with this file, this file wins.
2. `docs/brand-system.md`: how to apply the values. Photo and video rules, voice, partner and legal guardrails, the refusal list.
3. `facts.md`: prices, bay names, hours, active promo codes, and the media opt-out list. Never state these from memory.

## How to work

- Start every designed post from a template id in `templates.list`. Do not invent layouts.
- Use only palette colors and only approved pairings. Check `pairings_banned` before placing text.
- Place logo files from `assets/logos/`. Never retype the wordmark or imitate it with a script font.
- Respect `type.limits` and `type.scale_1080.min_size`.
- Pick footage from the asset index. A recognizable person can be the subject only when their consent value is `member`, `staff`, or `asked`, and they are not on the opt-out list in `facts.md`.
- Write drafts to `/drafts`. Never mark anything as ready to publish. Kel or Hannah moves work to `/approved`.
- When a draft breaks a rule in the refusal list, stop and say which rule, in one line.
- Anything tagged `proposed` is a default still open to change. Follow it, and mention it if it materially shaped the output.
- The bay once named after Meadow Club is now Indian Valley. Never use the old name.

## Copy rules that are easy to miss

- No em dashes and no double hyphens. Use commas, periods, or colons.
- Avoid the "it's not X, it's Y" sentence pattern.
- Sentence case. Zero to two emoji.
- Modern, clear language. No insider golf slang. Newcomers should never feel talked past.
- The Head Pro is an independent licensee. Do not call him staff or an employee.
- Never invent a score, distance, quote, or member name.

## Changing the brand

Edit `tokens/brand-tokens.json` first, then `docs/brand-system.md` if the explanation changes. Bump `meta.version` and `meta.updated`. The hosted page and the `/on-brand` skill both read these files, so there is nothing else to update.
