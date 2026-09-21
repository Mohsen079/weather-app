import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
    async get(key, defaultValue = null) {
        try {
            const item = await AsyncStorage.getItem(key);
            return item != null ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    async set(key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(e);
        }
    },
};

export const STORAGE_KEYS = {
    SELECTED_CITY: "@weather_app/selected_city",
};
