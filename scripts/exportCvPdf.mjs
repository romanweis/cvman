import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { preview } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

async function runCommand(cmd, args, options = {}) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(cmd, args, { stdio: "inherit", ...options });
    child.on("error", rejectPromise);
    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        rejectPromise(new Error(`Command failed: ${cmd} ${args.join(" ")}`));
      }
    });
  });
}

async function closeServer(server) {
  await new Promise((resolvePromise, rejectPromise) => {
    server.httpServer.close((err) => {
      if (err) rejectPromise(err);
      else resolvePromise();
    });
  });
}

async function main() {
  console.log("▶︎ Building project...");
  const npmExecPath = process.env.npm_execpath;
  const nodeExecPath = process.env.npm_node_execpath || process.execPath;

  if (npmExecPath) {
    await runCommand(nodeExecPath, [npmExecPath, "run", "build"], { cwd: rootDir });
  } else {
    const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
    await runCommand(npmCmd, ["run", "build"], {
      cwd: rootDir,
      shell: process.platform === "win32",
    });
  }

  console.log("▶︎ Starting Vite preview server...");
  let server;
  try {
    server = await preview({
      root: rootDir,
      preview: {
        host: "127.0.0.1",
        port: 4173,
        open: false,
      },
    });

    const resolvedUrl = server.resolvedUrls?.local?.[0] ?? "http://127.0.0.1:4173/";
    console.log(`▶︎ Rendering CV from ${resolvedUrl}`);

    const browser = await chromium.launch();
    try {
      const page = await browser.newPage({ viewport: { width: 1280, height: 1810 } });
      await page.goto(resolvedUrl, { waitUntil: "networkidle" });
      await page.waitForTimeout(1000);
      await page.emulateMedia({ media: "print" });

      const outputPath = resolve(rootDir, "resources", "applications", "smg-en", "cv.pdf");
      await mkdir(dirname(outputPath), { recursive: true });
      await page.pdf({
        path: outputPath,
        format: "A4",
        printBackground: true,
        margin: { top: "16mm", bottom: "16mm", left: "16mm", right: "16mm" },
      });

      console.log(`✅ Exported PDF to ${outputPath}`);
    } finally {
      await browser.close();
    }
  } finally {
    if (server) {
      await closeServer(server);
    }
  }
}

main().catch((error) => {
  console.error("❌ Failed to export CV PDF:", error);
  process.exitCode = 1;
});
