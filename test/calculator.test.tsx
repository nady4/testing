import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Calculator, { numbers, operations } from "../src/calculator";

describe("Calculator", (): void => {
  afterEach(cleanup);

  it("should render", (): void => {
    render(<Calculator />);
  });

  it("should render title", (): void => {
    render(<Calculator />);
    screen.getByText("Calculator");
  });

  it("should render numbers", (): void => {
    render(<Calculator />);

    numbers.forEach((number): void => {
      screen.getByText(number);
    });
  });

  it("should render 4 rows", (): void => {
    render(<Calculator />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
  });

  it("should render operations", (): void => {
    render(<Calculator />);
    operations.forEach((operation): void => {
      screen.getByText(operation);
    });
  });

  it("should render = button", (): void => {
    render(<Calculator />);
    screen.getByText("=");
  });

  it("should render an input", (): void => {
    render(<Calculator />);
    screen.getByRole("textbox");
  });

  it("should user input after clicking a number", (): void => {
    render(<Calculator />);
    const one = screen.getByText("1");
    fireEvent.click(one);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("1");
  });

  it("should user input after clicking several numbers", (): void => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const three = screen.getByText("3");
    fireEvent.click(one);
    fireEvent.click(two);
    fireEvent.click(three);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("123");
  });

  it("should show user input after clicking numbers and operations", (): void => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const plus = screen.getByText("+");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("1+1");
  });

  it("should calculate based on user input and show the calculation", (): void => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const plus = screen.getByText("+");
    const equal = screen.getByText("=");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(one);
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("2");
  });
});
