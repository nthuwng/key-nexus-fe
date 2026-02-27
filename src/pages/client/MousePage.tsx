import { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Checkbox,
  Radio,
  Button,
  Rate,
  Pagination,
  Breadcrumb,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  ReloadOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";

const MousePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1,
      name: "Chuột Logitech G304 Wireless",
      price: 720000,
      oldPrice: 1200000,
      rating: 5,
      image:
        "https://resource.logitechg.com/w_800,c_limit,q_auto:best,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g304/g304-black-gallery-1.png",
    },
    {
      id: 2,
      name: "Chuột Logitech G102 LightSync",
      price: 400000,
      oldPrice: 700000,
      rating: 5,
      image:
        "https://resource.logitechg.com/w_800,c_limit,q_auto:best,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g102/g102-black-gallery-1.png",
    },
    {
      id: 3,
      name: "Chuột DareU EM911 RGB",
      price: 400000,
      oldPrice: 690000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-chuot-dareu-em911-rgb-1_800x.png",
    },
    {
      id: 4,
      name: "Chuột Logitech G Pro Wireless",
      price: 2290000,
      oldPrice: 2990000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-chuot-logitech-g-pro-wireless-1_800x.png",
    },
    {
      id: 5,
      name: "Chuột Razer DeathAdder Essential",
      price: 490000,
      oldPrice: 790000,
      rating: 4,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-chuot-razer-deathadder-essential-1_800x.png",
    },
    {
      id: 6,
      name: "Chuột DareU EM908 RGB",
      price: 350000,
      oldPrice: 590000,
      rating: 4,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-chuot-dareu-em908-rgb-1_800x.png",
    },
    {
      id: 7,
      name: "Chuột Logitech G502 Hero",
      price: 990000,
      oldPrice: 1490000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-chuot-logitech-g502-hero-1_800x.png",
    },
    {
      id: 8,
      name: "Chuột Razer Basilisk Essential",
      price: 890000,
      oldPrice: 1290000,
      rating: 4,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-chuot-razer-basilisk-essential-1_800x.png",
    },
  ];

  const onFinish = (values: any) => {
    console.log("Filter:", values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <div
      style={{
        padding: "24px 40px",
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumb
        style={{ marginBottom: 20, fontSize: 15 }}
        items={[
          {
            title: (
              <span
                onClick={() => navigate("/")}
                style={{
                  cursor: "pointer",
                  color: "#e92f51",
                  fontWeight: 500,
                }}
              >
                <HomeOutlined /> Trang chủ
              </span>
            ),
          },
          {
            title: "Chuột máy tính - Chuột Gaming",
          },
        ]}
      />

      <Row gutter={24}>
        {/* ================== FILTER - COL 5 ================== */}
        <Col span={5}>
          <Card
            bordered={false}
            style={{
              borderRadius: 14,
              boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
              border: "1px solid rgba(0,0,0,0.2)",
            }}
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 600,
                }}
              >
                <span>Bộ lọc tìm kiếm</span>

                <ReloadOutlined
                  onClick={handleReset}
                  style={{
                    cursor: "pointer",
                    fontSize: 16,
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1677ff")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                />
              </div>
            }
          >
            <Form layout="vertical" form={form} onFinish={onFinish}>
              {/* Giá */}
              <Form.Item
                name="price"
                label="Giá tiền"
                style={{
                  paddingBottom: 16,
                  marginBottom: 16,
                  borderBottom: "1.5px solid #000",
                }}
              >
                <Radio.Group>
                  <Radio value="1">Dưới 500.000đ</Radio>
                  <Radio value="2">500.000đ - 1 triệu</Radio>
                  <Radio value="3">Trên 1 triệu</Radio>
                </Radio.Group>
              </Form.Item>

              {/* Rating */}
              <Form.Item
                name="rating"
                label="Đánh giá"
                style={{
                  paddingBottom: 16,
                  marginBottom: 16,
                  borderBottom: "1.5px solid #000",
                }}
              >
                <Radio.Group>
                  {[5, 4, 3, 2, 1].map((r) => (
                    <div key={r}>
                      <Radio value={r}>
                        <Rate disabled defaultValue={r} />
                      </Radio>
                    </div>
                  ))}
                </Radio.Group>
              </Form.Item>

              {/* Brand */}
              <Form.Item name="brand" label="Thương hiệu">
                <Checkbox.Group>
                  <Checkbox value="logitech">Logitech</Checkbox>
                  <Checkbox value="dareu">DareU</Checkbox>
                  <Checkbox value="razer">Razer</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  block
                  size="large"
                  style={{
                    borderRadius: 8,
                    background: "#183466",
                    color: "#fff",
                  }}
                >
                  Áp dụng
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* ================== PRODUCT - COL 19 ================== */}
        <Col span={19}>
          {/* ===== SORT BAR ===== */}
          <div
            style={{
              background: "#3d407e",
              padding: "12px 20px",
              borderRadius: 12,
              marginBottom: 20,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Icon */}
              <SortAscendingOutlined
                style={{
                  fontSize: 18,
                  color: "#fff",
                  overflow: "hidden",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
                  border: "1px solid rgba(0,0,0,0.2)",
                  transition: "all 0.25s",
                }}
              />

              {/* Text */}
              <span style={{ fontWeight: 500, color: "#fff" }}>Xếp theo:</span>

              <Select
                defaultValue="featured"
                style={{ width: 180 }}
                options={[
                  { value: "featured", label: "Nổi bật" },
                  { value: "az", label: "Tên từ A-Z" },
                  { value: "za", label: "Tên từ Z-A" },
                  { value: "popular", label: "Phổ biến" },
                  { value: "newest", label: "Hàng mới" },
                  { value: "priceAsc", label: "Giá tăng dần" },
                  { value: "priceDesc", label: "Giá giảm dần" },
                ]}
              />
            </div>
          </div>

          {/* ===== PRODUCT LIST ===== */}
          <Row gutter={[20, 20]}>
            {products.map((item) => (
              <Col span={6} key={item.id}>
                <Card
                  hoverable
                  onClick={() => navigate(`/mouse/${item.id}`)}
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    transition: "all 0.25s",
                    cursor: "pointer",
                  }}
                  bodyStyle={{ padding: 16 }}
                  cover={
                    <div
                      style={{
                        height: 200,
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.08)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <img
                        alt={item.name}
                        src={item.image}
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  }
                >
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      minHeight: 44,
                    }}
                  >
                    {item.name}
                  </div>

                  <div
                    style={{
                      color: "#999",
                      textDecoration: "line-through",
                      fontSize: 13,
                    }}
                  >
                    {item.oldPrice.toLocaleString()}đ
                  </div>

                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#ff4d4f",
                      marginBottom: 6,
                    }}
                  >
                    {item.price.toLocaleString()}đ
                  </div>

                  <Rate
                    disabled
                    defaultValue={item.rating}
                    style={{ fontSize: 14 }}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {/* ===== PAGINATION ===== */}
          <div
            style={{
              marginTop: 40,
              textAlign: "center",
            }}
          >
            <Pagination
              current={currentPage}
              total={50}
              pageSize={8}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MousePage;
