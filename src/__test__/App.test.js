import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../components/store/store";
import App from "../App";
// FIXED: Removed deprecated @testing-library/jest-dom/extend-expect
// Already configured globally in setupTests.js

// FIXED: beforeEach instead of beforeAll — RTL cleans DOM after each test
// FIXED: Added Provider — App contains Weather which uses Redux store
beforeEach(() => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
});

describe("App component", () => {

  it("renders main hero title", () => {
    expect(
      screen.getByText(/organize the travel that you have always wanted/i)
    ).toBeInTheDocument();
  });

 it("renders Header navigation", () => {
  const homeLinks = screen.getAllByText(/^home$/i);
  expect(homeLinks.length).toBeGreaterThan(0);
});

  it("renders Footer", () => {
    expect(screen.getByText(/our page/i)).toBeInTheDocument();
  });

  it("renders destination section title", () => {
    expect(
      screen.getByText(/organize your travel choosing one of the best places/i)
    ).toBeInTheDocument();
  });

});