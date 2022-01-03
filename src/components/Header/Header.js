import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${classes.header}`}>
      <h1 title="Welcome to daily HUD, a mobile dashboard app">
        Hello Friend 👋 <br />
        Welcome Back!
      </h1>
    </div>
  );
}
