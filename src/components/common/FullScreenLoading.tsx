import Lottie from "lottie-react";
import loadingAnimation from "@/assets/lotties/loading.json";

const FullScreenLoading = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ width: 800 }}>
        <Lottie animationData={loadingAnimation} loop />
      </div>
    </div>
  );
};

export default FullScreenLoading;