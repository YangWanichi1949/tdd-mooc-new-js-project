import { describe, expect, test } from "vitest";
import { parseRLE } from "../src/parser.mjs";
import { nextGeneration } from "../src/life.mjs";

describe("integration", () => {
  test("blinker returns to original shape after two generations", () => {
    let cells = [
      [1, 0],
      [1, 1],
      [1, 2],
    ];

    cells = nextGeneration(cells);
    cells = nextGeneration(cells);

    expect(cells).toEqual([
      [1, 0],
      [1, 1],
      [1, 2],
    ]);
  });
});