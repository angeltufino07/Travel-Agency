import axios from "axios";

const API_KEY = "fe4feefa8543e06d4f3c66d92c61b69c";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
