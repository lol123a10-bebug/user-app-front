import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <Box sx={(theme) => ({ display: "flex", height: "100%", backgroundColor: theme.colorScheme === "light" ? "#F8F9FA" : undefined })}>
      <Box
        component="main"
        sx={() => ({
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto 1fr"
        })}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
