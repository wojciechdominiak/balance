import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import OutcomeContextProvider from "./store/outcome-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <OutcomeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OutcomeContextProvider>
  </React.StrictMode>
);
