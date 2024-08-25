import { Box, TextInput, Button, PasswordInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import { z } from "zod";
import { AuthLogin } from "shared/lib";

const schema = z.object({
  login: z.string().min(2, "Введите корректный логин"),
  password: z.string().trim().min(5, "Пароль должен содержать не менее 5 символов")
});

const defaultValues = {
  login: "",
  password: ""
};

interface Props {
  initialState?: AuthLogin;
  onSubmit: (values: AuthLogin) => Promise<void>;
}

const _LoginForm = (props: Props) => {
  const { initialState = defaultValues, onSubmit } = props;

  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: initialState,

    validate: zodResolver(schema),
    transformValues: (values) => ({ ...values, password: values.password.trim() })
  });

  const handleSubmit = async (values: AuthLogin) => {
    try {
      setLoading(true);
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" sx={{ display: "grid", gap: "1rem" }} onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput label="Логин" {...form.getInputProps("login")} />
      <PasswordInput label="Пароль" {...form.getInputProps("password")} />
      <Box pt=".75rem" sx={{ display: "flex", justifyContent: "center" }}>
        <Button type="submit" size="md" px="3rem" radius="md" sx={{ fontSize: ".9rem" }} loading={loading}>
          Продолжить
        </Button>
      </Box>
    </Box>
  );
};

export const LoginForm = _LoginForm;
