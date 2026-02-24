import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          background: "#E6F0FF",
          color: "#070707",
          fontSize: "13px",
          borderBottom: "1px solid #86bae5",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "8px 16px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 500,
          }}
        >
          <span>🚚 Giao nhanh 2-4h nội thành</span>
          <span>💰 Giá tốt mỗi ngày</span>
          <span>🔁 Đổi trả trong 7 ngày</span>
          <span>🔁 Thu cũ đổi mới</span>
          <span>🛡️ Bảo hành chính hãng</span>
          <span>📞 Hỗ trợ 24/7</span>
        </div>
      </div>
      {/* ===== Banner dọc trái ===== */}
      <div
        style={{
          position: "fixed",
          left: "10px",
          top: "120px",
          width: "120px",
          height: "500px",
          background: "linear-gradient(180deg,#ff4d4f,#cf1322)",
          borderRadius: "12px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          padding: "10px",
        }}
      >
        HAPPY NEW YEAR
      </div>

      {/* ===== Banner dọc phải ===== */}
      <div
        style={{
          position: "fixed",
          right: "10px",
          top: "120px",
          width: "120px",
          height: "500px",
          background: "linear-gradient(180deg,#faad14,#d48806)",
          borderRadius: "12px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          padding: "10px",
        }}
      >
        HAPPY NEW YEAR
      </div>
      {/* ===== Floating Buttons (2 hình tròn) ===== */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 1100,
        }}
      >
        {/* Nút Chat */}
        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#ff4d4f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "22px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          💬
        </div>

        {/* Nút Zalo */}
        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#1677ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Zalo
        </div>
      </div>

      {/* Nội dung Home */}
      <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* ===== Danh mục sản phẩm ===== */}
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ marginBottom: "20px" }}>Danh mục sản phẩm</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              gap: "30px",
              textAlign: "center",
            }}
          >
            {[
              "Laptop",
              "PC",
              "Màn hình",
              "Mainboard",
              "CPU",
              "VGA",
              "RAM",
              "Ổ cứng",
              "Case",
              "Tản nhiệt",
              "Nguồn",
              "Bàn phím",
              "Chuột",
              "Ghế",
              "Tai nghe",
              "Loa",
              "Console",
              "Phụ kiện",
              "Thiết bị VP",
              "Sạc DP",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onClick={() => {
                  if (item === "Chuột") navigate("/mouse");
                  else if (item === "Bàn phím") navigate("/keyboard");
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{
                    height: "60px",
                    width: "60px",
                    margin: "0 auto 10px",
                    background: "#f3f3f3",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  🖥
                </div>

                <div style={{ fontSize: "14px", fontWeight: 500 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner trên */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "16px",
            marginTop: "24px",
            marginBottom: "16px",
          }}
        >
          {/* Banner lớn */}
          <div
            style={{
              height: "280px",
              borderRadius: "8px",
              background: "#d9e8ff",
            }}
          />

          {/* 2 banner nhỏ */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div style={{ borderRadius: "8px", background: "#ffd6d6" }} />
            <div style={{ borderRadius: "8px", background: "#ffe9b3" }} />
          </div>
        </div>

        {/* ===== 3 banner nhỏ + text giữa ===== */}
        <div
          style={{
            position: "relative",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
            }}
          >
            <div
              style={{
                height: "140px",
                borderRadius: "8px",
                background: "#e0ffd6",
              }}
            />
            <div
              style={{
                height: "140px",
                borderRadius: "8px",
                background: "#d6f0ff",
              }}
            />
            <div
              style={{
                height: "140px",
                borderRadius: "8px",
                background: "#f2d6ff",
              }}
            />
          </div>

          {/* Text giữa cụm */}
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translate(-50%, 20px)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#333",
              pointerEvents: "none",
            }}
          >
            MUA NGAY – GIÁ CỰC HỜI
            <br />
            <span style={{ fontSize: "14px", fontWeight: 400 }}>
              FREESHIP TOÀN QUỐC
            </span>
          </div>
        </div>

        {/* ===== 2 banner lớn */}
        <div
          style={{
            position: "relative",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {/* Banner 1 */}
            <div
              style={{
                height: "220px",
                top: "2000%",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #1677ff, #69b1ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              <div>
                NÂNG CẤP GÓC CHIẾN GAME
                <br />
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  Chuột & Bàn phím Gaming chính hãng
                </span>
              </div>
            </div>

            {/* Banner 2 */}
            <div
              style={{
                height: "220px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #ff4d4f, #ff9c6e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              <div>
                SALE LÊN ĐẾN 40%
                <br />
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  Freeship toàn quốc
                </span>
              </div>
            </div>
          </div>
          {/* ===== Chuột bán chạy ===== */}
          <div
            style={{
              marginTop: "40px",
              background: "#f3f3f3",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h2 style={{ margin: 0 }}>Chuột bán chạy</h2>
                <span style={{ color: "#999" }}>|</span>
                <span style={{ fontWeight: 500 }}>🚚 Giao hàng toàn quốc</span>
              </div>

              <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
                <span>Logitech</span>
                <span>Razer</span>
                <span>Asus</span>
                <span>Corsair</span>
                <span>Dare-U</span>
                <span>Rapoo</span>
                <span style={{ color: "#1677ff", cursor: "pointer" }}>
                  Xem tất cả
                </span>
              </div>
            </div>

            {/* Product Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "16px",
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "15px",
                    border: "1px solid #eee",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      height: "160px",
                      background: "#fafafa",
                      marginBottom: "10px",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Title */}
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      marginBottom: "8px",
                      minHeight: "40px",
                    }}
                  >
                    Chuột Gaming Mẫu {item}
                  </div>

                  {/* Specs */}
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#777",
                      background: "#f5f5f5",
                      padding: "6px",
                      borderRadius: "6px",
                      marginBottom: "8px",
                    }}
                  >
                    Pin sạc · Không dây 2.4GHz · RGB
                  </div>

                  {/* Price */}
                  <div style={{ fontSize: "13px", color: "#999" }}>
                    <s>1.590.000đ</s>
                  </div>

                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "red",
                    }}
                  >
                    1.090.000đ
                  </div>

                  {/* Rating */}
                  <div style={{ fontSize: "13px", color: "#f59e0b" }}>
                    ★ 5.0 <span style={{ color: "#777" }}>(15 đánh giá)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ===== BÀN PHÍM BÁN CHẠY ===== */}
          <div
            style={{
              marginTop: "40px",
              background: "#f3f3f3",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h2 style={{ margin: 0 }}>Bàn phím bán chạy</h2>
                <span style={{ color: "#999" }}>|</span>
                <span style={{ fontWeight: 500 }}>🚚 Giao hàng toàn quốc</span>
              </div>

              <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
                <span>Akko</span>
                <span>Asus</span>
                <span>Razer</span>
                <span>Logitech</span>
                <span>Leopold</span>
                <span>DareU</span>
                <span style={{ color: "#1677ff", cursor: "pointer" }}>
                  Xem tất cả
                </span>
              </div>
            </div>

            {/* Product Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "16px",
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "15px",
                    border: "1px solid #eee",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      height: "160px",
                      background: "#fafafa",
                      marginBottom: "10px",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Title */}
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      marginBottom: "8px",
                      minHeight: "40px",
                    }}
                  >
                    Bàn phím cơ Gaming Mẫu {item}
                  </div>

                  {/* Specs */}
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#777",
                      background: "#f5f5f5",
                      padding: "6px",
                      borderRadius: "6px",
                      marginBottom: "8px",
                    }}
                  >
                    Switch Red · LED RGB · Fullsize
                  </div>

                  {/* Price */}
                  <div style={{ fontSize: "13px", color: "#999" }}>
                    <s>2.990.000đ</s>
                  </div>

                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "red",
                    }}
                  >
                    1.990.000đ
                  </div>

                  {/* Rating */}
                  <div style={{ fontSize: "13px", color: "#f59e0b" }}>
                    ★ 5.0 <span style={{ color: "#777" }}>(20 đánh giá)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== MÁY TÍNH BÁN CHẠY ===== */}
          <div
            style={{
              marginTop: "40px",
              background: "#f3f3f3",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h2 style={{ margin: 0 }}>Máy tính bán chạy</h2>
                <span style={{ color: "#999" }}>|</span>
                <span style={{ fontWeight: 500 }}>🚚 Giao hàng toàn quốc</span>
              </div>

              <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
                <span>Dell</span>
                <span>Asus</span>
                <span>Acer</span>
                <span>HP</span>
                <span>MSI</span>
                <span>Lenovo</span>
                <span style={{ color: "#1677ff", cursor: "pointer" }}>
                  Xem tất cả
                </span>
              </div>
            </div>

            {/* Product Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "16px",
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "15px",
                    border: "1px solid #eee",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-4px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  {/* Image */}
                  <div
                    style={{
                      height: "160px",
                      background: "#fafafa",
                      marginBottom: "10px",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Title */}
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      marginBottom: "8px",
                      minHeight: "40px",
                    }}
                  >
                    PC Gaming Mẫu {item}
                  </div>

                  {/* Specs */}
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#777",
                      background: "#f5f5f5",
                      padding: "6px",
                      borderRadius: "6px",
                      marginBottom: "8px",
                    }}
                  >
                    Intel i5 · RTX 4060 · 16GB RAM · SSD 512GB
                  </div>

                  {/* Price */}
                  <div style={{ fontSize: "13px", color: "#999" }}>
                    <s>22.990.000đ</s>
                  </div>

                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "red",
                    }}
                  >
                    19.990.000đ
                  </div>

                  {/* Rating */}
                  <div style={{ fontSize: "13px", color: "#f59e0b" }}>
                    ★ 5.0 <span style={{ color: "#777" }}>(10 đánh giá)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== CHUYÊN TRANG KHUYẾN MÃI ===== */}
          <div
            style={{
              marginTop: "40px",
              background: "#f3f3f3",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ margin: 0 }}>Chuyên trang khuyến mãi</h2>

              <span
                style={{
                  color: "#1677ff",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Xem tất cả
              </span>
            </div>

            {/* Banner grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  style={{
                    height: "160px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg,#69b1ff,#1677ff)",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
