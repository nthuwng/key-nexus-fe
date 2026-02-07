import { Outlet } from "react-router-dom";

const LayoutClient = () => {
  return (
    <>
      <header>Client Header</header>
      <Outlet />
      <footer>Client Footer</footer>
    </>
  );
};

export default LayoutClient;