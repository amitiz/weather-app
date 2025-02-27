import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* This is a search section */}
      <div className="search-section">
        <form action="" className="search-form">
          <span class="material-symbols-rounded">search</span>
          <input
            type="search"
            placeholder="Enter a city name"
            required
            className="search-input"
          />
        </form>
        {/* put a button here */}
        <button className="location-button">
          <span class="material-symbols-rounded">my_location</span>
        </button>
      </div>
      {/* Weather section */}
      <div className="weather-section">
        {/* current weather section */}
        <div className="current-weather">
          <img src="icons/clouds.svg" className="weather-icon" />
          <h2 className="temperature">
            20 <span>°c</span>
          </h2>
          <p className="description">Partly Cloudy</p>
        </div>
        {/* hourly forecast */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°c</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°c</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°c</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°c</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°c</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" className="weather-icon" />
              <p className="temperature">20°c</p>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
