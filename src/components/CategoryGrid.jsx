import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Microscope,
  Lightbulb,
  GraduationCap,
  Scale,
  Briefcase,
  Music,
  Globe,
} from 'lucide-react';

export const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'School Textbooks',
      icon: GraduationCap,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      count: '2,450+',
      description: 'NCERT & State Board Books',
    },
    {
      id: 2,
      name: 'Engineering',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      count: '1,890+',
      description: 'Technical & Professional',
    },
    {
      id: 3,
      name: 'Science & Research',
      icon: Microscope,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      count: '3,120+',
      description: 'Research Papers & Journals',
    },
    {
      id: 4,
      name: 'Humanities',
      icon: BookOpen,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      count: '2,890+',
      description: 'History & Cultural Studies',
    },
    {
      id: 5,
      name: 'Law & Legal',
      icon: Scale,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      count: '856+',
      description: 'Legal Documents & Cases',
    },
    {
      id: 6,
      name: 'Literature',
      icon: Lightbulb,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      count: '4,230+',
      description: 'Fiction & Poetry',
    },
    {
      id: 7,
      name: 'Arts & Culture',
      icon: Music,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      count: '1,560+',
      description: 'Music, Arts & Design',
    },
    {
      id: 8,
      name: 'Languages',
      icon: Globe,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      count: '2,100+',
      description: 'Multilingual Resources',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-entrance heading-premium text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Explore by Discipline
          </h2>
          <p className="heading-entrance heading-entrance-delay-1 text-gray-600 text-lg max-w-2xl mx-auto">
            Browse through our comprehensive collection organized by subject areas and disciplines
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`${category.bgColor} rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="heading-entrance heading-entrance-card text-xl font-semibold tracking-[-0.01em] text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                {/* Count Badge */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-teal-900">
                    {category.count}
                  </p>
                  <p className="text-xs text-gray-500">Resources Available</p>
                </div>

                {/* Hover Effect - Arrow */}
                <div className="mt-4 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Explore →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <Link
            to="/catalogs"
            className="inline-block px-8 py-3 bg-teal-900 text-white rounded-lg hover:bg-teal-800 transition font-semibold shadow-md hover:shadow-lg"
          >
            Browse All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};
