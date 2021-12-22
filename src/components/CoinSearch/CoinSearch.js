import React, { useState, useEffect } from "react";
import CoinSearchResults from "./CoinSearchResults/CoinSearchResults";
import classes from "./CoinSearch.module.css";
import LineChart from "react-linechart";
import "../../../node_modules/react-linechart/dist/styles.css";

console.log("Hello from the Coin search component");
export default function CoinSearch() {
  const [coins, setCoins] = useState([]);
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
      setCoins(data);
    } catch (err) {
      console.error(err);
    }
  }

  const data = [
    {
      color: "red",
      points: [
        { x: 1, y: 7 },
        { x: 2, y: -3 },
        { x: 3, y: 5 },
        { x: 4, y: -2 },
        { x: 5, y: 6 },
        { x: 6, y: -3 },
      ],
    },
  ];

  return (
    <div className={classes["coin-search-container"]}>
      <div className={classes["coin-header"]}>
        <h2>Crypto Dashboard</h2>
      </div>

      <div className={classes["coin-form"]}>
        <form onSubmit={handleSubmit} className="search-form">
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
      {/* <div className={classes["coins-chart"]}>
        <LineChart width={335} height={67} data={data} />
      </div> */}
      {/* <CoinSearchResults coins={coins} /> */}
      <div className="coins_container">
        <div className="coin_container bitcoin">Bitcoin</div>
        <div className="coin_container ethereum">Ethereum</div>
        <div className="coin_container cardano">Cardano</div>
      </div>
    </div>
  );
}
