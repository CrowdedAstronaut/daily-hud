import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${classes.header}`}>
      <h1> Welcome to daily HUD</h1>
    </div>
  );
}
