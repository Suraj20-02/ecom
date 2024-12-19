import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ProductProvider from "./dashboard/products/productProvider.jsx";

createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
