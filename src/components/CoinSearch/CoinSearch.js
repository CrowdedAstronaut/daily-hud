import React, { useState, useEffect } from "react";
import CoinSearchResults from "./CoinSearchResults/CoinSearchResults";
import classes from "./CoinSearch.module.css";

console.log("Hello from the Coin search component");
export default function CoinSearch() {
  const [coins, setCoins] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getCoins();
  }, []);

  const coinSearch = {
    api: "https://api.coingecko.com/api/v3/coins/markets",
    format: "?vs_currency=usd",
    ids: "&ids=bitcoin,ethereum,cardano",
  };

  async function getCoins() {
    const url = `${coinSearch.api}${coinSearch.format}${coinSearch.ids}`;

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

  return (
    <div className={classes["coin-search-container"]}>
      <div className={classes["coin-header"]}>
        <h2>Crypto Dashboard</h2>
      </div>
      <div className={classes["coins-container"]}>
        <CoinSearchResults coins={coins} />
      </div>
    </div>
  );
}
