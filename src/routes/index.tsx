import { createBrowserRouter } from "react-router-dom";
import HomePage from "pages/client/HomePage";
import LayoutClient from "layout/client/layout.client";
import LayoutAdmin from "layout/admin/layout.admin";
import DashBoardPage from "pages/admin/DashboardPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
    ],
  },
]);