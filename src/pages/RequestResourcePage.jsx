import React, { useState } from 'react';
import { Send } from 'lucide-react';

const REQUEST_CATEGORIES = [
  'Computer Science',
  'Electronics',
  'Mechanical Engg.',
  'Civil Engineering',
  'Mathematics',
  'Physics',
];

export const RequestResourcePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(REQUEST_CATEGORIES[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle('');
    setDescription('');
    setCategory(REQUEST_CATEGORIES[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request Resource</h1>
          <p className="text-blue-100 text-lg">Suggest new materials for the library</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="resource-title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                id="resource-title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter resource title"
                required
                className="uiExtension-searchInput w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="resource-description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="resource-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Describe what you need and why"
                required
                rows={5}
                className="uiExtension-searchInput w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="resource-category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="resource-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="uiExtension-searchInput w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white"
              >
                {REQUEST_CATEGORIES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              <Send size={18} />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
