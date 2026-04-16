// weatherSlice.test.js
import weatherReducer, {
    fetchWeatherStart,
    fetchWeatherSuccess,
    fetchWeatherFailure,
  } from '../../store/slice.js';

  describe('weather reducer', () => {
    it('should return the initial state', () => {
      expect(weatherReducer(undefined, {})).toEqual({
        weatherData: null,
        loading: false,
        error: null,
      });
    });
  });


  it('should handle fetchWeatherStart', () => {
    expect(
      weatherReducer(
        {
          weatherData: null,
          loading: false,
          error: null,
        },
        {
          type: fetchWeatherStart.type,
        }
      )
    ).toEqual({
      weatherData: null,
      loading: true,
      error: null,
    });
  });