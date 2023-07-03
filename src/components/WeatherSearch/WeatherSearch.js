import React from "react";
import { useState, useEffect } from "react";
import WeatherSearchResults from "./WeatherSearchResults/WeatherSearchResults";
import classes from "./WeatherSearch.module.css";
import Search from "../../assets/icons/search-icon.svg";

//Global Variables
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

//APIS

export default function WeatherSearch() {
  const [weather, setWeather] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setSearchString(`${latitude},${longitude}`);
            getWeather();
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getUserGeolocation();
  }, []);

  async function geoWeather() {
    await fetch("https://freegeoip.app/json/", { mode: "no-cors" })
      .then((res) => {
        const zipCode = res.headers.get("zip-code");
        setSearchString(zipCode);
        getWeather();
      })
      .catch((error) => {
        console.error("Error retrieving ZIP code:", error);
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
        <form onSubmit={handleSubmit} className={classes["search-form"]}>
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
