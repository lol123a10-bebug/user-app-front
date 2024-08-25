import { Sx } from "@mantine/core";

const getSxArray = (sx: Sx | undefined | (Sx | undefined)[]) => {
  return Array.isArray(sx) ? sx : [sx];
};

export { getSxArray };
