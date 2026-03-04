import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Mouse from "./Mosue";
import Keyboard from "./KeyBoard";
import Promotion from "./Promotion";
 
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
          <div><Banner/></div>
         
        <div
          style={{
            position: "relative",
            marginTop: "50px",
          }}
        >
           {/* ===== CHUỘT BÁN CHẠY ===== */}
        <Mouse/>
          {/* ===== BÀN PHÍM BÁN CHẠY ===== */}
        <Keyboard/>
          {/* ===== CHUYÊN TRANG KHUYẾN MÃI ===== */}
        <Promotion/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;