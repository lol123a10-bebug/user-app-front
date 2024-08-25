import { Navigate, Route, Routes } from "react-router-dom";
import { paths } from "shared/config";
import { UserPage } from "./Dashboard";
import { DashboardLayout } from "widgets/layouts";
// import { LoginPage } from "./Auth"

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={paths.dashboard.index} />} />

      {/* There are 2 way of using login, which is much better, but left it here, just in case */}
      {/* <Route path='/login' element={<LoginPage />} /> */}

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<UserPage />} />
      </Route>
    </Routes>
  );
};
