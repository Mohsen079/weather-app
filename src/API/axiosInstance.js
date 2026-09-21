import axios from 'axios';
const weatherBaseURL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.open-meteo.com/v1';
const geoBaseURL = process.env.EXPO_PUBLIC_GEO_API_BASE_URL || 'https://geocoding-api.open-meteo.com/v1';

export const axiosInstance = axios.create({
  baseURL: weatherBaseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const geoAxiosInstance = axios.create({
  baseURL: geoBaseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

[axiosInstance, geoAxiosInstance].forEach((instance) => {
  instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const message =
        error.response?.data?.reason ||
        error.message ||
        'خطایی در ارتباط با سرور هواشناسی رخ داد';
      return Promise.reject(new Error(message));
    }
  );
});

export default axiosInstance;
