import {
  Card,
  Row,
  Col,
  Steps,
  Input,
  Radio,
  Button,
  Breadcrumb,
  InputNumber,
  Checkbox,
  Empty,
} from "antd";
import { ArrowLeftOutlined, DeleteOutlined, HomeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useCart } from "@/components/context/cart.context";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();

  const selectedFromCart = location.state?.selectedItems || [];
  const selectedItems = cart.filter((cartItem) =>
    selectedFromCart.some(
      (item: any) => item.id === cartItem.id && item.color === cartItem.color,
    ),
  );

  const total = useMemo(() => {
    return selectedItems.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0,
    );
  }, [selectedItems]);

  return (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(180deg,#f8fafc,#eef2f7)",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumb */}
      <div style={{ marginBottom: 20 }}>
        <Breadcrumb
          separator="/"
          items={[
            {
              title: (
                <span
                  onClick={() => navigate("/")}
                  style={{
                    cursor: "pointer",
                    color: "#ff4d4f",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <HomeOutlined />
                  Trang chủ
                </span>
              ),
            },
            { title: <span>Đặt hàng</span> },
          ]}
        />
      </div>

      {/* Steps */}
      <Card
        style={{
          borderRadius: 16,
          padding: "12px 24px",
          marginBottom: 30,
          boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <Steps
          current={1} // 👈 STEP CHẠY QUA BƯỚC 2
          size="small"
          items={[
            { title: "Giỏ hàng" },
            { title: "Đặt hàng" },
            { title: "Thanh toán" },
          ]}
        />
      </Card>

      <Row gutter={30}>
        {/* ================= LEFT ================= */}
        <Col span={16}>
          {/* EMPTY */}
          {selectedItems.length === 0 && (
            <Card
              style={{
                borderRadius: 20,
                textAlign: "center",
                padding: 60,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              }}
            >
              <Empty description="Không có sản phẩm để đặt hàng" />
              <Button
                type="primary"
                style={{ marginTop: 20 }}
                onClick={() => navigate("/")}
              >
                Tiếp tục mua sắm
              </Button>
            </Card>
          )}

          {/* LIST ITEM */}
          {selectedItems.length > 0 &&
            selectedItems.map((item: any) => (
              <Card
                key={item.id}
                style={{
                  marginBottom: 20,
                  borderRadius: 16,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                }}
              >
                <Row align="middle">
                  <Col span={3}>
                    <div
                      style={{
                        padding: 8,
                        borderRadius: 16,
                        background: "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <img
                        src={item.image}
                        style={{
                          width: "100%",
                          borderRadius: 12,
                          display: "block",
                        }}
                      />
                    </div>
                  </Col>

                  <Col span={7} style={{ paddingLeft: 50 }}>
                    <div style={{ fontWeight: 700 }}>{item.name}</div>
                    <div style={{ color: "#888" }}>
                      {item.price.toLocaleString()} đ
                    </div>
                  </Col>

                  <Col span={4} style={{ paddingLeft: 60 }}>
                    <div style={{ fontWeight: 500 }}>
                      Số lượng: {item.quantity}
                    </div>
                  </Col>

                  <Col span={6} style={{ textAlign: "right" }}>
                    <b>{(item.price * item.quantity).toLocaleString()} đ</b>
                  </Col>

                  <Col span={3} style={{ textAlign: "right" }}>
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      style={{ color: "red" }}
                      onClick={() => removeFromCart(item.id, item.color)}
                    />
                  </Col>
                </Row>
              </Card>
            ))}
          <div style={{ marginTop: 40 }}>
            <div
              onClick={() => navigate(-1)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                color: "#666",
                fontWeight: 500,
                fontSize: 15,
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ff4d4f";
                e.currentTarget.style.transform = "translateX(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#666";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <ArrowLeftOutlined />
              Quay trở lại
            </div>
          </div>
        </Col>

        {/* ================= RIGHT ================= */}
        <Col span={8}>
          <Card
            style={{
              borderRadius: 16,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Hình thức thanh toán</h3>

            <Radio.Group defaultValue="cod" style={{ marginBottom: 20 }}>
              <Radio value="cod">Thanh toán khi nhận hàng</Radio>
              <Radio value="bank">Chuyển khoản ngân hàng</Radio>
            </Radio.Group>

            <div style={{ marginBottom: 15 }}>
              <label>Họ tên</label>
              <Input placeholder="Nhập họ tên" />
            </div>

            <div style={{ marginBottom: 15 }}>
              <label>Số điện thoại</label>
              <Input placeholder="Nhập số điện thoại" />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label>Địa chỉ nhận hàng</label>
              <Input.TextArea rows={3} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span>Tạm tính</span>
              <span>{total.toLocaleString()} đ</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 800,
                fontSize: 20,
                color: "#ff4d4f",
                marginBottom: 25,
              }}
            >
              <span>Tổng tiền</span>
              <span>{total.toLocaleString()} đ</span>
            </div>

            <Button
              block
              size="large"
              style={{
                height: 50,
                fontWeight: 700,
                borderRadius: 12,
                background: "linear-gradient(90deg, #ff4d4f, #d70018)",
                color: "#fff",
              }}
            >
              Đặt hàng ({selectedItems.length})
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
