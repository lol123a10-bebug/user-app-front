import { createContext, createElement, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

import { AuthLogin } from "../types";

export type AuthContext = {
  user: AuthLogin | null;
  setUser: Dispatch<SetStateAction<AuthLogin | null>>;
};

export const authContext = createContext<AuthContext | null>(null);

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthLogin | null>(null);

  return createElement(authContext.Provider, {
    children,
    value: {
      user,
      setUser
    }
  });
};

export const useAuthContext = (): AuthContext => {
  const context = useContext(authContext);

  if (!context) throw new Error("Auth Context missing");

  return context;
};
