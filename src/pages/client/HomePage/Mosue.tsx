
import { fetchProductAPI } from "@/services/admin/api.admin";
import { Card, Col, Pagination, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Mosue = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [listMouse, setListMouse] = useState<IProductTable[]>([]);
  const [current, setCurrent] = useState<number>(5);
  const [pageSize, setPageSize] = useState<number>(5);
  const [total, setTotal] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  // Lấy category
  useEffect(() => {
    fetchProduct();
  }, [currentPage, pageSize]);

  const fetchProduct = async () => {
    setLoading(true);

    const query = ``;

    const res = await fetchProductAPI(query);

    if (res && res.data?.result) {
      const filtered = res.data.result.filter((item: IProductTable) =>
        item.categoryId?.name?.toLowerCase().includes("chuột"),
      );

      setListMouse(filtered);
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
        marginTop: 40,
        background: "#f5f5f7",
        padding: 30,
        borderRadius: 18,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
            Chuột bán chạy
          </h2>

          <span style={{ margin: "0 10px", color: "#ccc" }}>|</span>

          <span style={{ color: "#555", fontWeight: 500 }}>
            🚚 Giao hàng toàn quốc
          </span>
        </div>

        <div style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <span style={{ cursor: "pointer" }}>Akko</span>
          <span style={{ cursor: "pointer" }}>Asus</span>
          <span style={{ cursor: "pointer" }}>Razer</span>
          <span style={{ cursor: "pointer" }}>Logitech</span>
          <span style={{ cursor: "pointer" }}>Leopold</span>
          <span style={{ cursor: "pointer" }}>DareU</span>
          <span
            style={{ color: "#1677ff", cursor: "pointer", fontWeight: 500 }}
          >
            Xem tất cả
          </span>
        </div>
      </div>

      {/* PRODUCT GRID */}
      {loading ? (
        <div style={{ textAlign: "center", padding: 40 }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[20, 20]}>
          {listMouse.map((item) => (
            <Col span={4} key={item._id}>
              <Card
                hoverable
                onClick={() => navigate(`/keyboard/${item._id}`)}
                style={{
                  borderRadius: 18,
                  border: "1px solid #eee",
                  overflow: "hidden",
                  transition: "0.3s",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                bodyStyle={{
                  padding: 14,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
                cover={
                  <div
                    style={{
                      height: 200,
                      background: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/images/${item.image}`}
                      alt={item.name}
                      style={{
                        maxHeight: 160,
                        objectFit: "contain",
                        transition: "0.3s",
                      }}
                    />
                  </div>
                }
              >
                {/* NAME */}
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    height: 42,
                    overflow: "hidden",
                    marginBottom: 8,
                  }}
                >
                  {item.name}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#ff0000",
                      margin: "4px 0",
                    }}
                  >
                    {new Intl.NumberFormat("vi-VN").format(item.price)}đ
                  </div>

                  <div style={{ fontSize: 13, color: "#f5a623" }}>
                    ★ 5.0 <span style={{ color: "#666" }}>(15 đánh giá)</span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <Pagination
          current={currentPage}
          total={total}
          pageSize={pageSize}
          responsive
          onChange={(p, s) => handleOnchangePage({ current: p, pageSize: s })}
        />
      </div>
    </div>
  );
};

export default Mosue;
