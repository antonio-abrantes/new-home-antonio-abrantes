import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global/index.css";
import { ResponsiveProvider } from "./context/ResponsiveProvider.jsx";
import { HomeDataProvider } from "./context/HomeDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResponsiveProvider mobileBreakpoint={991}>
      <HomeDataProvider>
        <App />
      </HomeDataProvider>
    </ResponsiveProvider>
  </React.StrictMode>
);
