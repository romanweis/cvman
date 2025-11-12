import { readFileSync } from "fs";
import { marked } from "marked";
import { dirname, join } from "path";
import { chromium } from "playwright";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

// Allow selecting the application folder via CLI arg, defaulting to previous behavior
// Usage: node scripts/exportCoverLetterPdf.mjs <application-folder>
// Examples: lead-net-en, owt-de, smg-en, recruiting-de
const appFolder = process.argv[2] || "owt-de";

const coverLetterPath = join(
  rootDir,
  `resources/applications/${appFolder}/cover-letter.md`
);
const outputPath = join(
  rootDir,
  `resources/applications/${appFolder}/cover-letter.pdf`
);

console.log("▶︎ Converting cover letter to PDF...");

// Read markdown file
const markdown = readFileSync(coverLetterPath, "utf-8");

// Convert markdown to HTML
const htmlContent = marked.parse(markdown);

// Create complete HTML document with styling
const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cover Letter - Roman Weis</title>
  <style>
    @page {
      size: A4;
      margin: 20mm;
    }
    
    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    body {
      font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 170mm;
      margin: 0 auto;
      padding: 0;
    }
    
    h1 {
      font-size: 16pt;
      font-weight: 600;
      margin: 0 0 16pt 0;
      color: #0f172a;
      border-bottom: 1.5pt solid #cbd5e1;
      padding-bottom: 8pt;
    }
    
    h2, h3 {
      font-size: 12pt;
      font-weight: 600;
      margin: 12pt 0 6pt 0;
      color: #334155;
    }
    
    p {
      margin: 0 0 10pt 0;
      text-align: justify;
    }
    
    strong {
      font-weight: 600;
      color: #0f172a;
    }
    
    hr {
      border: none;
      border-top: 1pt solid #e2e8f0;
      margin: 16pt 0;
    }
    
    ul {
      margin: 8pt 0;
      padding-left: 20pt;
    }
    
    li {
      margin: 4pt 0;
    }
    
    /* Header contact info styling */
    body > p:first-of-type {
      margin-bottom: 6pt;
      line-height: 1.4;
    }
    
    /* Closing signature */
    body > p:last-of-type {
      margin-top: 16pt;
    }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>
`;

// Launch browser and generate PDF
const browser = await chromium.launch();
const page = await browser.newPage();

await page.setContent(fullHtml, { waitUntil: "networkidle" });

await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  margin: {
    top: "20mm",
    right: "20mm",
    bottom: "20mm",
    left: "20mm",
  },
});

await browser.close();

console.log(`✅ Exported cover letter PDF to ${outputPath}`);
