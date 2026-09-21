import axiosInstance from "./axiosInstance";
// آدرس سرور جستجوی شهرها در اوپن‌متیو
// const geocodingApi = axios.create({
//   baseURL: "https://geocoding-api.open-meteo.com/v1",
//   timeout: 10000,
// });


export async function getWeatherAPI(lat, lan) {
  if (!lan || !lat) return [];

  const response = await axiosInstance.get("/forecast", {
    params: {
      latitude: lat,
      longitude: lan,
      current_weather: true,
      hourly: 'temperature_2m,relative_humidity_2m,weather_code,apparent_temperature',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min',
      timezone: 'auto',
    },
  });

  console.log("response", response?.data)

  return response?.data || [];
}

