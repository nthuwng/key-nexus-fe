import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Layout,
  Menu,
  Avatar,
  Popover,
  Button,
  Space,
  Divider,
  Badge,
} from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  BellOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { useCurrentApp } from "@/components/context/app.context";
import { useState } from "react";

const { Sider, Content, Header } = Layout;

const LayoutAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ thêm setIsAuthenticated
  const { isAuthenticated, user, setUser, setIsAuthenticated } =
    useCurrentApp();

  const [collapsed, setCollapsed] = useState(false);

  // ===== MENU =====
  const menuTop = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/admin/users",
      icon: <UserOutlined />,
      label: "Users",
    },
    {
      key: "/admin/roles",
      icon: <SafetyOutlined />,
      label: "Roles",
    },
  ];

  const menuBottom = [
    {
      key: "/admin/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  // ===== LOGOUT (FIXED) =====
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setIsAuthenticated(false);

    navigate("/login");
  };

  const handleMenuClick = (e: any) => {
    if (e.key === "logout") handleLogout();
    else navigate(e.key);
  };

  // ===== POPOVER USER =====
  const popoverContent = (
    <div style={{ minWidth: 200 }}>
      <div style={{ fontWeight: 600 }}>
        {user?.fullName || user?.username || user?.email}
      </div>
      <div style={{ fontSize: 12, color: "#888" }}>{user?.email}</div>

      <Divider style={{ margin: "8px 0" }} />

      <Button
        type="text"
        block
        icon={<UserOutlined />}
        onClick={() => navigate("/profile")}
      >
        Profile
      </Button>

      <Button
        type="text"
        danger
        block
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
      }}
    >
      {/* ===== SIDEBAR ===== */}
      <Sider
        width={220}
        collapsedWidth={70}
        collapsible
        collapsed={collapsed}
        trigger={null}
        style={{ background: "#001529" }}
      >
        {/* Logo */}
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: 700,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {collapsed ? "AD" : "System Management"}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuTop}
          onClick={handleMenuClick}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectable={false}
            items={menuBottom}
            onClick={handleMenuClick}
          />
        </div>
      </Sider>

      {/* ===== MAIN ===== */}
      <Layout>
        {/* ===== HEADER ===== */}
        <Header
          style={{
            background: "#ffffff",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          }}
        >
          {/* LEFT */}
          <Space>
            <Button
              type="text"
              shape="circle"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: 16 }}
            />

            <span
              style={{
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Admin
            </span>
          </Space>

          {/* RIGHT */}
          <Space size={18}>
            <Badge count={3}>
              <BellOutlined
                style={{
                  fontSize: 20,
                  cursor: "pointer",
                }}
              />
            </Badge>

            {isAuthenticated ? (
              <Popover
                content={popoverContent}
                trigger="click"
                placement="bottomRight"
              >
                <Avatar
                  size={40}
                  style={{
                    cursor: "pointer",
                    background:
                      "linear-gradient(135deg,#6366f1,#8b5cf6)",
                    boxShadow:
                      "0 6px 16px rgba(0,0,0,0.25)",
                    fontWeight: 600,
                  }}
                >
                  {(
                    user?.username?.charAt(0) ||
                    user?.email?.charAt(0) ||
                    "U"
                  ).toUpperCase()}
                </Avatar>
              </Popover>
            ) : (
              <Button type="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </Space>
        </Header>

        {/* CONTENT */}
        <Content style={{ margin: 20 }}>
          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 12,
              minHeight: 400,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;