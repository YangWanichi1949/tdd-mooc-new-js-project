import fs from "node:fs";
import { parseRLE } from "./parser.mjs";
import { nextGeneration } from "./life.mjs";
import { toRLE } from "./formatter.mjs";

const filePath = process.argv[2];
const generations = Number(process.argv[3]);

let cells = parseRLE(fs.readFileSync(filePath, "utf8"));

for (let i = 0; i < generations; i++) {
  cells = nextGeneration(cells);
}

console.log(toRLE(cells));
