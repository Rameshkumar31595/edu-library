import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Grid3X3, List, Download, ArrowLeft } from 'lucide-react';
import { DOWNLOADS_DATA } from '../data/studentResourcesData';

export const DownloadsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const statuses = ['All', 'Completed', 'In Progress', 'Failed'];

  const filteredDownloads = useMemo(() => {
    return DOWNLOADS_DATA.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === 'All' || resource.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-entrance heading-premium text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-primary via-teal-700 to-slate-800 bg-clip-text text-transparent">Downloads</h1>
          <p className="heading-entrance heading-entrance-delay-1 text-slate-600 text-lg max-w-2xl leading-relaxed">Track and manage your downloaded resources</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => navigate('/student-dashboard')}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium tracking-wide mb-6 inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft size={16} /> Dashboard
        </button>
        <div className="mb-10">
          <div className="mb-6 max-w-2xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search downloaded resources..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow shadow-sm text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-6">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${selectedStatus === status
                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-800'
                    : 'bg-white text-slate-600 border border-gray-200 hover:bg-slate-50 hover:border-gray-300'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-slate-600 text-sm">
              Showing <span className="font-semibold text-slate-900">{filteredDownloads.length}</span> download
              {filteredDownloads.length !== 1 ? 's' : ''}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-50 text-blue-700' : 'text-slate-400 border border-transparent hover:bg-slate-100 hover:text-slate-600'
                  }`}
                aria-label="Grid view"
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-50 text-blue-700' : 'text-slate-400 border border-transparent hover:bg-slate-100 hover:text-slate-600'
                  }`}
                aria-label="List view"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {filteredDownloads.length > 0 ? (
          <div
            className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4 max-w-5xl'
              }`}
          >
            {filteredDownloads.map((resource) => (
              <DownloadCard key={resource.id} resource={resource} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <Download size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="heading-entrance heading-entrance-card text-xl font-semibold tracking-[-0.01em] text-slate-800 mb-2">No downloads found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

const DownloadCard = ({ resource, viewMode }) => {
  const statusStyle =
    resource.status === 'Completed'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : resource.status === 'In Progress'
        ? 'bg-amber-50 text-amber-700 border-amber-200'
        : 'bg-red-50 text-red-700 border-red-200';

  return (
    <div
      className={`cursor-pointer transition-all duration-300 border border-gray-200 bg-white group hover:border-blue-300 hover:shadow-md ${viewMode === 'grid'
          ? 'rounded-xl overflow-hidden flex flex-col h-full transform hover:-translate-y-1'
          : 'p-6 rounded-xl flex items-start gap-6 hover:translate-x-1'
        }`}
    >
      {viewMode === 'grid' ? (
        <>
          <div className="bg-slate-50 border-b border-gray-100 h-24 flex flex-col items-center justify-center transition-colors group-hover:bg-blue-50/50">
            <div className="transform transition-transform group-hover:scale-110 duration-200">
              {React.cloneElement(resource.icon, { className: "w-10 h-10 text-slate-600" })}
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-block self-start text-xs font-semibold px-2.5 py-1 rounded border border-slate-200 text-slate-600 bg-white shadow-sm">
                {resource.category}
              </span>
              <span className={`text-[0.65rem] uppercase tracking-wider font-bold px-2.5 py-1 rounded border ${statusStyle}`}>
                {resource.status}
              </span>
            </div>
            <h3 className="heading-entrance heading-entrance-card text-[1.075rem] font-semibold tracking-[-0.01em] text-slate-900 mb-2.5 leading-snug group-hover:text-blue-700 transition-colors">{resource.title}</h3>
            <p className="text-sm text-slate-500 mb-5 line-clamp-2 leading-relaxed">{resource.coverage}</p>
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-800">{resource.resources}</span>
              <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-slate-400">Downloaded</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-50/50">
            <div className="transform transition-transform group-hover:scale-110 duration-200">
              {React.cloneElement(resource.icon, { className: "w-8 h-8 text-slate-600" })}
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="heading-entrance heading-entrance-card text-lg font-semibold tracking-[-0.01em] text-slate-900 group-hover:text-blue-700 transition-colors">{resource.title}</h3>
                <span className="text-[0.7rem] uppercase tracking-wide font-semibold px-2 py-0.5 rounded border border-slate-200 text-slate-600 bg-slate-50">
                  {resource.category}
                </span>
                <span className={`text-[0.65rem] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${statusStyle}`}>
                  {resource.status}
                </span>
              </div>
              <p className="text-slate-500 text-sm mb-2">{resource.description}</p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <span>{resource.coverage}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-slate-600">{resource.resources}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
