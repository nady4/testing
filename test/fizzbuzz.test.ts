import { fizzBuzz } from "../src/fizzbuzz";
import { describe, it, expect } from "vitest";

describe("fizzBuzz", (): void => {
  it("should throw an error if no argument is provided", (): void => {
    expect(() => fizzBuzz("" as unknown as number)).toThrowError(
      /The argument must be a number/
    );
  });

  it("should throw an error if the argument is not a number", (): void => {
    expect(() => fizzBuzz(NaN as unknown as number)).toThrowError(
      /The argument must be a number/
    );
  });

  it("should return 1 if the argument is 1", (): void => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("should return Fizz if the argument is multiple of 3", (): void => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if the argument is multiple of 5", (): void => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return FizzBuzz if the argument is multiple of both 3 and 5", (): void => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
});
