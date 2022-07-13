import TrendingDown from "../../../assets/icons/coin-price-trending-down.svg";
import TrendingUp from "../../../assets/icons/coin-price-trending-up.svg";
import bitcoin from "../../../assets/icons/bitcoin-icon.svg";

export default function Coin({ coins }) {
  return (
    <div className={"bitcoin-container"}>
      <div className={"bitcoin-icon-container"}>
        <img src={bitcoin} alt="" />
        {coins[0].id.charAt(0).toUpperCase() +
          coins[0].id.slice(1)}{" "}
        <br />
        {coins[0].price_change_percentage_24h.toFixed(3)} %
      </div>

      <div className={"bitcoin-mobile-chart"}>
        {coins[0].price_change_percentage_24h > 1 ? (
          <img src={TrendingUp} alt="" />
        ) : (
          <img src={TrendingDown} alt="" />
        )}
      </div>
      <div className={"bitcoin-price-info"}>
        <div>$ {coins[0].current_price}</div>
        <div>1 BTC</div>
      </div>
    </div>
  );
}
