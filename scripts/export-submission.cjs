#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { pathToFileURL } = require("node:url");

let chromium = null;

try {
  ({ chromium } = require("playwright"));
} catch {
  chromium = null;
}

const root = path.resolve(__dirname, "..");
const submissionDir = path.join(root, "submission");
const deckSource = path.join(root, "pitch-deck", "index.html");
const briefSource = path.join(root, "detail-brief", "index.html");
const deckPdf = path.join(submissionDir, "IDEATHON_KoreanInterviewCoachTeam_2026.pdf");
const briefPdf = path.join(
  submissionDir,
  "IDEATHON_KoreanInterviewCoachTeam_2026_Detail.pdf",
);
const systemChrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function printPdf(page, source, output) {
  await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle" });
  await page.pdf({
    path: output,
    printBackground: true,
    preferCSSPageSize: true,
  });
}

function printPdfWithChrome(source, output) {
  if (!fs.existsSync(systemChrome)) {
    throw new Error(
      "Playwright is not installed and Google Chrome was not found for PDF export.",
    );
  }

  const result = spawnSync(
    systemChrome,
    [
      "--headless=new",
      "--disable-gpu",
      `--print-to-pdf=${output}`,
      pathToFileURL(source).href,
    ],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    throw new Error(`Chrome PDF export failed for ${path.relative(root, source)}`);
  }
}

async function main() {
  fs.mkdirSync(submissionDir, { recursive: true });

  if (!chromium) {
    printPdfWithChrome(deckSource, deckPdf);
    printPdfWithChrome(briefSource, briefPdf);
    console.log(`Wrote ${path.relative(root, deckPdf)}`);
    console.log(`Wrote ${path.relative(root, briefPdf)}`);
    return;
  }

  const launchOptions = fs.existsSync(systemChrome)
    ? { executablePath: systemChrome }
    : {};
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await printPdf(page, deckSource, deckPdf);
  await printPdf(page, briefSource, briefPdf);

  await browser.close();

  console.log(`Wrote ${path.relative(root, deckPdf)}`);
  console.log(`Wrote ${path.relative(root, briefPdf)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
