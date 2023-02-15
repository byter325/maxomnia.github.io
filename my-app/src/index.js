import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const data = { x: "One", y: "Two" };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
