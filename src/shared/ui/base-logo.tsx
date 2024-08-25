import { Box, BoxProps, createPolymorphicComponent, Image, Text } from "@mantine/core";
import { forwardRef } from "react";
import { getSxArray, LogoIcon } from "shared/lib";

interface Props extends BoxProps {
  disableLabel?: boolean;
}

const _BaseLogo = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { sx, disableLabel, ...boxProps } = props;

  return (
    <Box
      ref={ref}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: "1.25rem 1fr",
          whiteSpace: "nowrap",
          gap: "1rem"
        },
        ...getSxArray(sx)
      ]}
      {...boxProps}
    >
      <Box
        sx={{
          display: "flex"
        }}
      >
        <Image src={LogoIcon} />
      </Box>
      <Text
        sx={(theme) => ({
          color: theme.colorScheme === "light" ? theme.black : theme.white,
          fontWeight: "bold",
          fontSize: "1.1em",
          letterSpacing: ".5px",
          width: disableLabel ? "0%" : "100%",
          overflow: "hidden",
          transition: "width .35s ease-in-out"
        })}
      >
        My User
      </Text>
    </Box>
  );
});

export const BaseLogo = createPolymorphicComponent<"div", Props>(_BaseLogo);
