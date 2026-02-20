export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
  token: string | null;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

