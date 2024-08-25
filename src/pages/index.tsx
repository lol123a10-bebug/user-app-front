import { Navigate, Route, Routes } from "react-router-dom"
import { paths } from "shared/config"
import { UserPage } from "./Dashboard"

export const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={paths.dashboard.index} />} />

      <Route path="/dashboard">
        <Route index element={<UserPage />} />
      </Route>
    </Routes>
  )
}