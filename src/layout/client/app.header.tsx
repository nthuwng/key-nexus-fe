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
import { useCart } from "@/components/context/cart.context";

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

  const { cart } = useCart();

  const totalCartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

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

  const isSuperAdmin = user?.roleId?.name === "SUPER_ADMIN";
  // ===== Popover user =====
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
        {/* Admin - chỉ SUPER_ADMIN thấy */}
        {isSuperAdmin && (
          <div
            onClick={() => navigate("/admin")}
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
            Trang Admin
          </div>
        )}

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
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cartPopoverContent = (
    <div
      style={{
        width: 350,
        borderRadius: 18,
        overflow: "hidden",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 18px",
          fontWeight: 700,
          fontSize: 16,
          background: "linear-gradient(135deg, #20214b, #2f3175)",
          color: "#fff",
        }}
      >
        🛒 Giỏ hàng của bạn
      </div>

      {/* Body */}
      <div
        style={{
          maxHeight: 300,
          overflowY: "auto",
          padding: 18,
          background: "#ffffff",
        }}
      >
        {cart.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: 30,
              color: "#888",
            }}
          >
            Giỏ hàng trống
          </div>
        ) : (
          cart.slice(0, 4).map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
                padding: 12,
                borderRadius: 12,
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f5f7ff";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    marginBottom: 6,
                  }}
                >
                  {item.name}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: "#666",
                  }}
                >
                  Số lượng: {item.quantity}
                </div>
              </div>

              <div
                style={{
                  fontWeight: 700,
                  color: "#ff4d4f",
                  fontSize: 14,
                  whiteSpace: "nowrap",
                }}
              >
                {(item.price * item.quantity).toLocaleString()} đ
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div
          style={{
            padding: 18,
            background: "#fafbff",
            borderTop: "1px solid #eee",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 16,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            <span>Tổng tiền</span>
            <span style={{ color: "#fa5252" }}>
              {totalPrice.toLocaleString()} đ
            </span>
          </div>

          <Button
            block
            size="large"
            style={{
              height: 46,
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 15,
              background: "linear-gradient(90deg, #ff4d4f, #d70018)",
              border: "none",
              boxShadow: "0 6px 18px rgba(59,130,246,0.35)",
            }}
            onClick={() => navigate("/cart")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Xem giỏ hàng
          </Button>
        </div>
      )}
    </div>
  );

  const avatarText = user?.username?.charAt(0) || user?.email?.charAt(0) || "U";
  const avatarColor = getAvatarColor(user?.username || user?.email);

  return (
    <Header
      style={{
        height: HEADER_HEIGHT,
        lineHeight: `${HEADER_HEIGHT}px`,
        background: "linear-gradient(135deg, #20214b, #2f3175)",
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

          <Popover
            content={cartPopoverContent}
            trigger="hover"
            placement="bottomRight"
            mouseEnterDelay={0.2}
            mouseLeaveDelay={0.2}
          >
            <Badge
              count={totalCartQuantity}
              size="small"
              overflowCount={99}
              offset={[-4, 4]}
              style={{
                backgroundColor: "#ff4d4f",
                fontWeight: 600,
                boxShadow: "0 0 0 2px #312e81",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}></div>
              <Space
                onClick={() => navigate("/cart")}
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  transition: "all 0.2s ease",
                  padding: "6px 12px",
                  borderRadius: 8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <ShoppingCartOutlined style={{ fontSize: 20 }} />
                <span style={{ fontWeight: 600 }}>Giỏ hàng</span>
              </Space>
            </Badge>
          </Popover>

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
