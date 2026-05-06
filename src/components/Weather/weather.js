import "./styles.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../../components/store/slice.js";
import { getWeatherByCity } from "../../components/api/index.js";

const Weather = () => {
  const dispatch = useDispatch();
  const { weatherData, loading, error } = useSelector((state) => state.weather);
  const [cityInput, setCityInput] = useState("");
  const [enteredCity, setEnteredCity] = useState("");

  // FIXED: Moved all handlers above early returns for readability
  // Functions should be defined before they are referenced in JSX
  const inputValueHandler = (event) => {
    setCityInput(event.target.value);
  };

  const cityFormHandler = (event) => {
    event.preventDefault();
    setEnteredCity(cityInput);
  };

  // FIXED: Removed false argument — window.location.reload() takes no arguments
  // reload(false) parameter is deprecated and ignored by modern browsers
  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (enteredCity) {
      const fetchWeatherData = async () => {
        dispatch(fetchWeatherStart());
        try {
          const data = await getWeatherByCity(enteredCity);
          dispatch(fetchWeatherSuccess(data));
        } catch (error) {
          // FIXED: Dispatch error.message instead of the Error object
          // Redux store should only hold serializable values, not Error instances
          dispatch(fetchWeatherFailure(error.message));
        }
      };
      fetchWeatherData();
    }
  }, [dispatch, enteredCity]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <>
        <div className="errorM">Error: {error}</div>
        <div>
          <button className="reloadP" onClick={refreshPage}>
            Click to reload!
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="weather">
      <h1>Weather</h1>
      <div className="search">
        <form onSubmit={cityFormHandler}>
          <input
            type="text"
            placeholder="Enter city name"
            onChange={inputValueHandler}
          />
          <button className="Get_W" type="submit">
            Get Weather
          </button>
        </form>
      </div>

      {weatherData && (
        <div className="result">
          <h2>{weatherData.name}</h2>
          {weatherData.weather[0].icon && (
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              // FIXED: Descriptive alt text instead of generic "Weather Icon"
              alt={`${weatherData.weather[0].description} weather icon`}
            />
          )}
          <p data-testid="custom-element">{weatherData.main.temp}°C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;