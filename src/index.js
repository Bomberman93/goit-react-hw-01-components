import React from "react";
import ReactDom from "react-dom";
import App from "../src/App";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
