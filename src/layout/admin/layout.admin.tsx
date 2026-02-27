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
  HomeOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useCurrentApp } from "@/components/context/app.context";
import { useState } from "react";
import "./layout.admin.css";

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
    <div
      style={{
        width: 240,
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "11px 13px",
          background: "linear-gradient(135deg, #20214b, #2f3175)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 16 }}>
          {user?.fullName || "I'm Super Admin"}
        </div>
        <div style={{ fontSize: 12, opacity: 0.9 }}>{user?.email}</div>
      </div>

      {/* Actions */}
      <div style={{ padding: "6px 0", textAlign: "center" }}>
        <div
          onClick={() => navigate("/")}
          style={{
            padding: "8px 0",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: 14,
            transition: "all 0.2s ease",
            borderBottom: "1px solid #f0f0f0",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.fontWeight = "600";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.fontWeight = "500";
          }}
        >
          Trang chủ
        </div>

        <div
          onClick={() => navigate("/profile")}
          style={{
            padding: "8px 0",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: 14,
            transition: "all 0.2s ease",
            borderBottom: "1px solid #f0f0f0",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.fontWeight = "600";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.fontWeight = "500";
          }}
        >
          Thông tin cá nhân
        </div>

        <div
          onClick={() => {
            localStorage.clear();
            setUser(null);
            setIsAuthenticated(false);
            navigate("/");
          }}
          style={{
            padding: "8px 0",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
            color: "#ff4d4f",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Đăng xuất
        </div>
      </div>
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
        width={240}
        collapsedWidth={80}
        collapsible
        collapsed={collapsed}
        trigger={null}
        style={{
          background: "linear-gradient(180deg, #0b1020, #141a33)",
          position: "relative",
        }}
        className="admin-sider"
      >
        {/* ===== LOGO ===== */}
        {/* <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: 700,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            letterSpacing: 1,
          }}
        >
          {collapsed ? "AD" : "System Management"}
        </div> */}

        {/* ===== USER INFO ===== */}
        {isAuthenticated && (
          <div
            style={{
              padding: collapsed ? "16px 0" : "20px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                justifyContent: collapsed ? "center" : "flex-start",
              }}
            >
              <Avatar
                size={40}
                style={{
                  cursor: "pointer",
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                  fontWeight: 600,
                }}
              >
                {(
                  user?.username?.charAt(0) ||
                  user?.email?.charAt(0) ||
                  "U"
                ).toUpperCase()}
              </Avatar>

              {!collapsed && (
                <div style={{ lineHeight: 1.3 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    {user?.fullName || "Super Admin"}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {user?.email}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== MENU TOP ===== */}
        <Menu
          className="admin-menu"
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuTop}
          onClick={handleMenuClick}
          style={{
            background: "transparent",
            borderRight: "none",
            marginTop: 8,
          }}
        />

        {/* ===== MENU BOTTOM ===== */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectable={false}
            items={menuBottom}
            onClick={handleMenuClick}
            style={{
              background: "transparent",
              borderRight: "none",
            }}
          />

          {/* ===== NÚT MỞ LẠI SIDEBAR ===== */}
          {collapsed && (
            <div
              onClick={() => setCollapsed(false)}
              style={{
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.2s ease",
              }}
            >
              <RightOutlined
                style={{
                  color: "#fff",
                  fontSize: 18,
                }}
              />
            </div>
          )}
        </div>
      </Sider>

      {/* ===== MAIN ===== */}
      <Layout>
        {/* ===== HEADER ===== */}
        <Header
        className="admin-header"
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
              System Management
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
                    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
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
