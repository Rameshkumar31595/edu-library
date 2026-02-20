import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer gap-2" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                📚
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NDL
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigate('/')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/resources')}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Browse
              </button>
              {user?.role === 'admin' && (
                <button
                  onClick={() => navigate('/admin')}
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Admin
                </button>
              )}
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
                Contact
              </a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="text-gray-700">👤</span>
                <span className="text-dark font-medium">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">NDL</h3>
              <p className="text-gray-400 text-sm">National Educational Library - Providing quality educational resources to learners worldwide.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Browse</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Report Issue</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Copyright</a></li>
                <li><a href="#" className="hover:text-white transition">License</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">f</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">𝕏</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">in</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">▶</a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <p>&copy; 2025 National Educational Library. All rights reserved.</p>
              <p className="mt-2">Empowering learners worldwide through quality educational content</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
