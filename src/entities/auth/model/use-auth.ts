import { AuthLogin, useAuthContext } from "shared/lib";

export const useAuth = () => {
  const { user, setUser } = useAuthContext();

  const login = (user: AuthLogin) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};
