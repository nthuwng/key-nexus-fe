import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 200 }}>Admin Sidebar</aside>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutAdmin;