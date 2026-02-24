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
  ];

  const dummyResources = {
    PDFs,
    Documents,
    Videos,
  };

  const barColors = ['#0f766e', '#2563eb', '#f97316'];

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
          <h1 className="heading-entrance heading-premium">Resources Analytics</h1>
          <p className="heading-entrance heading-entrance-delay-1">Overview of resource distribution by type</p>
        </section>

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
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};
