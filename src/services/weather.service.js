import { getWeatherAPI } from '@/API/getWeather';
import { getWeatherCodeInfo } from '@/data/weatherCodes';

export async function fetchWeatherData(lat = 35.6892, lon = 51.3890, cityName = 'Tehran, Iran') {
  const raw = await getWeatherAPI(lat, lon);
  if (!raw) return null;

  const cur = raw.current_weather;
  const curCodeInfo = getWeatherCodeInfo(cur?.weathercode ?? 0);

  const nowHourStr = (cur?.time || new Date().toISOString()).slice(0, 13);
  const hourlyIndex = raw.hourly?.time?.findIndex((t) => t.startsWith(nowHourStr)) ?? 0;
  const safeIndex = hourlyIndex >= 0 ? hourlyIndex : 0;

  const current = {
    city: cityName,
    temp: `${Math.round(cur?.temperature ?? 0)}°C`,
    condition: curCodeInfo.description,
    icon: curCodeInfo.icon,
    feelsLike: `${Math.round(raw.hourly?.apparent_temperature?.[safeIndex] ?? cur?.temperature ?? 0)}°C`,
    humidity: `${Math.round(raw.hourly?.relative_humidity_2m?.[safeIndex] ?? 50)}%`,
    wind: `${Math.round(cur?.windspeed ?? 0)} km/h`,
  };

  const hourly = [];
  if (raw.hourly?.time) {
    for (let i = safeIndex; i < safeIndex + 24 && i < raw.hourly.time.length; i++) {
      const timeStr = raw.hourly.time[i].slice(11, 16);
      const code = raw.hourly.weather_code[i] ?? 0;
      hourly.push({
        time: timeStr,
        icon: getWeatherCodeInfo(code).icon,
        temp: `${Math.round(raw.hourly.temperature_2m[i])}°C`,
      });
    }
  }

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daily = [];
  if (raw.daily?.time) {
    for (let i = 0; i < raw.daily.time.length; i++) {
      const date = new Date(raw.daily.time[i]);
      const dayName = i === 0 ? 'Today' : weekdays[date.getDay()];
      const code = raw.daily.weather_code[i] ?? 0;
      daily.push({
        day: dayName,
        icon: getWeatherCodeInfo(code).icon,
        condition: getWeatherCodeInfo(code).description,
        min: `${Math.round(raw.daily.temperature_2m_min[i])}°C`,
        max: `${Math.round(raw.daily.temperature_2m_max[i])}°C`,
      });
    }
  }

  return { current, hourly, daily };
}
