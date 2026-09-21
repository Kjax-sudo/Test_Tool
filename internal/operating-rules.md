# Golfery operating rules (internal)

Everything removed from the public `docs/brand-system.md` when the site was made safe to share
externally, kept verbatim so no rule is lost. The public file carries brand values only; this file
carries how we operate: approvals, consent, sourcing, and the refusal list.

Not served. The repo root `.vercelignore` excludes `internal/`.

Companion file: `internal/ops-tokens.json` holds the matching token keys.

---

## header: status legend

Status tags: **[confirmed]** live on the site, in Figma, or decided by Kel or Hannah. **[proposed]** a default still open to change.

---

## header: sources line

Sources: the Figma logo library, golfery.com, Hannah's brand essence doc, the 2026 Member Agreement, and founder decisions on 2026-09-21.

---

## section 1: content goal

**Content goal:** every post should make someone in Marin think "I could see myself there this week."

---

## section 1: north star

**North star:** active member growth. Content that drives a first visit or a membership inquiry beats content that drives likes.

---

## section 4: Figma source paragraph

Source: Figma file "Logo and Brand - Golfery", Section 3. That section is canonical. Everything in Sections 1 and 2 and the loose frames around the canvas is exploration.

---

## section 4: Figma node column

| Mark | Figma node | Use on Instagram |
|---|---|---|
| Wordmark | 322:52 | Primary. Reel covers, end cards, announcements. |
| Wordmark + descriptor (SIMULATOR LOUNGE / MARIN CALIFORNIA) | 322:52, Description=true | First-touch content: ads, partner posts, anything a non-follower sees first. |
| Script G symbol | 322:490 | Story header chip, small credits. |
| Circle badge (G with text on path) | 322:505 | Story hero over footage, merch, avatar candidate. |
| Icon with cleanspace | 322:555 | Avatar and app-icon crops. |
| Signature (small wordmark) | 537:619 | Minimum-size uses. |

---

## section 4: purple logo Figma mention

- Purple logo exists in Figma. Keep it to merch and one-offs. Never on green.

---

## section 4: pure black line

- A pure black version exists. Use Shade Black instead.

---

## section 4: white file generation note

- White files: copy each green SVG and swap the fill to #FFFAF7. The README has the command.

---

## section 4: do-not-use list

**Do not use (found in the Figma file)**

- Older lockups reading "OF MARIN CA. 94901" or "OF MARIN CA. 90401". Superseded, and 90401 is the wrong zip.
- The block-G icon and the arch wordmark in the Logo_Marin frames. Earlier concepts.
- Badge frame 322:577. The text on path misspells California as "califonia". Fix before exporting.
- Any layer named Generated Image, Gemini_Generated, or ChatGPT Image. AI concept renders, mood reference only.
- Placeholder copy "Where precision meets passion...". Off voice. The "Beyond the course" headline in the same mockups is fine; it became the live tagline.

---

## section 4: exports needed list

**Exports needed in `assets/logos/`** (SVG plus 2x PNG, transparent, Cleanspace=false so templates control padding):

- `golfery-wordmark-{flagpole,green,black,white}`
- `golfery-wordmark-descriptor-{flagpole,green,black}`
- `golfery-symbol-{flagpole,green,black}`
- `golfery-badge-{flagpole,green,black}` (outline the text on path first)
- `golfery-avatar-1080.png`

---

---

## section 7: consent-value rule

- A recognizable person as the subject when their consent value in the asset index is `unknown`.

---

## section 7: retired bay line

- The retired bay name. See section 9.

---

## section 9: guardrails (full) and section 10: refusal list

## 9. Guardrails [confirmed]

**People on camera** (from the 2026 Member Agreement, section 9.2)

- Members are covered. The agreement lets Golfery use their name, image, likeness, and voice in marketing and social media.
- Members can opt out of staged marketing content in writing. The opt-out list lives in `facts.md`. Check it before making anyone the subject of a post or naming them.
- Guests and drop-ins are not covered by the member agreement. Ask on the day, or confirm the guest waiver includes a media release.
- Junior members are covered through the guardian's signature. Any other minor needs a guardian's yes before being the subject.
- Asset index consent values: `member`, `staff`, `asked`, `unknown`. Only `unknown` plus a recognizable subject blocks a post. Background and crowd appearances are fine.

**Bay names**

- The five bays are The National, Peacock, Stonetree, Marin, and Indian Valley.
- Never use "Meadow" or "Meadow Club" for a bay. Golfery has no rights to the name. The Figma floor plan still shows it and should be updated.
- Do not use another club's logo or suggest an affiliation with the clubs the bays nod to.

**Alcohol**

- Drink content can be front and center.
- If a drink-forward post is boosted as an ad, set the audience to 21 and over.

**Partners and people**

- Partner posts (Bay Club and others): co-branded content never implies exclusivity.
- Promo codes in designed frames go in Plex Mono, with an expiry date on the frame.
- The Head Pro is an independent licensee. Tag him and credit him by name. Do not describe him as staff or an employee.
- Contests and giveaways: state the prize, who can enter, and the end date in the caption.

**Approval**

- Claude drafts. Kel or Hannah approves. Nothing posts without one of them.

---

## 10. Refusal list for the /on-brand skill

Cowork should refuse or flag a draft that does any of the following, with a one-line reason:

1. Uses a banned color pairing or an off-palette color.
2. Uses a font outside the three families.
3. Sets text under 36px on a 1080 canvas or outside the safe zone.
4. Runs a headline past 7 words.
5. Contains an em dash or double hyphen.
6. Makes a recognizable person the subject when their consent value is `unknown`, or features a member on the opt-out list.
7. Uses the retired bay name, or another club's logo.
8. States a price, hours, or promo code without a `facts.md` citation.
9. Uses AI-generated people or AI renders of the space.
10. Uses a word from the avoid list.
11. Invents a stat, score, quote, or member name.
12. Marks anything as ready to publish. Cowork drafts to `/drafts`. Kel or Hannah moves it to `/approved`.

---

## section 2: Practice Round fix

The Practice Round page sets a purple text line on green; change it to Flagpole White.

---

## section 8: facts.md sourcing rule

Never state prices, bay count, hours, or promo codes from memory. Pull from `facts.md` and flag for human check.

---

## In-place rewrites in the public doc

These public lines were edited rather than deleted. The rule itself still appears in
`docs/brand-system.md`; only the internal fragment came out. Each fragment is recorded above or in
`internal/ops-tokens.json`, so nothing is lost.

| Public line | Fragment removed | Where the fragment lives now |
|---|---|---|
| Banned colour combinations | "The Practice Round page sets a purple text line on green; change it to Flagpole White." | this file, and `color.practice_round_fix` |
| Clearspace | "from the Figma grid frame" | `logo.clearspace.source` |
| Section heading "4b. Patterns from golfery.com" | renamed to "Design patterns" | n/a, heading only |
| "The site already solved most of the look" | site-provenance phrasing | n/a, phrasing only |
| Content pillars | "The homepage sections are the weekly plan's categories" | `web_patterns.site_section_use` |
| Descriptor | "The site says" provenance | `facts.descriptor_source` |
| Templates intro | "Anything Cowork designs should start from one of these" | `workflow` |
| Brand story template row | "(from Figma Stories 1 and 2)" | `templates.fields.brand_story.source` |
| Member spotlight template row | "Check the opt-out list." | `consent.opt_outs`, `templates.fields.member_spotlight.requires` |
| Photo section intro | "With no reference post set" | `workflow.reference_imagery` |
| Voice, sourcing rule | "Pull from `facts.md` and flag for human check" | this file |
