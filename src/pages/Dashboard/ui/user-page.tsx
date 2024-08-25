import { Badge, Box, Button, Card, Group, Text } from "@mantine/core";
import { useAuth } from "entities/auth";
import { BaseLogo, BasePage } from "shared/ui";

export const UserPage = () => {
  const { user, logout } = useAuth();

  return (
    <BasePage title="User Page" sx={{ height: "100%", display: "grid", justifyContent: "center", alignItems: "center" }}>
      <Card
        sx={{
          minWidth: "30rem",
          borderRadius: ".5rem",
          boxShadow: "0px 7px 7px -5px rgba(0, 0, 0, 0.04),0px 10px 15px -5px rgba(0, 0, 0, 0.05),0px 1px 3px rgba(0, 0, 0, 0.05)"
        }}
        px="1rem"
        py="1.5rem"
      >
        <Box component="header" pb="1.25rem">
          <BaseLogo />
        </Box>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Status</Text>
          <Badge color={user ? "yellow" : "red"} variant="light">
            {user ? "Authorized" : "Unauthorized"}
          </Badge>
        </Group>

        {user && (
          <>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Login</Text>
              <Badge color="green" variant="light">
                {user.login}
              </Badge>
            </Group>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Password</Text>
              <Badge color="pink" variant="light">
                {user.password}
              </Badge>
            </Group>
          </>
        )}

        <Group position="right" mt=".5rem">
          <Button onClick={logout} color="red" variant="subtle">
            Logout
          </Button>
        </Group>
      </Card>
    </BasePage>
  );
};
