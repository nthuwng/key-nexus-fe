import { Button, Result, Spin } from "antd";
import { useCurrentApp } from "components/context/app.context";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoute = (props: IProps) => {
  const { isAuthenticated, user, isLoading } = useCurrentApp();
  const location = useLocation();

  if (isLoading) {
    return <Spin style={{ marginTop: 100 }} />;
  }

  if (!isAuthenticated) {
    return (
      <Result
        status="403"
        title="401"
        subTitle="Bạn chưa đăng nhập."
        extra={
          <Button type="primary">
            <Link to="/login">Đăng nhập</Link>
          </Button>
        }
      />
    );
  }

  const isAdminRoute = location.pathname.startsWith("/admin");

  const roleName = user?.roleId?.name;

  if (isAdminRoute && roleName !== "SUPER_ADMIN") {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary">
            <Link to="/">Trở về Trang chủ</Link>
          </Button>
        }
      />
    );
  }

  return <>{props.children}</>;
};

export default ProtectedRoute;
