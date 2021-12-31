import React from "react";
import classes from "./FearAndGreedSearchResults.module.css";
import GaugeChart from "react-gauge-chart";

export default function FearAndGreedSearchResults({
  fearAndGreed,
}) {
  console.log(fearAndGreed);
  if (fearAndGreed.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["fear-and-greed-chart"]}>
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={5}
          percent={fearAndGreed.data[0].value}
          arcWidth={0.1}
          animate={false}
          needleColor="black"
          arcPadding={0.01}
          cornerRadius={1}
          needleBaseColor="black"
          colors={[
            "#FF0000",
            "#FF0000",
            "#FFFF00",
            "#00FF00",
            "#00FF00",
          ]}
        />
        <div>
          <p> {fearAndGreed.data[0].value}</p>
          <p>
            {" "}
            {fearAndGreed.data[0].value_classification}
          </p>
        </div>
      </div>
    );
  }
}
