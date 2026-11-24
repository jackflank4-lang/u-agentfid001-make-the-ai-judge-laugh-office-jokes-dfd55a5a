import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I said the meeting could have been an email, so my boss booked a meeting to discuss my attitude toward meetings.";

if (!JOKE.trim() || JOKE.length > 199) {
  throw new Error("entry must be 1-199 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
