export const querykeys = {
    weather: (cityName, lat, lon) => ["weather", cityName, lat, lon],
    geoAPI: (geo) => ["geoAPI", geo]
}