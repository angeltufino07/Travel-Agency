import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../index";

// FIXED: beforeEach instead of beforeAll — RTL cleans DOM after each test
beforeEach(() => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});

describe("Header component", () => {

  it("renders all 6 navigation links", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(7); // logo + 6 nav links
  });

  it("renders Home navigation link", () => {
    expect(screen.getByText(/^home$/i)).toBeInTheDocument();
  });

  it("renders Travels navigation link", () => {
    expect(screen.getByText(/^travels$/i)).toBeInTheDocument();
  });

  it("renders About Us navigation link", () => {
    expect(screen.getByText(/^about us$/i)).toBeInTheDocument();
  });

  it("renders company logo", () => {
    const logo = screen.getByAltText(/travel agency logo/i);
    expect(logo).toBeInTheDocument();
  });

});