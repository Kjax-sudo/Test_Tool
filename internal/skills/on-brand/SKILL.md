---
name: on-brand
description: Apply and enforce The Golfery brand on any Instagram post, Story, Reel cover, caption, or other public content. Use whenever drafting, designing, or reviewing Golfery content, or when asked to check whether something is on brand.
---

# /on-brand

## Load

Read, from the brand repo root:

1. `tokens/brand-tokens.json`
2. `internal/ops-tokens.json`
3. `docs/brand-system.md`
4. `internal/operating-rules.md`
5. `internal/facts.md`

If any file is missing, stop and say which one.

## When drafting

1. Pick a template id from `templates.list` that fits the job. Name it in your output.
2. Build the frame at the canvas size for that template. Keep text inside margins and, on 9:16, inside the safe zone.
3. Colors from `color.palette` only. Text and background must be an entry in `pairings_approved` and must respect its `use` note.
4. Type from `type.families` at sizes in `type.scale_1080`. Respect `type.limits`.
5. Logo from `logo.files`, in the colorway `logo.colorways_for_instagram` calls for. One mark per frame.
6. Caption follows the structure in the Voice section: hook, one to three lines, one CTA, three to five hashtags on their own line.
7. Any price, hours, or code comes from `internal/facts.md`, with a note telling the reviewer to verify it.
8. Save to `/drafts` with the template id and date in the file name.

## When reviewing

Run the draft against the refusal list in `internal/operating-rules.md`. Report as a short list: rule number, what failed, the fix. If nothing fails, say so in one line.

## Refuse or flag, with a one-line reason

Everything in the refusal list in `internal/operating-rules.md`. The ones that matter most:

- A banned or off-palette color pairing.
- A recognizable person as the subject with consent value `unknown`, or anyone on the opt-out list.
- The retired bay name (Meadow, Meadow Club).
- A stated price, hours, or code with no `internal/facts.md` citation.
- AI-generated people or renders of the space.
- An em dash or double hyphen.
- Marking anything ready to publish.

## Output

Reel end cards close with the subtagline from `internal/facts.md`. Approvers are Kel and Hannah.

Draft, then a three-line footer: template used, facts that need a human check, any `proposed` rule that shaped the result.
