import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, Menu, X, LogOut, Shield } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState(''); // ROLE SYSTEM: Track user role
  const navigate = useNavigate();

  // Check login status on mount and listen for changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('uiExtension-isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      
      if (loggedIn) {
        const user = JSON.parse(localStorage.getItem('uiExtension-user') || '{}');
        setUserName(user.name || user.email || 'User');
        setUserRole(user.role || 'user'); // ROLE SYSTEM: Get user role
      } else {
        setUserRole('');
      }
    };
    
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('uiExtension-user');
    localStorage.removeItem('uiExtension-isLoggedIn');
    localStorage.removeItem('uiExtension-userRole'); // ROLE SYSTEM: Clear role
    setIsLoggedIn(false);
    setUserName('');
    setUserRole('');
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-md">
              📚
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-blue-900">NDL</h1>
              <p className="text-xs text-gray-600">National Digital Library</p>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search books, journals, research papers..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-900 text-white rounded-r-lg hover:bg-blue-800 transition font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation Links */}
            <Link 
              to="/catalogs" 
              className="hidden sm:inline text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Catalogs
            </Link>

            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-blue-900 cursor-pointer transition group">
              <Globe size={20} />
              <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer group-hover:text-blue-900">
                <option>EN</option>
                <option>हिंदी</option>
                <option>தமிழ்</option>
                <option>తెలుగు</option>
              </select>
            </div>

            {/* Auth Buttons / User Menu */}
            <div className="hidden sm:flex gap-3 items-center">
              {isLoggedIn ? (
                <>
                  <span className="roleSystem-userBadge text-sm text-gray-700 px-3 py-2 bg-blue-50 rounded-lg font-medium">
                    👤 {userName}
                    {/* ROLE SYSTEM: Show role badge */}
                    {userRole === 'admin' && (
                      <span className="roleSystem-adminBadge ml-2 inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                        <Shield size={12} />
                        Admin
                      </span>
                    )}
                  </span>
                  {/* ROLE SYSTEM: Show Admin Dashboard link for admins only */}
                  {userRole === 'admin' && (
                    <Link
                      to="/admin-dashboard"
                      className="roleSystem-adminLink px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg font-medium transition flex items-center gap-2"
                    >
                      <Shield size={16} />
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-blue-900 font-medium hover:text-blue-700 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
                <Search size={20} />
              </button>
            </div>

            {/* Mobile Catalog Link */}
            <Link
              to="/catalogs"
              className="block px-4 py-2 text-blue-900 font-medium hover:bg-blue-50 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              📖 Catalogs
            </Link>

            {isLoggedIn ? (
              <>
                <div className="roleSystem-mobileUserBadge px-4 py-2 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">
                    👤 {userName}
                    {/* ROLE SYSTEM: Show role indicator in mobile menu */}
                    {userRole === 'admin' && (
                      <span className="roleSystem-mobileAdminBadge block text-xs text-red-700 font-bold mt-1">
                        🔐 Administrator
                      </span>
                    )}
                  </p>
                </div>
                {/* ROLE SYSTEM: Show Admin Dashboard link in mobile menu for admins */}
                {userRole === 'admin' && (
                  <Link
                    to="/admin-dashboard"
                    className="roleSystem-mobileAdminLink block w-full px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg font-medium text-center flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Shield size={16} />
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition font-medium flex items-center justify-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 text-blue-900 font-medium border border-blue-900 rounded-lg hover:bg-blue-50 transition text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-full px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
