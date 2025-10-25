import React from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherState, setWeatherState] = React.useState({
    temperature: 25,
    conditions: "Sunny",
  });
  return <div>{/* Do not remove the main div */}
    <WeatherDisplay weatherState={weatherState} />
  </div>;
};

export default App;
