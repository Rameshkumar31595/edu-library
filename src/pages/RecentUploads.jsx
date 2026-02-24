import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
    { id: 1, title: 'React Hooks Guide', type: 'PDF', department: 'Computer Science', status: 'Published', uploader: 'Admin Team', date: '24 Feb 2026', time: '09:10 AM' },
    { id: 2, title: 'Circuit Theory Lab Pack', type: 'Document', department: 'Electronics', status: 'Published', uploader: 'Ravi Kumar', date: '24 Feb 2026', time: '08:40 AM' },
    { id: 3, title: 'Thermodynamics Sprint', type: 'Video', department: 'Mechanical', status: 'Queued', uploader: 'Admin Team', date: '23 Feb 2026', time: '06:15 PM' },
    { id: 4, title: 'Calculus Revision Sheet', type: 'PDF', department: 'Mathematics', status: 'Published', uploader: 'Priya Singh', date: '23 Feb 2026', time: '02:30 PM' },
    { id: 5, title: 'Structural Design Template', type: 'Document', department: 'Civil', status: 'Flagged', uploader: 'Admin Team', date: '22 Feb 2026', time: '05:05 PM' },
    { id: 6, title: 'Data Structures Crash Course', type: 'Video', department: 'Computer Science', status: 'Published', uploader: 'Nikhil Rao', date: '22 Feb 2026', time: '11:10 AM' },
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

  return (
    <div className="dashboard-wrapper dashboard-wrapper--bottom-nav">
      <main className="dashboard-main dashboard-main--bottom-nav">
        <section className="dashboard-welcome admin-welcome">
          <button
            type="button"
            className="mb-3 inline-flex items-center justify-center rounded-lg border border-teal-200 bg-teal-50 p-2 text-teal-700 transition-colors hover:bg-teal-100"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="heading-entrance heading-premium">Recent Uploads Log</h1>
          <p className="heading-entrance heading-entrance-delay-1">Track new resources, queue status, and flagged items.</p>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title heading-entrance heading-premium">Upload Activity</h2>
          <div className="admin-action-card">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="heading-entrance heading-entrance-card heading-premium">Filters</h3>
                <p className="text-sm text-slate-500">Refine uploads by type, department, and status.</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
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
            </div>

            {filteredUploads.length === 0 ? (
              <div className="mt-6 rounded-xl border border-dashed border-gray-200 p-6 text-center text-slate-500">
                No uploads match your filters.
              </div>
            ) : (
              <div className="resource-table-wrapper mt-6">
                <table className="resource-table">
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
                        <td className="resource-title">{upload.title}</td>
                        <td>{upload.department}</td>
                        <td><span className="resource-badge">{upload.type}</span></td>
                        <td>
                          <span className={`status-badge ${upload.status === 'Published' ? 'status-approved' : upload.status === 'Queued' ? 'status-pending' : 'status-rejected'}`}>
                            {upload.status}
                          </span>
                        </td>
                        <td>{upload.uploader}</td>
                        <td className="text-muted">{upload.date} · {upload.time}</td>
                        <td>
                          {upload.status === 'Flagged' ? (
                            <button className="action-link" onClick={() => handleResolveFlag(upload.id)}>Resolve</button>
                          ) : (
                            <button className="action-link action-link--reject" onClick={() => handleRequeueUpload(upload.id)}>Requeue</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
