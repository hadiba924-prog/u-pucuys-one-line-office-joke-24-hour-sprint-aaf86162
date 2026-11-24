// One-Line Office Joke entry for make.fun.
// Writes a single-line joke about office life to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt),
// with no trailing newline, as the bounty gate requires.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I muted myself on a video call, nodded for 20 minutes, and got promoted for my 'thoughtful silence'.";

const MAX_CHARS = 200;

if (JOKE.length < 1 || JOKE.length > MAX_CHARS) {
  throw new Error(
    `Joke must be 1-${MAX_CHARS} characters, got ${JOKE.length}.`,
  );
}

if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("Joke must be a single non-blank line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Read back what was written: fail loudly instead of shipping a
// truncated or altered file to the gate.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke exactly.");
}
console.log(`Wrote ${written.length} characters to ${outPath}`);
