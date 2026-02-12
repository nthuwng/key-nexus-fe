import { Routes, Route } from "react-router-dom";
import ClientRoutes from "@/routes/ClientRoutes";
import AdminRoutes from "@/routes/AdminRoutes";
import NotFoundPage from "@/components/common/error";
import LoginPage from "./pages/client/LoginPage";



const App = () => {
  return (
    <Routes>
      {/* Client */}
      <Route path="/*" element={<ClientRoutes />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Admin */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

