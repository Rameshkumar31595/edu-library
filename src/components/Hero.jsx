import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search action
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Access Knowledge <span className="text-blue-300">Anytime, Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-2">
            India's Largest Digital Repository of Knowledge Resources
          </p>
          <p className="text-sm md:text-base text-blue-200">
            Explore millions of books, journals, research papers, and educational materials
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, ISBN, or keyword..."
                className="w-full px-5 py-4 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Search
              <ArrowRight size={20} />
            </button>
          </div>
        </form>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">50K+</div>
            <p className="text-blue-100 text-sm">Books & Journals</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">10M+</div>
            <p className="text-blue-100 text-sm">Downloads</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">100+</div>
            <p className="text-blue-100 text-sm">Languages</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">24/7</div>
            <p className="text-blue-100 text-sm">Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};
