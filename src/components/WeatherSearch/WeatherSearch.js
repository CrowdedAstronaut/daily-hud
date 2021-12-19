import React from "react";
import { useState, useEffect } from "react";
import WeatherSearchResults from "./WeatherSearchResults/WeatherSearchResults";
import classes from "./WeatherSearch.module.css";

//Global Variables
const BASE_URL = "";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
console.log(API_KEY);

//API

export default function WeatherSearch() {
  const [weather, setWeather] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    geoWeather();
  }, []);

  async function geoWeather() {
    await fetch("https://freegeoip.app/json/")
      .then((res) => res.json())
      .then((result) => {
        setSearchString(result.zip_code);
        getWeather();
      });
  }

  const weatherSearch = {
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    api: "https://api.openweathermap.org/data/2.5/weather?q=",
    apikey: "&appid=",
    units: "&units=imperial",
  };

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeather(searchString);
    setSearchString("");
  }

  async function getWeather() {
    const url = `${weatherSearch.api}${searchString},us${weatherSearch.units}${weatherSearch.apikey}${weatherSearch.key}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={classes["weather-container"]}>
      <div className={classes["weather-header"]}>
        <h2>Daily Weather</h2>
      </div>

      <div className={classes["weather-form"]}>
        <form
          onSubmit={handleSubmit}
          className="search-form"
        >
          <label htmlFor="">
            <input
              placeholder="Search"
              type="text"
              name="searchString"
              required
              onChange={handleChange}
              value={searchString}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>

      <WeatherSearchResults weather={weather} />
    </div>
  );
}
