import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Winning entry C07: locked out in a towel, neighbours asking questions.
// Won the builder H2H 1.950/3 (beat C02, C11, C01); cruel-judge fix tied 2-2, original ships.
const ENTRY =
  "Can't come in \u2014 I got locked out of my own house wearing a towel and the neighbours have questions I am not ready to answer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: the file must be exactly the entry, 1-200 chars.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("entry.txt does not match the expected entry");
}
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry length ${back.length} outside the 1-200 gate`);
}
const digest = createHash("sha256").update(back, "utf8").digest("hex");
const EXPECTED_SHA256 =
  "ffbb052b2129fde281cee08e867ec4c69ca4cdbe349fe7b561b4e2e52e9f0b6d";
if (digest !== EXPECTED_SHA256) {
  throw new Error(`entry sha256 mismatch: got ${digest}`);
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (back.trim() !== back) {
  throw new Error("entry has leading or trailing whitespace");
}
console.log(`wrote ${outPath} (${back.length} chars, sha256 ${digest})`);
