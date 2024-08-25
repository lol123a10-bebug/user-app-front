import { LoadingOverlay } from "@mantine/core";
import { forwardRef } from "react";

interface Props {
  visible?: boolean;
}

const _LoaderWithOverlay = forwardRef<HTMLDivElement, Props>(({ visible = true }, ref) => {
  return (
    <LoadingOverlay ref={ref} visible={visible} transitionDuration={300} overlayOpacity={0.35} />
  );
});

export const LoaderWithOverlay = _LoaderWithOverlay;
