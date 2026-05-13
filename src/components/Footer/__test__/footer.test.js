// src/components/Footer/__test__/footer.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../index";

// Arrange — setup that runs once before all tests
beforeEach (() => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
});

describe("Footer component", () => {

  // Test 1 — Whatsapp logo renders correctly
  it("renders Whatsapp logo with correct alt text", () => {
    const whatsapp = screen.getByTestId("testLogoW");
    expect(whatsapp).toBeInTheDocument();
    expect(whatsapp).toHaveAttribute("alt", "Whatsapp");
  });

  // Test 2 — Navigation links exist
  it("renders Home navigation link", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  // Test 3 — Social media section exists
  it("renders Social Medias section title", () => {
    const title = screen.getByText("Social Medias");
    expect(title).toBeInTheDocument();
  });

  // Test 4 — Our Page section exists
  it("renders Our Page section title", () => {
  const title = screen.getByText(/our page/i);
  expect(title).toBeInTheDocument();
});

});
     