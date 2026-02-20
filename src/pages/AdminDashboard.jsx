import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout.jsx';

export const AdminDashboard = () => {
  const [resources, setResources] = useState([
    {
      id: '1',
      title: 'Introduction to React',
      description: 'Learn the basics of React and functional components',
      category: 'Web Development',
      author: 'John Doe',
      url: 'https://example.com/react-intro',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    author: '',
    url: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newResource = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setResources([...resources, newResource]);
    setFormData({
      title: '',
      description: '',
      category: '',
      author: '',
      url: '',
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-dark">Admin Dashboard</h1>
          <p className="text-gray-600">Manage educational resources and system settings</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-primary mb-2">{resources.length}</div>
            <p className="text-gray-600">Total Resources</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-secondary mb-2">42</div>
            <p className="text-gray-600">Active Users</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-warning mb-2">8</div>
            <p className="text-gray-600">Pending Approvals</p>
          </div>
        </div>

        {/* Add Resource Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition"
        >
          {showForm ? 'Cancel' : 'Add New Resource'}
        </button>

        {/* Add Resource Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark mb-1">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-1">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-1">URL</label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-secondary text-white rounded-lg hover:bg-green-600 transition"
            >
              Add Resource
            </button>
          </form>
        )}

        {/* Resources Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-dark text-white">
              <tr>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Author</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {resources.map((resource) => (
                <tr key={resource.id} className="hover:bg-light transition">
                  <td className="px-6 py-4">{resource.title}</td>
                  <td className="px-6 py-4">{resource.category}</td>
                  <td className="px-6 py-4">{resource.author}</td>
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button className="px-3 py-1 bg-primary text-white text-sm rounded hover:bg-blue-600 transition">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(resource.id)}
                      className="px-3 py-1 bg-danger text-white text-sm rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};
