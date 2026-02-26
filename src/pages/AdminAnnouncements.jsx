import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Megaphone } from 'lucide-react';

export const AdminAnnouncements = () => {
  const navigate = useNavigate();
  const [announcementDraft, setAnnouncementDraft] = useState('');
  const [announcementPublishing, setAnnouncementPublishing] = useState(false);
  const [audience, setAudience] = useState('All Students');
  const [priority, setPriority] = useState('Normal');
  const [announcements, setAnnouncements] = useState([
    { id: 1, message: 'End-semester examination resource pack now available for all departments. Access study guides, past papers and revision notes.', date: '26 Feb 2026', audience: 'All Students', priority: 'High' },
    { id: 2, message: 'New Deep Learning with PyTorch video series uploaded — 12 lectures covering CNNs, RNNs, and Transformers.', date: '25 Feb 2026', audience: 'Computer Science', priority: 'Normal' },
    { id: 3, message: 'Library portal will undergo scheduled maintenance on Saturday, 1 Mar 2026 from 2:00 AM to 5:00 AM IST.', date: '24 Feb 2026', audience: 'All Students', priority: 'High' },
    { id: 4, message: 'Circuit Theory and Signal Processing lab manuals updated with new experiment procedures.', date: '23 Feb 2026', audience: 'Electronics', priority: 'Normal' },
    { id: 5, message: 'Structural Analysis and Concrete Technology notes revised for the updated syllabus.', date: '22 Feb 2026', audience: 'Civil', priority: 'Normal' },
    { id: 6, message: 'New Thermodynamics and Fluid Mechanics quick-reference sheets added to Mechanical resources.', date: '21 Feb 2026', audience: 'Mechanical', priority: 'Low' },
    { id: 7, message: 'Mid-term resources updated for all departments — includes practice problems and solution sets.', date: '20 Feb 2026', audience: 'All Students', priority: 'High' },
    { id: 8, message: 'Resource request feature now supports file attachments. Students can attach reference materials with their requests.', date: '18 Feb 2026', audience: 'All Students', priority: 'Low' },
  ]);

  const audienceOptions = ['All Students', 'Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Mathematics'];
  const priorityOptions = ['Low', 'Normal', 'High'];

  const handlePublish = () => {
    if (!announcementDraft.trim()) {
      return;
    }
    setAnnouncementPublishing(true);
    setTimeout(() => {
      const newAnnouncement = {
        id: Date.now(),
        message: announcementDraft.trim(),
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        audience,
        priority,
      };
      setAnnouncements((prev) => [newAnnouncement, ...prev]);
      setAnnouncementDraft('');
      setAnnouncementPublishing(false);
    }, 600);
  };

  return (
    <div className="dashboard-wrapper dashboard-wrapper--bottom-nav">
      <main className="dashboard-main dashboard-main--bottom-nav">

        {/* Premium Banner */}
        <div className="admin-page-banner">
          <button type="button" className="banner-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
            <ArrowLeft size={18} />
          </button>
          <div className="banner-icon"><Megaphone size={24} /></div>
          <div className="banner-text">
            <h1>Announcements</h1>
            <p>Send updates to students with clear targeting and priority.</p>
          </div>
        </div>

        {/* Create Announcement Form */}
        <div className="admin-premium-form-card">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-dark)' }}>Create Announcement</h2>
          <form className="admin-form admin-form--announcement">
            <textarea
              placeholder="Write announcement for students..."
              rows="4"
              value={announcementDraft}
              onChange={(event) => setAnnouncementDraft(event.target.value)}
            ></textarea>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <select value={audience} onChange={(event) => setAudience(event.target.value)}>
                  {audienceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <select value={priority} onChange={(event) => setPriority(event.target.value)}>
                  {priorityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="admin-premium-submit-btn"
                  onClick={handlePublish}
                  disabled={announcementPublishing || !announcementDraft.trim()}
                >
                  {announcementPublishing ? 'Publishing...' : 'Publish Announcement'}
                </button>
                <button
                  type="button"
                  className="admin-premium-clear-btn"
                  onClick={() => setAnnouncementDraft('')}
                  disabled={announcementPublishing}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Announcement Feed */}
        <div className="admin-premium-card">
          <div className="card-header">
            <h2>Announcement Feed</h2>
            <p>{announcements.length} announcement{announcements.length !== 1 ? 's' : ''} published</p>
          </div>
          <div className="card-body">
            {announcements.length === 0 ? (
              <div className="admin-empty-state">
                <div className="empty-icon"><Megaphone size={24} /></div>
                <p>No announcements published yet.</p>
              </div>
            ) : (
              announcements.map((item) => (
                <div key={item.id} className="admin-announcement-item">
                  <span className={`ann-priority-dot ann-priority-dot--${item.priority.toLowerCase()}`}></span>
                  <div className="ann-content">
                    <p className="ann-message">{item.message}</p>
                    <div className="ann-meta">
                      <span className="ann-meta-tag ann-meta-tag--audience">{item.audience}</span>
                      <span className={`ann-meta-tag ann-meta-tag--priority-${item.priority.toLowerCase()}`}>{item.priority} priority</span>
                    </div>
                  </div>
                  <span className="ann-date">{item.date}</span>
                </div>
              ))
            )}
          </div>
        </div>

      </main>
    </div>
  );
};
