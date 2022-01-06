import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/fonts/Gilroy-Bold.woff";
import "./assets/fonts/Gilroy-Medium.woff";
import "./assets/fonts/Gilroy-MediumItalic.woff";
import "./assets/fonts/Gilroy-Regular.woff";
import "./assets/fonts/Gilroy-SemiBold.woff";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
