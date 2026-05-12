import { describe, expect, test } from "vitest";
import { parseRLE } from "../src/parser.mjs";

describe("parseRLE", () => {
  test("parses one live cell", () => {
    expect(parseRLE("o!")).toEqual([[0, 0]]);
  });

  test("parses two live cells in a row", () => {
    expect(parseRLE("oo!")).toEqual([
      [0, 0],
      [1, 0],
    ]);
  });

  test("parses cells on multiple rows", () => {
    expect(parseRLE("o$bo!")).toEqual([
      [0, 0],
      [1, 1],
    ]);
  });
});