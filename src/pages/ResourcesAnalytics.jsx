<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const ResourcesAnalytics = () => {
  const navigate = useNavigate();
  const { section } = useParams();
  const activeSection = section || 'resources';
  const sectionHeading = {
    resources: 'Resources Analytics',
    users: 'User Analytics',
    requests: 'Requests Analytics',
    uploads: 'Uploads Analytics',
  };
  const sectionSubheading = {
    resources: 'Interactive insights for resource distribution and engagement.',
    users: 'Demographic trends for active student users.',
    requests: 'Request status trends and approval flow insights.',
    uploads: 'Recent upload volume and activity trends.',
  };
  const [selectedType, setSelectedType] = useState('PDF');
  const [activeResourceSlice, setActiveResourceSlice] = useState(0);
  const [activeGenderSlice, setActiveGenderSlice] = useState(0);

  const resourceStats = [
    { name: 'PDF', count: 648 },
    { name: 'Document', count: 428 },
    { name: 'Video', count: 234 },
=======
import React, { useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FileText, Folder, Video } from 'lucide-react';
import { Documents, PDFs, Videos } from '../data/resourcesCatalog.js';

export const ResourcesAnalytics = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const resourceStats = [
    { name: 'PDFs', count: PDFs.length },
    { name: 'Documents', count: Documents.length },
    { name: 'Videos', count: Videos.length },
>>>>>>> 7badabef714ae87a373a8ee4ed3e7e4a508f7bd7
  ];

  const resourceColors = ['#0f766e', '#2563eb', '#f97316'];

  const dummyResources = {
<<<<<<< HEAD
    PDF: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `PDF Resource ${i + 1}`,
    })),
    Document: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Document Resource ${i + 1}`,
    })),
    Video: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Video Resource ${i + 1}`,
    })),
=======
    PDFs,
    Documents,
    Videos,
