import React from "react";
import classes from "./WeatherSearchResults.module.css";
import Sunrise from "../../../assets/icons/sunrise-icon.svg";
import Sunset from "../../../assets/icons/sunset-icon.svg";
import Humidity from "../../../assets/icons/humidity-icon.svg";

export default function WeatherSearchResults({ weather }) {
  if (weather.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <>
        <div className={classes["weather-search-results"]}>
          {/* <h2>Results:</h2> */}
          <p>
            {weather.name}
            <br />
            <span> {weather.weather[0].description}</span>
          </p>

          {/* <p>Low: {weather.main.temp_min}° F</p>
          <p>High: {weather.main.temp_max}° F</p>
          <p>Humidity: {weather.main.humidity}%</p> */}
          <p>
            <img src={Sunrise} alt="Sunrise Icon" />{" "}
            {new Date(
              weather.sys.sunrise * 1000
            ).toLocaleTimeString("en-IN")}
          </p>
          <p>
            <img src={Sunset} alt="Sunset Icon" />{" "}
            {new Date(
              weather.sys.sunset * 1000
            ).toLocaleTimeString("en-IN")}
          </p>
        </div>
        <div className={classes["temperature"]}>
          {weather.main.temp}° F
        </div>
      </>
    );
  }
}
