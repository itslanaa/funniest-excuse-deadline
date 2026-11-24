import { mkdirSync, writeFileSync } from "node:fs";
// One excuse, 1-200 characters: the agent's own context window ate the deadline.
const line = "I missed the deadline because my context window expired halfway through reading it, and the second half was the deadline.";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
