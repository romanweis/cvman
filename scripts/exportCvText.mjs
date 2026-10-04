import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

const variantToFile = {
  roman: {
    "recruiting-de": "recruitingDeCv",
    "bcg-en": "bcgEnCv",
    "csharp-dev": "csharpDevDeCv",
    "owt-de": "owtDeCv",
    "smg-de": "smgDeCv",
    "smg-en": "smgEnCv",
    "leadnet-en": "leadNetEnCv",
    "lgt-en": "lgtEnCv",
    "oliverbernard-en": "oliverBernardEnCv",
    "manukai-en": "manukaiEnCv",
    "vontobel-en": "vontobelEn",
    "zkb-de": "zkbDeCv",
    "zkb-dev-de": "zkbDevDeCv",
    "jb-senior-fullstack-en": "jbSeniorFullStackEnCv",
  },
  julia: {
    "default-en": "defaultEnCv",
    "hitachi-cos-en": "hitachiCosEnCv",
  },
};

const exportNameOverrides = {
  "vontobel-en": "vontobelEnCv",
};

function stripMarkdownBold(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function renderTimelineItem(item) {
  const header = `${item.role} | ${item.company}${item.location ? ` | ${item.location}` : ""} | ${item.period}`;
  const bullets = item.highlights.map((h) => `  - ${stripMarkdownBold(h)}`).join("\n");
  return `${header}\n${bullets}`;
}

function renderSidebarSection(key, profile) {
  const labels = profile.labels;
  switch (key) {
    case "personal": {
      const lines = profile.personal.map((p) => `  ${p.label}: ${p.value}`);
      return [labels.personal.toUpperCase(), ...lines].join("\n");
    }
    case "contact": {
      const lines = profile.contact.map((c) => `  ${c.label}`);
      return [labels.contact.toUpperCase(), ...lines].join("\n");
    }
    case "skills": {
      const groups = profile.skills.map((g) => {
        const items = g.items.map((i) => `  - ${i}`).join("\n");
        return `${g.name}\n${items}`;
      });
      return [labels.skills.toUpperCase(), ...groups].join("\n\n");
    }
    case "languages": {
      const lines = profile.languages.map((l) => `  ${l.language}: ${l.level}`);
      return [labels.languages.toUpperCase(), ...lines].join("\n");
    }
    case "projects": {
      if (!profile.projects || profile.projects.length === 0) return "";
      const items = profile.projects.map((p) => {
        const head = p.url ? `${p.name} (${p.url})` : p.name;
        return `  ${head}\n    ${p.description}`;
      });
      return [(labels.projects ?? "Side Projects").toUpperCase(), ...items].join("\n");
    }
    default:
      return "";
  }
}

function renderProfileAsText(profile) {
  const lines = [];
  lines.push(profile.name);
  lines.push(profile.title);
  lines.push(`${profile.location} | ${profile.contact.map((c) => c.label).join(" | ")}`);
  lines.push("");
  lines.push(profile.availability);
  lines.push("");
  lines.push("SUMMARY");
  lines.push(profile.summary);
  lines.push("");

  lines.push(profile.labels.experience.toUpperCase());
  lines.push("");
  for (const item of profile.experiences) {
    lines.push(renderTimelineItem(item));
    lines.push("");
  }

  lines.push(profile.labels.education.toUpperCase());
  lines.push("");
  for (const item of profile.education) {
    lines.push(renderTimelineItem(item));
    lines.push("");
  }

  const sidebarSections = profile.sidebarSections ?? [
    { key: "personal" },
    { key: "contact" },
    { key: "skills" },
    { key: "languages" },
  ];
  for (const { key } of sidebarSections) {
    const block = renderSidebarSection(key, profile);
    if (block) {
      lines.push(block);
      lines.push("");
    }
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

async function main() {
  const person = process.argv[2];
  const variant = process.argv[3];
  if (!person || !variant) {
    console.error("Usage: node scripts/exportCvText.mjs <person> <variant>");
    process.exit(1);
  }

  const fileBase = variantToFile[person]?.[variant];
  if (!fileBase) {
    console.error(`Unknown variant: ${person}/${variant}`);
    process.exit(1);
  }

  const exportName = exportNameOverrides[variant] ?? fileBase;

  console.log("▶︎ Starting Vite dev server in middleware mode...");
  const server = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: "custom",
  });

  try {
    const modulePath = resolve(rootDir, "src", person, `${fileBase}.ts`);
    const mod = await server.ssrLoadModule(modulePath);
    const profile = mod[exportName];
    if (!profile) {
      console.error(`Export "${exportName}" not found in ${modulePath}`);
      console.error("Available exports:", Object.keys(mod));
      process.exit(1);
    }

    const text = renderProfileAsText(profile);
    const outputPath = resolve(rootDir, "resources", person, variant, "cv.txt");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, text, "utf8");
    console.log(`✅ Exported text CV to ${outputPath}`);
  } finally {
    await server.close();
  }
}

main().catch((error) => {
  console.error("❌ Failed to export CV text:", error);
  process.exitCode = 1;
});
