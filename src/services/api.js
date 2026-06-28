import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE;
if (!BASE_URL) {
  throw new Error("VITE_API_BASE environment variable is not set!");
}

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});
