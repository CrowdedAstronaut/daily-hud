import React from "react";
import classes from "./FearAndGreedSearchResults.module.css";

export default function FearAndGreedSearchResults({
  fearAndGreed,
}) {
  console.log(fearAndGreed);
  if (fearAndGreed.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <div className={classes["fear-and-greed-results"]}>
        <p> Today's Value: {fearAndGreed.data[0].value}</p>
        {/* <h2> Fear and Greed Index </h2>
    
        <p style={{ color: "lime" }}>
          Today's Classification:{" "}
          {fearAndGreed.data[0].value_classification}
        </p>
        <p>
          {" "}
          Yesterday's Value: {fearAndGreed.data[1].value}
        </p>
        <p style={{ color: "lime" }}>
          Yesterday's Classification:{" "}
          {fearAndGreed.data[1].value_classification}
        </p> */}
        {/* <p style={{ color: "blue" }}>
          Before Yesterday's Classification:{" "}
          {fearAndGreed.data[2].value_classification}
        </p> */}
      </div>
    );
  }
}
