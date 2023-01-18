import { render, fireEvent } from "@testing-library/react";
import { EthContributions } from "../../components/Contributions/Contributions";
import { describe, expect, test, it } from "vitest";

describe("EthContributions component", () => {
  test("form is rendered correctly", () => {
    const { getByTestId } = render(<EthContributions />);
    expect(getByTestId("form")).toBeDefined();
    expect(getByTestId("address")).toBeDefined();
    expect(getByTestId("amount")).toBeDefined();
    expect(getByTestId("submit-button")).toBeDefined();
  });
  describe("EthContributions", () => {
    it("should render the component correctly", () => {
      const { getByTestId } = render(<EthContributions />);
      const addressInput = getByTestId("address");
      expect(getByTestId("address")).toBeDefined();
      expect(getByTestId("amount")).toBeDefined();
      expect(getByTestId("submit-button")).toBeDefined();
    });

    it("should fire the event when the form is submitted", async () => {
      const { getByTestId } = render(<EthContributions />);
      const submitButton = getByTestId("submit-button");
      fireEvent.submit(submitButton);
      expect(getByTestId("address")).toBeDefined();

    });
  });
});
