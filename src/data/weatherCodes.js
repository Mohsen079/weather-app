export const WEATHER_CODES_MAP = {
    0: { description: 'Clear Sky', icon: '☀️' },
    1: { description: 'Mainly Clear', icon: '🌤️' },
    2: { description: 'Partly Cloudy', icon: '⛅' },
    3: { description: 'Overcast', icon: '☁️' },
    45: { description: 'Foggy', icon: '🌫️' },
    48: { description: 'Rime Fog', icon: '🌫️' },
    51: { description: 'Light Drizzle', icon: '🌦️' },
    53: { description: 'Moderate Drizzle', icon: '🌦️' },
    55: { description: 'Dense Drizzle', icon: '🌧️' },
    61: { description: 'Slight Rain', icon: '🌧️' },
    63: { description: 'Moderate Rain', icon: '🌧️' },
    65: { description: 'Heavy Rain', icon: '⛈️' },
    71: { description: 'Slight Snow', icon: '🌨️' },
    73: { description: 'Moderate Snow', icon: '❄️' },
    75: { description: 'Heavy Snow', icon: '❄️' },
    80: { description: 'Rain Showers', icon: '🌦️' },
    81: { description: 'Heavy Showers', icon: '🌧️' },
    82: { description: 'Violent Showers', icon: '⛈️' },
    95: { description: 'Thunderstorm', icon: '⚡' },
    96: { description: 'Thunderstorm with Hail', icon: '⛈️' },
    99: { description: 'Severe Thunderstorm', icon: '⛈️' },
};

export function getWeatherCodeInfo(code) {
    return WEATHER_CODES_MAP[code] || { description: 'Clear', icon: '🌤️' };
}
