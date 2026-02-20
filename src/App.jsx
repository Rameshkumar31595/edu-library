import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { BrowseCatalogsPage } from './pages/BrowseCatalogsPage.jsx';
import { AdminDashboard } from './pages/AdminDashboard.jsx';
import './index.css';

/**
 * MAIN APP COMPONENT WITH ROUTING
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in on app load
  useEffect(() => {
    const loggedIn = localStorage.getItem('uiExtension-isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  // Listen for storage changes (to sync logout across tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedIn = localStorage.getItem('uiExtension-isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Page - Always accessible */}
        <Route path="/" element={<HomePage />} />

        {/* Login Page - Redirect to home if already logged in */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />}
        />

        {/* Register Page - Redirect to home if already logged in */}
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" replace /> : <RegisterPage />}
        />

        {/* Browse Catalogs - Always accessible */}
        <Route path="/catalogs" element={<BrowseCatalogsPage />} />

        {/* ROLE SYSTEM: Admin Dashboard - Protected route for admins only */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* 404 Handler - Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
