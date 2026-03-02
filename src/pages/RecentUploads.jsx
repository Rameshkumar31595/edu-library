import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle2, Clock, AlertTriangle, FileText } from 'lucide-react';

export const RecentUploads = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [deptFilter, setDeptFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const typeOptions = ['PDF', 'Video', 'Document'];
  const departmentOptions = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Mathematics'];
  const statusOptions = ['Published', 'Queued', 'Flagged'];

  const [uploads, setUploads] = useState([
    { id: 1, title: 'Deep Learning with PyTorch', type: 'Video', department: 'Computer Science', status: 'Published', uploader: 'Admin Team', date: '26 Feb 2026', time: '10:15 AM' },
    { id: 2, title: 'DevOps & CI/CD Pipeline', type: 'Video', department: 'Computer Science', status: 'Published', uploader: 'Admin Team', date: '26 Feb 2026', time: '09:40 AM' },
    { id: 3, title: 'Network Security Fundamentals', type: 'PDF', department: 'Computer Science', status: 'Published', uploader: 'Dr. Sanjay Nair', date: '25 Feb 2026', time: '03:20 PM' },
    { id: 4, title: 'Embedded Systems Programming', type: 'Video', department: 'Electronics', status: 'Published', uploader: 'Admin Team', date: '25 Feb 2026', time: '11:45 AM' },
    { id: 5, title: 'React Hooks Guide', type: 'PDF', department: 'Computer Science', status: 'Published', uploader: 'Admin Team', date: '24 Feb 2026', time: '09:10 AM' },
    { id: 6, title: 'Circuit Theory Lab Pack', type: 'Document', department: 'Electronics', status: 'Published', uploader: 'Ravi Kumar', date: '24 Feb 2026', time: '08:40 AM' },
    { id: 7, title: 'Probability & Statistics', type: 'PDF', department: 'Mathematics', status: 'Published', uploader: 'Priya Singh', date: '23 Feb 2026', time: '04:30 PM' },
    { id: 8, title: 'Thermodynamics Sprint', type: 'Video', department: 'Mechanical', status: 'Queued', uploader: 'Admin Team', date: '23 Feb 2026', time: '06:15 PM' },
    { id: 9, title: 'Calculus Revision Sheet', type: 'PDF', department: 'Mathematics', status: 'Published', uploader: 'Priya Singh', date: '23 Feb 2026', time: '02:30 PM' },
    { id: 10, title: 'AutoCAD Design Guide', type: 'Document', department: 'Mechanical', status: 'Queued', uploader: 'Admin Team', date: '22 Feb 2026', time: '05:50 PM' },
    { id: 11, title: 'Structural Design Template', type: 'Document', department: 'Civil', status: 'Flagged', uploader: 'Admin Team', date: '22 Feb 2026', time: '05:05 PM' },
    { id: 12, title: 'Data Structures Crash Course', type: 'Video', department: 'Computer Science', status: 'Published', uploader: 'Nikhil Rao', date: '22 Feb 2026', time: '11:10 AM' },
    { id: 13, title: 'Control Systems Engineering', type: 'PDF', department: 'Electronics', status: 'Published', uploader: 'Dr. Sanjay Nair', date: '21 Feb 2026', time: '02:15 PM' },
    { id: 14, title: 'Compiler Design Notes', type: 'PDF', department: 'Computer Science', status: 'Flagged', uploader: 'Arjun Verma', date: '20 Feb 2026', time: '10:30 AM' },
  ]);

  const filteredUploads = useMemo(() => {
    return uploads.filter((upload) => {
      const matchesSearch = upload.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === 'All' || upload.type === typeFilter;
      const matchesDepartment = deptFilter === 'All' || upload.department === deptFilter;
      const matchesStatus = statusFilter === 'All' || upload.status === statusFilter;
      return matchesSearch && matchesType && matchesDepartment && matchesStatus;
    });
  }, [uploads, search, typeFilter, deptFilter, statusFilter]);

  const handleResolveFlag = (uploadId) => {
    setUploads((prev) => prev.map((upload) => (
      upload.id === uploadId
        ? { ...upload, status: 'Published' }
        : upload
    )));
  };

  const handleRequeueUpload = (uploadId) => {
    setUploads((prev) => prev.map((upload) => (
      upload.id === uploadId
        ? { ...upload, status: 'Queued' }
        : upload
    )));
  };

  const totalUploads = uploads.length;
  const publishedCount = uploads.filter(u => u.status === 'Published').length;
  const queuedCount = uploads.filter(u => u.status === 'Queued').length;
  const flaggedCount = uploads.filter(u => u.status === 'Flagged').length;

  return (
    <div className="dashboard-wrapper dashboard-wrapper--bottom-nav">
      <main className="dashboard-main dashboard-main--bottom-nav">

        {/* Premium Banner */}
        <div className="admin-page-banner">
          <button type="button" className="banner-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
            <ArrowLeft size={18} />
          </button>
          <div className="banner-icon"><Upload size={24} /></div>
          <div className="banner-text">
            <h1>Recent Uploads Log</h1>
            <p>Track new resources, queue status, and flagged items.</p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="admin-summary-row">
          <div className="admin-summary-card">
            <span className="summary-label">Total Uploads</span>
            <span className="summary-value">{totalUploads}</span>
            <FileText size={28} className="summary-icon" />
          </div>
          <div className="admin-summary-card">
            <span className="summary-label">Published</span>
            <span className="summary-value">{publishedCount}</span>
            <CheckCircle2 size={28} className="summary-icon" />
          </div>
          <div className="admin-summary-card">
            <span className="summary-label">Queued</span>
            <span className="summary-value">{queuedCount}</span>
            <Clock size={28} className="summary-icon" />
          </div>
          <div className="admin-summary-card">
            <span className="summary-label">Flagged</span>
            <span className="summary-value">{flaggedCount}</span>
            <AlertTriangle size={28} className="summary-icon" />
          </div>
        </div>

        {/* Premium Table Card */}
        <div className="admin-premium-card">
          <div className="card-header">
            <h2>Upload Activity</h2>
            <p>Refine uploads by type, department, and status.</p>
          </div>
          <div className="card-filters">
            <input
              type="text"
              className="admin-input"
              placeholder="Search uploads"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <select className="admin-input" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
              <option value="All">All Types</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select className="admin-input" value={deptFilter} onChange={(event) => setDeptFilter(event.target.value)}>
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
            {filteredUploads.length === 0 ? (
              <div className="admin-empty-state">
                <div className="empty-icon"><Upload size={24} /></div>
                <p>No uploads match your filters.</p>
              </div>
            ) : (
              <table className="admin-premium-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Department</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Uploader</th>
                    <th>Timestamp</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUploads.map((upload) => (
                    <tr key={upload.id}>
                      <td className="cell-name">{upload.title}</td>
                      <td>{upload.department}</td>
                      <td><span className="premium-badge premium-badge--type">{upload.type}</span></td>
                      <td>
                        <span className={`premium-badge ${upload.status === 'Published' ? 'premium-badge--published' : upload.status === 'Queued' ? 'premium-badge--queued' : 'premium-badge--flagged'}`}>
                          {upload.status}
                        </span>
                      </td>
                      <td>{upload.uploader}</td>
                      <td style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{upload.date} · {upload.time}</td>
                      <td>
                        {upload.status === 'Flagged' ? (
                          <button className="premium-action-btn premium-action-btn--resolve" onClick={() => handleResolveFlag(upload.id)}>Resolve</button>
                        ) : (
                          <button className="premium-action-btn premium-action-btn--reject" onClick={() => handleRequeueUpload(upload.id)}>Requeue</button>
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
