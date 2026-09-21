// Renders the brand site from tokens/brand-tokens.json and docs/brand-system.md.
// Nothing about the brand is hardcoded here except the template layouts.
(async function () {
  const cfg = window.GOLFERY_SITE;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const title = (k) => k.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  let T, DOC;
  try {
    const [t, d] = await Promise.all([fetch(cfg.tokens), fetch(cfg.doc)]);
    if (!t.ok || !d.ok) throw new Error("fetch failed");
    T = await t.json(); DOC = await d.text();
  } catch (e) {
    document.querySelector(".main").prepend(el("p", "load-error",
      "Could not load <code>" + esc(cfg.tokens) + "</code> or <code>" + esc(cfg.doc) + "</code>. If you opened index.html straight from disk, serve the folder instead: <code>npx serve</code> or <code>python3 -m http.server</code>."));
    return;
  }

  const P = T.color.palette;
  const hex = (k) => P[k].hex;
  // Push palette and families into CSS so the page chrome follows the tokens too
  const root = document.documentElement.style;
  root.setProperty("--green", hex("golfery_green")); root.setProperty("--cream", hex("flagpole_cream"));
  root.setProperty("--purple", hex("accent_purple")); root.setProperty("--black", hex("shade_black")); root.setProperty("--grey", hex("hazy_grey"));
  const F = T.type.families;
  const fam = (k) => `"${F[k].family}", ${F[k].fallback}`;
  root.setProperty("--display", fam("display")); root.setProperty("--body", fam("body")); root.setProperty("--mono", fam("label"));

  const lum = (h) => { const v = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((x) => x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4); return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]; };
  const inkOn = (h) => lum(h) > 0.4 ? hex("shade_black") : hex("flagpole_cream");

  // Logo loader with an honest fallback when the SVG has not been exported yet
  const logoFile = (mark, color) => (T.logo.files && T.logo.files[mark] && T.logo.files[mark][color]) || "";
  function logoImg(mark, color, missingClass) {
    const src = logoFile(mark, color);
    const img = new Image(); img.alt = "Golfery " + mark.replace(/_/g, " "); img.src = src;
    img.onerror = () => img.replaceWith(el("span", missingClass, "Missing: " + esc(src.split("/").pop())));
    return img;
  }

  // Sidebar
  $("nav-version").textContent = "v" + T.meta.version + "  updated " + T.meta.updated;
  const nl = $("nav-logo"); const navImg = logoImg("wordmark", "flagpole", "nav__logo-fallback");
  navImg.onerror = () => navImg.replaceWith(el("span", "nav__logo-fallback", esc(T.facts.name_full)));
  nl.append(navImg);
  if (cfg.repo) { const g = $("nav-github"); g.href = cfg.repo; g.hidden = false; }

  // Hero facts
  [["Instagram", T.facts.handle], ["Site", T.facts.site], ["Source of truth", "brand-tokens.json v" + T.meta.version], ["Logo source", "Figma: " + T.meta.figma_source.file]]
    .forEach(([k, v]) => { const d = el("div"); d.append(el("dt", "", esc(k)), el("dd", "", esc(v))); $("hero-facts").append(d); });

  // Core rules: derived from tokens so they cannot drift
  [
    "Green and cream carry every frame. Purple is an accent: one element per frame, never on green.",
    `Headlines in ${F.display.family}. Body in ${F.body.family}. Dates, scores, codes and labels in ${F.label.family}, uppercase.`,
    `Headline: ${T.type.limits.headline_max_words} words and ${T.type.limits.headline_max_lines} lines max. Nothing under ${T.type.scale_1080.min_size}px on a 1080 canvas.`,
    "The script belongs to the logo. Place the vector, never retype it, never imitate it with a script headline.",
    `Feed posts are ${T.layout.canvas.feed_portrait.ratio}. Reels, covers and Stories are ${T.layout.canvas.reel_story.ratio}. ${T.layout.margin}px margins.`,
    "People in every shot. No empty rooms, no stock golf, no AI people.",
    "No em dashes. Sentence case. Zero to two emoji.",
    `Never state ${T.facts.do_not_hardcode.join(", ")} from memory. Pull from facts.md.`,
    "Claude drafts. A person approves and posts."
  ].forEach((r) => $("rules-list").append(el("li", "", "<span>" + esc(r) + "</span>")));

  // Swatches
  Object.entries(P).forEach(([k, c]) => {
    const b = el("button", "swatch"); b.type = "button"; b.style.background = c.hex; b.style.color = inkOn(c.hex); b.title = "Copy " + c.hex;
    b.append(el("span", "", `<span class="swatch__name">${esc(title(k))}</span><span class="swatch__role" style="display:block">${esc(c.role)}</span>`), el("span", "swatch__hex", c.hex));
    b.addEventListener("click", () => copy(c.hex)); $("swatches").append(b);
  });
  $("color-ratio").innerHTML = status(T.color.usage_ratio.status) + " " + esc(T.color.usage_ratio.rule);

  // Pairings
  T.color.pairings_approved.forEach((p) => {
    const d = el("div", "pair");
    d.append(el("div", "pair__demo", `League night<small>Thursdays, 6 to 9pm</small>`), el("div", "pair__meta", `<span class="pair__ratio">${p.contrast.toFixed(2)} : 1</span>${esc(title(p.text))} on ${esc(title(p.bg))}. ${esc(p.use[0].toUpperCase() + p.use.slice(1))}.`));
    d.firstChild.style.cssText = `background:${hex(p.bg)};color:${hex(p.text)}`; $("pairs-ok").append(d);
  });
  T.color.pairings_banned.forEach((p) => {
    const d = el("div", "pair pair--no");
    d.append(el("div", "pair__demo", `League night<small>Thursdays, 6 to 9pm</small>`), el("div", "pair__meta", `<span class="pair__ratio">${p.contrast.toFixed(2)} : 1</span>${esc(title(p.a))} with ${esc(title(p.b))}. ${esc(p.reason)}`));
    d.firstChild.style.cssText = `background:${hex(p.b)};color:${hex(p.a)}`; $("pairs-no").append(d);
  });
  $("on-photo").innerHTML = status(T.color.on_photo_text.status) + " " + esc(T.color.on_photo_text.rule);

  // Typography
  const samples = { display: "Tee it up after work", body: "Book a bay, bring a friend", label: "OCT 03 / BAY 2 / 287 YDS" };
  Object.entries(F).forEach(([k, f]) => {
    const d = el("div", "family");
    const s = el("p", "family__sample", esc(samples[k])); s.style.fontFamily = fam(k); s.style.fontWeight = k === "display" ? 700 : 500;
    if (f.transform) { s.style.textTransform = f.transform; s.style.letterSpacing = f.tracking_em + "em"; s.style.fontSize = "26px"; s.style.lineHeight = "1.3"; }
    d.append(s, el("p", "family__name", esc(f.family)), el("p", "family__role", esc(f.role) + ". Weights " + f.weights.join(", ") + "."));
    $("families").append(d);
  });
  Object.entries(T.type.scale_1080).forEach(([k, v]) => {
    if (typeof v !== "object") return;
    const r = el("div", "scale__row");
    const s = el("div", "scale__sample", v.family === "label" ? "BAY CLUB OPEN" : v.family === "display" ? "League night is back" : "Thursdays from six. Link in bio.");
    s.style.cssText = `font-family:${fam(v.family)};font-weight:${v.weight};font-size:${Math.round(v.size / 2.4)}px;line-height:${v.line_height}`;
    if (v.family === "label") { s.style.textTransform = "uppercase"; s.style.letterSpacing = F.label.tracking_em + "em"; }
    r.append(el("div", "scale__meta", `${esc(k)}<br>${v.size}px / ${v.line_height} / ${F[v.family].family} ${v.weight}`), s);
    $("type-scale").append(r);
  });
  const L = T.type.limits;
  [[L.headline_max_words, "words per headline"], [L.headline_max_lines, "headline lines"], [L.body_max_words_per_slide, "words per carousel slide"], [T.type.scale_1080.min_size + "px", "minimum text size"], [L.sizes_per_frame, "type sizes per frame"]]
    .forEach(([n, t]) => $("type-limits").append(el("li", "", `<b>${esc(n)}</b>${esc(t)}`)));

  // Logos
  $("logo-desc").textContent = T.logo.description + " Source: " + T.meta.figma_source.canonical_section;
  const tiles = [
    ["wordmark", "green", "flagpole_cream"], ["wordmark", "flagpole", "golfery_green"], ["wordmark_descriptor", "flagpole", "shade_black"],
    ["symbol", "green", "hazy_grey"], ["badge", "flagpole", "golfery_green"], ["badge", "green", "flagpole_cream"]
  ];
  const markInfo = Object.fromEntries(T.logo.marks.map((m) => [m.id, m]));
  const idFor = { wordmark: "wordmark", wordmark_descriptor: "wordmark_with_descriptor", symbol: "symbol_g", badge: "circle_badge" };
  tiles.forEach(([mark, color, bg]) => {
    const t = el("div", "logo-tile"); const art = el("div", "logo-tile__art"); art.style.background = hex(bg); art.style.color = inkOn(hex(bg));
    art.append(logoImg(mark, color, "logo-tile__missing"));
    const info = markInfo[idFor[mark]] || {};
    t.append(art, el("div", "logo-tile__meta", `<b>${esc(title(mark))}, ${esc(color)} on ${esc(title(bg))}</b>${esc(info.use || "")}<br><code>${esc(logoFile(mark, color).split("/").pop())}</code>`));
    $("logo-grid").append(t);
  });
  T.logo.rules.forEach((r) => $("logo-rules").append(el("li", "", esc(r))));
  $("logo-rules").append(el("li", "", "<b>Clearspace.</b> " + esc(T.logo.clearspace.rule)));
  T.logo.do_not_use.forEach((d) => $("logo-dont").append(el("li", "", `<b>${esc(d.what)}</b><span>${esc(d.why)}</span>`)));

  // Canvases
  $("layout-note").innerHTML = status(T.layout.status) + " " + esc(T.layout.note) + " Hatched areas are covered by Instagram's own interface. The dashed line is what the profile grid shows.";
  const sz = T.layout.safe_zone_reel_story;
  Object.entries(T.layout.canvas).forEach(([k, c]) => {
    const w = el("div", "canvas"); const box = el("div", "canvas__box"); box.style.aspectRatio = `${c.w} / ${c.h}`;
    const pct = (n, of) => (n / of * 100) + "%";
    if (k === "reel_story") {
      const top = el("div", "canvas__zone"); top.style.cssText = `top:0;left:0;right:0;height:${pct(sz.top, c.h)}`;
      const bot = el("div", "canvas__zone"); bot.style.cssText = `bottom:0;left:0;right:0;height:${pct(sz.bottom, c.h)}`;
      const rt = el("div", "canvas__zone"); rt.style.cssText = `top:${pct(sz.top, c.h)};bottom:${pct(sz.bottom, c.h)};right:0;width:${pct(sz.right, c.w)}`;
      const crop = el("div", "canvas__crop"); const ch = c.w * 4 / 3; crop.style.cssText = `left:0;right:0;top:${pct((c.h - ch) / 2, c.h)};height:${pct(ch, c.h)}`;
      box.append(top, bot, rt, crop);
    }
    if (k === "feed_portrait") { const cw = c.h * 3 / 4; const crop = el("div", "canvas__crop"); crop.style.cssText = `top:0;bottom:0;left:${pct((c.w - cw) / 2, c.w)};width:${pct(cw, c.w)}`; box.append(crop); }
    box.append(el("div", "canvas__tag", `${c.w} x ${c.h}`));
    w.append(box, el("p", "canvas__cap", `<b>${esc(title(k))}, ${esc(c.ratio)}</b>${esc(c.use)}`));
    if (k === "reel_story") w.append(el("p", "canvas__cap", `<span>Keep clear: top ${sz.top}, bottom ${sz.bottom}, right ${sz.right}px</span>`));
    $("canvases").append(w);
  });

  // Templates
  const logoSlot = (mark, color) => { const s = el("div", "ig__logo"); s.append(logoImg(mark, color, "ig__logo-missing")); return s; };
  const overlay = (is916) => {
    const o = el("div", "ig__overlay"); o.append(el("div", "ig__margin"));
    if (is916) { const a = el("div", "ig__unsafe"); a.style.cssText = `top:0;height:calc(${sz.top} * var(--u))`; const b = el("div", "ig__unsafe"); b.style.cssText = `bottom:0;height:calc(${sz.bottom} * var(--u))`; o.append(a, b); }
    return o;
  };
  const frame = (ratio, bg) => { const w = el("div", "ig-wrap"); const f = el("div", `ig ig--${ratio} ig--${bg}`); w.append(f); f.append(overlay(ratio === "916")); return [w, f]; };
  const add = (f, ...nodes) => nodes.forEach((n) => f.append(typeof n === "string" ? el("div", n) : n));
  const gap = "ig__gap", push = "ig__push";
  const h = (cls, t) => el("p", "ig__h " + cls, t);

  const builders = {
    brand_story() { const [w, f] = frame("916", "footage"); f.style.paddingTop = `calc(${sz.top} * var(--u))`; f.style.paddingBottom = `calc(${sz.bottom} * var(--u))`;
      const chip = el("div", "ig__chip", "<i></i>Golfery"); const mark = el("div", "ig__hero-mark"); mark.append(logoSlot("wordmark_descriptor", "flagpole"));
      add(f, el("div", "ig__stand-in", "Your footage"), chip, mark, el("div", "ig__cta", "Book now")); return w; },
    reel_cover() { const [w, f] = frame("916", "footage"); f.style.paddingTop = `calc(${sz.top + 60} * var(--u))`; f.style.paddingBottom = `calc(${sz.bottom} * var(--u))`;
      add(f, el("div", "ig__stand-in", "Your footage"), push, el("p", "ig__label", "Head Pro tips"), gap, h("ig__h--l", "Stop topping your driver"), gap, logoSlot("wordmark", "flagpole")); return w; },
    event_announce() { const [w, f] = frame("45", "green");
      add(f, el("p", "ig__label", "Thu Oct 08 / 6pm"), gap, h("ig__h--xl", "League night is back"), gap, el("p", "ig__sub", "Two-person teams. Eight weeks."), push, el("p", "ig__body", "Sign up at the front desk or through the link in bio."), gap, logoSlot("wordmark", "flagpole")); return w; },
    league_standings() { const [w, f] = frame("45", "black"); const ul = el("ul", "ig__rows");
      [["Team name one", "00"], ["Team name two", "00"], ["Team name three", "00"], ["Team name four", "00"]].forEach(([a, b]) => ul.append(el("li", "", `<span>${a}</span><span class="ig__stat">${b}</span>`)));
      add(f, el("p", "ig__label ig__label--purple", "Week 03 standings"), gap, h("ig__h--m", "Thursday league"), gap, ul, push, logoSlot("wordmark", "flagpole")); return w; },
    member_spotlight() { const [w, f] = frame("45", "footage"); const p = el("div", "ig__panel");
      add(p, el("p", "ig__label", "Member spotlight"), gap, h("ig__h--m", "Member name"), gap, el("p", "ig__body", "One real sentence from them, in their words. Consent flag required."));
      add(f, el("div", "ig__stand-in", "Their photo"), p); return w; },
    promo_offer() { const [w, f] = frame("45", "cream");
      add(f, el("p", "ig__label", "Partner offer"), gap, h("ig__h--xl", "First session on us"), gap, el("p", "ig__body", "Terms in one line. Expiry date always shown."), push, el("span", "ig__code", "CODE00"), gap, logoSlot("wordmark", "green")); return w; },
    tip_carousel() { const [w, f] = frame("45", "green"); const dots = el("div", "ig__dots", "<i></i><i></i><i></i><i></i><i></i>");
      add(f, el("p", "ig__label", "Swipe / 5 slides"), gap, h("ig__h--l", "Three fixes for a slice"), push, dots, gap, logoSlot("wordmark", "flagpole")); return w; },
    story_frame() { const [w, f] = frame("916", "grey"); f.style.paddingTop = `calc(${sz.top} * var(--u))`; f.style.paddingBottom = `calc(${sz.bottom} * var(--u))`;
      add(f, el("p", "ig__label", "Tonight"), gap, h("ig__h--m", "Two bays open after 7"), push, el("p", "ig__body", "Space left here for a poll, link or countdown sticker.")); f.style.color = hex("golfery_green"); return w; },
    quote_card() { const [w, f] = frame("45", "grey"); const q = h("ig__h--l", "Best Tuesday night in Marin."); q.style.fontStyle = "italic"; q.style.color = hex("golfery_green");
      add(f, push, q, gap, el("p", "ig__label", "Member, since 2026"), push); return w; }
  };

  // Hero uses the event announcement
  $("hero-frame").append(builders.event_announce());
  T.templates.list.forEach((t) => {
    if (!builders[t.id]) return;
    const cell = el("div", "tpl"); cell.append(builders[t.id]());
    const c = T.layout.canvas[t.canvas];
    cell.append(el("p", "tpl__cap", `<b>${esc(title(t.id))}</b><span>${esc(c ? c.ratio + ", " + c.w + " x " + c.h : "")}${t.note ? ". " + esc(t.note) : ""}${t.requires ? ". Requires " + esc(t.requires) + "." : ""}</span>`));
    $("template-grid").append(cell);
  });
  $("toggle-safe").addEventListener("change", (e) => document.body.classList.toggle("show-safe", e.target.checked));

  // Markdown sections from the brand doc
  const secs = GolferyMD.sections(DOC);
  const find = (needle) => Object.keys(secs).find((k) => k.toLowerCase().includes(needle));
  [["photo", "photo and video"], ["voice", "voice"], ["legal", "partner and legal"], ["refusals", "refusal list"], ["open", "open items"]].forEach(([id, needle]) => {
    const k = find(needle); if (!k) return;
    $(id).innerHTML = GolferyMD.render(secs[k].replace(/^##\s+\d+\.\s+/, "## "));
  });

  // Helpers
  function status(s) { const k = /confirmed/i.test(s) ? "confirmed" : /pending/i.test(s) ? "pending" : "proposed"; return `<span class="status status--${k}" style="margin-left:0">${k}</span>`; }
  let tt; function copy(text) { navigator.clipboard && navigator.clipboard.writeText(text); const t = $("toast"); t.textContent = "Copied " + text; t.hidden = false; clearTimeout(tt); tt = setTimeout(() => (t.hidden = true), 1400); }

  // Nav: active section and mobile toggle
  const links = [...document.querySelectorAll('.nav__item[href^="#"]')];
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-10% 0px -80% 0px" });
  document.querySelectorAll("main .section[id]").forEach((s) => io.observe(s));
  const nav = $("nav"), tog = $("nav-toggle");
  tog.addEventListener("click", () => { const o = nav.classList.toggle("is-open"); tog.setAttribute("aria-expanded", String(o)); });
  links.forEach((a) => a.addEventListener("click", () => { nav.classList.remove("is-open"); tog.setAttribute("aria-expanded", "false"); }));
})();
