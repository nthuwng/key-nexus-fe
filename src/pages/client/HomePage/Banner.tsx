import { Carousel } from "antd"

const Banner =() =>
{
return(
   <div>
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
         <div
          style={{
            position: "relative",
            marginTop: "110px",
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
         </div>
   </div>
  
)
} 
export default Banner