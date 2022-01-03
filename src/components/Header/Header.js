import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${classes.header}`}>
      <span>Hello Friend 👋</span>
      <h1 title="Welcome to daily HUD, a mobile dashboard app">
        {" "}
        Welcome Back!
      </h1>
    </div>
  );
}
