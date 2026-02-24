import { Outlet } from "react-router-dom";
import AppHeader from "./app.header";
import AppFooter from "./app.footer";

const HEADER_HEIGHT = 80;

const LayoutClient = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppHeader />

      {/* MAIN CONTENT */}
      <main
        style={{
          marginTop: HEADER_HEIGHT,
          flex: 1,
        }}
      >
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
};

export default LayoutClient;
