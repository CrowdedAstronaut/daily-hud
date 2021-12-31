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
            Bitcoin <br />
            -1.43%
          </div>

          <div className={classes["bitcoin-mobile-chart"]}>
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

          <div className={classes["ethereum-mobile-chart"]}>
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

          <div className={classes["cardano-mobile-chart"]}>
            <div>
              <img src={TrendingUp} alt="" />
            </div>
          </div>
          <div className={classes["cardano-price-info"]}>
            <div>$4022.80</div>
            <div>1 ETH</div>
          </div>
        </div>
      </div>
    );
  }
}
