import { useEffect, useState } from "react";

import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItems from "./components/HourlyWeatherItems";
import { weatherCodes } from "./constants";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

      //from this data get the temperature and description
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find( (icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );
      console.log(weatherIcon, "weatherIcon");
      
      setCurrentWeather({ temperature, description, weatherIcon });

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      {/* This is a search section */}
      <SearchSection getWeatherDetails={getWeatherDetails} />
      {/* Weather section */}
      <div className="weather-section">
        {/* current weather section */}
        <CurrentWeather currentWeather={currentWeather} />
        {/* hourly forecast */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeatherItems />
            <HourlyWeatherItems />
            <HourlyWeatherItems />
            <HourlyWeatherItems />
            <HourlyWeatherItems />
            <HourlyWeatherItems />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
