import weatherReducer, {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../../store/slice.js";

describe("weather reducer", () => {

  it("should return the initial state", () => {
    expect(weatherReducer(undefined, {})).toEqual({
      weatherData: null,
      loading: false,
      error: null,
    });
  });

  // FIXED: Moved inside describe block — was floating outside before
  // FIXED: Using fetchWeatherStart() directly instead of { type: fetchWeatherStart.type }
  it("should handle fetchWeatherStart", () => {
    expect(
      weatherReducer(
        { weatherData: null, loading: false, error: null },
        fetchWeatherStart()
      )
    ).toEqual({
      weatherData: null,
      loading: true,
      error: null,
    });
  });

  // FIXED: Added missing fetchWeatherSuccess test
  it("should handle fetchWeatherSuccess", () => {
    const mockData = {
      name: "New York",
      main: { temp: 22 },
      weather: [{ icon: "01d", description: "clear sky" }],
    };
    expect(
      weatherReducer(
        { weatherData: null, loading: true, error: null },
        fetchWeatherSuccess(mockData)
      )
    ).toEqual({
      weatherData: mockData,
      loading: false,
      error: null,
    });
  });

  // FIXED: Added missing fetchWeatherFailure test
  it("should handle fetchWeatherFailure", () => {
    expect(
      weatherReducer(
        { weatherData: null, loading: true, error: null },
        fetchWeatherFailure("City not found")
      )
    ).toEqual({
      weatherData: null,
      loading: false,
      error: "City not found",
    });
  });

});