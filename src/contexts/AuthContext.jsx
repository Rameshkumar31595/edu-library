import React, { createContext, useState, useEffect } from 'react';
import { tokenManager } from '../utils/tokenManager.js';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedToken = tokenManager.getToken();
    const storedUser = tokenManager.getUser();

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }

    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await axiosInstance.post('/auth/login', { email, password });
      // const { token, user } = response.data;

      // Mock response for demonstration
      const mockToken = 'mock_token_' + Date.now();
      const mockUser = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'user',
        createdAt: new Date().toISOString(),
      };

      tokenManager.setToken(mockToken);
      tokenManager.setUser(mockUser);
      setToken(mockToken);
      setUser(mockUser);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email, password, name) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await axiosInstance.post('/auth/register', { email, password, name });
      // const { token, user } = response.data;

      // Mock response for demonstration
      const mockToken = 'mock_token_' + Date.now();
      const mockUser = {
        id: '1',
        email,
        name,
        role: 'user',
        createdAt: new Date().toISOString(),
      };

      tokenManager.setToken(mockToken);
      tokenManager.setUser(mockUser);
      setToken(mockToken);
      setUser(mockUser);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    tokenManager.clearAll();
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
