import { ReactNode, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginPage } from "pages/Auth";
import { useAuth } from "entities/auth";

type Props = {
  children: ReactNode;
};

export const RedirectGuard = ({ children }: Props) => {
  const { user } = useAuth();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  if (!user) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }

    return <LoginPage />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);

    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};
