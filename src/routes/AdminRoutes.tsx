import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "@/layout/admin/layout.admin";
import DashBoardPage from "@/pages/admin/DashboardPage";
import NotFoundPage from "@/components/common/error";
import { useCurrentApp } from "@/components/context/app.context";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import UserPage from "@/pages/admin/UserPage";
import RolesPage from "@/pages/admin/RolesPage";
import { useEffect, useState } from "react";
import FullScreenLoading from "@/components/common/FullScreenLoading";
import CategoryPage from "@/pages/admin/CategoryPage";
import ProductPage from "@/pages/admin/ProductPage";

const AdminRoutes = () => {
  const { user } = useCurrentApp();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FullScreenLoading />;
  }

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
         <Route
          path="category"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        
         <Route
          path="product"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
      
        />
      </Route>
      
      

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AdminRoutes;
