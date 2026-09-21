# The Golfery Brand System for Instagram

Version 0.3.0, 2026-09-21

Exact values live in `tokens/brand-tokens.json`. This file explains how to apply them. If the two disagree, the JSON wins.

Status tags: **[confirmed]** already in use, **[proposed]** Claude default awaiting founder review, **[pending]** waiting on an asset.

---

## 1. Who we are in one paragraph [proposed]

The Golfery is Marin's first dedicated indoor golf simulator venue: themed bays, an AR putting green, a self-pour tap wall, and a coworking lounge at 647 Irwin Street in San Rafael. Members come to play, work, and hang out. The feed should feel like the room does at 7pm on a league night: warm, social, a little competitive, rooted in golf tradition without the country club stiffness.

**Content goal:** every post should make a 25 to 45 year old in Marin think "I could see myself there this week."

**North star:** active member growth. Content that drives a first visit or a membership inquiry beats content that drives likes.

---

## 2. Color [confirmed]

| Token | Hex | Job |
|---|---|---|
| Golfery Green | #345C2C | Primary. Backgrounds, headlines on light. |
| Flagpole Cream | #FEEFE5 | Primary light. Backgrounds, text on dark. |
| Accent Purple | #7A76AE | Accent. One element per frame. |
| Shade Black | #121113 | Dark backgrounds, body text on light. |
| Hazy Grey | #EDEAE4 | Secondary light, cards, dividers. |

**Rules**

- Green and cream carry the brand. A frame should read as green or cream at thumbnail size.
- Purple is a highlighter. Labels, a single underlined word, a date chip. Purple text on cream or grey only at 56px and up. [proposed]
- Banned combinations (fail contrast): purple with green, green with black, cream text on grey.
- Text over footage: cream on a black gradient scrim. Never green or purple directly on footage. [proposed]

---

## 3. Typography [confirmed families, proposed scale]

| Role | Family | Use |
|---|---|---|
| Display | Playfair Display | Headlines. Bold, occasional italic for one emphasized word. |
| Body | Archivo | Subheads, body, details. |
| Label | IBM Plex Mono | Uppercase eyebrows, dates, scores, promo codes, stats. |

**Rules [proposed]**

- Headline: 7 words max, 3 lines max.
- 36px floor on a 1080 canvas. Anything smaller is unreadable on a phone.
- Carousel slides: one idea and 35 words max per slide.
- Every designed frame opens with a mono label (for example `LEAGUE NIGHT` or `OCT 03`), then the Playfair headline. This pairing is the signature.
- Scores, yardages, ball speed, and any number pulled from the sim go in Plex Mono. It echoes the launch monitor readout.

---

## 4. Logo [confirmed from Figma, exports pending]

Source: Figma file "Logo and Brand - Golfery", Section 3. That section is canonical. Everything in Sections 1 and 2 and the loose frames around the canvas is exploration.

The logo is a hand-lettered script wordmark with an underline swash that ends in a club head. It is lettering, so it is always placed as a vector and never retyped in a font.

| Mark | Figma node | Use on Instagram |
|---|---|---|
| Wordmark | 322:52 | Primary. Reel covers, end cards, announcements. |
| Wordmark + descriptor (SIMULATOR LOUNGE / MARIN CALIFORNIA) | 322:52, Description=true | First-touch content: ads, partner posts, anything a non-follower sees first. |
| Script G symbol | 322:490 | Story header chip, small credits. |
| Circle badge (G with text on path) | 322:505 | Story hero over footage, merch, avatar candidate. |
| Icon with cleanspace | 322:555 | Avatar and app-icon crops. |
| Signature (small wordmark) | 537:619 | Minimum-size uses. |

**Colorways for Instagram**

- On green, black, or footage: Flagpole White.
- On cream or grey: Golfery Green by default, Shade Black as the alternate.
- Purple logo exists in Figma. Keep it to merch and one-offs. Never on green.
- Pure white and pure black versions exist. Skip them on Instagram so the feed stays warm.

**Clearspace:** from the Figma grid frame, about 14 percent of logo width left and right, about 20 percent of logo height top and bottom.

**Minimum size on a 1080 canvas [proposed]:** wordmark 220px wide, symbol 96px tall, badge 240px wide.

**Rules**

- One mark per frame.
- Wordmark as hero: up to 60 percent of canvas width. As sign-off: up to 20 percent, bottom center or bottom left inside the margin.
- Never imitate the logo with a script headline. Headlines stay in Playfair Display. The script belongs to the logo alone.
- No shadows, outlines, gradients, rotation, stretching, or off-palette recolors.
- Carousels: first and last slide only. Reels: cover and end card only. No persistent watermark.

