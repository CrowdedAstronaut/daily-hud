import React from "react";
import classes from "./CoinSearchResults.module.css";

export default function CoinSearchResults({ coins }) {
  if (coins.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["coin-search-container"]}>
        <h2>Here is the coin search container</h2>
        <p>{coins.data[1027].symbol}</p>
      </div>
    );
  }
}
