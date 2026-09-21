# The Golfery Brand System for Instagram

Version 0.5.0, 2026-09-21

Exact values live in `tokens/brand-tokens.json`. This file explains how to apply them. If the two disagree, the JSON wins.

Status tags: **[confirmed]** live on the site, in Figma, or decided by Kel or Hannah. **[proposed]** a default still open to change.

Sources: the Figma logo library, golfery.com, Hannah's brand essence doc, the 2026 Member Agreement, and founder decisions on 2026-09-21.

---

## 1. Brand essence [confirmed]

**Tagline:** Where Golf Lives Beyond the Course.
**Subtagline:** Love the Game. Live the Hang. This is the Reel end-card line.
**Descriptor:** Marin's social sports club.

**Positioning.** The Golfery sits at the intersection of sport and lifestyle. It extends the golf course into a high-design, tech-forward, always-on venue for practice, play, and connection. The goal is to own off-course golf.

**Value props**

- Accessibility: golf anytime, whatever the weather, daylight, or schedule.
- Innovation: data-rich play and swing tracking for game improvement.
- Community: a third space for local sports, events, merch, and socializing.
- Premium but fun: modern design with cheeky nods to golf and to local culture.

**Audience.** Primary: younger professionals from their late 20s to 50s, golf enthusiasts from serious to social, people who want community without a traditional club, and busy parents who need golf to fit their lives. Secondary: high schoolers training with tech, traveling golfers, older golfers who like innovation, and families.

**Reference brands.** Malbon, Random Golf Club, Macade. Outside golf: Proof Lab, Soho House, third-wave coffee shops.

**The venue.** Five themed bays (The National, Peacock, Stonetree, Marin, Indian Valley), a PuttView green, a self-pour tap wall, and a coworking lounge at 647 Irwin Street, San Rafael. Interiors are organic modern: natural materials, warm minimalism, vintage golf objects beside contemporary art. Music is 90s hip hop, mellow EDM, and upbeat pop.

**Content goal:** every post should make someone in Marin think "I could see myself there this week."

**North star:** active member growth. Content that drives a first visit or a membership inquiry beats content that drives likes.

---

## 2. Color [confirmed]

| Token | Hex | Job |
|---|---|---|
| Chalk White | #FFFAF7 | Page and document background. Text and logo on footage. [proposed hex] |
| Golfery Green | #345C2C | Primary. Backgrounds, headlines on light. |
| Flagpole White | #FEEFE5 | Warm surface. Panels, cards, post backgrounds, text on dark. |
| Accent Purple | #7A76AE | Accent, and the coworking color. Pills, banners, coworking cards. |
| Shade Black | #121113 | Dark backgrounds, body text on light. |
| Hazy Grey | #EDEAE4 | Quiet surface. Secondary panels, dividers. |

**Rules**

- On the web and in documents, Chalk White is the page. Flagpole White and grey sit on it as panels, green and black run as full-bleed blocks. This matches golfery.com.
- On Instagram, green and Flagpole White still carry the frame so the feed stays warm. A frame should read as green or Flagpole White at thumbnail size. White there is for text and logo on footage.
- **Chalk White** carries a trace of the Flagpole hue, the same way Shade Black is a near-black. golfery.com cards use pure #FFFFFF today. The Colors section of the page shows both side by side; pick one and keep site and system in step.
- **Category code, from the pricing page:** Flagpole White cards for golf, purple for coworking, black for drop-in, green for the featured membership. Keep the code on Instagram.
- Purple is a highlighter. Labels, a single underlined word, a date chip. Purple text on Chalk White, Flagpole White or grey only at 56px and up. White or Flagpole White text on purple must be bold or large.
- Banned combinations (fail contrast): purple with green, green with black, and the three light colors as text on each other. Purple shapes beside green are fine. The Practice Round page sets a purple text line on green; change it to Flagpole White.
- Text over footage: white on a black gradient scrim, as on the site hero. Flagpole White is the alternate. Never green or purple directly on footage. [confirmed]

---

## 3. Typography [confirmed]

| Role | Family | Use |
|---|---|---|
| Display | Playfair Display | Headlines at 600. One closing phrase in 500 italic at most, as in "Where golf lives *beyond the course*". |
| Body | Archivo | Subheads, body, details. |
| Label | IBM Plex Mono | Uppercase eyebrows, dates, scores, promo codes, stats. |

**Rules [proposed]**

- Headline: 7 words max, 3 lines max.
- 36px floor on a 1080 canvas. Anything smaller is unreadable on a phone.
- Carousel slides: one idea and 35 words max per slide.
- Prices are set in Playfair, as on the pricing page. Sim stats, dates, and codes stay in Plex Mono.
- Headline rhythm follows the site: short declaratives with full stops. "Find your fit." "Play a little. Work a little. Do both."
- Every designed frame opens with a mono label (for example `LEAGUE NIGHT` or `OCT 03`), then the Playfair headline. This pairing is the signature.
- Scores, yardages, ball speed, and any number pulled from the sim go in Plex Mono. It echoes the launch monitor readout.

---

## 4. Logo [confirmed]

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

- On footage: Chalk White, matching the site hero. Flagpole White is the alternate.
- On green, black or purple: Flagpole White.
- On Chalk White, Flagpole White or grey: Golfery Green by default, Shade Black as the alternate.
- Purple logo exists in Figma. Keep it to merch and one-offs. Never on green.
- A pure black version exists. Use Shade Black instead.
- White files: copy each green SVG and swap the fill to #FFFAF7. The README has the command.

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
- Placeholder copy "Where precision meets passion...". Off voice. The "Beyond the course" headline in the same mockups is fine; it became the live tagline.

