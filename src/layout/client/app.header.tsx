import {
  Layout,
  Avatar,
  Input,
  Badge,
  Button,
  Space,
  Popover,
  Divider,
  Dropdown,
} from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  FileSearchOutlined,
  MenuOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { FaMouse, FaKeyboard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCurrentApp } from "@/components/context/app.context";
import { useState } from "react";

const { Header } = Layout;
const { Search } = Input;

export const HEADER_HEIGHT = 80;

// ===== Avatar color =====
const getAvatarColor = (text?: string) => {
  if (!text) return "#f56a00";
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${hash % 360}, 70%, 50%)`;
};

const AppHeader = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, setIsAuthenticated, setUser } =
    useCurrentApp();

  const [hoverKey, setHoverKey] = useState<string | null>(null);

  // ===== Custom dropdown content =====
  const categoryMenu = (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        padding: 8,
        minWidth: 180,
      }}
    >
      {/* Chuột */}
      <div
        onMouseEnter={() => setHoverKey("mouse")}
        onMouseLeave={() => setHoverKey(null)}
        onClick={() => navigate("/mouse")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 500,
          transition: "all 0.25s",
          background: hoverKey === "mouse" ? "#aeaeae" : "transparent",
          transform: hoverKey === "mouse" ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <FaMouse
          size={16}
          style={{
            color: hoverKey === "mouse" ? "#951004" : "#555",
            transition: "all 0.2s",
            transform: hoverKey === "mouse" ? "scale(1.15)" : "scale(1)",
          }}
        />
        Chuột
      </div>

      {/* Bàn phím */}
      <div
        onMouseEnter={() => setHoverKey("keyboard")}
        onMouseLeave={() => setHoverKey(null)}
        onClick={() => navigate("/keyboard")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 500,
          transition: "all 0.25s",
          background: hoverKey === "keyboard" ? "#aeaeae" : "transparent",
          transform:
            hoverKey === "keyboard" ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <FaKeyboard
          size={16}
          style={{
            color: hoverKey === "keyboard" ? "#951004" : "#555",
            transition: "all 0.2s",
            transform: hoverKey === "keyboard" ? "scale(1.15)" : "scale(1)",
          }}
        />
        Bàn phím
      </div>
    </div>
  );

  // ===== Popover user =====
  const popoverContent = (
    <div style={{ minWidth: 180 }}>
      <div style={{ fontWeight: 600 }}>{user?.fullName || user?.email}</div>
      <div style={{ fontSize: 12, color: "#888" }}>{user?.email}</div>

      <Divider style={{ margin: "8px 0" }} />

      <Button type="text" block onClick={() => navigate("/profile")}>
        Thông tin cá nhân
      </Button>

      <Button
        type="text"
        danger
        block
        onClick={() => {
          localStorage.clear();
          setUser(null);
          setIsAuthenticated(false);
          navigate("/");
        }}
      >
        Đăng xuất
      </Button>
    </div>
  );

  const avatarText = user?.username?.charAt(0) || user?.email?.charAt(0) || "U";
  const avatarColor = getAvatarColor(user?.username || user?.email);

  return (
    <Header
      style={{
        height: HEADER_HEIGHT,
        lineHeight: `${HEADER_HEIGHT}px`,
        background: "#20214b",
        padding: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "auto auto 1fr auto",
          alignItems: "center",
          columnGap: 24,
        }}
      >
        {/* Logo */}
        <Space
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => navigate("/")}
        >
          <Avatar
            icon={<UserOutlined />}
            style={{ background: "#fff", color: "#010101" }}
          />
          <span style={{ fontWeight: 700, fontSize: 18 }}>
            Thế Giới Key Nexus
          </span>
        </Space>

        {/* Danh mục (1 file custom) */}
        <Dropdown trigger={["hover"]} dropdownRender={() => categoryMenu}>
          <Button
            icon={<MenuOutlined />}
            style={{
              background: "#3d407e",
              border: "none",
              color: "#fff",
              fontWeight: 600,
              height: 42,
              padding: "0 18px",
              borderRadius: 8,
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            Danh mục
          </Button>
        </Dropdown>

        {/* Search */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Search
            placeholder="Bạn cần tìm gì?"
            allowClear
            size="large"
            style={{ maxWidth: 700 }}
          />
        </div>

        {/* Right */}
        <Space size={24} align="center" style={{ color: "#fff" }}>
          <Space>
            <PhoneOutlined />
            <span style={{ fontWeight: 600 }}>1900.5301</span>
          </Space>

          <Space
            onClick={() => navigate("/order-lookup")}
            style={{ cursor: "pointer" }}
          >
            <FileSearchOutlined />
            <span style={{ fontWeight: 600 }}>Đơn hàng</span>
          </Space>

          <Badge count={0}>
            <Space
              onClick={() => navigate("/cart")}
              style={{
                cursor: "pointer",
                color: "#fff",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ShoppingCartOutlined style={{ fontSize: 18 }} />
              <span style={{ fontWeight: 600 }}>Giỏ hàng</span>
            </Space>
          </Badge>

          {isAuthenticated ? (
            <Popover content={popoverContent} trigger="click">
              <Avatar
                size={40}
                style={{
                  cursor: "pointer",
                  backgroundColor: avatarColor,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                {avatarText.toUpperCase()}
              </Avatar>
            </Popover>
          ) : (
            <div
              style={{
                background: "#fff",
                padding: "4px",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                gap: 4,
              }}
            >
              <Button
                type="text"
                style={{
                  height: 36,
                  padding: "0 16px",
                  borderRadius: 10,
                  fontWeight: 600,
                  color: "#333",
                }}
                onClick={() => navigate("/login")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f5f5f5")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                Đăng nhập
              </Button>

              <Button
                style={{
                  height: 36,
                  padding: "0 18px",
                  borderRadius: 10,
                  border: "none",
                  fontWeight: 700,
                  background: "#183466",
                  color: "#ffffff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  transition: "all 0.2s",
                }}
                onClick={() => navigate("/register")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-1px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                Đăng ký
              </Button>
            </div>
          )}
        </Space>
      </div>
    </Header>
  );
};

export default AppHeader;
