import React from "react";
import classes from "./CoinSearchResults.module.css";
import Chart from "chart.js/auto";

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(
  document.getElementById("myChart"),
  config
);

export default function CoinSearchResults({ coins }) {
  if (coins.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["coin-search-container"]}>
        <h2>Here is the coin search container</h2>
        <canvas id="myChart" width="200" height="200">
          <myChart />
        </canvas>
        <p>{coins.data[1027].symbol}</p>
      </div>
    );
  }
}
