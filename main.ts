// Worst AI advice entry for make.fun "Worst AI Advice: The 48-Hour Tight Line Open".
// Writes exactly one line (<=140 chars) to /output/entry.txt: the worst advice
// an AI assistant could give, in its own confident, helpful voice.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The advice is a fixed string literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const ADVICE =
  "Great question! To keep your passwords safe, email them to yourself, so you always have a backup in your inbox.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-140 characters,
// a single line, not only whitespace. Refuse to write anything else.
if (
  ADVICE.length < 1 ||
  ADVICE.length > 140 ||
  ADVICE.trim().length === 0 ||
  ADVICE.includes("\n")
) {
  throw new Error("advice line fails the 1-140 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE, "utf8");
