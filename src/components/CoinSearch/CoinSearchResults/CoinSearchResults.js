import React from "react";
import classes from "./CoinSearchResults.module.css";

export default function CoinSearchResults({ coin }) {
  if (coin.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["coin-search-container"]}>
        <h2>Here is the coin search container</h2>
        <p>{coin.data[1].symbol}</p>
      </div>
    );
  }
}
