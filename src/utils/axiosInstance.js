import axios from 'axios';
import { tokenManager } from './tokenManager.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokenManager.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenManager.clearAll();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
