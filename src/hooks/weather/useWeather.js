import { querykeys } from "@/constants";
import { fetchWeatherData } from "@/services/weather.service";
import { useQuery } from "@tanstack/react-query";

export function useWeather(lat = 35.6892, lon = 51.3890, cityName = "Tehran, Iran", options = {}) {
  return useQuery({
    queryKey: querykeys.weather(cityName, lat, lon),
    queryFn: () => fetchWeatherData(lat, lon, cityName),
    enabled: Boolean(lat && lon),
    ...options,
  })

}