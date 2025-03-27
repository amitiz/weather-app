# Weather Application

## Overview

This is a simple weather application built with React and Vite, which fetches and displays weather data, including current weather conditions and a 24-hour forecast, for a specified city. The app uses WeatherAPI to retrieve weather details and displays them in a user-friendly format.


## Features

   **Displays current weather (temperature, description, and weather icon).
	**Shows hourly forecast for the next 24 hours.
	**Allows users to search for weather data by city.
	**Handles errors gracefully with a "No Results" message if the city is not found.

## Technologies Used

- **React** (with Hooks for state and effects)
- **Vite** (for fast builds and development)
- **WeatherAPI** (for fetching weather data)
- **CSS** (for styling the UI)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/amitiz/weather-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd weather-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your WeatherAPI key:
   ```sh
   VITE_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open the application in your browser at:
   ```
   http://localhost:5173
   ```



## Components
•	SearchSection: Input field for searching cities.
•	CurrentWeather: Displays the current weather details.
•	HourlyWeatherItem: Displays each hourly weather item.
•	NoResultsDiv: Displays a message when no weather data is found.


## How to use.

1. Open the app in your browser.
2. Enter a city name in the search bar and press enter.
3. View the current weather and hourly forecast.

## Future Enhancements

- **7-Day Weather Forecast**
- **User Location-Based Weather Fetching**
- **Dark Mode**
- **Additional Weather Details (Wind Speed, Humidity, etc.)**

## Acknowledgments

- [WeatherAPI](https://www.weatherapi.com/) for providing free weather data.
- React and Vite for making development smooth and efficient.

---

