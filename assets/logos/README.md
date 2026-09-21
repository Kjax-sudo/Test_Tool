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

## Until the files exist

The site shows a dashed "Missing" box wherever a logo belongs. That is deliberate: the wordmark
is lettering and must never be faked with a font.
