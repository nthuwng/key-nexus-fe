import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "@/components/context/app.context";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import { App as AntApp } from "antd";
import { CartProvider } from "./components/context/cart.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <ConfigProvider locale={enUS}>
          <AntApp>
            <CartProvider>
              <App />
            </CartProvider>
          </AntApp>
        </ConfigProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
);
