import React, { useState, useEffect } from "react";
import CoinSearchResults from "./CoinSearchResults/CoinSearchResults";
import classes from "./CoinSearch.module.css";
import LineChart from "react-linechart";
import "../../../node_modules/react-linechart/dist/styles.css";
import Bitcoin from "../../assets/icons/bitcoin-icon.svg";
import Ethereum from "../../assets/icons/ethereum-icon.svg";
import Cardano from "../../assets/icons/cardano_icon.svg";
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
      <div className={classes["coins_container"]}>
        <div className={classes["coin_container"]}>
          <span>
            <img src={Bitcoin} alt="" />
            Bitcoin <br />
            -1.43%
          </span>
          <div className="coin_mobile_chart">
            <span>
              <img src={TrendingUp} alt="" />
            </span>
          </div>
          <div className="coin_price_info">
            <span>46022.80</span>
            <span>1 BTC</span>
          </div>
        </div>
        <div className={classes["coin_container"]}>
          <span>
            <img src={Ethereum} alt="" />
            Ethereum <br />
            -1.43%
          </span>
          <div className="coin_mobile_chart">
            <span>
              <img src={TrendingDown} alt="" />
            </span>
          </div>
          <div className="coin_price_info">
            <span>4022.80</span>
            <span>1 ETH</span>
          </div>
        </div>
        <div className={classes["coin_container"]}>
          <span>
            <img src={Cardano} alt="" />
            Cardano <br />
            -1.43%
          </span>
          <div className="coin_mobile_chart">
            <span>
              <img src={TrendingUp} alt="" />
            </span>
          </div>
          <div className="coin_price_info">
            <span>1.02</span>
            <span>1 ADA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
