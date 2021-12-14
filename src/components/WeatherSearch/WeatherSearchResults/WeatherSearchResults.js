import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherSearchResults({ weather }) {
  if (weather.length === 0) {
    return <h1>No Results</h1>;
  } else {
    return (
      <>
        <div className="search-results">
          <h2>Results:</h2>
          <h2>{weather.name}</h2>
          <h3>{weather.weather[0].description}</h3>
          <h2>{weather.main.temp}° F</h2>
          <h3>Low: {weather.main.temp_min}° F</h3>
          <h3>High: {weather.main.temp_max}° F</h3>
          <h3>Humidity: {weather.main.humidity}%</h3>
          <h3>
            Sunrise:{" "}
            {new Date(
              weather.sys.sunrise * 1000
            ).toLocaleTimeString("en-IN")}
          </h3>
          <h3>
            Sunset:{" "}
            {new Date(
              weather.sys.sunset * 1000
            ).toLocaleTimeString("en-IN")}
          </h3>
        </div>
      </>
    );
  }
}
