##Weather App
This is a simple weather application built with React and Vite, which fetches and displays weather data, including current weather conditions and a 24-hour forecast, for a specified city. The app uses WeatherAPI to retrieve weather details and displays them in a user-friendly format.
##Features:
•	Displays current weather (temperature, description, and weather icon).
•	Shows hourly forecast for the next 24 hours.
•	Allows users to search for weather data by city.
•	Handles errors gracefully with a "No Results" message if the city is not found.
##Components:
•	SearchSection: Input field for searching cities.
•	CurrentWeather: Displays the current weather details.
•	HourlyWeatherItem: Displays each hourly weather item.
•	NoResultsDiv: Displays a message when no weather data is found.
##Setup Instructions:
1.	Clone the repository:
git clone < https://github.com/amitiz/weather-app >
cd <Weather-app>
2.	Install dependencies using Vite and npm:
npm install
3.	Add your WeatherAPI key in a .env file at the root of the project:
VITE_API_KEY=your-weather-api-key
4.	Start the development server with Vite:
npm run dev
This will run the application at http://localhost:5173/
##Technologies:
•	React
•	Vite (for fast build and development)
•	WeatherAPI (to fetch weather data)
•	CSS for styling
##How to use
Open the app in your browser.
Enter a city name in the search bar and press enter.
View the current weather and hourly forecast.

##Acknowledgments
WeatherAPI for providing free weather data.
React and Vite for making development smooth and efficient.

![image](https://github.com/user-attachments/assets/9184d161-41d3-49df-901a-a891f3523f4a)
