import { readFileSync } from "fs";
import { marked } from "marked";
import { dirname, join } from "path";
import { chromium } from "playwright";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const person = process.argv[2] || "roman";
const variant = process.argv[3] || "manukai-en";

const coverLetterPath = join(rootDir, `resources/${person}/${variant}/cover-letter.md`);
const outputPath = join(rootDir, `resources/${person}/${variant}/cover-letter.pdf`);

console.log("▶︎ Converting cover letter to PDF...");

const markdown = readFileSync(coverLetterPath, "utf-8");
const htmlContent = marked.parse(markdown);

const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cover Letter</title>
  <style>
    @page { size: A4; margin: 25mm; }
    body {
      font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      font-size: 11pt;
      line-height: 1.7;
      color: #1a1a1a;
      max-width: 160mm;
      margin: 0 auto;
    }
    h1 {
      font-size: 14pt;
      font-weight: 600;
      margin: 0 0 20pt 0;
      color: #0f172a;
    }
    p { 
      margin: 0 0 12pt 0; 
      text-align: left; 
    }
    strong { font-weight: 600; }
    hr { 
      border: none; 
      border-top: 0.5pt solid #cbd5e1; 
      margin: 20pt 0; 
    }
    ul { margin: 8pt 0; padding-left: 20pt; }
    li { margin: 4pt 0; }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>
`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(fullHtml, { waitUntil: "networkidle" });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  margin: { top: "25mm", right: "25mm", bottom: "25mm", left: "25mm" }
});
await browser.close();

console.log(`✅ Exported cover letter PDF to ${outputPath}`);
