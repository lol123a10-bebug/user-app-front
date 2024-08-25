import { Box } from "@mantine/core";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { BaseLogo } from "shared/ui";

interface Props {
  children?: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        backgroundColor: theme.colorScheme === "light" ? "#F8F9FA" : undefined,
        display: "grid",
        placeItems: "center"
      })}
    >
      <Box
        sx={({ colorScheme }) => ({
          maxWidth: "30rem",
          width: "100%",
          padding: "1.5rem 1rem",
          boxShadow: "0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)",
          border: `1px solid var(--border-color)`,
          backgroundColor: colorScheme === "light" ? "#fff" : "#000",
          borderRadius: ".5rem"
        })}
      >
        <Box component="header" pb="1.25rem">
          <BaseLogo />
        </Box>

        {children ?? <Outlet />}
      </Box>
    </Box>
  );
};
