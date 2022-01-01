import React from "react";
import classes from "./FearAndGreedSearchResults.module.css";
import GaugeChart from "react-gauge-chart";

export default function FearAndGreedSearchResults({ fearAndGreed }) {
  console.log(fearAndGreed);
  if (fearAndGreed.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["fear-and-greed-chart"]}>
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={5}
          percent={fearAndGreed.data[0].value * 0.01}
          arcWidth={0.1}
          animate={false}
          needleColor="grey"
          arcPadding={0.01}
          cornerRadius={1}
          needleBaseColor="grey"
          colors={["#FF0000", "#FF0000", "#FFFF00", "#00FF00", "#00FF00"]}
          style={{ width: "21.875rem" }}
        />
        <div className={classes["fear-and-greed-classification"]}>
          {"FINCON: "}
          {fearAndGreed.data[0].value_classification}
        </div>
      </div>
    );
  }
}
