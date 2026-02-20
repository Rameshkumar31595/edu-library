import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await register(email, password, name);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-dark">Create Account</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-danger rounded-lg text-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 font-medium"
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
