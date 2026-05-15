#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const { chromium } = require("playwright");

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

async function main() {
  fs.mkdirSync(submissionDir, { recursive: true });

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
