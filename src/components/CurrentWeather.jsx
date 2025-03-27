const CurrentWeather = ({ currentWeather }) => {
  // Use Math.floor to ensure temperature is an integer
  const temperature = Math.floor(currentWeather.temperature);

  return (
    <div className="current-weather">
      <img
        src={`icons/${currentWeather.weatherIcon}.svg`}
        className="weather-icon"
      />
      <h2 className="temperature">
        {temperature} <span>°C</span> {/* Display fixed temperature in °C */}
      </h2>
      <p className="description">{currentWeather.description}</p> {/* Weather description */}
    </div>
  );
};

export default CurrentWeather;
