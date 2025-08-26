import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./i18.js";
import {I18nProvider} from "i18n-automagic/react"
import "remixicon/fonts/remixicon.css";
createRoot(document.getElementById("root")).render(
  <I18nProvider>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
  </I18nProvider>
);
