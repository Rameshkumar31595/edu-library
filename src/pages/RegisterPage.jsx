import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, CheckCircle } from 'lucide-react';

/**
 * FRONTEND-ONLY REGISTER PAGE
 * - No backend APIs
 * - Validates form locally
 * - Stores dummy user in localStorage
 * - Redirects to login after registration
 */

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user', // ROLE SYSTEM: Default role is "user"
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(''); // Clear error on input change
  };

  // Handle registration submission (frontend only)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation - required fields
    if (!formData.name.trim()) {
      setError('Full name is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!formData.password.trim()) {
      setError('Password is required');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulate registration delay
    setIsLoading(true);
    setTimeout(() => {
      // Create new user object
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        password: formData.password, // In real app, NEVER store plaintext
        registeredAt: new Date().toISOString(),
      };

      // Store in localStorage
      const existingUsers = JSON.parse(localStorage.getItem('uiExtension-users') || '[]');
      existingUsers.push(newUser);
      localStorage.setItem('uiExtension-users', JSON.stringify(existingUsers));

      setIsLoading(false);
      setSuccess('Account created successfully! Redirecting to login...');

      // Redirect to login after 1.5 seconds
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }, 600);
  };

  return (
    <div className="uiExtension-registerContainer min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center px-4 py-8">
      <div className="uiExtension-registerCard w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
            ✨
          </div>
          <h1 className="heading-entrance heading-premium text-3xl font-bold text-teal-900 mb-2">Create Account</h1>
          <p className="heading-entrance heading-entrance-delay-1 text-gray-600">Join our learning community</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="uiExtension-errorAlert mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">⚠️ {error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="uiExtension-successAlert mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <CheckCircle size={18} className="text-green-600" />
            <p className="text-green-700 text-sm font-medium">{success}</p>
          </div>
        )}

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="uiExtension-inputField w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="uiExtension-inputField w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="uiExtension-inputField w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="uiExtension-inputField w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* ROLE SYSTEM: Role Selection Dropdown */}
          <div className="roleSystem-roleField">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Your Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="roleSystem-roleSelect w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            >
              <option value="user">👤 Student / Educator</option>
              <option value="admin">🔐 Administrator</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Admins can upload and manage resources. Students can browse and download.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="uiExtension-registerBtn w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-green-600 font-semibold hover:text-green-700 transition hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>

        {/* Info Message */}
        <div className="uiExtension-infoBox mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-xs text-green-700">
            💾 <strong>Note:</strong> User data stored locally in your browser
          </p>
        </div>
      </div>
    </div>
  );
};
