import { Box, BoxProps, createPolymorphicComponent } from "@mantine/core";
import { forwardRef, ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const _BasePage = forwardRef<HTMLDivElement, Props>(
  ({ children, title = "", meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | My User`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  ),
);

export const BasePage = createPolymorphicComponent<"div", Props>(_BasePage);