**Do not use (found in the Figma file)**

- Older lockups reading "OF MARIN CA. 94901" or "OF MARIN CA. 90401". Superseded, and 90401 is the wrong zip.
- The block-G icon and the arch wordmark in the Logo_Marin frames. Earlier concepts.
- Badge frame 322:577. The text on path misspells California as "califonia". Fix before exporting.
- Any layer named Generated Image, Gemini_Generated, or ChatGPT Image. AI concept renders, mood reference only.
- Placeholder copy "Where precision meets passion..." and "Beyond the Course". Off voice, and it references an outdoor course.

**Exports needed in `assets/logos/`** (SVG plus 2x PNG, transparent, Cleanspace=false so templates control padding):

- `golfery-wordmark-{flagpole,green,black}`
- `golfery-wordmark-descriptor-{flagpole,green,black}`
- `golfery-symbol-{flagpole,green,black}`
- `golfery-badge-{flagpole,green,black}` (outline the text on path first)
- `golfery-avatar-1080.png`

**Naming note:** Figma calls the cream "Flagpole White". The site CSS and this system call it "Flagpole Cream". Same hex (#FEEFE5). Pick one name and use it everywhere.

---

## 5. Layout [proposed]

- Default feed format is 4:5 (1080x1350). Reels, covers, and Stories are 9:16 (1080x1920). Avoid square.
- 72px margins. 12px grid.
- Reels and Stories safe zone: keep text out of the top 250px, bottom 420px, and right 120px.
- Profile grid shows a 3:4 center crop. Headline and logo on Reel covers must sit inside the center 1080x1440.
- Instagram changes its UI chrome regularly. Recheck safe zones quarterly.

---

## 6. Templates [proposed]

These are the brand's "components." Anything Cowork designs should start from one of these.

| Template | Format | Background | When |
|---|---|---|---|
| Brand story (from Figma Stories 1 and 2) | 9:16 | Full-bleed footage, slightly darkened | House look for Stories: symbol chip top left, one centered hero mark, translucent CTA bar |
| Reel cover | 9:16 | Footage + scrim | Every Reel |
| Event announce | 4:5 | Green | Leagues, watch parties, takeovers |
| League standings | 4:5 | Black | Weekly during league season |
| Member spotlight | 4:5 | Photo + cream panel | Biweekly. Requires consent. |
| Promo offer | 4:5 | Cream | Partner codes, first session offers |
| Tip carousel | 4:5, 5 to 8 slides | Green bookends, cream middle | Instruction content with the Head Pro |
| Story frame | 9:16 | Footage or grey | Daily. Leave room for native stickers. |
| Quote card | 4:5 | Grey | Member quotes, reviews |

---

## 7. Photo and video treatment [proposed]

This section matters more than color. Most of the feed is footage, and the footage is the brand.

**Always**

- People in frame. Swinging, laughing, pouring, high-fiving, working on a laptop with a bay behind them.
- Warm grade. Slightly lifted shadows, warm whites. The room should look like evening even at noon.
- Sim screen visible and correctly exposed. Expose for the screen first, then lift the people.
- The details that make the venue distinct: themed bay elements, PuttView projection lines on the green, the tap wall, club racks, the lounge.
- Vertical capture for anything that might become a Reel or Story.
- Natural sound where it helps: ball strike, sim crack, a reaction.

**Never**

- Empty bays or an empty room. If no one is in the shot, do not post it.
- Stock golf imagery, outdoor course b-roll we did not shoot, AI-generated people.
- Blown-out white sim screens.
- Front desk clutter, cables, cleaning supplies, half-built areas.
- Identifiable minors without a signed guardian release.
- Identifiable members or guests without the consent flag set in the asset index.
- Alcohol as the hero of the shot until the liquor license status is cleared for promotion. Check with Hannah before any tap wall or drink-forward post. [flag for founder review]

**Reel structure [proposed]**

- Hook in the first 1.5 seconds: motion, a strike, a reaction, or a text question.
- 7 to 20 seconds for venue and vibe content. 20 to 45 seconds for tips and lessons.
- Burned-in captions on any Reel with speech: Archivo Bold, cream, black scrim bar, inside the safe zone.
- End card: 1.5 seconds, green background, cream logo, one-line CTA in Archivo.

**Music [proposed]**

- Direction matches the room: 90s hip hop, pop, low-tempo EDM.
- Business accounts have a restricted music library on Instagram. Use tracks available to the account in-app, original audio, or royalty-free sources. Anything reused as a paid ad needs ad-cleared audio. Finish audio inside Instagram or the Edits app rather than in CapCut so licensing stays clean.

---

## 8. Voice [proposed]

**We sound like:** the friend who got you into golf and also knows a good bar. Confident, warm, a little dry. Locals talking to locals.

| We are | We are not |
|---|---|
| Social | Salesy |
| Confident | Braggy |
| Golf-literate | Gatekeeping |
| Playful | Goofy |
| Local (Marin, San Rafael, North Bay) | Generic "Bay Area" |

**Caption structure**

1. Hook line, under 10 words, stands alone before the "more" cutoff.
2. One to three short lines of context.
3. One CTA.
4. Hashtags on their own line, 3 to 5 max.

**CTA library**

- Book a bay: link in bio
- First session is on us: link in bio
- League signups are open: link in bio
- DM us "LEAGUE" and we will send details
- Tag who you are bringing

**Hashtag sets [proposed, refine with performance data]**

- Core: #golfery #indoorgolf #marincounty #sanrafael
- Rotate: #golfsimulator #northbay #marinlife #golfleague #puttview

**Style rules**

- No em dashes. Ever. Use commas, periods, or colons. [confirmed]
- No double hyphens as a substitute.
- Avoid the "it's not X, it's Y" sentence pattern.
- Emoji: zero to two per caption. Golf flag and beer are fine. No emoji strings.
- Sentence case for captions and headlines. Uppercase only in mono labels.
- Say "members" and "guests." Do not say "customers" or "users."
- Say "bay" and "sim." Do not say "booth" or "stall."
- Numbers from the sim are always real. Never invent a score, distance, or ball speed.
- Never state prices, bay count, hours, or promo codes from memory. Pull from `facts.md` and flag for human check.

**Words we like:** dialed, locked in, league night, tee time, after work, pull up, first round, send it (sparingly)

**Words we avoid:** elevate, unlock, experience (as a noun), premier, state of the art, luxury, game changer, vibes (as a standalone sentence)

---

## 9. Partner and legal guardrails [confirmed where noted]

- Partner posts (Bay Club and others): co-branded content never implies exclusivity. [confirmed]
- Promo codes in designed frames go in Plex Mono, with an expiry date on the frame.
- The Head Pro is an independent licensee. Tag him and credit him by name. Do not describe him as staff or an employee. [confirmed structure, proposed wording]
- Member and guest likeness requires the consent flag. Kids programming content requires a guardian release. Route the release language through counsel.
- Giveaways and contests need posted terms. Flag any contest post for legal review before scheduling.

---

## 10. Refusal list for the /on-brand skill

Cowork should refuse or flag a draft that does any of the following, with a one-line reason:

1. Uses a banned color pairing or an off-palette color.
2. Uses a font outside the three families.
3. Sets text under 36px on a 1080 canvas or outside the safe zone.
4. Runs a headline past 7 words.
5. Contains an em dash or double hyphen.
6. Selects an asset with the consent flag false or blank and a recognizable face.
7. Selects footage of an empty room.
8. States a price, bay count, hours, or promo code without a `facts.md` citation.
9. Leads with alcohol while the license flag in `facts.md` is not cleared.
10. Uses a word from the avoid list.
11. Invents a stat, score, quote, or member name.
12. Marks anything as ready to publish. Cowork drafts to `/drafts`. A human moves it to `/approved`.

---

## Open items for founder review

| # | Item | Owner |
|---|---|---|
| 1 | Export logo set from Figma Section 3 into `assets/logos/`; fix "califonia" typo on badge 322:577 first | Kel |
| 1a | Pick one name: Flagpole White or Flagpole Cream | Kel |
| 1b | Confirm bay names from Figma floor plan for `facts.md`: The National, The Peacock, The Stonetree, The Marin, The Meadow, plus PuttView | Lindsey |
| 2 | React to Section 7 photo and video rules | Lindsey |
| 3 | React to Section 8 voice, word lists, CTA library | Lindsey, Colin |
| 4 | Confirm alcohol content rule given license status | Hannah |
| 5 | Media release language for members and minors | Corey |
| 6 | Create `facts.md` with current prices, bay count, hours, active codes | Lindsey |
| 7 | Pull 10 best-performing past posts into `assets/reference/` | Lindsey |
