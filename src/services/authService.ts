import axiosInstance from '../utils/axiosInstance';
import type { User } from '../types';

export const authService = {
  login: async (email: string, password: string): Promise<{ token: string; user: User }> => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (email: string, password: string, name: string): Promise<{ token: string; user: User }> => {
    const response = await axiosInstance.post('/auth/register', { email, password, name });
    return response.data;
  },

  logout: (): Promise<void> => {
    return axiosInstance.post('/auth/logout');
  },

  verifyToken: async (): Promise<User> => {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  },
};
