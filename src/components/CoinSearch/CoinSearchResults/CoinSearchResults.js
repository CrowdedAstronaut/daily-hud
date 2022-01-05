import React from "react";
import classes from "./CoinSearchResults.module.css";
import bitcoin from "../../../assets/icons/bitcoin-icon.svg";
import ethereum from "../../../assets/icons/ethereum-icon.svg";
import cardano from "../../../assets/icons/cardano-icon.svg";
import TrendingUp from "../../../assets/icons/coin-price-trending-up.svg";
import TrendingDown from "../../../assets/icons/coin-price-trending-down.svg";

export default function CoinSearchResults({ coins }) {
  if (coins.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["coin-results-container"]}>
        <div className={classes["bitcoin-container"]}>
          <div
            className={classes["bitcoin-icon-container"]}
          >
            <img src={bitcoin} alt="" />
            {coins[0].id.charAt(0).toUpperCase() +
              coins[0].id.slice(1)}{" "}
            <br />
            {coins[0].price_change_percentage_24h.toFixed(
              3
            )}{" "}
            %
          </div>

          <div className={classes["bitcoin-mobile-chart"]}>
            {coins[0].price_change_percentage_24h > 1 ? (
              <img src={TrendingUp} alt="" />
            ) : (
              <img src={TrendingDown} />
            )}
          </div>
          <div className={classes["bitcoin-price-info"]}>
            <div>$ {coins[0].current_price}</div>
            <div>1 BTC</div>
          </div>
        </div>

        <div className={classes["ethereum-container"]}>
          <div
            className={classes["ethereum-icon-container"]}
          >
            <img src={ethereum} alt="" />
            {coins[1].id.charAt(0).toUpperCase() +
              coins[1].id.slice(1)}{" "}
            <br />
            {coins[1].price_change_percentage_24h.toFixed(
              3
            )}{" "}
            %
          </div>

          <div className={classes["ethereum-mobile-chart"]}>
            {coins[1].price_change_percentage_24h > 1 ? (
              <img src={TrendingUp} alt="" />
            ) : (
              <img src={TrendingDown} alt="" />
            )}
          </div>
          <div className={classes["ethereum-price-info"]}>
            <div>${coins[1].current_price}</div>
            <div>1 ETH</div>
          </div>
        </div>

        <div className={classes["cardano-container"]}>
          <div
            className={classes["cardano-icon-container"]}
          >
            <img src={cardano} alt="" />
            {coins[2].id.charAt(0).toUpperCase() +
              coins[2].id.slice(1)}
            <br />
            {coins[2].price_change_percentage_24h.toFixed(
              3
            )}{" "}
            %
          </div>

          <div className={classes["cardano-mobile-chart"]}>
            {coins[2].price_change_percentage_24h > 1 ? (
              <img src={TrendingUp} alt="" />
            ) : (
              <img src={TrendingDown} />
            )}
          </div>
          <div className={classes["cardano-price-info"]}>
            <div>$ {coins[2].current_price}</div>
            <div>1 ADA</div>
          </div>
        </div>
      </div>
    );
  }
}
