import { Layout, Space } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        background: "#f9f9f9",
        borderTop: "1px solid #eee",
        padding: "24px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* LEFT */}
        <span style={{ color: "#666", fontSize: 14 }}>
          © {new Date().getFullYear()} Thế Giới Key Nexus
        </span>

        {/* RIGHT */}
        <Space size={16}>
          <a href="#" style={{ color: "#666" }}>
            Giới thiệu
          </a>
          <a href="#" style={{ color: "#666" }}>
            Chính sách
          </a>
          <a href="#" style={{ color: "#666" }}>
            Liên hệ
          </a>
        </Space>
      </div>
    </Footer>
  );
};

export default AppFooter;
