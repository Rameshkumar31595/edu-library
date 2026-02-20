import axiosInstance from '../utils/axiosInstance.js';

export const authService = {
  login: async (email, password) => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (email, password, name) => {
    const response = await axiosInstance.post('/auth/register', { email, password, name });
    return response.data;
  },

  logout: () => {
    return axiosInstance.post('/auth/logout');
  },

  verifyToken: async () => {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  },
};
