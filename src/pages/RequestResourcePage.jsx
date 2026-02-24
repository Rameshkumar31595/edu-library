import React, { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const REQUEST_CATEGORIES = [
  'Computer Science',
  'Electronics',
  'Mechanical Engg.',
  'Civil Engineering',
  'Mathematics',
  'Physics',
];

export const RequestResourcePage = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-entrance heading-premium text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-primary via-teal-700 to-slate-800 bg-clip-text text-transparent">Request Resource</h1>
          <p className="heading-entrance heading-entrance-delay-1 text-slate-600 text-lg max-w-2xl leading-relaxed">Suggest new materials for the library</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => navigate('/student-dashboard')}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium tracking-wide mb-6 inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft size={16} /> Dashboard
        </button>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="resource-title" className="block text-sm font-semibold text-slate-800 tracking-wide uppercase mb-2">
                Title
              </label>
              <input
                id="resource-title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter resource title"
                required
                className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label htmlFor="resource-description" className="block text-sm font-semibold text-slate-800 tracking-wide uppercase mb-2">
                Description
              </label>
              <textarea
                id="resource-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Describe what you need and why"
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label htmlFor="resource-category" className="block text-sm font-semibold text-slate-800 tracking-wide uppercase mb-2">
                Category
              </label>
              <select
                id="resource-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
