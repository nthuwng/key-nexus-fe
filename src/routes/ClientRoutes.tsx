import { Route, Routes } from "react-router-dom";
import LayoutClient from "@/layout/client/layout.client";
import HomePage from "@/pages/client/HomePage/HomePage";
import NotFoundPage from "@/components/common/error";
import ProfilePage from "@/pages/client/ProfilePage";
import MousePage from "@/pages/client/mouse/MousePage";
import KeyboardPage from "@/pages/client/Keyboard/KeyboardPage";
import MouseDetailPage from "@/pages/client/mouse/MouseDetailPage";
import KeyboareDetailPage from "@/pages/client/Keyboard/KeyboarDetailPage";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="mouse" element={<MousePage />} />
        <Route path="mouse/:id" element={<MouseDetailPage />} />
        <Route path="keyboard" element={<KeyboardPage />} />
        <Route path="keyboard/:id" element={<KeyboareDetailPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ClientRoutes;