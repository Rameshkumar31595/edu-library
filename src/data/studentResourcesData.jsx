import React from 'react';
import { Book, Zap, Radio, Laptop, TestTube, BookOpen } from 'lucide-react';

export const SAVED_RESOURCES_DATA = [
  {
    id: 1,
    title: 'Advanced Data Structures',
    category: 'Computer Science',
    coverage: 'Semester 4',
    icon: <Book className="w-12 h-12 text-teal-600 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />,
    description: 'Trees, graphs, and hashing complete reference',
    resources: '48+',
  },
  {
    id: 2,
    title: 'Thermodynamics Notes',
    category: 'Mechanical Engg.',
    coverage: 'Semester 3',
    icon: <Zap className="w-12 h-12 text-orange-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />,
    description: 'Laws of thermodynamics and practical applications',
    resources: '32+',
  },
  {
    id: 3,
    title: 'Digital Signal Processing',
    category: 'Electronics',
    coverage: 'Semester 5',
    icon: <Radio className="w-12 h-12 text-indigo-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />,
    description: 'Signal transforms and filter design resources',
    resources: '56+',
  },
];

export const DOWNLOADS_DATA = [
  {
    id: 1,
    title: 'Software Engineering Handbook',
    category: 'Computer Science',
    coverage: 'Unit-wise',
    icon: <Laptop className="w-12 h-12 text-blue-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />,
    description: 'Software lifecycle, design patterns and testing',
    resources: '1 file',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Control Systems Workbook',
    category: 'Electronics',
    coverage: 'Practice set',
    icon: <Zap className="w-12 h-12 text-yellow-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />,
    description: 'Feedback systems and response analysis workbook',
    resources: '3 files',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Fluid Mechanics Lab Guide',
    category: 'Mechanical Engg.',
    coverage: 'Lab manual',
    icon: <TestTube className="w-12 h-12 text-green-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />,
    description: 'Lab procedures and experiment documentation',
    resources: '2 files',
    status: 'Completed',
  },
];

export const MY_REQUESTS_DATA = [
  {
    id: 1,
    title: 'Advanced Machine Learning Textbook',
    category: 'Computer Science',
    description: 'Looking for comprehensive ML textbooks covering deep learning and neural networks',
    submittedDate: '15 May 2024',
    status: 'Approved',
  },
  {
    id: 2,
    title: 'VLSI Design Reference',
    category: 'Electronics',
    description: 'Need VLSI design materials including circuit design and fabrication processes',
    submittedDate: '10 May 2024',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'CAM/CNC Programming Guide',
    category: 'Mechanical Engg.',
    description: 'Request for CAM and CNC machine programming educational materials',
    submittedDate: '5 May 2024',
    status: 'Approved',
  },
];
