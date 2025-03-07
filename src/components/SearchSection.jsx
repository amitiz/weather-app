const SearchSection = ({getWeatherDetails}) => {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        console.log(searchInput.value);
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
        //get the weather details from the entered city 
        getWeatherDetails(API_URL);

    };
  return (
    <div className="search-section">
      <form action="" className="search-form" onSubmit={handleCitySearch} >
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter a city name"
          required
          className="search-input"
        />
      </form>
      {/* put a button here */}
      <button className="location-button">
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
