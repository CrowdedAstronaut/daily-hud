import React from "react";
import classes from "./CoinSearchResults.module.css";
// import LineChart from "../../LineChart/LineChart";

// const labels = ["January", "February", "March", "April", "May", "June"];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
//   options: {},
// };

export default function CoinSearchResults({ coins }) {
  if (coins.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["coin-search-container"]}>
        <h2>Here is the coin search results container</h2>
      </div>
    );
  }
}
