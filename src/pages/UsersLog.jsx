import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, UserCheck, UserPlus, UserX, ShieldCheck } from 'lucide-react';

export const UsersLog = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const roleOptions = ['Student', 'Admin'];
  const departmentOptions = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Mathematics'];
  const statusOptions = ['Active', 'Pending', 'Deactivated'];

  const [users, setUsers] = useState([
    { id: 1, name: 'Priya Sharma', email: 'priya@edu.edu', role: 'Student', department: 'Computer Science', status: 'Active', date: '26 Feb 2026' },
    { id: 2, name: 'Rahul Kumar', email: 'rahul@edu.edu', role: 'Student', department: 'Electronics', status: 'Pending', date: '26 Feb 2026' },
    { id: 3, name: 'Ananya Singh', email: 'ananya@edu.edu', role: 'Student', department: 'Mathematics', status: 'Active', date: '25 Feb 2026' },
    { id: 4, name: 'Nikhil Rao', email: 'nikhil@edu.edu', role: 'Student', department: 'Mechanical', status: 'Active', date: '25 Feb 2026' },
    { id: 5, name: 'Admin Team', email: 'admin@edu.edu', role: 'Admin', department: 'Computer Science', status: 'Active', date: '01 Feb 2026' },
    { id: 6, name: 'Meera Thomas', email: 'meera@edu.edu', role: 'Student', department: 'Civil', status: 'Deactivated', date: '20 Feb 2026' },
    { id: 7, name: 'Vikram Patel', email: 'vikram@edu.edu', role: 'Student', department: 'Computer Science', status: 'Active', date: '24 Feb 2026' },
    { id: 8, name: 'Neha Reddy', email: 'neha@edu.edu', role: 'Student', department: 'Electronics', status: 'Active', date: '24 Feb 2026' },
    { id: 9, name: 'Arjun Verma', email: 'arjun@edu.edu', role: 'Student', department: 'Computer Science', status: 'Active', date: '23 Feb 2026' },
    { id: 10, name: 'Isha Gupta', email: 'isha@edu.edu', role: 'Student', department: 'Mathematics', status: 'Pending', date: '23 Feb 2026' },
    { id: 11, name: 'Rohan Desai', email: 'rohan@edu.edu', role: 'Student', department: 'Mechanical', status: 'Active', date: '22 Feb 2026' },
    { id: 12, name: 'Divya Nair', email: 'divya@edu.edu', role: 'Student', department: 'Civil', status: 'Active', date: '22 Feb 2026' },
    { id: 13, name: 'Dr. Sanjay Nair', email: 'sanjay.admin@edu.edu', role: 'Admin', department: 'Electronics', status: 'Active', date: '15 Feb 2026' },
    { id: 14, name: 'Karan Singh', email: 'karan@edu.edu', role: 'Student', department: 'Computer Science', status: 'Pending', date: '21 Feb 2026' },
    { id: 15, name: 'Tanvi Mehta', email: 'tanvi@edu.edu', role: 'Student', department: 'Electronics', status: 'Active', date: '20 Feb 2026' },
    { id: 16, name: 'Aditya Joshi', email: 'aditya@edu.edu', role: 'Student', department: 'Mechanical', status: 'Active', date: '19 Feb 2026' },
    { id: 17, name: 'Shruti Iyer', email: 'shruti@edu.edu', role: 'Student', department: 'Computer Science', status: 'Active', date: '18 Feb 2026' },
    { id: 18, name: 'Manish Tiwari', email: 'manish@edu.edu', role: 'Student', department: 'Mathematics', status: 'Deactivated', date: '14 Feb 2026' },
  ]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase())
        || user.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === 'All' || user.role === roleFilter;
      const matchesDepartment = departmentFilter === 'All' || user.department === departmentFilter;
      const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
      return matchesSearch && matchesRole && matchesDepartment && matchesStatus;
    });
  }, [users, search, roleFilter, departmentFilter, statusFilter]);

  const handleStatusChange = (userId, status) => {
    setUsers((prev) => prev.map((user) => (
      user.id === userId
        ? { ...user, status }
        : user
    )));
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const pendingUsers = users.filter(u => u.status === 'Pending').length;
  const deactivatedUsers = users.filter(u => u.status === 'Deactivated').length;
  const adminCount = users.filter(u => u.role === 'Admin').length;

  return (
    <div className="dashboard-wrapper dashboard-wrapper--bottom-nav">
      <main className="dashboard-main dashboard-main--bottom-nav">

        {/* Premium Banner */}
        <div className="admin-page-banner">
          <button type="button" className="banner-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
            <ArrowLeft size={18} />
          </button>
          <div className="banner-icon"><Users size={24} /></div>
          <div className="banner-text">
            <h1>User Signups Log</h1>
            <p>Review new registrations and manage account status.</p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="admin-summary-row">
          <div className="admin-summary-card">
            <span className="summary-label">Total Users</span>
            <span className="summary-value">{totalUsers}</span>
            <Users size={28} className="summary-icon" />
          </div>
          <div className="admin-summary-card">
            <span className="summary-label">Active</span>
            <span className="summary-value">{activeUsers}</span>
            <UserCheck size={28} className="summary-icon" />
          </div>
          <div className="admin-summary-card">
            <span className="summary-label">Pending</span>
            <span className="summary-value">{pendingUsers}</span>
            <UserPlus size={28} className="summary-icon" />
          </div>
          <div className="admin-summary-card">
            <span className="summary-label">Deactivated</span>
            <span className="summary-value">{deactivatedUsers}</span>
            <UserX size={28} className="summary-icon" />
          </div>
          <div className="admin-summary-card">
            <span className="summary-label">Admins</span>
            <span className="summary-value">{adminCount}</span>
            <ShieldCheck size={28} className="summary-icon" />
          </div>
        </div>

        {/* Premium Table Card */}
        <div className="admin-premium-card">
          <div className="card-header">
            <h2>Registered Users</h2>
            <p>Search and filter by role, department, or status.</p>
          </div>
          <div className="card-filters">
            <input
              type="text"
              className="admin-input"
              placeholder="Search by name or email"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <select className="admin-input" value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
              <option value="All">All Roles</option>
              {roleOptions.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <select className="admin-input" value={departmentFilter} onChange={(event) => setDepartmentFilter(event.target.value)}>
              <option value="All">All Departments</option>
              {departmentOptions.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select className="admin-input" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
              <option value="All">All Status</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="card-body">
            {filteredUsers.length === 0 ? (
              <div className="admin-empty-state">
                <div className="empty-icon"><Users size={24} /></div>
                <p>No users match your filters.</p>
              </div>
            ) : (
              <table className="admin-premium-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Signup Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="cell-name">{user.name}</td>
                      <td className="cell-email">{user.email}</td>
                      <td><span className={`premium-badge ${user.role === 'Admin' ? 'premium-badge--published' : 'premium-badge--type'}`}>{user.role}</span></td>
                      <td>{user.department}</td>
                      <td>
                        <span className={`premium-badge ${user.status === 'Active' ? 'premium-badge--active' : user.status === 'Pending' ? 'premium-badge--pending' : 'premium-badge--deactivated'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{user.date}</td>
                      <td>
                        {user.status === 'Active' ? (
                          <button className="premium-action-btn premium-action-btn--reject" onClick={() => handleStatusChange(user.id, 'Deactivated')}>Deactivate</button>
                        ) : user.status === 'Deactivated' ? (
                          <button className="premium-action-btn premium-action-btn--approve" onClick={() => handleStatusChange(user.id, 'Active')}>Reactivate</button>
                        ) : (
                          <button className="premium-action-btn premium-action-btn--approve" onClick={() => handleStatusChange(user.id, 'Active')}>Approve</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </main>
    </div>
  );
};
