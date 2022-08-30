import { test, expect, describe } from "vitest";
import { CompatibleWithDefaultConfig } from "../src/utils/compatible";

describe("compatible", () => {
  test("compatible test Array", () => {
    expect(CompatibleWithDefaultConfig({ a: 1 }, [{ b: 1 }])).toEqual([
      { a: 1, b: 1 },
    ]);
  });
  test("compatible test object", () => {
    expect(CompatibleWithDefaultConfig({ a: 1 }, { c: 1 })).toEqual({
      a: 1,
      c: 1,
    });
  });
});
