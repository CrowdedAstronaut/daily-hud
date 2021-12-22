import "./App.css";
import Header from "./components/Header/Header";
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
import CoinSearch from "./components/CoinSearch/CoinSearch";
import FearAndGreedSearch from "./components/FearAndGreedSearch/FearAndGreedSearch";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <WeatherSearch />
      <CoinSearch />
      <FearAndGreedSearch /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <WeatherSearch />

              <CoinSearch />
              <FearAndGreedSearch />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
