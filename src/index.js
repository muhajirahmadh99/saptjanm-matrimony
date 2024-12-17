import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { LoadingProvider } from "./layouts/LoadingContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/saptjanm-matrimony">
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
