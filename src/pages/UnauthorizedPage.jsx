import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-danger">403</h1>
        <h2 className="text-2xl font-bold text-dark">Access Denied</h2>
        <p className="text-gray-600 max-w-md">
          You don't have permission to access this page. If you believe this is an error, please contact an administrator.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
