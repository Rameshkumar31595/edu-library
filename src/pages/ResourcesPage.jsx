import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.jsx';

export const ResourcesPage = () => {
  const [searchParams] = useSearchParams();
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['All', 'Engineering', 'Science', 'Mathematics', 'Literature', 'History', 'Languages'];

  useEffect(() => {
    // Mock data for resources
    const mockResources = [
      {
        id: '1',
        title: 'Complete Physics Guide',
        description: 'Comprehensive physics concepts including mechanics, thermodynamics, and quantum physics',
        category: 'Science',
        author: 'Dr. John Smith',
        url: 'https://example.com/physics',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Advanced Chemistry Textbook',
        description: 'In-depth study of organic, inorganic, and physical chemistry',
        category: 'Science',
        author: 'Prof. Sarah Johnson',
        url: 'https://example.com/chemistry',
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Engineering Mathematics',
        description: 'Essential mathematics for engineering students covering calculus and linear algebra',
        category: 'Engineering',
        author: 'Dr. Michael Brown',
        url: 'https://example.com/math',
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '4',
        title: 'Data Structures & Algorithms',
        description: 'Complete guide to data structures and algorithmic problem-solving',
        category: 'Engineering',
        author: 'Prof. Emma Davis',
        url: 'https://example.com/dsa',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '5',
        title: 'World History Chronicles',
        description: 'Fascinating journey through major historical events and civilizations',
        category: 'History',
        author: 'Dr. Robert Wilson',
        url: 'https://example.com/history',
        createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '6',
        title: 'Calculus Fundamentals',
        description: 'Master calculus with comprehensive examples and practice problems',
        category: 'Mathematics',
        author: 'Prof. Lisa Anderson',
        url: 'https://example.com/calculus',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '7',
        title: 'English Literature Classics',
        description: 'Study of classic literature works and their cultural impact',
        category: 'Literature',
        author: 'Prof. Jennifer Taylor',
        url: 'https://example.com/literature',
        createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '8',
        title: 'Spanish Language Course',
        description: 'Complete Spanish language learning from beginner to advanced',
        category: 'Languages',
        author: 'Dr. Carlos Garcia',
        url: 'https://example.com/spanish',
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    setResources(mockResources);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let filtered = resources;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((r) => r.category === selectedCategory);
    }

    // Sort
    if (sortBy === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === 'oldest') {
      filtered = filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    } else if (sortBy === 'title-asc') {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredResources(filtered);
  }, [resources, searchTerm, selectedCategory, sortBy]);

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-dark mb-2">Educational Resources</h1>
          <p className="text-gray-600">Browse our comprehensive collection of learning materials</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search by title, description, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title-asc">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-bold">{filteredResources.length}</span> resources
          </p>
        </div>

        {/* Resources List */}
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
                <div className="mb-4">
                  <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Author: {resource.author}</span>
                  <span>{new Date(resource.createdAt).toLocaleDateString()}</span>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Resource →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No resources found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};
