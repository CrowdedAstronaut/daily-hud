import React from "react";
import classes from "./WeatherSearchResults.module.css";

export default function WeatherSearchResults({ weather }) {
  if (weather.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <>
        <div className={classes["weather-container"]}>
          <h2>Results:</h2>
          <p>
            {weather.name}
            <br />
            <span> {weather.weather[0].description}</span>
          </p>
          <p>{weather.main.temp}° F</p>
          <p>Low: {weather.main.temp_min}° F</p>
          <p>High: {weather.main.temp_max}° F</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <h2>
            Sunrise:{" "}
            {new Date(
              weather.sys.sunrise * 1000
            ).toLocaleTimeString("en-IN")}
          </h2>
          <h2>
            Sunset:{" "}
            {new Date(
              weather.sys.sunset * 1000
            ).toLocaleTimeString("en-IN")}
          </h2>
        </div>
      </>
    );
  }
}
