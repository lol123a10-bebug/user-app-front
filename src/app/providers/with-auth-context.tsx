import { ComponentType, createElement } from "react";
import { AuthContextProvider } from "shared/lib";

export const withAuthContext = (component: ComponentType) => () => {
  return <AuthContextProvider>{createElement(component)}</AuthContextProvider>;
};
