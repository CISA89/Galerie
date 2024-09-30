// src/index.tsx
// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client"; // Korrekte Import-Anweisung für React 18+
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
