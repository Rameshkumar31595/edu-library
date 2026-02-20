import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/resources?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const collections = [
    {
      id: 1,
      name: 'Engineering',
      icon: '🏗️',
      count: '2,450',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Science',
      icon: '🔬',
      count: '1,890',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      name: 'Mathematics',
      icon: '📐',
      count: '1,560',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 4,
      name: 'Literature',
      icon: '📚',
      count: '3,120',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 5,
      name: 'History',
      icon: '🏛️',
      count: '1,234',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 6,
      name: 'Languages',
      icon: '🌍',
      count: '2,890',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const featured = [
    {
      id: 1,
      title: 'Complete Physics Guide',
      description: 'Comprehensive physics concepts and problem-solving techniques',
      category: 'Physics',
      views: '15.2K',
      image: '📖',
    },
    {
      id: 2,
      title: 'Advanced Chemistry',
      description: 'In-depth chemistry tutorials and lab experiments',
      category: 'Chemistry',
      views: '12.8K',
      image: '🧪',
    },
    {
      id: 3,
      title: 'Biology Encyclopedia',
      description: 'Complete guide to biological sciences and organisms',
      category: 'Biology',
      views: '18.5K',
      image: '🧬',
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">National Educational Library</h1>
            <p className="text-xl mb-8 text-blue-100">
              Access millions of educational resources, research papers, and learning materials
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search books, courses, research papers..."
                className="flex-1 px-6 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <p className="text-gray-600">Resources</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
            <p className="text-gray-600">Users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <p className="text-gray-600">Institutions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">15M+</div>
            <p className="text-gray-600">Downloads</p>
          </div>
        </section>

        {/* Featured Resources */}
        <section>
          <h2 className="text-3xl font-bold text-dark mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 flex items-center justify-center">
                  <span className="text-6xl">{item.image}</span>
                </div>
                <div className="p-6">
                  <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark mt-3 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>👁️ {item.views} views</span>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">Read →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-3xl font-bold text-dark mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className={`bg-gradient-to-br ${collection.color} text-white rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-pointer transform hover:scale-105`}
              >
                <div className="text-5xl mb-4">{collection.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-white text-opacity-90">{collection.count} resources</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="text-lg mb-8 text-opacity-90 max-w-2xl mx-auto">
            Join thousands of students and educators who are using our platform to enhance their knowledge and skills
          </p>
          <button
            onClick={() => navigate('/resources')}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
          >
            Explore Resources
          </button>
        </section>

        {/* Info Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-dark mb-2">Rich Content</h3>
            <p className="text-gray-600">
              Diverse collection of textbooks, journals, research papers, and educational videos
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-dark mb-2">Secure Access</h3>
            <p className="text-gray-600">
              Encrypted downloads and secure authentication to protect your learning data
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-dark mb-2">Worldwide Access</h3>
            <p className="text-gray-600">
              Access from anywhere, anytime with support for multiple languages and formats
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
