import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardMain from "./authenticated/dashboard.tsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
