import ReactDOM from "react-dom/client";
import React from "react";

import { TokenProvider } from "./utils/context/token-context";
import App from "./routes/Index";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);
