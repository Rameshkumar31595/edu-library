import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ADMIN DASHBOARD
 * Clean resource management dashboard matching landing page theme
 * Focus on managing student learning resources effectively
 */

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('uiExtension-isLoggedIn') === 'true';
    const role = localStorage.getItem('uiExtension-userRole');

    if (!loggedIn || role !== 'admin') {
      navigate('/');
      return;
    }

    setIsLoggedIn(loggedIn);
    setUserRole(role);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('uiExtension-user');
    localStorage.removeItem('uiExtension-isLoggedIn');
    localStorage.removeItem('uiExtension-userRole');
    navigate('/');
  };

  if (!isLoggedIn || userRole !== 'admin') {
    return null;
  }

  // Mock data
  const mostAccessed = [
    { title: 'Digital Electronics', department: 'ECE', accessCount: 245 },
    { title: 'Engineering Mathematics', department: 'Mathematics', accessCount: 189 },
    { title: 'Data Structures', department: 'CSE', accessCount: 167 },
  ];

  const recentDownloads = [
    { student: 'Priya Sharma', resource: 'Circuit Theory Notes', time: '15 min ago' },
    { student: 'Rahul Kumar', resource: 'Java Programming Guide', time: '45 min ago' },
    { student: 'Ananya Singh', resource: 'Calculus Textbook', time: '2 hours ago' },
  ];

  const resourceRequests = [
    { student: 'Amit Patel', request: 'Advanced Database Systems book', date: '28 May 2024', status: 'Pending' },
    { student: 'Sneha Reddy', request: 'Machine Learning lecture videos', date: '27 May 2024', status: 'Pending' },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className="dashboard-sidebar dashboard-sidebar--admin">
        <div className="sidebar-header">
          <div className="logo">EduLibrary</div>
          <div className="admin-badge">Admin</div>
        </div>
        <nav className="sidebar-nav">
          <a href="#overview" className="sidebar-link active">
            <span className="link-icon">📊</span>
            Overview
          </a>
          <a href="#resources" className="sidebar-link">
            <span className="link-icon">📚</span>
            Resource Management
          </a>
          <a href="#students" className="sidebar-link">
            <span className="link-icon">👥</span>
            Student Activity
          </a>
          <a href="#requests" className="sidebar-link">
            <span className="link-icon">✉️</span>
            Requests
          </a>
          <a href="#announcements" className="sidebar-link">
            <span className="link-icon">📢</span>
            Announcements
          </a>
          <a href="#settings" className="sidebar-link">
            <span className="link-icon">⚙️</span>
            Settings
          </a>
        </nav>
        <button onClick={handleLogout} className="sidebar-logout">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Welcome Section */}
        <section className="dashboard-welcome admin-welcome">
          <h1>Admin Control Center</h1>
          <p>Manage learning resources and monitor student activity</p>
        </section>

        {/* Overview Stats Grid */}
        <section className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <h3>Total Resources</h3>
              <p className="stat-number">1,248</p>
              <span className="stat-meta">+36 this month</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>Active Students</h3>
              <p className="stat-number">392</p>
              <span className="stat-meta">Across 24 institutions</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon">📥</div>
            <div className="stat-content">
              <h3>Recent Uploads</h3>
              <p className="stat-number">58</p>
              <span className="stat-meta">Last 7 days</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon">✉️</div>
            <div className="stat-content">
              <h3>Pending Requests</h3>
              <p className="stat-number">12</p>
              <span className="stat-meta">Requires attention</span>
            </div>
          </div>
        </section>

        {/* Resource Management Section */}
        <section className="dashboard-section">
          <h2 className="section-title">Resource Management</h2>
          <div className="admin-action-grid">
            <div className="admin-action-card">
              <h3>Add New Resource</h3>
              <form className="admin-form">
                <input type="text" placeholder="Resource Title" className="admin-input" />
                <select className="admin-input">
                  <option>Select Department</option>
                  <option>Computer Science</option>
                  <option>Electronics</option>
                  <option>Mechanical</option>
                  <option>Civil</option>
                </select>
                <select className="admin-input">
                  <option>Resource Type</option>
                  <option>PDF</option>
                  <option>Video</option>
                  <option>Document</option>
                </select>
                <button type="button" className="admin-submit-btn">Add Resource</button>
              </form>
            </div>
            <div className="admin-action-card">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="action-btn">Edit Existing Resources</button>
                <button className="action-btn">Delete Resources</button>
                <button className="action-btn">Assign to Departments</button>
                <button className="action-btn">Bulk Upload</button>
              </div>
            </div>
          </div>
        </section>

        {/* Student Activity Insights */}
        <section className="dashboard-section">
          <h2 className="section-title">Student Activity Insights</h2>
          <div className="insight-grid">
            <div className="insight-panel">
              <h3>Most Accessed Resources</h3>
              <div className="insight-list">
                {mostAccessed.map((item, idx) => (
                  <div key={idx} className="insight-item">
                    <div>
                      <p className="insight-title">{item.title}</p>
                      <p className="insight-meta">{item.department}</p>
                    </div>
                    <span className="insight-badge">{item.accessCount} views</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="insight-panel">
              <h3>Recent Downloads</h3>
              <div className="insight-list">
                {recentDownloads.map((item, idx) => (
                  <div key={idx} className="insight-item">
                    <div>
                      <p className="insight-title">{item.student}</p>
                      <p className="insight-meta">{item.resource}</p>
                    </div>
                    <span className="insight-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="trending-subjects">
            <h3>Trending Subjects This Week</h3>
            <div className="subject-tags">
              <span className="subject-tag">Data Structures</span>
              <span className="subject-tag">Digital Electronics</span>
              <span className="subject-tag">Engineering Mathematics</span>
              <span className="subject-tag">Thermodynamics</span>
              <span className="subject-tag">Circuit Theory</span>
            </div>
          </div>
        </section>

        {/* Resource Requests Panel */}
        <section className="dashboard-section">
          <h2 className="section-title">Resource Requests from Students</h2>
          <div className="request-table-wrapper">
            <table className="request-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Request</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {resourceRequests.map((req, idx) => (
                  <tr key={idx}>
                    <td>{req.student}</td>
                    <td className="request-text">{req.request}</td>
                    <td>{req.date}</td>
                    <td><span className="status-badge status-pending">{req.status}</span></td>
                    <td>
                      <button className="action-link">Approve</button>
                      <button className="action-link action-link--reject">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Announcement Management */}
        <section className="dashboard-section">
          <h2 className="section-title">Announcement Management</h2>
          <div className="announcement-form-card">
            <form className="admin-form admin-form--announcement">
              <textarea 
                placeholder="Write announcement for students..." 
                className="admin-textarea"
                rows="3"
              ></textarea>
              <div className="form-actions">
                <button type="button" className="admin-submit-btn">Publish Announcement</button>
                <button type="button" className="admin-cancel-btn">Clear</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
