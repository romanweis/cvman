import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

const themes = {
  zkb: { primary: "#003cb4", primaryDark: "#080f5e" },
  default: { primary: "#1e293b", primaryDark: "#0f172a" },
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function parseLetter(markdown) {
  const lines = markdown
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length < 10) {
    throw new Error(
      "Cover letter must have at least 10 non-empty lines (sender 3, recipient 3, date, subject, greeting, body..., closing, signature).",
    );
  }

  return {
    sender: lines.slice(0, 3),
    recipient: lines.slice(3, 6),
    date: lines[6],
    subject: lines[7],
    greeting: lines[8],
    body: lines.slice(9, lines.length - 2),
    closing: lines[lines.length - 2],
    signature: lines[lines.length - 1],
  };
}

function renderHtml(letter, theme, { lang = "de", title = "Anschreiben" } = {}) {
  const { primary, primaryDark } = theme;
  const sender = letter.sender.map(escapeHtml);
  const recipient = letter.recipient.map(escapeHtml);

  return `<!doctype html>
<html lang="${escapeHtml(lang)}">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>
  @page { size: A4; margin: 20mm 20mm 18mm 20mm; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #ffffff; color: #0f172a; }
  body {
    font-family: "Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 11.5px;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }
  .page { max-width: 170mm; margin: 0 auto; }
  .sender {
    text-align: right;
    font-size: 10.5px;
    color: ${primary};
    line-height: 1.5;
  }
  .sender .name {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${primaryDark};
    margin-bottom: 3px;
  }
  .divider {
    height: 2px;
    background: ${primary};
    margin: 10px 0 20px 0;
  }
  .recipient {
    margin-top: 4mm;
    font-size: 11.5px;
    color: #1e293b;
    line-height: 1.55;
  }
  .date {
    margin-top: 14mm;
    text-align: right;
    font-size: 11px;
    color: #475569;
    letter-spacing: 0.02em;
  }
  .subject {
    margin-top: 10mm;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: 700;
    color: ${primaryDark};
    letter-spacing: 0.01em;
  }
  .greeting {
    margin-top: 8mm;
    margin-bottom: 0;
    color: #0f172a;
  }
  .body { margin-top: 4mm; }
  .body p {
    margin: 0 0 4mm 0;
    color: #1e293b;
    text-align: justify;
    hyphens: auto;
  }
  .closing { margin-top: 6mm; margin-bottom: 0; color: #1e293b; }
  .signature {
    margin-top: 10mm;
    margin-bottom: 0;
    font-weight: 600;
    color: ${primaryDark};
    letter-spacing: 0.04em;
  }
</style>
</head>
<body>
<div class="page">
  <section class="sender">
    <div class="name">${sender[0]}</div>
    <div>${sender[1]}</div>
    <div>${sender[2]}</div>
  </section>

  <div class="divider"></div>

  <section class="recipient">
    <div>${recipient[0]}</div>
    <div>${recipient[1]}</div>
    <div>${recipient[2]}</div>
  </section>

  <div class="date">${escapeHtml(letter.date)}</div>

  <h1 class="subject">${escapeHtml(letter.subject)}</h1>

  <p class="greeting">${escapeHtml(letter.greeting)}</p>

  <div class="body">
    ${letter.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n    ")}
  </div>

  <p class="closing">${escapeHtml(letter.closing)}</p>
  <p class="signature">${escapeHtml(letter.signature)}</p>
</div>
</body>
</html>`;
}

async function main() {
  // Usage: node scripts/exportCoverLetterPdf.mjs <person> <folder> [theme]
  // Reads resources/<person>/<folder>/{coverletter,anschreiben}.md, writes matching .pdf in same folder.
  const person = process.argv[2] || "roman";
  const folder = process.argv[3] || "zkb";
  const themeKey = process.argv[4] || folder;

  const folderPath = resolve(rootDir, "resources", person, folder);
  const candidates = [
    { name: "coverletter", lang: "en", title: "Cover Letter" },
    { name: "anschreiben", lang: "de", title: "Anschreiben" },
  ];

  let chosen;
  for (const c of candidates) {
    if (await fileExists(resolve(folderPath, `${c.name}.md`))) {
      chosen = c;
      break;
    }
  }
  if (!chosen) {
    throw new Error(
      `No cover letter found in ${folderPath} (looked for coverletter.md, anschreiben.md).`,
    );
  }

  const mdPath = resolve(folderPath, `${chosen.name}.md`);
  const outPath = resolve(folderPath, `${chosen.name}.pdf`);
  const tmpDir = resolve(rootDir, "dist");
  const htmlPath = resolve(tmpDir, `cover-letter-${person}-${folder}.html`);

  console.log(`▶︎ Reading ${mdPath}`);
  const markdown = await readFile(mdPath, "utf8");
  const letter = parseLetter(markdown);
  const theme = themes[themeKey] ?? themes.default;
  const html = renderHtml(letter, theme, { lang: chosen.lang, title: chosen.title });

  await mkdir(tmpDir, { recursive: true });
  await writeFile(htmlPath, html, "utf8");

  console.log("▶︎ Rendering PDF with Playwright");
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(`file://${htmlPath.replace(/\\/g, "/")}`, {
      waitUntil: "networkidle",
    });
    await page.emulateMedia({ media: "print" });

    await mkdir(dirname(outPath), { recursive: true });
    await page.pdf({
      path: outPath,
      format: "A4",
      printBackground: true,
      margin: { top: "20mm", bottom: "18mm", left: "20mm", right: "20mm" },
    });

    console.log(`✅ Exported cover letter to ${outPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error("❌ Failed to export cover letter:", error);
  process.exitCode = 1;
});
