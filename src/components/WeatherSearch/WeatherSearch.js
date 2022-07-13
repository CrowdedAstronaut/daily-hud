import React from "react";
import { useState, useEffect } from "react";
import WeatherSearchResults from "./WeatherSearchResults/WeatherSearchResults";
import classes from "./WeatherSearch.module.css";
import Search from "../../assets/icons/search-icon.svg";

export default function WeatherSearch() {
  const [weather, setWeather] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    geoWeather();
  }, []);

  async function geoWeather() {
    await fetch(
      "https://cli-auth.heroku.com/auth/cli/browser/2e447729-0b7c-45c0-8ef8-5475d08638eb?requestor=SFMyNTY.g2gDbQAAAA02OC4yMS4xNDkuMjAwbgYAQOqF-YEBYgABUYA.0Aitx-SBzltjpuoIKJ0_WjLBULXg5mB0Uq3Xg-RaOfQ/https://freegeoip.app/json/"
    )
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
          className={classes["search-form"]}
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
          <div>
            <input type="image" src={Search} alt="Submit" />
          </div>
        </form>
      </div>
      <div className={classes["weather-search-results"]}>
        <WeatherSearchResults weather={weather} />
      </div>
    </div>
  );
}