>>>>>>> 7badabef714ae87a373a8ee4ed3e7e4a508f7bd7
  };

  const userGenderStats = [
    { name: 'Female', value: 54 },
    { name: 'Male', value: 41 },
    { name: 'Other', value: 5 },
  ];

  const userAgeStats = [
    { group: '18-20', count: 140 },
    { group: '21-23', count: 210 },
    { group: '24-26', count: 120 },
    { group: '27-30', count: 60 },
  ];

  const requestStatusStats = [
    { status: 'Pending', count: 12 },
    { status: 'Approved', count: 48 },
    { status: 'Rejected', count: 6 },
  ];

  const recentUploadsStats = [
    { day: 'Mon', uploads: 6 },
    { day: 'Tue', uploads: 9 },
    { day: 'Wed', uploads: 5 },
    { day: 'Thu', uploads: 8 },
    { day: 'Fri', uploads: 12 },
    { day: 'Sat', uploads: 7 },
    { day: 'Sun', uploads: 4 },
  ];

  const totalResources = useMemo(
    () => resourceStats.reduce((sum, item) => sum + item.count, 0),
    [resourceStats]
  );

  const renderActiveSlice = (props) => {
    const {
      cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent,
    } = props;
    return (
      <g>
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#0f172a" className="text-sm font-semibold">
          {payload.name}
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill="#64748b" className="text-xs">
          {`${Math.round(percent * 100)}%`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 8}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={outerRadius + 10}
          outerRadius={outerRadius + 16}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={0.2}
        />
      </g>
    );
  };

  const categoryCards = [
    {
      key: 'PDFs',
      title: 'PDFs',
      description: 'Lecture notes, guides, and study packs.',
      count: `${PDFs.length} ITEMS`,
      icon: FileText,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      key: 'Documents',
      title: 'Documents',
      description: 'Policies, syllabi, and official docs.',
      count: `${Documents.length} ITEMS`,
      icon: Folder,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      key: 'Videos',
      title: 'Videos',
      description: 'Recorded lectures and walkthroughs.',
      count: `${Videos.length} ITEMS`,
      icon: Video,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ];

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
          <h1 className="heading-entrance heading-premium">{sectionHeading[activeSection] || 'Analytics'}</h1>
          <p className="heading-entrance heading-entrance-delay-1">
            {sectionSubheading[activeSection] || 'Interactive analytics overview.'}
          </p>
        </section>

<<<<<<< HEAD
        {activeSection === 'resources' && (
          <section className="dashboard-section">
            <h2 className="section-title heading-entrance heading-premium">Resource Breakdown</h2>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={resourceStats}
                        dataKey="count"
                        nameKey="name"
                        innerRadius={70}
                        outerRadius={110}
                        activeIndex={activeResourceSlice}
                        activeShape={renderActiveSlice}
                        onMouseEnter={(_, index) => setActiveResourceSlice(index)}
                        onClick={(data) => setSelectedType(data?.name || selectedType)}
                      >
                        {resourceStats.map((entry, index) => (
                          <Cell key={entry.name} fill={resourceColors[index % resourceColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} items`, 'Resources']} />
                      <Legend verticalAlign="bottom" height={24} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">Total Resources</p>
                      <p className="text-2xl font-semibold text-slate-900">{totalResources}</p>
                    </div>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">Live demo</span>
=======
        <section className="dashboard-section">
          <h2 className="section-title heading-entrance heading-premium">Resource Breakdown</h2>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resourceStats}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    cursor="pointer"
                    isAnimationActive={true}
                    animationDuration={900}
                    onClick={(data) => setSelectedCategory(data?.payload?.name || null)}
                  >
                    {resourceStats.map((entry, index) => (
                      <Cell key={entry.name} fill={barColors[index % barColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title heading-entrance heading-premium">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setSelectedCategory(card.key)}
                  className="group text-left rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${card.bg} ${card.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                  <p className="mt-4 text-xs font-semibold tracking-widest text-slate-500">{card.count}</p>
                </button>
              );
            })}
          </div>
        </section>

        {selectedCategory && (
          <section className="dashboard-section">
            <h2 className="section-title heading-entrance heading-premium">
              {selectedCategory} Resources
            </h2>
            {selectedCategory === 'PDFs' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyResources.PDFs.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <FileText size={20} />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">{item.size}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {item.subject}
                      </span>
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                        {item.level}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-slate-500">PDF</span>
                      <a
                        href={item.url}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                        download
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedCategory === 'Documents' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyResources.Documents.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Folder size={20} />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">{item.size}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {item.subject}
                      </span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.type}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Document</span>
                      <a
                        href={item.url}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                        download
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedCategory === 'Documents' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyResources.Documents.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Folder size={20} />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">{item.size}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {item.subject}
                      </span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.type}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Document</span>
                      <a
                        href={item.url}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                        download
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : selectedCategory === 'Videos' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyResources.Videos.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                          <Video size={20} />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">{item.duration}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {item.subject}
                      </span>
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                        {item.level}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Video</span>
                      <a
                        href={`/videos/${item.slug}`}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
                      >
                        Play
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyResources[selectedCategory].map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg"
                  >
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
>>>>>>> 7badabef714ae87a373a8ee4ed3e7e4a508f7bd7
                  </div>
                  <div className="mt-5 space-y-2">
                    <h3 className="text-sm font-semibold text-slate-900">{selectedType} Resources</h3>
                    {dummyResources[selectedType]?.map((item) => (
                      <div key={item.id} className="rounded-lg border border-gray-100 bg-white px-4 py-3 text-sm text-slate-700">
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            </div>
          </section>
        )}

        {activeSection === 'users' && (
          <section className="dashboard-section">
            <h2 className="section-title heading-entrance heading-premium">User Demographics</h2>
            <div className="insight-grid">
              <div className="insight-panel">
                <h3 className="heading-entrance heading-entrance-card heading-premium">Gender Split</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userGenderStats}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        outerRadius={95}
                        activeIndex={activeGenderSlice}
                        activeShape={renderActiveSlice}
                        onMouseEnter={(_, index) => setActiveGenderSlice(index)}
                      >
                        {userGenderStats.map((entry, index) => (
                          <Cell key={entry.name} fill={resourceColors[index % resourceColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="insight-panel">
                <h3 className="heading-entrance heading-entrance-card heading-premium">Age Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userAgeStats} barSize={32}>
                      <XAxis dataKey="group" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                        {userAgeStats.map((entry, index) => (
                          <Cell key={entry.group} fill={resourceColors[index % resourceColors.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'requests' && (
          <section className="dashboard-section">
            <h2 className="section-title heading-entrance heading-premium">Request Status</h2>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={requestStatusStats} barSize={36}>
                    <XAxis dataKey="status" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                      {requestStatusStats.map((entry, index) => (
                        <Cell key={entry.status} fill={resourceColors[index % resourceColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <button
                type="button"
                onClick={() => navigate('/requests-log')}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-100"
              >
                View pending requests
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        )}

        {activeSection === 'uploads' && (
          <section className="dashboard-section">
            <h2 className="section-title heading-entrance heading-premium">Recent Uploads</h2>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={recentUploadsStats} barSize={28}>
                    <XAxis dataKey="day" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="uploads" radius={[10, 10, 0, 0]} fill="#0f766e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <button
                type="button"
                onClick={() => navigate('/recent-uploads')}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-100"
              >
                Open upload logs
                <span aria-hidden="true">→</span>
              </button>
            </div>
=======
            )}
>>>>>>> 7badabef714ae87a373a8ee4ed3e7e4a508f7bd7
          </section>
        )}
      </main>
    </div>
  );
};
