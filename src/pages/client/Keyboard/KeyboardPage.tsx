import { useEffect, useState } from "react";
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
import { fetchProductAPI } from "@/services/admin/api.admin";

const KeyboardPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [listKeyBoard, setListKeyBoard] = useState<IProductTable[]>([]);
  const [current, setCurrent] = useState<number>(5);
  const [pageSize, setPageSize] = useState<number>(5);
  const [total, setTotal] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: any) => {
    console.log("Filter:", values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    fetchProduct();
  }, [currentPage, pageSize]);

  const fetchProduct = async () => {
    setLoading(true);

    const query = ``;

    const res = await fetchProductAPI(query);

    if (res && res.data?.result) {
      const filtered = res.data.result.filter((item: IProductTable) =>
        item.categoryId?.name?.toLowerCase().includes("bàn phím"),
      );

      setListKeyBoard(filtered);
      setTotal(filtered.length);
    }

    setLoading(false);
  };
  const handleOnchangePage = (pagination: {
    current: number;
    pageSize: number;
  }) => {
    if (pagination && pagination.current != current) {
      setCurrent(pagination.current);
    }
    if (pagination && pagination.pageSize != pageSize) {
      setPageSize(pagination.pageSize);
      setCurrent(1);
    }
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
            {listKeyBoard.map((item) => (
              <Col span={6} key={item._id}>
                <Card
                  hoverable
                  onClick={() => navigate(`/keyboard/${item._id}`)}
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
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/${item.image}`}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: 200,
                          objectFit: "cover",
                          borderRadius: 6,
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

                  <div style={{ color: "red", fontWeight: 600 }}>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* PAGINATION */}
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Pagination
              current={currentPage}
              total={total}
              pageSize={pageSize}
              responsive
              onChange={(p, s) =>
                handleOnchangePage({ current: p, pageSize: s })
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default KeyboardPage;
