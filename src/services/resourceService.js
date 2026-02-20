import axiosInstance from '../utils/axiosInstance.js';

export const resourceService = {
  getAll: async () => {
    const response = await axiosInstance.get('/resources');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/resources/${id}`);
    return response.data;
  },

  create: async (resource) => {
    const response = await axiosInstance.post('/resources', resource);
    return response.data;
  },

  update: async (id, resource) => {
    const response = await axiosInstance.put(`/resources/${id}`, resource);
    return response.data;
  },

  delete: async (id) => {
    await axiosInstance.delete(`/resources/${id}`);
  },
};
