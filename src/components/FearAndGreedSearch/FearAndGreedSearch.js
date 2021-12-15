import React, { useState, useEffect } from "react";
import FearAndGreedSearchResults from "./FearAndGreedSearchResults/FearAndGreedSearchResults";
import classes from "./FearAndGreedSearch.module.css";

console.log(
  "Hello from the fear and greed search component"
);
export default function FearAndGreedSearch() {
  const [fearAndGreed, setFearAndGreed] = useState([]);
  const [searchString, setSearchString] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fearAndGreedSearchAPI =
  //   "https://api.alternative.me/fng/?limit=2";
  // units: "&units=imperial",

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getFearAndGreed(searchString);
    setSearchString("");
  }

  // ${searchString},us${fearAndGreedSearch.units}${fearAndGreedSearch.apikey}

  async function getFearAndGreed() {
    const url = "https://api.alternative.me/fng/?limit=2";
    // "https://api.alternative.me/fng/?limit=10&date_format=us";
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setFearAndGreed(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={classes["fear-and-greed-container"]}>
      <div className={classes["fear-and-greed-header"]}>
        <h2>Daily fear-and-greed</h2>
      </div>

      <div className={classes["fear-and-greed-form"]}>
        <form
          onSubmit={handleSubmit}
          className="search-form"
        >
          <input
            placeholder="Search"
            type="text"
            name="searchString"
            required
            onChange={handleChange}
            value={searchString}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <FearAndGreedSearchResults
        fearAndGreed={fearAndGreed}
      />
    </div>
  );
}
