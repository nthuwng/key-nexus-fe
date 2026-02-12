import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "@/layout/admin/layout.admin";
import DashBoardPage from "@/pages/admin/DashboardPage";
import NotFoundPage from "@/components/common/error";
import { useCurrentApp } from "@/components/context/app.context";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

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
        {/* <Route
          path="user-management"
          element={
            <ProtectedRoute>
              <ManageUserPage />
            </ProtectedRoute>
          }
        /> */}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AdminRoutes;
