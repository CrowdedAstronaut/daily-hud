import React, { useState, useEffect } from "react";
import FearAndGreedSearchResults from "./FearAndGreedSearchResults/FearAndGreedSearchResults";
import classes from "./FearAndGreedSearch.module.css";

export default function FearAndGreedSearch() {
  const [fearAndGreed, setFearAndGreed] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fearAndGreedSearch = {
    api: "https://api.alternative.me/fng/",
    units: "&units=imperial",
  };

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getFearAndGreed(searchString);
    setSearchString("");
  }

  async function getFearAndGreed() {
    const url = `${fearAndGreedSearch}${searchString},us${fearAndGreedSearch.units}${fearAndGreedSearch.apikey}`;

    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setFearAndGreed(result);
      })
      .catch(console.error);
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
