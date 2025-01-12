import { expect, describe, it } from "vitest";
import { canReconfigure } from "../src/canReconfigure";

describe("canReconfigure", (): void => {
  it("should return false if first argument is missing", (): void => {
    expect(canReconfigure("", "XXX")).toBe(false);
  });

  it("should return false if second argument is missing", (): void => {
    expect(canReconfigure("XXX", "")).toBe(false);
  });

  it("should return false if first argument is not a string", (): void => {
    expect(canReconfigure(123 as any, "XXX")).toBe(false);
  });

  it("should return false if second argument is not a string", (): void => {
    expect(canReconfigure("XXX", 123 as any)).toBe(false);
  });

  it("should return false if the two strings have different lengths", (): void => {
    expect(canReconfigure("ABC", "DF")).toBe(false);
  });

  it("should return false if strings provided have different number of unique letters", (): void => {
    expect(canReconfigure("ABC", "AAB")).toBe(false);
  });

  it("should return false if strings have different order of transformations"),
    (): void => {
      expect(canReconfigure("XBOX", "XXBO")).toBe(false);
    };
});
