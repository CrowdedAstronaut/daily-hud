import React, { useState, useEffect } from "react";
import CoinSearchResults from "./CoinSearchResults/CoinSearchResults";
import classes from "./CoinSearch.module.css";

console.log("Hello from the Coin search component");
export default function CoinSearch() {
  const [coin, setCoin] = useState([]);
  const [searchString, setSearchString] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const coinSearch = {
    api: "https://api.alternative.me/v2/ticker/?limit=",
    format: "&date_format=us",
  };

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCoin(searchString);
    setSearchString("");
  }

  // ${searchString},us${CoinSearch.units}${CoinSearch.apikey}

  async function getCoin() {
    const url = `${coinSearch.api}${searchString}`;

    // "https://api.alternative.me/fng/?limit=10&date_format=us";
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCoin(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={classes["coin-container"]}>
      <div className={classes["coin-header"]}>
        <h2>Daily coin</h2>
      </div>

      <div className={classes["coin-form"]}>
        <form
          onSubmit={handleSubmit}
          className="search-form"
        >
          <input
            placeholder="Search"
            type="text"
            name="searchString"
            required
            onChange={handleChange}
            value={searchString}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <CoinSearchResults coin={coin} />
    </div>
  );
}
