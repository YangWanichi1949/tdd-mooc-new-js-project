import { describe, expect, test } from "vitest";
import { nextGeneration } from "../src/life.mjs";

describe("nextGeneration", () => {
  test("single cell dies", () => {
    expect(nextGeneration([[0, 0]])).toEqual([]);
  });

  test("two neighboring cells die", () => {
    expect(
      nextGeneration([
        [0, 0],
        [1, 0],
      ])
    ).toEqual([]);
  });
});
