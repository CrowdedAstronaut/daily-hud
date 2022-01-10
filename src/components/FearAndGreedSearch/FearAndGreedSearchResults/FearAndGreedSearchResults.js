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
          percent={fearAndGreed.data[0].value * 0.01}
          arcWidth={0.1}
          marginInPercent={0.05}
          animate={false}
          needleColor="grey"
          arcPadding={0.01}
          cornerRadius={1}
          needleBaseColor="grey"
          colors={[
            "#8B0000",
            "#AA4A44",
            "#E4D00A",
            "#AFE1AF",
            "#097969",
          ]}
          style={{
            // width: "20rem",
            fontFamily: '"Roboto", sans-serif',
          }}
        />
        <div
          className={
            classes["fear-and-greed-classification"]
          }
        >
          <p>
            {"FINCON: "}{" "}
            <span
              style={
                fearAndGreed.data[0]
                  .value_classification === "Extreme Fear"
                  ? { color: "#8B0000" }
                  : fearAndGreed.data[0]
                      .value_classification === "Fear"
                  ? { color: "#AA4A44" }
                  : fearAndGreed.data[0]
                      .value_classification === "Neutral"
                  ? { color: "#E4D00A" }
                  : fearAndGreed.data[0]
                      .value_classification === "Greed"
                  ? { color: "#AFE1AF" }
                  : { color: "#097969" }
              }
            >
              {fearAndGreed.data[0].value_classification}
            </span>
          </p>
        </div>
      </div>
    );
  }
}
