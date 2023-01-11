import { useState } from "react";

const initialState = [
  true,
  true,
  true,
  true,
  true
]

export const useToggleList: any = (initialItems = initialState) => {
  const [toggles, setToggles] = useState(initialItems.map(() => true));

  const toggle = (index: any) => {
    console.log(index);
    setToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  };

  return [toggles, toggle];
};
