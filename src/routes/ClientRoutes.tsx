import { Route, Routes } from "react-router-dom";
import LayoutClient from "@/layout/client/layout.client";
import HomePage from "@/pages/client/HomePage";
import NotFoundPage from "@/components/common/error";
import ProfilePage from "@/pages/client/ProfilePage";
import MousePage from "@/pages/client/mouse/MousePage";
import KeyboardPage from "@/pages/client/KeyboardPage";
import MouseDetailPage from "@/pages/client/mouse/MouseDetailPage";
import CartPage from "@/pages/client/order/CartPage";
import CheckoutPage from "@/pages/client/order/CheckoutPage";

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="mouse" element={<MousePage />} />
        <Route path="mouse/:id" element={<MouseDetailPage />} />
        <Route path="keyboard" element={<KeyboardPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ClientRoutes;