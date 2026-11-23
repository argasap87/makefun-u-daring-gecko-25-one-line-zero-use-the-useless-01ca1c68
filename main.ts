// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original line — one hilariously useless superpower —
// to /output/entry.txt. The line must be UTF-8, 1-200 characters,
// not only whitespace, and exactly one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I can read any mind on Earth \u2014 but only in a language that went extinct in 1402.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
