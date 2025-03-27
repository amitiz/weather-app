Weather Application
Overview
This is a simple weather application that allows users to search for a city and view the current weather conditions along with an hourly forecast for the next 24 hours. The application fetches data from WeatherAPI and is built using React with Vite for fast development.

Features
Search Functionality: Users can search for any city to get weather details.
Current Weather Display: Shows temperature, weather description, and an appropriate weather icon.
Hourly Forecast: Displays hourly weather updates for the next 24 hours.
Default City: The app loads with the weather details of Sydney by default.
Error Handling: Displays a message when no results are found.
Technologies Used
React (with Hooks for state and effects)
Vite (for fast builds and development)
WeatherAPI (for fetching weather data)
CSS (for styling the UI)
Installation
Clone the repository:
git clone https://github.com/amitiz/weather-app.git
Navigate to the project folder:
cd weather-app
Install dependencies:
npm install
Create a .env file in the root directory and add your WeatherAPI key:
VITE_API_KEY=your_api_key_here
Start the development server:
npm run dev
Open the application in your browser at:
http://localhost:5173
