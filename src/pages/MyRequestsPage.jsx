import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import { MY_REQUESTS_DATA } from '../data/studentResourcesData';

export const MyRequestsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const statuses = ['All', 'Pending', 'Approved', 'Rejected'];

  const filteredRequests = useMemo(() => {
    return MY_REQUESTS_DATA.filter((request) => {
      const matchesSearch =
        request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === 'All' || request.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-entrance heading-premium text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-primary via-teal-700 to-slate-800 bg-clip-text text-transparent">My Requests</h1>
          <p className="heading-entrance heading-entrance-delay-1 text-slate-600 text-lg max-w-2xl leading-relaxed">Track your submitted resource requests</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => navigate('/student-dashboard')}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium tracking-wide mb-6 inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft size={16} /> Dashboard
        </button>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="mb-8">
            <div className="mb-6 max-w-2xl">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search your requests..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow shadow-sm text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-6">
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

            <p className="text-slate-600 text-sm">
              Showing <span className="font-semibold text-slate-900">{filteredRequests.length}</span> request
              {filteredRequests.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredRequests.length > 0 ? (
            <div className="space-y-4">
              {filteredRequests.map((request) => (
                <RequestItem key={request.id} request={request} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-slate-500 text-lg font-medium mb-2">No requests found</p>
              <p className="text-slate-400 text-sm">Try adjusting your search query or category filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RequestItem = ({ request }) => {
  const statusStyle =
    request.status === 'Approved'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : request.status === 'Pending'
        ? 'bg-amber-50 text-amber-700 border-amber-200'
        : 'bg-red-50 text-red-700 border-red-200';

  return (
    <div className="border border-gray-200 bg-white rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300 group flex items-start justify-between cursor-default">
      <div className="flex-1 pr-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
          <h3 className="heading-entrance heading-entrance-card text-lg font-semibold tracking-[-0.01em] text-slate-900 group-hover:text-blue-700 transition-colors">{request.title}</h3>
          <span className={`self-start sm:self-auto text-[0.65rem] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${statusStyle}`}>
            {request.status}
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-4 leading-relaxed">{request.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <span className="inline-block px-2.5 py-1 rounded border border-slate-200 text-slate-600 bg-slate-50 shadow-sm">
            {request.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-slate-500">Submitted: {request.submittedDate}</span>
        </div>
      </div>
    </div>
  );
};
