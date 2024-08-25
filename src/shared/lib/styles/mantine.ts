import { MantineTheme, Sx } from "@mantine/core";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const getStyles = (styles: undefined | object | Function, theme: MantineTheme) => {
  if (typeof styles === "function") {
    return styles(theme);
  }

  return styles;
};

const getSxArray = (sx: Sx | undefined | (Sx | undefined)[]) => {
  return Array.isArray(sx) ? sx : [sx];
};

export { getSxArray, getStyles };
