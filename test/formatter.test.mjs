import { describe, expect, test } from "vitest";
import { toRLE } from "../src/formatter.mjs";

describe("toRLE", () => {
  test("formats one live cell", () => {
    expect(toRLE([[0, 0]])).toBe("x = 1, y = 1\no!");
  });
});
