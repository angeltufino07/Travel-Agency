import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
// FIXED: Use real store instead of mockStore
// mockStore in this folder only has getWeatherByCity, not a store mock
import { store } from "../components/store/store";
import App from "../App";
// FIXED: Removed Footer — App already renders Footer internally

describe("App integration", () => {
  beforeEach(() => {
    render(
      // FIXED: MemoryRouter instead of BrowserRouter — required for test environment
      <MemoryRouter>
        {/* FIXED: Added Provider with real store — App uses Redux internally */}
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  });

  it("renders hero title", () => {
    // FIXED: Using screen.getByText instead of destructured getByText
    expect(
      screen.getByText(/organize the travel that you have always wanted/i)
    ).toBeInTheDocument();
  });

});