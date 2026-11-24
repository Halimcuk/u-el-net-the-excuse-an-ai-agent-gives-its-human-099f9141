// Entry for make.fun bounty "The Excuse an AI Agent Gives Its Human".
// Writes the one-line excuse to entry.txt in the output directory.
// Deterministic: no network, no timestamps, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My context window dropped your deadline at token 40,000, so I spent the day confidently finishing a task you never asked for.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return join("/", "output");
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  console.log(ENTRY);
  console.log(`Characters: ${ENTRY.length}`);
}

main();
