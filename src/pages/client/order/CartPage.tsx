import { useCart } from "@/components/context/cart.context";
import {
  Button,
  Steps,
  Row,
  Col,
  Card,
  InputNumber,
  Checkbox,
  Empty,
  Breadcrumb,
} from "antd";
import { HomeOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const itemKey = (item: any) => item.id + (item.color || "");

  const toggleSelect = (item: any) => {
    const key = itemKey(item);
    setSelectedItems((prev) =>
      prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key],
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(cart.map((item) => itemKey(item)));
    } else {
      setSelectedItems([]);
    }
  };

  const selectedTotal = useMemo(() => {
    return cart
      .filter((item) => selectedItems.includes(itemKey(item)))
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart, selectedItems]);

  return (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(180deg,#f8fafc,#eef2f7)",
        minHeight: "100vh",
      }}
    >
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
            {
              title: <span style={{ color: "#555" }}>Giở Hàng</span>,
            },
          ]}
        />
      </div>

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
          current={0}
          size="small"
          style={{ padding: "8px 0" }}
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
          {/* EMPTY CART */}
          {cart.length === 0 && (
            <Card
              style={{
                borderRadius: 20,
                textAlign: "center",
                padding: 60,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              }}
            >
              <Empty description="Giỏ hàng của bạn đang trống" />
              <Button
                type="primary"
                style={{ marginTop: 20 }}
                onClick={() => navigate("/")}
              >
                Tiếp tục mua sắm
              </Button>
            </Card>
          )}

          {cart.length > 0 && (
            <>
              <div style={{ marginBottom: 20 }}>
                <Checkbox
                  checked={selectedItems.length === cart.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                >
                  Chọn tất cả
                </Checkbox>
              </div>

              {cart.map((item) => (
                <Card
                  key={itemKey(item)}
                  style={{
                    marginBottom: 20,
                    borderRadius: 16,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                  }}
                >
                  <Row align="middle">
                    <Col span={1}>
                      <Checkbox
                        checked={selectedItems.includes(itemKey(item))}
                        onChange={() => toggleSelect(item)}
                      />
                    </Col>

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
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "translateY(-4px)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "translateY(0)")
                        }
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

                    <Col span={7} style={{ paddingLeft: 30 }}>
                      <div style={{ fontWeight: 700 }}>{item.name}</div>
                      <div style={{ color: "#888" }}>
                        {item.price.toLocaleString()} đ
                      </div>
                    </Col>

                    <Col span={4} style={{ paddingLeft: 30 }}>
                      <InputNumber
                        min={1}
                        value={item.quantity}
                        onChange={(value) =>
                          updateQuantity(item.id, value || 1, item.color)
                        }
                      />
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
            </>
          )}
        </Col>

        {/* ================= RIGHT ================= */}
        <Col span={8}>
          <Card
            style={{
              borderRadius: 16,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <span>Đã chọn</span>
              <span>{selectedItems.length} sản phẩm</span>
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
              <span>{selectedTotal.toLocaleString()} đ</span>
            </div>

            <Button
              block
              size="large"
              disabled={selectedItems.length === 0}
              onClick={() =>
                navigate("/checkout", {
                  state: {
                    selectedItems: cart.filter((item) =>
                      selectedItems.includes(itemKey(item)),
                    ),
                  },
                })
              }
              style={{
                height: 50,
                fontWeight: 700,
                borderRadius: 12,
                background: "linear-gradient(90deg, #ff4d4f, #d70018)",
                color: "#fff",
              }}
            >
              Mua hàng ({selectedItems.length})
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
