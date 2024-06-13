import axios from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")?.replaceAll('"', "");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
