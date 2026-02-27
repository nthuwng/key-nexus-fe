import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
 
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{
          background: "#bcc0c56d",}}>
      <div
        style={{
          background: "#E6F0FF",
          color: "#070707",
          fontSize: "15px",
          borderBottom: "1px solid #86bae5",
        }}
      >
        <div
          style={{
         
          
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
      <div style={{  maxWidth: "90%", margin: "0 auto" }}>
      
      
         

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              gap: "30px",
              textAlign: "center",
            }}
          >
            {[
             
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
       

        {/* Banner trên */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "16px",
            marginTop: "20px",
            marginBottom: "16px",
            width: "100%",
            maxWidth: "100%",
            margin: "20px auto",
          }}
        >   
      <div style={{ overflow: "hidden", borderRadius: "8px", }}>
       <Carousel
       autoplay
  autoplaySpeed={2000}
  pauseOnHover={false}
  infinite
  arrows
    >
      <div >
        <img
          src="src/assets/baner_Imges/1.jpg"
          alt="banner1"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover"
          }}
        />
      </div>
 <div>
        <img
          src="src/assets/baner_Imges/5.jpg"
          alt="banner5"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover"
          }}
        />
      </div>
      <div>
        <img
          src="src/assets/baner_Imges/6.jpg"
          alt="banner6"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover"
          }}
        />
      </div>
    </Carousel>
      </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
           <img
          src="src/assets/baner_Imges/2.jpg"
          alt="banner2"
          style={{
            width: "100%",
            height: "195px",
            objectFit: "cover"
          }}
        />
         <img
          src="src/assets/baner_Imges/10.jpg"
          alt="banner10"
          style={{
          
            width: "100%",
            height: "195px",
            objectFit: "cover"
          }}
        />
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
              marginTop: "20px",
              marginBottom: "16px",
              width: "100%",
              maxWidth: "100%",
              margin: "20px auto",
            }}
          >
           <div>
        <img
          src="src/assets/baner_Imges/7.png"
          alt="banner7"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
      </div>
      <div>
        <img
          src="src/assets/baner_Imges/9.png"
          alt="banner9"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
      </div>
            <div>
        <img
          src="src/assets/baner_Imges/8.png"
          alt="banner8"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
      </div>
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
            <span style={{ fontSize: "30px", fontWeight: "bold"}}>
            MUA NGAY – GIÁ CỰC HỜI
            </span>
            <br />
            <span style={{ fontSize: "20px", fontWeight: 400 }}>
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
              marginTop: "95px",
              marginBottom: "16px",
              width: "100%",
              maxWidth: "100%",
              margin: "20px auto",
            }}
          >
            {/* Banner 1 */}
            <div>
               <img
          src="src/assets/baner_Imges/12.jpg"
          alt="banner12"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
              
            </div>

            {/* Banner 2 */}
            <div>
              <img
          src="src/assets/baner_Imges/11.png"
          alt="banner11"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />
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