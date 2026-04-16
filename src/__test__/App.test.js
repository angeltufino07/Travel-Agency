import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';


beforeAll(() => {
  render(
    <MemoryRouter>
      <App /> 
    </MemoryRouter>
  )
})

describe('Render of the components', () => {
  it('renders correctly', () => {
    expect(screen.getByText('Organize your Travel')).toBeInTheDocument(); // adjust based on your component
  });
});
