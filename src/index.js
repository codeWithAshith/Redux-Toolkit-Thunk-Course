import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// npm install -g json-server
// npm install -D tailwindcss
// npx tailwindcss init

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