**Exports needed in `assets/logos/`** (SVG plus 2x PNG, transparent, Cleanspace=false so templates control padding):

- `golfery-wordmark-{flagpole,green,black,white}`
- `golfery-wordmark-descriptor-{flagpole,green,black}`
- `golfery-symbol-{flagpole,green,black}`
- `golfery-badge-{flagpole,green,black}` (outline the text on path first)
- `golfery-avatar-1080.png`

---

## 4b. Patterns from golfery.com [confirmed]

The site already solved most of the look. Carry these into Instagram:

| Pattern | On the site | On Instagram |
|---|---|---|
| Eyebrow dot | Plex Mono eyebrow led by a small green dot, a ball at address | Before labels on light frames |
| Italic close | Headline ends with one phrase in Playfair 500 italic | Once per headline, closing phrase only |
| Hero scrim | Full-bleed photo, bottom-up black scrim, white text left, subject right | Reel covers and brand Stories |
| Button pair | Filled cream primary, glassy secondary | Story CTA bar uses the glassy style |
| Proof strip | One line of short proof points in Plex Mono under the hero | Last line of an event or promo frame |
| Scorecard | Green block with Plex Mono rows, laid out like a scorecard | League standings, promo terms |
| Category cards | Rounded 24px cards color coded by offer, faint line icon, mono label, Playfair title, price, one arrow link | Promo and pricing posts |
| Pill badge | Purple pill, white uppercase text, sitting on a card's top edge | New, Tonight, Members only |
| Three-beat headline | "Play a little. Work a little. Do both." | House headline rhythm |
| Split section | Photo one side, eyebrow, headline, short body, one link on the other | Member spotlight, carousel middle slides |

**Content pillars.** The homepage sections are the weekly plan's categories: Golf Better, The Bays, PuttView, Leagues, The Hang, Coworking, Lessons.

**Descriptor.** The site says "Marin's social sports club." Use that in bios and first-touch captions. "Simulator Lounge, Marin California" stays inside the logo lockup only.

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
| Member spotlight | 4:5 | Photo + Flagpole White panel | Biweekly. Check the opt-out list. |
| Promo offer | 4:5 | Flagpole White, or the category color | Partner codes, first session offers |
| Tip carousel | 4:5, 5 to 8 slides | Green bookends, Flagpole White middle | Instruction content with the Head Pro |
| Story frame | 9:16 | Footage or grey | Daily. Leave room for native stickers. |
| Quote card | 4:5 | Grey | Member quotes, reviews |

---

## 7. Photo and video treatment [confirmed]

This section matters more than color. Most of the feed is footage, and the footage is the brand. With no reference post set, the golfery.com photography is the benchmark.

**Always**

- People in at least four of every five posts. Swinging, laughing, pouring, high-fiving, working on a laptop with a bay behind them.
- Warm grade. Slightly lifted shadows, warm whites. The room should look like evening even at noon.
- Sim screen visible and correctly exposed. Expose for the screen first, then lift the people.
- The details that make the venue distinct: themed bay elements, PuttView projection lines, the tap wall, club racks, the lounge, the vintage objects.
- Vertical capture for anything that might become a Reel or Story.
- Natural sound where it helps: ball strike, sim crack, a reaction.
- Drinks and the tap wall are welcome as the hero of a shot.

**Allowed in moderation**

- Clean, empty-room shots for bay and space reveals. Design is a differentiator, so show it, no more than one post in five.
- Outdoor golf imagery as supporting texture inside a designed card, the way the pricing tiers use it. Never as the hero of a post and never in a way that suggests it is the venue.

**Never**

- AI-generated people or AI renders of the space.
- Blown-out white sim screens.
- Front desk clutter, cables, cleaning supplies, half-built areas.
- A recognizable person as the subject when their consent value in the asset index is `unknown`.
- The retired bay name. See section 9.

**Reel structure [proposed]**

- Hook in the first 1.5 seconds: motion, a strike, a reaction, or a text question.
- 7 to 20 seconds for venue and vibe content. 20 to 45 seconds for tips and lessons.
- Burned-in captions on any Reel with speech: Archivo Bold, Chalk White, black scrim bar, inside the safe zone.
- End card: 1.5 seconds, green background, Flagpole White logo, then "Love the Game. Live the Hang." in Playfair.

**Music [confirmed direction]**

- Direction matches the room: 90s hip hop, mellow EDM, upbeat pop.
- Business accounts have a restricted music library on Instagram. Use tracks available to the account in-app, original audio, or royalty-free sources. Anything reused as a paid ad needs ad-cleared audio. Finish audio inside Instagram or the Edits app rather than in CapCut so licensing stays clean.

---

## 8. Voice [confirmed]

**Personality:** modern, inclusive, confident, tech-smart, sporty-cool.

**Tone**

- Come as you are. Lean out of golf stereotypes.
- Respect the game without being the game.
- Confident and witty. "This is golf, better."
- Hyper-local and culturally aware. Marin first.
- Think Steph Curry: elite but approachable, stylish but grounded.

| Do | Do not |
|---|---|
| Celebrate culture and history | Alienate newcomers |
| Be stylish and confident | Be elitist or cold |
| Use modern, clear language | Use dry golf jargon |
| Sound local: Marin, San Rafael, North Bay | Sound like a generic "Bay Area" brand |
| Invite | Sell |

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

**Hashtag sets [refine with performance data]**

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

**Words we like:** league night, tee time, after work, pull up, first round, the hang, off course, locked in

**Words we avoid:** dialed, send it, and other insider slang. Also elevate, unlock, experience (as a noun, in captions), premier, state of the art, luxury, game changer, vibes (as a standalone sentence)

---

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
