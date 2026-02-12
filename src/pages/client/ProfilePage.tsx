import { useEffect, useState } from "react";
import { Card, Avatar, Typography, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ShoppingOutlined,
  SettingOutlined,
  LogoutOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { getProfileAPI } from "@/service/user";

const { Title, Text } = Typography;

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState<any>(null);

  // ===== FETCH PROFILE =====
  const fetchProfile = async () => {
    try {
      const res = await getProfileAPI();
      setUser(res.data.user);
    } catch (error) {
      console.log("Chưa đăng nhập");
      setUser(null);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        padding: "48px 16px",
      }}
    >
      {/* KHUNG 3 – CONTAINER */}
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
        {/* KHUNG 1 – SIDEBAR */}
        <div
          style={{
            width: 240,
            background: "#2f2f2f",
            padding: "32px 0",
          }}
        >
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
            onClick={({ key }) => setActiveTab(key)}
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

        {/* KHUNG 2 – CONTENT (KHÔNG SCROLL) */}
        <div
          style={{
            flex: 1,
            padding: 32,
            background: "#fafafa",
            overflow: "hidden",
            display: "flex",
          }}
        >
          {/* PROFILE – CUSTOMER INFORMATION */}
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

                  <Text strong>Status</Text>
                  <Text>{user.status}</Text>

                  <Text strong>Role</Text>
                  <Text>{user.roleId?.name}</Text>
                </div>
              ) : (
                <Text type="secondary">Chưa đăng nhập</Text>
              )}
            </Card>
          )}

          {/* TAB KHÁC – ĐỂ TRẮNG */}
          {activeTab !== "profile" && <div style={{ flex: 1 }} />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
