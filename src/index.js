import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import axios from "axios";
axios.defaults.baseURL = "https://decajob-server.herokuapp.com/api/";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
