import React, { useState, useEffect } from "react";
import CoinSearchResults from "./CoinSearchResults/CoinSearchResults";
import classes from "./CoinSearch.module.css";
import LineChart from "react-linechart";
import "../../../node_modules/react-linechart/dist/styles.css";
import bitcoin from "../../assets/icons/bitcoin-icon.svg";
import ethereum from "../../assets/icons/ethereum-icon.svg";
import cardano from "../../assets/icons/cardano-icon.svg";
import TrendingUp from "../../assets/icons/coin-price-trending-up.svg";
import TrendingDown from "../../assets/icons/coin-price-trending-down.svg";

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

  return (
    <>
      <div className={classes["coin-search-container"]}>
        <div className={classes["coin-header"]}>
          <h2>Crypto Dashboard</h2>
        </div>

        <div className={classes["coins-container"]}>
          <div className={classes["bitcoin-container"]}>
            <div
              className={classes["bitcoin-icon-container"]}
            >
              <img src={bitcoin} alt="" />
              Bitcoin <br />
              -1.43%
            </div>

            <div
              className={classes["bitcoin-mobile-chart"]}
            >
              <div>
                <img src={TrendingUp} alt="" />
              </div>
            </div>
            <div className={classes["bitcoin-price-info"]}>
              <div>$46022.80</div>
              <div>1 BTC</div>
            </div>
          </div>

          <div className={classes["ethereum-container"]}>
            <div
              className={classes["ethereum-icon-container"]}
            >
              <img src={ethereum} alt="" />
              Ethereum <br />
              -1.43%
            </div>

            <div
              className={classes["ethereum-mobile-chart"]}
            >
              <div>
                <img src={TrendingDown} alt="" />
              </div>
            </div>
            <div className={classes["ethereum-price-info"]}>
              <div>$4022.80</div>
              <div>1 ETH</div>
            </div>
          </div>

          <div className={classes["cardano-container"]}>
            <div
              className={classes["cardano-icon-container"]}
            >
              <img src={cardano} alt="" />
              Cardano <br />
              -1.43%
            </div>

            <div
              className={classes["cardano-mobile-chart"]}
            >
              <div>
                <img src={TrendingUp} alt="" />
              </div>
            </div>
            <div className={classes["cardano-price-info"]}>
              <div>$1.02</div>
              <div>1 ADA</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
