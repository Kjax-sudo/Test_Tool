# Logo files

Export from Figma, file "Logo and Brand - Golfery" (fileKey `5Tc4i7bgesaC5EvalUgcNQ`), Section 3.
Use the **Cleanspace=false** variants so templates control padding. SVG, transparent background.

Colors: flagpole = #FEEFE5, green = #345C2C, black = #121113 (Shade Black, not pure Black).

## Exact node map

Verified against the live Figma file. Each row is the one node to export for that file name.

### Wordmark, component set `Logo` (322:52), Cleanspace=false, Description=false, 727x440

| File | Node | Variant |
|---|---|---|
| `golfery-wordmark-flagpole.svg` | 322:123 | bg is=Dark, Color Logo=Flagpole White |
| `golfery-wordmark-green.svg` | 322:136 | bg is=Light, Color Logo=Golfery Green |
| `golfery-wordmark-black.svg` | 322:130 | bg is=Light, Color Logo=Shade Black |

### Wordmark + descriptor, same set, Cleanspace=false, Description=true

| File | Node | Variant | Native size |
|---|---|---|---|
| `golfery-wordmark-descriptor-flagpole.svg` | 322:71 | bg is=Dark, Flagpole White | 753x589 |
| `golfery-wordmark-descriptor-green.svg` | 322:99 | bg is=Dark, Golfery Green | 768x603 |
| `golfery-wordmark-descriptor-black.svg` | 322:77 | bg is=Dark, Shade Black | 768x591 |

Note: these three are not the same native size (753x589, 768x603, 768x591). They will not swap
cleanly in a template until they are reconciled in Figma. Worth fixing at the source.

### Symbol, component set `Symbol` (322:490), 256x479

| File | Node | Variant |
|---|---|---|
| `golfery-symbol-flagpole.svg` | 322:495 | Color=Flagpole White |
| `golfery-symbol-green.svg` | 322:503 | Color=Golfery Green |
| `golfery-symbol-black.svg` | 322:497 | Color=Shade Black |

### White, added in 0.4.0

White (`#FFFFFF`) became a palette color in 0.4.0: the page background on web, and the colorway
for logo and text over footage on Instagram. These come from their own Figma variants rather than
from recoloring the green files.

| File | Node | Variant |
|---|---|---|
| `golfery-wordmark-white.svg` | 322:53 | Logo set, bg is=Dark, Color Logo=White, Cleanspace=false, Description=false |
| `golfery-wordmark-descriptor-white.svg` | 322:57 | Logo set, bg is=Dark, Color Logo=White, Cleanspace=false, Description=true |
| `golfery-symbol-white.svg` | 322:491 | Symbol set, Color=White |
| `golfery-badge-white.svg` | 322:506 | Circle Icon set, Color=White |

### Badge, component set `Circle Icon` (322:505), 375x369

| File | Node | Variant |
|---|---|---|
| `golfery-badge-flagpole.svg` | 322:527 | Color=Flagpole White |
| `golfery-badge-green.svg` | 322:520 | Color=Golfery Green |
| `golfery-badge-black.svg` | 322:534 | Color=Shade Black |

## On the "califonia" typo

Resolved. The typo is **not** in the Circle Icon set above. Node 322:520 was rendered and reads
`SIMULATOR LOUNGE · MARIN CALIFORNIA`, spelled correctly.

The misspelling is in node 322:577, a different, older oval badge (lowercase, double ring, text
repeated twice) that is already on the do-not-use list. It is not an input to any file here, so
badge exports are not blocked on fixing it.

Text on path: the Circle Icon set renders as outlined vectors on export, so no manual outlining
step is needed.

## Export provenance

All 12 SVGs were exported from the nodes above via the Figma MCP connection, not by hand.

Two things had to be cleaned off each raw export. Figma exports a component variant together
with its parent Section chrome, so every file arrived with:

1. An opaque `<rect fill="#F5F5F5">` covering the whole canvas, which would have put a light grey
   box behind every logo. The spec calls for transparent, so it was removed.
2. A stray `Section 3` frame border drawn as a `<path>` at coordinates far outside the viewBox
   (for example `M-2213 -6587 ... H9668`), which was removed.
3. Figma's dashed purple component-set boundary marker, a `<rect>` with `stroke="#9747FF"` and
   `stroke-dasharray="10 5"`. Its edges all sit outside the viewBox so it never rendered, but it
   would reappear the moment anyone re-cropped or re-exported the file in a vector editor.

Nothing else was touched. No path data was edited, redrawn, or re-coordinated, and there are no
transforms in these files, so removing those three elements shifts nothing. Every remaining
artwork path is byte-identical to the raw Figma export, and all 12 files were rendered before and
after the cleanup to confirm the output is pixel-identical.

If you re-export by hand from the Figma UI, select the variant and use "Export selection" rather
than exporting the Section, or you will reintroduce both artifacts.

## Known issue: the black badge is pure black

`golfery-badge-black.svg` came out of Figma filled `#000000`, not Shade Black `#121113`. Its
sibling variants are correct (`golfery-badge-green.svg` is `#345C2C`, `golfery-badge-flagpole.svg`
is `#FEEFE5`), and the other three black marks are correctly `#121113`. So this is isolated to the
`Circle Icon` set: variant `Color=Shade Black` (322:534) is mis-filled at the source.

This matters because the brand rules say to avoid pure black on Instagram so the feed stays warm.
The file here is left faithful to Figma rather than silently recolored, since Figma Section 3 is
canonical. Fix the variant fill in Figma and re-export, and this note can go.

## Still to resolve

- `golfery-avatar-1080.png` is listed in `logo.exports_needed` in the tokens but has no identified
  source node in Section 3. It is most likely a crop of 322:555 (Icon with cleanspace). Confirm
  which node it should come from and it can be exported with the rest.
- The black badge fill and the descriptor size mismatch, both described above.

## Until the files exist

The site shows a dashed "Missing" box wherever a logo belongs. That is deliberate: the wordmark
is lettering and must never be faked with a font.
