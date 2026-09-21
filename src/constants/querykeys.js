export const querykeys = {
    weather: (cityName, lat, lon) => ["weather", cityName, lat, lon],
    geoAPI: (name) => ["geoAPI", name]
}