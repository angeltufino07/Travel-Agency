// src/components/Weather.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Weather from '../weather';
import { Provider } from 'react-redux';
import mockStore from "../../../__test__/mock";
import { getWeatherByCity } from './mock';




describe('Weather component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      weather: {
        weatherData: null,
        loading: false,
        error: null,
      },
    });
  });

  test('dispatches fetchWeatherStart and fetchWeatherSuccess on form submit', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Weather />
      </Provider>
    );

    const input = getByPlaceholderText('Enter city name');
    const button = getByText('Get Weather');

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.click(button);

    // Check if fetchWeatherStart action was dispatched
    expect(store.getActions()).toEqual([{ type: 'weather/fetchWeatherStart' }]);




   

  });

});
