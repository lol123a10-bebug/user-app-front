import { ColorScheme } from "@mantine/core";

export const setItem = <Value>(key: string, value: Value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = <Value>(key: string) => {
  const item = localStorage.getItem(key);

  if (item === null) return null;

  try {
    return JSON.parse(item) as Value;
  } catch {
    return item as Value;
  }
};

export const getThemeColor = () => {
  return getItem<ColorScheme>("theme");
};

export const setThemeColor = (color: ColorScheme | null) => {
  setItem("theme", color);
};
