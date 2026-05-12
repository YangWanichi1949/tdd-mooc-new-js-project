import { describe, expect, test } from "vitest";
import { toRLE } from "../src/formatter.mjs";

describe("toRLE", () => {
  test("formats one live cell", () => {
    expect(toRLE([[0, 0]])).toBe("x = 1, y = 1\no!");
  });

  test("formats block pattern", () => {
    expect(
      toRLE([
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ])
    ).toBe("x = 2, y = 2\noo$oo!");
  });
});
