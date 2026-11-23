import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My solver found the winning nonce in six minutes, wrote FOUND to a log nobody checks, and the prize expired while it waited to be noticed.";

// The gate requires 1–200 characters of non-whitespace text.
const entry = line.trim();
if (entry.length === 0 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
