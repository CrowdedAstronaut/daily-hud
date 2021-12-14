import React from "react";
import classes from "./FearAndGreedSearchResults.module.css";

export default function FearAndGreedSearchResults({
  fearAndGreed,
}) {
  if (fearAndGreed.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["fear-and-greed-container"]}>
        <h2> Fear and Greed Index </h2>
        <p> The FearAndGreed Search Results</p>
      </div>
    );
  }
}
