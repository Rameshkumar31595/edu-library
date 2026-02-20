import axiosInstance from '../utils/axiosInstance';
import type { Resource } from '../types';

export const resourceService = {
  getAll: async (): Promise<Resource[]> => {
    const response = await axiosInstance.get('/resources');
    return response.data;
  },

  getById: async (id: string): Promise<Resource> => {
    const response = await axiosInstance.get(`/resources/${id}`);
    return response.data;
  },

  create: async (resource: Omit<Resource, 'id' | 'createdAt' | 'updatedAt'>): Promise<Resource> => {
    const response = await axiosInstance.post('/resources', resource);
    return response.data;
  },

  update: async (id: string, resource: Partial<Resource>): Promise<Resource> => {
    const response = await axiosInstance.put(`/resources/${id}`, resource);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/resources/${id}`);
  },
};
