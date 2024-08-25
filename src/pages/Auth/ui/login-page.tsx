import { useNavigate } from "react-router-dom";
import { AuthLayout } from "widgets/layouts";
import { LoginForm, useAuth } from "entities/auth";
import { paths } from "shared/config";
import { BasePage } from "shared/ui";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  return (
    <AuthLayout>
      <BasePage title="Login">
        <LoginForm
          onSubmit={async (values) => {
            login(values);
            navigate(paths.dashboard.index);
          }}
        />
      </BasePage>
    </AuthLayout>
  );
};
