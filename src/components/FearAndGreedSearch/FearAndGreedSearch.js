import React, { useState, useEffect } from "react";
import FearAndGreedSearchResults from "./FearAndGreedSearchResults/FearAndGreedSearchResults";
import classes from "./FearAndGreedSearch.module.css";

import GaugeChart from "react-gauge-chart";

console.log(
  "Hello from the fear and greed search component"
);
export default function FearAndGreedSearch() {
  // const [fearAndGreed, setFearAndGreed] = useEffect([]);
  // const [searchString, setSearchString] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fearAndGreedSearch = {
    api: "https://api.alternative.me/fng/?limit=10",
    format: "&date_format=us",
  };

  // function handleChange(event) {
  //   setSearchString(event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   getFearAndGreed(searchString);
  //   setSearchString("");
  // }

  // ${searchString},us${fearAndGreedSearch.units}${fearAndGreedSearch.apikey}

  useEffect(() => {
    const url = `${fearAndGreedSearch.api}`;
    const getFearAndGreed = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };
    getFearAndGreed();
  }, []);
  // "https://api.alternative.me/fng/?limit=10&date_format=us";
  // console.log(url);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     setFearAndGreed(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <div className={classes["fear-and-greed-container"]}>
      <div className={classes["fear-and-greed-header"]}>
        <h2>Fear & Greed</h2>
      </div>
      <div className={classes["fear-and-greed-chart"]}>
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={5}
          percent={0.5}
          arcWidth={0.15}
        />
      </div>

      {/* <div className={classes["fear-and-greed-form"]}>
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
      </div> */}
    </div>
  );
}
