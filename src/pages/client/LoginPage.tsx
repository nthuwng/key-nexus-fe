import { useState } from "react";
import { Card, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { loginAPI } from "@/service/user";

const { Title } = Typography;

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleLogin = async () => {
    if (!email || !password) {
      message.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setLoading(true);
    try {
      const res = await loginAPI(email, password);

      if (res && res.data) {
        const { access_token, user } = res.data;

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user", JSON.stringify(user));

        message.success("Đăng nhập thành công");
        navigate("/");
      } else {
        message.error("Đăng nhập thất bại");
      }
    } catch (error: any) {
      message.error(error?.message || "Sai tài khoản hoặc mật khẩu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <Card style={{ width: 360 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Đăng nhập
        </Title>

        <Input
          size="large"
          prefix={<UserOutlined />}
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          style={{ marginBottom: 16 }}
        />

        <Input.Password
          size="large"
          prefix={<LockOutlined />}
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 24 }}
        />

        <Button
          type="primary"
          block
          size="large"
          loading={loading}
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>

        <div
          style={{
            marginTop: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/register">Đăng ký</Link>
          <Link to="/forgot-password">Quên mật khẩu?</Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
