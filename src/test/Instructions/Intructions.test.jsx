import React from "react";
import { render } from "@testing-library/react";
import { Instructions } from "../../components/Instructions/Instructions";

test("should render component", () => {
  const { getByText, getByTestId } = render(<Instructions />);
  const title = getByText("How to use Open AI DALL-E 2?");
  const iframe = getByTestId("iframe");
  const paragraph = getByText("La programación de DALL-E 2 ya no está basada en el GPT-3 como en su anterior versión");
  const elements = [title, iframe, paragraph];
  elements.forEach(element => expect(element).toBeInTheDocument());
});


test("should have correct styles", () => {
  const { getByTestId } = render(<Instructions />);
  const section = getByTestId("main-section");
  expect(section).toHaveClass("mt-11 text-justify");
});

test("should have correct properties", () => {
  const { getByTestId } = render(<Instructions />);
  const iframe = getByTestId("iframe");
  expect(iframe).toHaveProperties({
    url: "https://www.youtube.com/embed/qTgPSKKjfVg",
    title: "DALL·E 2 Explained",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  });
});


test("should have correct text content", () => {
  const { getByText } = render(<Instructions />);
  const textContent = ["How to use Open AI DALL-E 2?", "La programación de DALL-E 2 ya no está basada en el GPT-3 como en su anterior versión", "Open AI"];
  textContent.forEach(text => expect(getByText(text)).toBeInTheDocument());
});