import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Instructions } from "../../components/Instructions/Instructions";

describe("Instructions component", () => {
  test("renders the Instructions component", () => {
    render(<Instructions />);
    expect(
      screen.getByText("How to use Open AI DALL-E 2?")
    ).toBeDefined();
  });
test("renders the video", () => {
    render(<Instructions />);
    expect(screen.getByTitle("DALL·E 2 Explained")).toBeDefined();
  });
  test("renders the first paragraph", () => {
    render(<Instructions />);
    expect(
      screen.getByText(
        /La programación de DALL-E 2 ya no está basada en el/
      )
    ).toBeDefined();
  });
  test("renders the second paragraph", () => {
    render(<Instructions />);
    expect(
      screen.getByText(
        /Ese modelo de difusión se ha entrenado con imágenes distorsionadas donde sus píxeles estaban desordenados de manera aleatoria/
      )
    ).toBeDefined();
  });
});
