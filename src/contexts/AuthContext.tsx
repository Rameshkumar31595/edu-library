import React, { createContext, useState, useEffect } from 'react';
import type { AuthContextType, User } from '../types';
import { tokenManager } from '../utils/tokenManager';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
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

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await axiosInstance.post('/auth/login', { email, password });
      // const { token, user } = response.data;

      // Mock response for demonstration
      const mockToken = 'mock_token_' + Date.now();
      const mockUser: User = {
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

  const register = async (email: string, password: string, name: string): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await axiosInstance.post('/auth/register', { email, password, name });
      // const { token, user } = response.data;

      // Mock response for demonstration
      const mockToken = 'mock_token_' + Date.now();
      const mockUser: User = {
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

  const logout = (): void => {
    tokenManager.clearAll();
    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = {
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
