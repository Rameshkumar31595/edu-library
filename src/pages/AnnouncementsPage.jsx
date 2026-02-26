import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { translate } from '../translations/index.js';

const ANNOUNCEMENTS = [
  { date: '26 Feb 2026', message: 'End-semester exam resource packs now available for all departments',            priority: 'high',   category: 'Academic' },
  { date: '25 Feb 2026', message: 'New Deep Learning & AI video series uploaded to Computer Science',              priority: 'normal', category: 'Resources' },
  { date: '24 Feb 2026', message: 'Scheduled maintenance on Saturday 1 Mar 2026 from 2AM–5AM IST',                priority: 'medium', category: 'System' },
  { date: '23 Feb 2026', message: 'Library hours extended till 11PM during exam preparation week',                  priority: 'high',   category: 'Library' },
  { date: '22 Feb 2026', message: 'Research paper submission deadline extended to 15 Mar 2026',                     priority: 'high',   category: 'Academic' },
  { date: '21 Feb 2026', message: 'New journals added: IEEE, ACM, Springer & Elsevier collections',                priority: 'normal', category: 'Resources' },
  { date: '20 Feb 2026', message: 'Resource request feature now supports file attachments',                         priority: 'normal', category: 'Feature' },
  { date: '18 Feb 2026', message: 'Inter-department project collaboration portal opens next week',                  priority: 'medium', category: 'Academic' },
  { date: '16 Feb 2026', message: 'Faculty upload portal improvements — faster processing & better search',        priority: 'normal', category: 'Feature' },
  { date: '14 Feb 2026', message: 'Guest lecture recordings from Tech Fest 2026 now available',                     priority: 'normal', category: 'Resources' },
  { date: '12 Feb 2026', message: 'Mid-term resources updated for Computer Science and Electronics departments',   priority: 'high',   category: 'Academic' },
  { date: '10 Feb 2026', message: 'New mobile-friendly interface for browsing resources on the go',                 priority: 'medium', category: 'Feature' },
];

const PRIORITY_CONFIG = {
  high:   { label: 'Urgent',  icon: <AlertCircle  size={15} />, dot: 'bg-red-500',    badge: 'bg-red-100 text-red-700 border-red-200',    border: 'border-red-500',    bg: 'bg-red-50'    },
  medium: { label: 'Notice',  icon: <AlertTriangle size={15} />,dot: 'bg-orange-400', badge: 'bg-orange-100 text-orange-700 border-orange-200', border: 'border-orange-400', bg: 'bg-orange-50' },
  normal: { label: 'Info',    icon: <Info          size={15} />, dot: 'bg-teal-500',   badge: 'bg-teal-100 text-teal-700 border-teal-200',   border: 'border-teal-500',   bg: 'bg-white'     },
};

export const AnnouncementsPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const urgentCount = ANNOUNCEMENTS.filter(a => a.priority === 'high').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-teal-900 to-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/student-dashboard')}
            className="mb-5 inline-flex items-center gap-1.5 text-teal-200 text-sm font-medium hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            {translate('backToDashboard', language)}
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/15 border border-white/20">
              <Bell size={20} />
            </div>
            <h1 className="heading-entrance heading-premium text-4xl md:text-5xl font-bold leading-tight">{translate('announcementsPageTitle', language)}</h1>
          </div>
          <p className="heading-entrance heading-entrance-delay-1 text-teal-100 text-lg">
            {translate('stayUpdated', language)}
            {urgentCount > 0 && (
              <span className="ml-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold">
                {urgentCount} {translate('urgentLabel', language).toLowerCase()}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-4">
        {ANNOUNCEMENTS.map((a, idx) => {
          const cfg = PRIORITY_CONFIG[a.priority];
          const priorityLabels = { high: translate('urgentLabel', language), medium: translate('noticeLabel', language), normal: translate('infoLabel', language) };
          return (
            <div
              key={idx}
              className={`flex items-start gap-4 rounded-xl border-l-4 ${cfg.border} ${cfg.bg} border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className={`flex-shrink-0 mt-0.5 flex items-center justify-center h-8 w-8 rounded-lg border ${cfg.badge}`}>
                {cfg.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cfg.badge}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                    {priorityLabels[a.priority]}
                  </span>
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{a.category}</span>
                </div>
                <p className="text-slate-800 text-sm leading-relaxed font-medium">{a.message}</p>
                <p className="text-xs text-slate-400 mt-1">{a.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

