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

  test("block stays the same", () => {
    expect(
      nextGeneration([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ])
    ).toEqual([
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ]);
  });

  test("blinker oscillates", () => {
    expect(
      nextGeneration([
        [1, 0],
        [1, 1],
        [1, 2],
      ])
    ).toEqual([
      [0, 1],
      [1, 1],
      [2, 1],
    ]);
  });
});
