import { Route, Routes } from "react-router-dom";
import LayoutClient from "@/layout/client/layout.client";
import HomePage from "@/pages/client/HomePage";
import NotFoundPage from "@/components/common/error";
import ProfilePage from "@/pages/client/ProfilePage";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ClientRoutes;