import { ColorScheme } from "@mantine/core";
import { useEffect } from "react";

export const useCssVariables = (colorScheme: ColorScheme) => {
  useEffect(() => {
    const root = document.documentElement;

    if (colorScheme === "light") {
      root.style.setProperty("--border-color", "var(--border-color-light)");
    }

    if (colorScheme === "dark") {
      root.style.setProperty("--border-color", "var(--border-color-dark)");
    }
  }, [colorScheme]);
};
