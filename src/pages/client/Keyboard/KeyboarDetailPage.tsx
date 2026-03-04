import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Card, Rate, Button, Breadcrumb } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";

interface IProduct {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  brand: string;
  description: string;
  image: string;
}

const KeyboareDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products: IProduct[] = [
    {
      id: "1",
      name: "Chuột Logitech G304 Wireless",
      price: 710000,
      oldPrice: 1200000,
      rating: 5,
      brand: "Logitech",
      description:
        "Chuột gaming không dây, cảm biến HERO, pin dùng lâu, thiết kế nhẹ và chính xác cao.",
      image:
        "https://resource.logitechg.com/w_800,c_limit,q_auto:best,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g304/g304-black-gallery-1.png",
    },
    {
      id: "2",
      name: "Chuột Logitech G102 LightSync",
      price: 400000,
      oldPrice: 700000,
      rating: 5,
      brand: "Logitech",
      description:
        "Chuột gaming RGB, độ chính xác cao, thiết kế gọn nhẹ phù hợp mọi game thủ.",
      image:
        "https://resource.logitechg.com/w_800,c_limit,q_auto:best,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g102/g102-black-gallery-1.png",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div style={{ padding: 40 }}>Không tìm thấy sản phẩm</div>;
  }

  // ===== State =====
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [expanded, setExpanded] = useState(false);

  // Thumbnail gồm ảnh chuột + ảnh Unsplash
  const thumbnails = [
    // product.image,
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    "https://images.unsplash.com/photo-1613145997970-db84a7975fbb",
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  ];

  // State thumbnail
  const [startIndex, setStartIndex] = useState(0);
  const visibleThumbnails = thumbnails.slice(startIndex, startIndex + 4);
  const [selectedColor, setSelectedColor] = useState("Đen");
  // Ảnh chính
  const [selectedImage, setSelectedImage] = useState<string>(thumbnails[0]);
  const discount = Math.round(100 - (product.price / product.oldPrice) * 100);

  return (
    <div style={{ padding: "24px 60px", background: "#f5f5f5" }}>
      {/* Breadcrumb */}
      <Breadcrumb
        style={{ marginBottom: 20 }}
        items={[
          {
            title: (
              <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                <HomeOutlined /> Trang chủ
              </span>
            ),
          },
          {
            title: (
              <span
                onClick={() => navigate("/mouse")}
                style={{ cursor: "pointer" }}
              >
                Chuột
              </span>
            ),
          },
          { title: product.name },
        ]}
      />

      <Card style={{ borderRadius: 10 }}>
        <Row gutter={40}>
          {/* ================= LEFT ================= */}
          <Col span={12}>
            <Row gutter={10}>
              {/* Thumbnail */}
              <Col span={6}>
                <div
                  onWheel={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    setStartIndex((prev) => {
                      if (e.deltaY > 0) {
                        return Math.min(thumbnails.length - 4, prev + 1);
                      } else {
                        return Math.max(0, prev - 1);
                      }
                    });
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: 340,
                    overflow: "hidden",
                    overscrollBehavior: "contain",
                  }}
                >
                  {/* Danh sách ảnh */}
                  {visibleThumbnails.map((img, index) => {
                    const realIndex = startIndex + index;

                    return (
                      <div
                        key={realIndex}
                        onClick={() => {
                          setSelectedImage(img);

                          // ===== Auto slide theo vị trí click =====
                          let newStart = realIndex - 1;

                          if (newStart < 0) newStart = 0;
                          if (newStart > thumbnails.length - 4) {
                            newStart = thumbnails.length - 4;
                          }

                          setStartIndex(newStart);
                        }}
                        style={{
                          border:
                            selectedImage === img
                              ? "2px solid #d70018"
                              : "1px solid #ddd",
                          borderRadius: 6,
                          marginBottom: 10,
                          padding: 6,
                          cursor: "pointer",
                          background: "#fff",
                          width: "100%",
                          transition: "0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 12px rgba(0,0,0,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <img
                          src={img}
                          style={{
                            width: "100%",
                            height: 70,
                            objectFit: "cover",
                            borderRadius: 4,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Col>

              {/* Main Image */}
              <Col span={18}>
                <div
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: 8,
                    padding: 20,
                    textAlign: "center",
                    background: "#fafafa",
                  }}
                >
                  <img
                    src={selectedImage}
                    style={{
                      maxWidth: "100%",
                      maxHeight: 420,
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Col>
              <Col span={24} style={{ marginTop: 40 }}>
                <Card
                  style={{
                    borderRadius: 10,
                    lineHeight: 1.8,
                    paddingBottom: expanded ? 0 : 20,
                  }}
                >
                  <h3 style={{ fontWeight: 700 }}>Giới thiệu sản phẩm</h3>

                  <div
                    style={{
                      position: "relative",
                      maxHeight: expanded ? "none" : 150,
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div>
                      <p>
                        Đây là mẫu chuột gaming được thiết kế dành cho người
                        dùng yêu thích sự chính xác và tốc độ. Sản phẩm sở hữu
                        cảm biến cao cấp cùng độ trễ cực thấp.
                      </p>

                      <p>
                        Thiết kế công thái học giúp cầm nắm thoải mái trong thời
                        gian dài. Phù hợp cho cả làm việc văn phòng lẫn chơi
                        game chuyên nghiệp.
                      </p>

                      <p>
                        Hệ thống kết nối ổn định, tuổi thọ pin cao và độ bền
                        vượt trội. Mang lại trải nghiệm sử dụng mượt mà và ổn
                        định.
                      </p>
                    </div>

                    {/* 👇 LỚP MỜ Ở DƯỚI */}
                    {!expanded && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 60,
                          background:
                            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
                        }}
                      />
                    )}
                  </div>

                  {/* Nút xem thêm */}
                  <div style={{ textAlign: "center", marginTop: 8 }}>
                    <span
                      onClick={() => setExpanded(!expanded)}
                      style={{
                        color: "#d70018",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {expanded ? "Thu gọn" : "Xem thêm"}
                    </span>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* ================= RIGHT ================= */}
          <Col span={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <h2 style={{ fontWeight: 700, margin: 0 }}>{product.name}</h2>

              <span
                style={{
                  color: "#1677ff",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
                onClick={() => {
                  // scroll xuống phần review (nếu có)
                  const el = document.getElementById("reviews");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Xem đánh giá
              </span>
            </div>
            {/* ===== ROW: Thông tin giá (trái) + Điểm nổi bật (phải) ===== */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 30,
                marginTop: 10,
              }}
            >
              {/* ===== BÊN TRÁI: Giá ===== */}
              <div style={{ flex: 1 }}>
                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Rate
                    disabled
                    value={product.rating}
                    style={{ fontSize: 14 }}
                  />
                  <span style={{ color: "#666" }}>Đã bán 6969</span>
                </div>

                {/* Giá */}
                <div style={{ marginTop: 15 }}>
                  <span
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: "#d70018",
                      marginRight: 10,
                    }}
                  >
                    {product.price.toLocaleString()}đ
                  </span>

                  <span
                    style={{
                      background: "#ff4d4f",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: 4,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    -{discount}%
                  </span>

                  <div
                    style={{
                      color: "#999",
                      textDecoration: "line-through",
                      marginTop: 5,
                    }}
                  >
                    {product.oldPrice.toLocaleString()}đ
                  </div>
                </div>
                {/* ===== Color ===== */}
                <div style={{ marginTop: 25 }}>
                  <div style={{ fontWeight: 600, marginBottom: 10 }}>
                    Color:
                  </div>

                  <div style={{ display: "flex", gap: 16 }}>
                    {[
                      {
                        name: "Đen",
                        img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300",
                      },
                      {
                        name: "Trắng",
                        img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300",
                      },
                    ].map((color) => (
                      <div
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        style={{
                          border:
                            selectedColor === color.name
                              ? "2px solid #d70018"
                              : "1px solid #ddd",
                          borderRadius: 8,
                          padding: 8,
                          cursor: "pointer",
                          textAlign: "center",
                          width: 80,
                          background: "#fff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#fff1f0";
                          e.currentTarget.style.transform = "scale(1.04)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#fff";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <img
                          src={color.img}
                          style={{
                            width: "100%",
                            height: 60,
                            objectFit: "contain",
                            marginBottom: 4,
                          }}
                        />
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color:
                              selectedColor === color.name ? "#d70018" : "#333",
                          }}
                        >
                          {color.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ===== Quantity ===== */}
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div style={{ fontWeight: 600 }}>Số lượng:</div>

                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #ddd",
                      borderRadius: 6,
                      overflow: "hidden",
                      background: "#fff",
                    }}
                  >
                    <div
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{
                        width: 36,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        borderRight: "1px solid #eee",
                      }}
                    >
                      -
                    </div>

                    <div
                      style={{
                        width: 45,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRight: "1px solid #eee",
                        fontWeight: 600,
                      }}
                    >
                      {quantity}
                    </div>

                    <div
                      onClick={() => setQuantity(quantity + 1)}
                      style={{
                        width: 36,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== ƯU ĐÃI - BÊN PHẢI ===== */}
              <div
                style={{
                  width: 360,
                  border: "1px solid #e5e5e5",
                  borderRadius: 8,
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(90deg, #ff4d4f, #d70018)",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "10px 15px",
                    fontSize: 15,
                  }}
                >
                  ƯU ĐÃI & DỊCH VỤ
                </div>

                <div>
                  {[
                    { label: "Vận chuyển", value: "Miễn phí toàn quốc" },
                    { label: "Giao hàng", value: "Nội thành 24h" },
                    { label: "Thanh toán", value: "Trả góp 0%" },
                    {
                      label: "Ưu đãi",
                      value: "Giảm 50.000đ khi thanh toán online",
                    },
                    { label: "Đổi trả", value: "7 ngày nếu lỗi nhà sản xuất" },
                    { label: "Bảo hành", value: "12 tháng chính hãng" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        borderBottom:
                          index !== 5 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "40%",
                          padding: "10px 15px",
                          background: "#fafafa",
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                      </div>

                      <div
                        style={{
                          width: "60%",
                          padding: "10px 15px",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== ACTION BUTTONS ===== */}
            <div style={{ marginTop: 30, display: "flex", gap: 16 }}>
              {/* Thêm vào giỏ */}
              <Button
                size="large"
                icon={<ShoppingCartOutlined />}
                style={{
                  flex: 1,
                  height: 54,
                  fontSize: 16,
                  fontWeight: 600,
                  borderRadius: 10,
                  border: "2px solid #d70018",
                  color: "#d70018",
                  background: "#fff",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff1f0";
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Thêm vào giỏ
              </Button>

              {/* Mua ngay */}
              <Button
                size="large"
                style={{
                  flex: 1.3,
                  height: 54,
                  fontSize: 18,
                  fontWeight: 700,
                  borderRadius: 10,
                  border: "none",
                  background: "linear-gradient(90deg, #ff4d4f, #d70018)",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(215,0,24,0.25)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(215,0,24,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(215,0,24,0.25)";
                }}
              >
                Mua ngay
              </Button>
            </div>
            <Col span={24} style={{ marginTop: 40 }}>
              <Card
                style={{ borderRadius: 10, padding: 0, overflow: "hidden" }}
              >
                {/* Header đỏ */}
                <div
                  style={{
                    background: "linear-gradient(90deg, #ff4d4f, #d70018)",
                    color: "#fff",
                    padding: "12px 16px",
                    fontWeight: 700,
                  }}
                >
                  THÔNG SỐ KỸ THUẬT
                </div>

                {/* Bảng thông số */}
                {[
                  { label: "Kiểu kết nối", value: "Wireless 2.4GHz" },
                  { label: "Cảm biến", value: "HERO Sensor" },
                  { label: "Độ phân giải", value: "12.000 DPI" },
                  { label: "Trọng lượng", value: "99g" },
                  { label: "Thời lượng pin", value: "Lên đến 250 giờ" },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40% 60%",
                      borderTop: "1px solid #eee",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 12px",
                        background: "#fafafa",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ padding: "10px 12px" }}>{item.value}</div>
                  </div>
                ))}

                {/* Điểm nổi bật */}
                <div
                  style={{
                    background: "#f9f9f9",
                    padding: 16,
                    borderTop: "1px solid #eee",
                  }}
                >
                  <h4 style={{ fontWeight: 700, marginBottom: 10 }}>
                    Điểm nổi bật
                  </h4>
                  <ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
                    <li>Thiết kế siêu nhẹ</li>
                    <li>Cảm biến chính xác cao</li>
                    <li>Kết nối ổn định</li>
                    <li>Pin sử dụng lâu dài</li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default KeyboareDetailPage;
