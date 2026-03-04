const Promotion = () => {
    return(
        <div>
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
    )
}
export default Promotion;