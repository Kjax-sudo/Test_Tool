# Bay Club kit photos

Drop JPG, PNG, or WebP files in this folder, commit, and push. The partner kit page at
`/partners/bayclub/` shows every image here with a download button. Nothing else to edit.

How it works: on each Vercel deploy, `scripts/bayclub-photos-manifest.mjs` lists this folder
into `manifest.json`, which the page reads. `manifest.json` is generated, so it is not committed.
To preview locally, run `node scripts/bayclub-photos-manifest.mjs` from the repo root first.

Before adding a photo:

- Anyone recognizable must have a consent value of `member`, `staff`, or `asked` in the asset
  index and must not be on the media opt-out list in `facts.md`.
- Use a clear filename. It becomes the download name and the caption on the page, for example
  `golfery-bay-the-national.jpg`. Use bay names from `facts.md` only.
- Keep files under about 5 MB. Long edge around 2400px is plenty for web and social.
