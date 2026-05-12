import { describe, expect, test } from "vitest";
import { parseRLE } from "../src/parser.mjs";

describe("parseRLE", () => {
  test("parses one live cell", () => {
    expect(parseRLE("o!")).toEqual([[0, 0]]);
  });
});