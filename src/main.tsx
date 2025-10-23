import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={2000} />
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
