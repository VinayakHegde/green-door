import { Input } from "./input";
import { render, screen } from "@testing-library/react";

describe("Input", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Input label="test" />);
    expect(baseElement).toBeTruthy();
  });

  it("should render with the correct label", () => {
    const { getByText } = render(<Input label="test" />);
    expect(getByText("test")).toBeTruthy();
  });

  it("should render with the correct placeholder", () => {
    const { getByPlaceholderText } = render(<Input label="test" placeholder="test" />);
    expect(getByPlaceholderText("test")).toBeTruthy();
  });

  it("should render with the correct value", () => {
    const { getByDisplayValue } = render(<Input label="test" value="test" />);
    expect(getByDisplayValue("test")).toBeTruthy();
  });
});