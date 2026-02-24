import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Video } from 'lucide-react';
import { videoLibrary } from '../data/videoLibrary.js';

export const VideoPlayerPage = () => {
  const { slug } = useParams();
  const video = videoLibrary.find((item) => item.slug === slug);

  if (!video) {
    return (
      <div className="dashboard-wrapper dashboard-wrapper--bottom-nav">
        <main className="dashboard-main dashboard-main--bottom-nav">
          <section className="dashboard-section">
            <h1 className="heading-entrance heading-premium">Video Not Found</h1>
            <p className="mt-3 text-sm text-slate-600">
              This video is unavailable. Return to the resources catalog to pick another session.
            </p>
            <Link
              to="/resources-analytics"
              className="mt-6 inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
            >
              Back to Resources
            </Link>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper dashboard-wrapper--bottom-nav">
      <main className="dashboard-main dashboard-main--bottom-nav">
        <section className="dashboard-section">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Video size={22} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">{video.title}</h1>
                <p className="mt-1 text-sm text-slate-600">{video.subject}</p>
              </div>
            </div>
            <Link
              to="/resources-analytics"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
            >
              Back to Resources
            </Link>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
            <video className="w-full rounded-2xl bg-slate-900" controls>
              <source src={video.mediaUrl} type="video/mp4" />
            </video>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {video.subject}
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                {video.level}
              </span>
              <span className="text-xs font-semibold text-slate-500">{video.duration}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};