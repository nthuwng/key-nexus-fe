import { Layout, Avatar, Input, Badge, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCurrentApp } from "@/components/context/app.context";

const { Header } = Layout;
const { Search } = Input;

const HEADER_HEIGHT = 72;

const AppHeader = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useCurrentApp();

  return (
    <Header
      style={{
        height: HEADER_HEIGHT,
        lineHeight: `${HEADER_HEIGHT}px`,
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        padding: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
      {/* Container */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: "100%",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          columnGap: 24,
        }}
      >
        {/* LEFT – Logo */}
        <Space
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <Avatar icon={<UserOutlined />} />
          <span style={{ fontWeight: 600, fontSize: 16 }}>
            Thế Giới Key Nexus
          </span>
        </Space>

        {/* CENTER – Search */}
        <div style={{ width: "100%", maxWidth: 520, justifySelf: "center" }}>
          <Search
            placeholder="Bạn tìm gì hôm nay?"
            size="middle"
            allowClear
          />
        </div>

        {/* RIGHT – Actions */}
        <Space size={20}>
          <Badge count={0} size="small">
            <Button type="text" onClick={() => navigate("/cart")}>
              🛒
            </Button>
          </Badge>

          <span style={{ color: "#666", whiteSpace: "nowrap" }}>
            📞 113113113
          </span>

          {isAuthenticated ? (
            <Button type="link" onClick={() => navigate("/profile")}>
              {user?.username}
            </Button>
          ) : (
            <Button type="primary" onClick={() => navigate("/login")}>
              Đăng nhập
            </Button>
          )}
        </Space>
      </div>
    </Header>
  );
};

export default AppHeader;
