export const getWeatherByCity = jest.fn().mockResolvedValue({
    name: 'Mock City',
    weather: [{ icon: 'mock-icon', description: 'Mock Weather' }],
    main: { temp: 20 },
  });