import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
import CoinSearch from "./components/CoinSearch/CoinSearch";
import FearAndGreedSearch from "./components/FearAndGreedSearch/FearAndGreedSearch";

function App() {
  return (
    <>
      <Header />
      <WeatherSearch />
      <CoinSearch />
      <FearAndGreedSearch />
    </>
  );
}

export default App;
