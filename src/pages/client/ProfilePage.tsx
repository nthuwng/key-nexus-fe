import { useEffect, useState } from "react";
import { Card, Avatar, Typography, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ShoppingOutlined,
  SettingOutlined,
  LogoutOutlined,
  CustomerServiceOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { getProfileAPI } from "@/service/user";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await getProfileAPI();
      setUser(res.data.user);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ===== LOGOUT =====
  const handleLogout = () => {
    localStorage.clear();     // xóa toàn bộ local
    setUser(null);
    navigate("/login");       // chuyển về login
  };

  // ===== MENU CLICK =====
  const handleMenuClick = ({ key }: any) => {
    if (key === "logout") {
      handleLogout();
      return;
    }
    setActiveTab(key);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#7c92b5",
        display: "flex",
        justifyContent: "center",
        padding: "48px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          height: "75vh",
          background: "#fff",
          borderRadius: 16,
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            width: 240,
            background: "#2f2f2f",
            padding: "32px 0",
            position: "relative",
          }}
        >
          {/* Back Button */}
          <div
            onClick={() => navigate("/")}
            style={{
              position: "absolute",
              top: 10,
              left: 5,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#2f2f2f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            <ArrowLeftOutlined style={{ color: "#fff", fontSize: 18 }} />
          </div>

          {/* Avatar */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Avatar
              size={72}
              icon={<UserOutlined />}
              style={{ backgroundColor: "#fff", color: "#555" }}
            />
            <Title level={5} style={{ color: "#fff", marginTop: 12 }}>
              {user?.fullName || "Customer"}
            </Title>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[activeTab]}
            style={{ background: "transparent", borderRight: 0 }}
            onClick={handleMenuClick}
            items={[
              { key: "profile", icon: <HomeOutlined />, label: "Profile" },
              { key: "orders", icon: <ShoppingOutlined />, label: "My Orders" },
              {
                key: "support",
                icon: <CustomerServiceOutlined />,
                label: "Customer Support",
              },
              {
                key: "settings",
                icon: <SettingOutlined />,
                label: "Account Settings",
              },
              { key: "logout", icon: <LogoutOutlined />, label: "Sign Out" },
            ]}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            flex: 1,
            padding: 32,
            background: "#fafafa",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {activeTab === "profile" && (
            <Card
              title="Customer Information"
              bordered={false}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 16,
              }}
            >
              {user ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    rowGap: 20,
                    marginTop: 16,
                  }}
                >
                  <Text strong>Full Name</Text>
                  <Text>{user.fullName}</Text>

                  <Text strong>Email</Text>
                  <Text>{user.email}</Text>

                  <Text strong>Gender</Text>
                  <Text>{user.gender || "—"}</Text>

                  <Text strong>Phone Number</Text>
                  <Text>{user.phone || "—"}</Text>
                </div>
              ) : (
                <Text type="secondary">Chưa đăng nhập</Text>
              )}
            </Card>
          )}

          {activeTab !== "profile" && <div style={{ flex: 1 }} />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;