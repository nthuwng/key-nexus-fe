import { Route, Routes } from "react-router-dom";
import LayoutClient from "@/layout/client/layout.client";
import HomePage from "@/pages/client/HomePage";
import NotFoundPage from "@/components/common/error";
import ProfilePage from "@/pages/client/ProfilePage";
import MousePage from "@/pages/client/MousePage";
import KeyboardPage from "@/pages/client/KeyboardPage";
import MouseDetailPage from "@/components/user/MousePage/MouseDetailPage";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="mouse" element={<MousePage />} />
        <Route path="mouse/:id" element={<MouseDetailPage />} />
        <Route path="keyboard" element={<KeyboardPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ClientRoutes;