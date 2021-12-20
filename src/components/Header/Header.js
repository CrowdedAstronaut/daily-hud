import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${classes.header}`}>
      <span>Hello Ross 👋</span>
      <h1> Welcome Back!</h1>
    </div>
  );
}
