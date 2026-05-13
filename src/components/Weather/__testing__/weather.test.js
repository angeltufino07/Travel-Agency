import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Weather from "../weather";
import weatherReducer from "../../store/slice";
// FIXED: Removed unused getWeatherByCity import
// FIXED: Removed unused waitFor import
// FIXED: Using real store instead of mockStore

const createTestStore = () =>
  configureStore({
    reducer: {
      weather: weatherReducer,
    },
  });

beforeEach(() => {
  render(
    <Provider store={createTestStore()}>
      <Weather />
    </Provider>
  );
});

describe("Weather component", () => {

  // FIXED: Using screen instead of destructured render methods
  it("renders weather search input", () => {
    const input = screen.getByPlaceholderText(/enter city name/i);
    expect(input).toBeInTheDocument();
  });

  it("renders Get Weather button", () => {
    const button = screen.getByRole("button", { name: /get weather/i });
    expect(button).toBeInTheDocument();
  });

  it("allows user to type in the input", () => {
    const input = screen.getByPlaceholderText(/enter city name/i);
    fireEvent.change(input, { target: { value: "London" } });
    expect(input.value).toBe("London");
  });

  it("does not show weather data before search", () => {
    // queryByTestId returns null instead of throwing when element not found
    const weatherResult = screen.queryByTestId("custom-element");
    expect(weatherResult).not.toBeInTheDocument();
  });

});
