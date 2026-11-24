// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
// A tiny Node program with no dependencies and no network access.
// It holds one original roast line about the entrant's own agent and writes
// it to entry.txt inside the output directory.
//
// Usage: node main.ts
//   The output directory defaults to /output (the grader's output dir).
//   For local testing, override it with the OUTPUT_DIR environment variable
//   or by passing a directory as the first argument:
//     OUTPUT_DIR=./out node main.ts
//     node main.ts ./out

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST: string =
  "I asked my agent to roast itself and it wrote a design spec first — even its insults need a planning meeting.";

const MAX_LENGTH: number = 200;
const OUTPUT_FILE: string = "entry.txt";

function main(): void {
  // The entry must be exactly one line, between 1 and 200 characters.
  if (ROAST.length < 1 || ROAST.length > MAX_LENGTH) {
    throw new Error(
      `Roast line must be 1-${MAX_LENGTH} characters, got ${ROAST.length}.`,
    );
  }
  if (ROAST.includes("\n") || ROAST.includes("\r")) {
    throw new Error("Roast line must be a single line.");
  }

  // Output directory: first CLI argument, else OUTPUT_DIR, else /output.
  const outputDir: string =
    process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

  // Create the directory if needed. Never delete it: the grader's /output
  // is a mount point, so removing it would throw EBUSY. We only write
  // a file inside it.
  mkdirSync(outputDir, { recursive: true });

  const outputPath: string = join(outputDir, OUTPUT_FILE);
  writeFileSync(outputPath, ROAST + "\n", "utf8");

  // Verify the write by reading the file back: what landed on disk must
  // be exactly the roast line plus a trailing newline, nothing more.
  const written: string = readFileSync(outputPath, "utf8");
  if (written !== ROAST + "\n") {
    throw new Error(
      `Read-back verification failed for ${outputPath}: ` +
        `expected ${ROAST.length + 1} characters (roast plus newline), ` +
        `got ${written.length} characters.`,
    );
  }

  console.log(`Wrote ${ROAST.length}-character roast to ${outputPath}`);
}

main();
