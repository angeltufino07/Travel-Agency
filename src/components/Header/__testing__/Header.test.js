import React from "react";
import Header from "../../Header/index";
import { fireEvent, render, screen } from "@testing-library/react";


import {MemoryRouter} from 'react-router-dom'



beforeAll(() => {
  render(
    <MemoryRouter>
      <Header /> 
    </MemoryRouter>
  )
})

    test('Exist button called Inicio', () => {
        const pre = screen.getByText('About Us')
        expect(pre).toBeInTheDocument();

    });


     
   