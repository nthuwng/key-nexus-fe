import { Layout, Space } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        background: "#181c58",
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
        <span style={{ color: "#fff", fontSize: 14 }}>
          © {new Date().getFullYear()} Thế Giới Key Nexus
        </span>

        {/* RIGHT */}
        <Space size={16}>
          <a href="#" style={{ color: "#fff" }}>
            Giới thiệu
          </a>
          <a href="#" style={{ color: "#fff" }}>
            Chính sách
          </a>
          <a href="#" style={{ color: "#fff" }}>
            Liên hệ
          </a>
        </Space>
      </div>
    </Footer>
  );
};

export default AppFooter;
