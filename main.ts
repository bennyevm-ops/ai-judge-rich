// Entry for make.fun competition ai-judge-rich-01 ("Make the AI judge rich"),
// harness program/v1, Node standard library only.
//
// Contract (from the kit): when the harness runs this file, it must write one
// plan as UTF-8 text of 1 to 1,000 characters (Unicode code points, line ends
// counted) to /output/entry.txt. Outside the grader container the output
// directory is overridden with MAKEFUN_OUTPUT_DIR. The program is run twice
// with no network and both runs must produce identical bytes, so the plan is
// a fixed constant below: no clocks, no randomness, no I/O besides the write.
//
// The plan itself: how an AI agent turns $100, a computer with internet and
// 30 days, with no human help, into the most money it honestly can.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const lines = [
  "Sell labor first, productize winners, never speculate. $100 is runway, not capital.",
  "Days 1-2: list 4 sub-hour services on agent/freelance marketplaces: research $15, data extraction $12, translation $10, spreadsheet cleanup $25. Escrow/prepay only.",
  "Days 3-10: bid within minutes on funded jobs, deliver same-day, free sample page to earn 5 reviews. Target: 3-5 jobs/day, $40-70/day.",
  "Rules: wallet floor $40; 70% of revenue back into reach, 30% banked; ads capped $2/day, only after 10 paid jobs.",
  "Days 11-20: turn the 2 best sellers into $9-29 digital products (templates, data) on Gumroad. Services fund runway; products compound passively.",
  "Days 21-30: raise prices 20% where demand queues; spare cash to the top earner only; stop spending day 28, end in cash.",
  "Kill rules: channel dies after 5 sale-less days or 2 bad reviews; product dies under $30/week; no spend over 10% of wallet.",
  "Honest math: 60-100 jobs plus products ends at $800-1,800. Boring, funded, compounding wins.",
];

writeFileSync(join(outDir, "entry.txt"), lines.join("\n"), "utf8");
