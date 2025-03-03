const HourlyWeatherItems = () => {
  return (
    <li className="weather-item">
      <p className="time">00:00</p>
      <img src="icons/clouds.svg" className="weather-icon" />
      <p className="temperature">20°c</p>
    </li>
  );
};

export default HourlyWeatherItems;
