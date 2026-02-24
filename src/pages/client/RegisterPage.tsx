import { useState } from "react";
import { Input, Button, Typography, message, Select } from "antd";
import {
  UserOutlined,
  LockOutlined,
  ArrowLeftOutlined,
  GoogleOutlined,
  FacebookFilled,
  PhoneOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { registerAPI } from "@/service/user";

const { Title } = Typography;

const RegisterPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      message.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      message.error("Mật khẩu không khớp");
      return;
    }

    setLoading(true);
    try {
      const res = await registerAPI(email, password);

      if (res && res.data) {
        message.success("Đăng ký thành công");
        navigate("/login");
      } else {
        message.error("Đăng ký thất bại");
      }
    } catch (error: any) {
      message.error(error?.message || "Đăng ký không thành công");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        position: "relative",
      }}
    >
      {/* Nút quay về Home */}
      <Button
        shape="circle"
        icon={<ArrowLeftOutlined />}
        size="large"
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          background: "#ffffff",
          border: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      />

      {/* Khung chính */}
      <div
        style={{
          width: "1100px",
          maxWidth: "95%",
          minHeight: "500px",
          margin: "auto",
          display: "flex",
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
          position: "relative",
        }}
      >
        {/* ===== BÊN TRÁI (giữ nguyên) ===== */}
        <div
          style={{
            flex: 1,
            background: "#1d253c",
            color: "#fff",
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            clipPath: "polygon(0 0, 81% 0, 96% 50%, 81% 100%, 0 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "95%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 120,
              height: 120,
              background: "#fff",
              borderRadius: "50%",
              zIndex: 1,
            }}
          />
          <Title
            level={2}
            style={{ color: "#fff", marginTop: 40, marginBottom: 16 }}
          >
            Key Nexus
          </Title>

          <p style={{ opacity: 0.9, lineHeight: 1.6, marginTop: 10 }}>
            Hệ thống bán thiết bị công nghệ chính hãng:
          </p>

          <ul style={{ marginTop: 40, paddingLeft: 18, lineHeight: 1.8 }}>
            <li>Thiết bị thông minh, IoT</li>
            <li>Bàn phím cơ, bàn phím văn phòng</li>
            <li>Chuột gaming, chuột văn phòng</li>
            <li>Phụ kiện: keycap, switch, lót chuột</li>
            <li>Bảo hành uy tín – Giá tốt</li>
          </ul>

          <Button
            style={{
              marginTop: 50,
              left: "40%",
              transform: "translateX(-50%)",
              background: "#fff",
              color: "#101010",
              border: "none",
              height: 44,
              fontWeight: 600,
              width: 160,
            }}
            onClick={() => navigate("/")}
          >
            Xem sản phẩm
          </Button>
        </div>

        {/* Circle giữa */}
        <div
          style={{
            position: "absolute",
            left: "46%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "#394156",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            zIndex: 2,
          }}
        >
          <UserAddOutlined style={{ fontSize: 28, color: "#fff" }} />
        </div>

        {/* ===== FORM REGISTER ===== */}
        <div
          style={{
            flex: 1,
            padding: "40px 40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <Title level={3} style={{ textAlign: "center", marginBottom: 8 }}>
              Create Account!
            </Title>

            <p
              style={{
                textAlign: "center",
                color: "#888",
                marginBottom: 30,
              }}
            >
              Tạo tài khoản để chúng tôi có tiền của bạn
            </p>

            {/* Fullname */}
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Họ và tên"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ marginBottom: 16, height: 44 }}
            />

            {/* Email */}
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              style={{ marginBottom: 16, height: 44 }}
            />

            {/* Phone + Gender */}
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <Input
                size="large"
                prefix={<PhoneOutlined />}
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ height: 44 }}
              />

              <Select
                size="large"
                placeholder="Giới tính"
                value={gender}
                onChange={(value) => setGender(value)}
                style={{ width: 150 }}
              >
                <Select.Option value="male">Nam</Select.Option>
                <Select.Option value="female">Nữ</Select.Option>
              </Select>
            </div>

            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: 16, height: 44 }}
            />

            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ marginBottom: 20, height: 44 }}
            />

            <Button
              block
              size="large"
              loading={loading}
              onClick={handleRegister}
              style={{
                height: 44,
                fontWeight: 600,
                borderRadius: 6,
                background: "#214688",
                color: "#fff",
              }}
            >
              Đăng ký
            </Button>

            {/* Social giữ nguyên */}
            <div
              style={{
                margin: "20px 0",
                textAlign: "center",
                color: "#999",
                fontSize: 14,
                position: "relative",
              }}
            >
              <span
                style={{
                  background: "#fff",
                  padding: "0 12px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Hoặc đăng ký với
              </span>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "#e5e7eb",
                  zIndex: 0,
                }}
              />
            </div>

            <div style={{ display: "flex", gap: 14 }}>
              <Button
                icon={<GoogleOutlined />}
                style={{
                  flex: 1,
                  height: 48,
                  borderRadius: 12,
                  background: "#c30e01",
                  color: "#fff",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Google
              </Button>

              <Button
                icon={<FacebookFilled />}
                style={{
                  flex: 1,
                  height: 48,
                  borderRadius: 12,
                  background: "#033e8a",
                  color: "#fff",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Facebook
              </Button>
            </div>

            <div
              style={{
                marginTop: 16,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
