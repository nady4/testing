import React from "react";
import Accordion from "../src/accordion";
import { expect, describe, test, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";

describe("Accordion", (): void => {
  beforeEach(() => {
    render(<Accordion title="Hello" content="World" />);
  });
  afterEach(cleanup);

  test("should render", () => {
    expect(<Accordion title="Hello" content="World" />).toBeDefined();
  });

  test("should show title all the time", () => {
    expect(screen.getByText(/Hello/i)).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/World/i)).toBeNull();
  });

  test("should render button", () => {
    expect(screen.getByText(/Open/i)).toBeDefined();
  });

  test("should show the content when open", () => {
    expect(screen.queryByText(/World/i)).toBeNull();
    fireEvent.click(screen.getByText(/Open/i));
    expect(screen.getByText(/World/i)).toBeDefined();
  });

  test("should hide the content when close", () => {
    fireEvent.click(screen.getByText(/Open/i));
    fireEvent.click(screen.getByText(/Close/i));
    expect(screen.queryByText(/World/i)).toBeNull();
  });
});
