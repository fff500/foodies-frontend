import axios from "axios";

export const apiInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "https://foodies-backend-ez4l.onrender.com/api",
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")?.replaceAll('"', "");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
