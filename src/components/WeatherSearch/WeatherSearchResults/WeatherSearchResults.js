import React from "react";
import classes from "./WeatherSearchResults.module.css";
import sunrise from "../../../assets/icons/sunrise-icon.svg";
import sunset from "../../../assets/icons/sunset-icon.svg";
import humidity from "../../../assets/icons/humidity-icon.svg";
import clouds from "../../../assets/icons/cloud-icon.svg";
import arrow from "../../../assets/icons/up-arrow-icon.svg";

export default function WeatherSearchResults({ weather }) {
  if (weather.length === 0) {
    return <h2>No Results</h2>;
  } else {
    return (
      <>
        <div className={classes["weather-search-results"]}>
          <p>
            {weather.name}
            <br />
            <span>
              {" "}
              <img src={clouds} alt="" />
              {weather.weather[0].description} <img src={humidity} alt="" />
              {weather.main.humidity} %
            </span>
          </p>

          {/* <p>Low: {weather.main.temp_min}° F</p>
          
          <p>humidity: {weather.main.humidity}%</p> */}
          <p>
            <img src={sunrise} alt="sunrise Icon" />{" "}
            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
          </p>
          <p>
            <img src={sunset} alt="sunset Icon" />{" "}
            {new Date(weather.sys.sunset * 1000).toLocaleTimeString("en-IN")}
          </p>
        </div>
        <div className={classes["temperature-container"]}>
          <h2> {weather.main.temp}° F</h2>
          <p>
            <img
              src={arrow}
              alt="low temperature"
              style={{ transform: `rotate(${180}deg)` }}
            />{" "}
            {weather.main.temp_min}° F
          </p>
          <p>
            <img src={arrow} alt="high temperature" />
            {weather.main.temp_max}° F
          </p>
        </div>
      </>
    );
  }
}
