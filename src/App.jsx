import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { AutoScrollCarousel } from './components/AutoScrollCarousel.jsx';
import { CategoryGrid } from './components/CategoryGrid.jsx';
import { Footer } from './components/Footer.jsx';
import { LoginPage } from './components/LoginPageNew.jsx';
import { RegisterPage } from './components/RegisterPageNew.jsx';
import { BrowseCatalogsPage } from './components/BrowseCatalogsPage.jsx';
import { AdminDashboard } from './components/AdminDashboard.jsx'; // ROLE SYSTEM: Import admin dashboard
import './index.css';

/**
 * HOME PAGE COMPONENT - Landing page with all features
 */
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <AutoScrollCarousel />
      <CategoryGrid />
      <Footer />
    </div>
  );
}

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
