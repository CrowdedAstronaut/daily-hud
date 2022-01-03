import React, { useState, useEffect } from "react";
import FearAndGreedSearchResults from "./FearAndGreedSearchResults/FearAndGreedSearchResults";
import classes from "./FearAndGreedSearch.module.css";

console.log(
  "Hello from the fear and greed search component"
);
export default function FearAndGreedSearch() {
  const [fearAndGreed, setFearAndGreed] = useState([]);
  // const [searchString, setSearchString] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getFearAndGreed();
  }, []);

  const fearAndGreedSearch = {
    api: "https://api.alternative.me/fng/?limit=2",
    format: "&date_format=us",
  };

  async function getFearAndGreed() {
    const url = `${fearAndGreedSearch.api}`;

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
      <div className={classes["fear-and-greed-results"]}>
        <FearAndGreedSearchResults
          fearAndGreed={fearAndGreed}
        />
      </div>
    </div>
  );
}
