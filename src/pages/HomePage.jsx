import React from 'react';
import { Navbar } from '../components/Navbar.jsx';
import { Hero } from '../components/Hero.jsx';
import { AutoScrollCarousel } from '../components/AutoScrollCarousel.jsx';
import { CategoryGrid } from '../components/CategoryGrid.jsx';
import { Footer } from '../components/Footer.jsx';

/**
 * HOME PAGE
 * Landing page with featured collections, categories, and browsing features
 */
export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <AutoScrollCarousel />
      <CategoryGrid />
      <Footer />
    </div>
  );
};
