import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes.header}>
        <div>Hello Friend 👋</div>
        <div>
          <h1 title="Welcome to daily HUD, a mobile dashboard app">
            {" "}
            Welcome Back!
          </h1>
        </div>
      </div>
    </div>
  );
}
