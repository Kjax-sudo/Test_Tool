// Minimal markdown renderer: headings, paragraphs, lists, tables, bold, code, links.
// Enough for docs/brand-system.md. Not a general purpose parser.
(function () {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const status = (s) => s.replace(/\[(confirmed|proposed|pending)([^\]]*)\]/gi, (m, k, rest) =>
    `<span class="status status--${k.toLowerCase()}">${k}${rest}</span>`)
    .replace(/\[flag[^\]]*\]/gi, '<span class="status status--flag">needs founder review</span>');
  const inline = (s) => status(esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s"(])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>'));

  function render(src) {
    const lines = src.replace(/\r/g, "").split("\n");
    let out = "", i = 0;
    const isRow = (l) => /^\s*\|.*\|\s*$/.test(l);
    const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    while (i < lines.length) {
      const l = lines[i];
      if (!l.trim()) { i++; continue; }
      let m;
      if ((m = l.match(/^(#{1,4})\s+(.*)$/))) { const n = m[1].length; out += `<h${n}>${inline(m[2])}</h${n}>`; i++; continue; }
      if (/^---+\s*$/.test(l)) { out += "<hr>"; i++; continue; }
      if (isRow(l) && lines[i + 1] && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
        const head = cells(l); i += 2; let body = "";
        while (i < lines.length && isRow(lines[i])) { body += "<tr>" + cells(lines[i]).map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>"; i++; }
        out += `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table></div>`;
        continue;
      }
      if (/^\s*[-*]\s+/.test(l)) { out += "<ul>"; while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { out += `<li>${inline(lines[i].replace(/^\s*[-*]\s+/, ""))}</li>`; i++; } out += "</ul>"; continue; }
      if (/^\s*\d+\.\s+/.test(l)) { out += "<ol>"; while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { out += `<li>${inline(lines[i].replace(/^\s*\d+\.\s+/, ""))}</li>`; i++; } out += "</ol>"; continue; }
      let p = l; i++;
      while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|\s*[-*]\s|\s*\d+\.\s|---)/.test(lines[i]) && !isRow(lines[i])) { p += " " + lines[i]; i++; }
      out += `<p>${inline(p)}</p>`;
    }
    return out;
  }

  // Split a document into { "heading text": "section markdown including its h2" }
  function sections(src) {
    const map = {}; let key = null;
    src.replace(/\r/g, "").split("\n").forEach((l) => {
      const m = l.match(/^##\s+(.*)$/);
      if (m) { key = m[1]; map[key] = ""; }
      if (key) map[key] += l + "\n";
    });
    return map;
  }
  window.GolferyMD = { render, sections };
})();
