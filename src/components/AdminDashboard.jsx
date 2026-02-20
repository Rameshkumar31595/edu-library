import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Users, BarChart3, Settings, Shield, LogOut } from 'lucide-react';

/**
 * ROLE SYSTEM: ADMIN DASHBOARD
 * - Only accessible to users with role === "admin"
 * - Shows admin-only features and statistics
 * - Frontend-only implementation
 */

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  // Check if user is admin on component mount
  useEffect(() => {
    const checkAdminAccess = () => {
      const loggedIn = localStorage.getItem('uiExtension-isLoggedIn') === 'true';
      const role = localStorage.getItem('uiExtension-userRole');

      if (!loggedIn || role !== 'admin') {
        // Redirect non-admin users to home
        navigate('/');
        return;
      }

      setIsLoggedIn(loggedIn);
      setUserRole(role);
    };

    checkAdminAccess();
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('uiExtension-user');
    localStorage.removeItem('uiExtension-isLoggedIn');
    localStorage.removeItem('uiExtension-userRole');
    navigate('/');
  };

  if (!isLoggedIn || userRole !== 'admin') {
    return null; // Should redirect before reaching here
  }

  return (
    <div className="roleSystem-adminDashboard min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Admin Header */}
      <div className="roleSystem-adminHeader bg-gradient-to-r from-red-900 to-red-700 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Shield size={32} className="text-red-200" />
              <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            </div>
            <p className="text-red-100">Manage resources, users, and platform settings</p>
          </div>
          <button
            onClick={handleLogout}
            className="roleSystem-adminLogout px-6 py-2 bg-red-800 hover:bg-red-900 rounded-lg font-medium flex items-center gap-2 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="roleSystem-statsGrid grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<BarChart3 size={28} />}
            label="Total Resources"
            value="18"
            color="bg-blue-500"
          />
          <StatCard
            icon={<Users size={28} />}
            label="Registered Users"
            value="124"
            color="bg-green-500"
          />
          <StatCard
            icon={<Upload size={28} />}
            label="Uploads (This Month)"
            value="23"
            color="bg-purple-500"
          />
          <StatCard
            icon={<Settings size={28} />}
            label="System Status"
            value="Active"
            color="bg-orange-500"
          />
        </div>

        {/* Admin Features Grid */}
        <div className="roleSystem-featuresGrid grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upload Resources Section */}
          <AdminFeatureCard
            icon={<Upload size={32} />}
            title="Upload Resources"
            description="Add new educational materials, books, and research papers to the platform"
            actions={[
              { label: 'Upload New', color: 'bg-blue-600' },
              { label: 'Bulk Upload', color: 'bg-blue-500' },
            ]}
          />

          {/* Manage Users Section */}
          <AdminFeatureCard
            icon={<Users size={32} />}
            title="Manage Users"
            description="View, edit, or remove user accounts. Change user roles and permissions"
            actions={[
              { label: 'View All Users', color: 'bg-green-600' },
              { label: 'Add User', color: 'bg-green-500' },
            ]}
          />

          {/* Content Moderation Section */}
          <AdminFeatureCard
            icon={<Shield size={32} />}
            title="Content Moderation"
            description="Review flagged content and ensure compliance with platform policies"
            actions={[
              { label: 'Review Content', color: 'bg-red-600' },
              { label: 'View Reports', color: 'bg-red-500' },
            ]}
          />

          {/* System Settings Section */}
          <AdminFeatureCard
            icon={<Settings size={32} />}
            title="System Settings"
            description="Configure platform settings, categories, and administrative preferences"
            actions={[
              { label: 'Edit Settings', color: 'bg-purple-600' },
              { label: 'View Logs', color: 'bg-purple-500' },
            ]}
          />
        </div>

        {/* Recent Activity Section */}
        <div className="roleSystem-recentActivity mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityLog
              action="User registered"
              detail="john.doe@example.com"
              time="2 hours ago"
            />
            <ActivityLog
              action="Resource uploaded"
              detail="Engineering Handbook Vol. 2"
              time="5 hours ago"
            />
            <ActivityLog
              action="User role changed"
              detail="jane.smith@example.com → Admin"
              time="1 day ago"
            />
            <ActivityLog
              action="Content flagged"
              detail="Review requested for resource #1245"
              time="2 days ago"
            />
          </div>
        </div>

        {/* Admin Info Box */}
        <div className="roleSystem-infoBox mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Admin Features Info</h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            This is a frontend-only demonstration of an admin dashboard. In a production environment, 
            you would have full backend integration for managing resources, users, and system settings. 
            All features shown here are simulated for demonstration purposes using localStorage.
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Stat Card Component
 */
const StatCard = ({ icon, label, value, color }) => {
  return (
    <div className="roleSystem-statCard bg-white rounded-lg shadow-md p-6">
      <div className={`roleSystem-statIcon ${color} text-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
};

/**
 * Admin Feature Card Component
 */
const AdminFeatureCard = ({ icon, title, description, actions }) => {
  return (
    <div className="roleSystem-featureCard bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-red-600">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
      <div className="roleSystem-actionButtons flex gap-3 pt-4 border-t border-gray-200">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className={`roleSystem-actionBtn ${action.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition flex-1`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

/**
 * Activity Log Component
 */
const ActivityLog = ({ action, detail, time }) => {
  return (
    <div className="roleSystem-activityItem flex items-start gap-4 py-3 border-b border-gray-200 last:border-b-0">
      <div className="roleSystem-activityDot w-3 h-3 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-gray-900 font-medium">{action}</p>
        <p className="text-gray-600 text-sm">{detail}</p>
      </div>
      <span className="roleSystem-activityTime text-gray-500 text-xs whitespace-nowrap ml-4">{time}</span>
    </div>
  );
};
