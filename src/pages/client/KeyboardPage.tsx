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

const KeyboardPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);

  // ===== DATA BÀN PHÍM (GearVN style) =====
  const products = [
    {
      id: 1,
      name: "Bàn phím Logitech G Pro X TKL",
      price: 2890000,
      oldPrice: 3490000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-ban-phim-logitech-g-pro-x-tkl-1_800x.png",
    },
    {
      id: 2,
      name: "Bàn phím Logitech G213 Prodigy",
      price: 990000,
      oldPrice: 1490000,
      rating: 4,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-ban-phim-logitech-g213-prodigy-1_800x.png",
    },
    {
      id: 3,
      name: "Bàn phím DareU EK87 RGB",
      price: 690000,
      oldPrice: 990000,
      rating: 4,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-ban-phim-dareu-ek87-rgb-1_800x.png",
    },
    {
      id: 4,
      name: "Bàn phím Razer BlackWidow Essential",
      price: 1590000,
      oldPrice: 1990000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-ban-phim-razer-blackwidow-essential-1_800x.png",
    },
    {
      id: 5,
      name: "Bàn phím Akko 3087 World Tour",
      price: 1790000,
      oldPrice: 2290000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-akko-3087-world-tour-1_800x.png",
    },
    {
      id: 6,
      name: "Bàn phím Akko 3068B Plus Wireless",
      price: 2090000,
      oldPrice: 2590000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-akko-3068b-plus-1_800x.png",
    },
    {
      id: 7,
      name: "Bàn phím Keychron K2 Wireless",
      price: 2390000,
      oldPrice: 2890000,
      rating: 5,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-keychron-k2-1_800x.png",
    },
    {
      id: 8,
      name: "Bàn phím DareU EK1280 RGB",
      price: 490000,
      oldPrice: 790000,
      rating: 4,
      image:
        "https://gearvn.com/cdn/shop/products/gearvn-ban-phim-dareu-ek1280-rgb-1_800x.png",
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
            title: "Bàn phím Gaming",
          },
        ]}
      />

      <Row gutter={24}>
        {/* ================== FILTER ================== */}
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
                  style={{ cursor: "pointer", fontSize: 16 }}
                />
              </div>
            }
          >
            <Form layout="vertical" form={form} onFinish={onFinish}>
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
                  <Radio value="2">từ 500.000đ - 1 triệu</Radio>
                  <Radio value="3">Từ 1 - 2 triệu</Radio>
                  <Radio value="4">Trên 2 triệu</Radio>
                </Radio.Group>
              </Form.Item>

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

              <Form.Item name="brand" label="Thương hiệu">
                <Checkbox.Group>
                  <Checkbox value="logitech">Logitech</Checkbox>
                  <Checkbox value="dareu">DareU</Checkbox>
                  <Checkbox value="razer">Razer</Checkbox>
                  <Checkbox value="akko">Akko</Checkbox>
                  <Checkbox value="keychron">Keychron</Checkbox>
                </Checkbox.Group>
              </Form.Item>

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
            </Form>
          </Card>
        </Col>

        {/* ================== PRODUCT ================== */}
        <Col span={19}>
          {/* SORT BAR */}
          <div
            style={{
              background: "#3d407e",
              padding: "12px 20px",
              borderRadius: 12,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <SortAscendingOutlined style={{ fontSize: 18, color: "#fff" }} />
            <span style={{ fontWeight: 500, color: "#fff" }}>Xếp theo:</span>

            <Select
              defaultValue="featured"
              style={{ width: 180 }}
              options={[
                { value: "featured", label: "Nổi bật" },
                { value: "popular", label: "Phổ biến" },
                { value: "newest", label: "Hàng mới" },
                { value: "priceAsc", label: "Giá tăng dần" },
                { value: "priceDesc", label: "Giá giảm dần" },
              ]}
            />
          </div>

          {/* PRODUCT LIST */}
          <Row gutter={[20, 20]}>
            {products.map((item) => (
              <Col span={6} key={item.id}>
                <Card
                  hoverable
                  bordered={false}
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    transition: "all 0.25s",
                  }}
                  cover={
                    <div
                      style={{
                        height: 200,
                        background: "#f0f2f5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
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
                  <div style={{ fontWeight: 500, minHeight: 44 }}>
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

                  <Rate disabled defaultValue={item.rating} />
                </Card>
              </Col>
            ))}
          </Row>

          {/* PAGINATION */}
          <div style={{ marginTop: 40, textAlign: "center" }}>
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

export default KeyboardPage;
