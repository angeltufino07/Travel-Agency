import { configureStore } from "@reduxjs/toolkit";
// FIXED: Removed unused store import
import weatherReducer from "../slice";

describe("Redux Store Configuration", () => {
  let testStore;

  // FIXED: beforeEach instead of beforeAll
  beforeEach(() => {
    testStore = configureStore({
      reducer: {
        weather: weatherReducer,
      },
    });
  });

  it("should initialize store with correct weather state", () => {
    expect(testStore.getState()).toEqual({
      weather: {
        weatherData: null,
        loading: false,
        error: null,
      },
    });
  });

  it("should update loading state after dispatching fetchWeatherStart", () => {
    testStore.dispatch({ type: "weather/fetchWeatherStart" });
    expect(testStore.getState().weather.loading).toBe(true);
  });

  it("should update error state after dispatching fetchWeatherFailure", () => {
    testStore.dispatch({
      type: "weather/fetchWeatherFailure",
      payload: "City not found",
    });
    expect(testStore.getState().weather.error).toBe("City not found");
  });

});