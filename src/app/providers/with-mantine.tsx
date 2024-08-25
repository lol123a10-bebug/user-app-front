import { ComponentType, createElement, useState } from "react";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { getThemeColor, setThemeColor, useCssVariables } from "shared/lib";

export const withMantine = (component: ComponentType) => () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(getThemeColor() ?? "light");

  const toggleColorScheme = (color?: ColorScheme) => {
    const value = color || (colorScheme === "dark" ? "light" : "dark");

    setThemeColor(value);
    setColorScheme(value);
  };

  useCssVariables(colorScheme);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          globalStyles: (theme) => ({
            ":root": {
              "--border-color-dark": "#1B2025",
              "--border-color-light": "#E9ECEF",
              "--border-color": "var(--border-color-light)"
            },

            "html, body, #root": {
              height: "100%",
              backgroundColor: colorScheme === "light" ? theme.white : theme.black
            }
          })
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {createElement(component)}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
