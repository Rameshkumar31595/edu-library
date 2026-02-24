import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const AdminAnnouncements = () => {
  const navigate = useNavigate();
  const [announcementDraft, setAnnouncementDraft] = useState('');
  const [announcementPublishing, setAnnouncementPublishing] = useState(false);
  const [audience, setAudience] = useState('All Students');
  const [priority, setPriority] = useState('Normal');
  const [announcements, setAnnouncements] = useState([
    { id: 1, message: 'Mid-term resources updated for all departments.', date: '21 Feb 2026', audience: 'All Students', priority: 'High' },
    { id: 2, message: 'New video series for Data Structures is now live.', date: '19 Feb 2026', audience: 'Computer Science', priority: 'Normal' },
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
        <section className="dashboard-welcome admin-welcome">
          <button
            type="button"
            className="mb-3 inline-flex items-center justify-center rounded-lg border border-teal-200 bg-teal-50 p-2 text-teal-700 transition-colors hover:bg-teal-100"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="heading-entrance heading-premium">Announcements</h1>
          <p className="heading-entrance heading-entrance-delay-1">Send updates to students with clear targeting and priority.</p>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title heading-entrance heading-premium">Create Announcement</h2>
          <div className="announcement-form-card">
            <form className="admin-form admin-form--announcement">
              <textarea
                placeholder="Write announcement for students..."
                className="admin-textarea"
                rows="4"
                value={announcementDraft}
                onChange={(event) => setAnnouncementDraft(event.target.value)}
              ></textarea>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <select className="admin-input" value={audience} onChange={(event) => setAudience(event.target.value)}>
                    {audienceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <select className="admin-input" value={priority} onChange={(event) => setPriority(event.target.value)}>
                    {priorityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="admin-submit-btn"
                    onClick={handlePublish}
                    disabled={announcementPublishing || !announcementDraft.trim()}
                  >
                    {announcementPublishing ? 'Publishing...' : 'Publish Announcement'}
                  </button>
                  <button
                    type="button"
                    className="admin-cancel-btn"
                    onClick={() => setAnnouncementDraft('')}
                    disabled={announcementPublishing}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title heading-entrance heading-premium">Announcement Feed</h2>
          <div className="admin-action-card">
            {announcements.length === 0 ? (
              <p className="text-sm text-slate-500">No announcements published yet.</p>
            ) : (
              <div className="insight-list">
                {announcements.map((item) => (
                  <div key={item.id} className="insight-item">
                    <div>
                      <p className="insight-title">{item.message}</p>
                      <p className="insight-meta">{item.audience} · {item.priority} priority</p>
                    </div>
                    <span className="insight-time">{item.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
