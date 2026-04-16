import React from "react";
import Footer from "../../Footer/index";
import { fireEvent, render, screen } from "@testing-library/react";


import {MemoryRouter} from 'react-router-dom'



beforeAll(() => {
  render(
    <MemoryRouter>
      <Footer/> 
    </MemoryRouter>
  )
})

describe('whats', () => {
  test('Logo must have src = /whatsapp.png and alt = logo de whatsapp', () => {
  
    const whats = screen.getByTestId("testLogoW");
    expect(whats).toHaveAttribute('src', 'whatsapp.png');
    expect(whats).toHaveAttribute('alt', 'whatsapp logo');
    expect(whats).toBeInTheDocument();
  });
});


     