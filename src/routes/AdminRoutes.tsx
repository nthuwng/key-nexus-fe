import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "@/layout/admin/layout.admin";
import DashBoardPage from "@/pages/admin/DashboardPage";
import NotFoundPage from "@/components/common/error";
import { useCurrentApp } from "@/components/context/app.context";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import UserPage from "@/pages/admin/UserPage";
import RolesPage from "@/pages/admin/RolesPage";

const AdminRoutes = () => {
  const { user } = useCurrentApp();

  console.log("AdminRoutes - user:", user);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <LayoutAdmin />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute>
              <DashBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="users"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="roles"
          element={
            <ProtectedRoute>
              <RolesPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AdminRoutes;
