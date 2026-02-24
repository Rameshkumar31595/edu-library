const fs = require('fs');

// 1. Update Student Resources Data
let dataPath = './src/data/studentResourcesData.js';
let dataContent = fs.readFileSync(dataPath, 'utf8');

if (!dataContent.includes('lucide-react')) {
    dataContent = `import React from 'react';\nimport { Book, BookOpen, FileCode, Zap, Radio, Laptop, TestTube, FileText } from 'lucide-react';\n\n` + dataContent;
}

dataContent = dataContent
    .replace(/icon: '📘'/g, 'icon: <Book className=\"w-12 h-12 text-teal-600 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300\" />')
    .replace(/icon: '🔥'/g, 'icon: <Zap className=\"w-12 h-12 text-orange-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300\" />')
    .replace(/icon: '📡'/g, 'icon: <Radio className=\"w-12 h-12 text-indigo-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300\" />')
    .replace(/icon: '💻'/g, 'icon: <Laptop className=\"w-12 h-12 text-blue-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300\" />')
    .replace(/icon: '⚡'/g, 'icon: <Zap className=\"w-12 h-12 text-yellow-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300\" />')
    .replace(/icon: '🧪'/g, 'icon: <TestTube className=\"w-12 h-12 text-green-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300\" />');

fs.writeFileSync(dataPath, dataContent);

// 2. Update StudentDashboard.jsx
let sdPath = './src/pages/StudentDashboard.jsx';
let sdContent = fs.readFileSync(sdPath, 'utf8');

if (!sdContent.includes('lucide-react')) {
    sdContent = sdContent.replace(`import { useNavigate } from 'react-router-dom';`, `import { useNavigate } from 'react-router-dom';\nimport { BookOpen, Save, Download, Mail, Megaphone, LogOut, LayoutDashboard } from 'lucide-react';`);
}

sdContent = sdContent
    .replace('<div className=\"quick-icon\">📚</div>', '<div className=\"quick-icon text-teal-600\"><BookOpen size={40} /></div>')
    .replace('<div className=\"quick-icon\">💾</div>', '<div className=\"quick-icon text-teal-600\"><Save size={40} /></div>')
    .replace('<div className=\"quick-icon\">📥</div>', '<div className=\"quick-icon text-teal-600\"><Download size={40} /></div>')
    .replace('<div className=\"quick-icon\">✉️</div>', '<div className=\"quick-icon text-teal-600\"><Mail size={40} /></div>')
    .replace('<span className=\"nav-icon\">📊</span>', '<span className=\"nav-icon\"><LayoutDashboard size={20} /></span>')
    .replace('<span className=\"nav-icon\">📚</span>', '<span className=\"nav-icon\"><BookOpen size={20} /></span>')
    .replace('<span className=\"nav-icon\">💾</span>', '<span className=\"nav-icon\"><Save size={20} /></span>')
    .replace('<span className=\"nav-icon\">📥</span>', '<span className=\"nav-icon\"><Download size={20} /></span>')
    .replace('<span className=\"nav-icon\">✉️</span>', '<span className=\"nav-icon\"><Mail size={20} /></span>')
    .replace('<span className=\"nav-icon\">📢</span>', '<span className=\"nav-icon\"><Megaphone size={20} /></span>')
    .replace('<span className=\"nav-icon\">🚪</span>', '<span className=\"nav-icon\"><LogOut size={20} /></span>');

fs.writeFileSync(sdPath, sdContent);

// 3. Update AdminDashboard.jsx
let adPath = './src/pages/AdminDashboard.jsx';
let adContent = fs.readFileSync(adPath, 'utf8');

if (!adContent.includes('lucide-react')) {
    adContent = adContent.replace(`import { useNavigate } from 'react-router-dom';`, `import { useNavigate } from 'react-router-dom';\nimport { BookOpen, Save, Download, Mail, Users, Megaphone, Settings, LogOut, LayoutDashboard } from 'lucide-react';`);
}

adContent = adContent
    .replace('<div className=\"stat-icon\">📚</div>', '<div className=\"stat-icon rounded-full bg-teal-100 text-teal-600 p-4\"><BookOpen size={36} /></div>')
    .replace('<div className=\"stat-icon\">👥</div>', '<div className=\"stat-icon rounded-full bg-green-100 text-green-600 p-4\"><Users size={36} /></div>')
    .replace('<div className=\"stat-icon\">📥</div>', '<div className=\"stat-icon rounded-full bg-blue-100 text-blue-600 p-4\"><Download size={36} /></div>')
    .replace('<div className=\"stat-icon\">✉️</div>', '<div className=\"stat-icon rounded-full bg-orange-100 text-orange-600 p-4\"><Mail size={36} /></div>')
    .replace('<span className=\"nav-icon\">📊</span>', '<span className=\"nav-icon\"><LayoutDashboard size={20} /></span>')
    .replace('<span className=\"nav-icon\">📚</span>', '<span className=\"nav-icon\"><BookOpen size={20} /></span>')
    .replace('<span className=\"nav-icon\">👥</span>', '<span className=\"nav-icon\"><Users size={20} /></span>')
    .replace('<span className=\"nav-icon\">✉️</span>', '<span className=\"nav-icon\"><Mail size={20} /></span>')
    .replace('<span className=\"nav-icon\">📢</span>', '<span className=\"nav-icon\"><Megaphone size={20} /></span>')
    .replace('<span className=\"nav-icon\">⚙️</span>', '<span className=\"nav-icon\"><Settings size={20} /></span>')
    .replace('<span className=\"nav-icon\">🚪</span>', '<span className=\"nav-icon\"><LogOut size={20} /></span>');

fs.writeFileSync(adPath, adContent);

// 4. Update index.css to make boxes super beautiful
let cssPath = './src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Quick access card redesign
cssContent = cssContent.replace(
    \`.quick-access-card {
  background: white;
  padding: 24px;
  border-radius: 0;
  border-top: 4px solid var(--primary-teal);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}\`,
\`.quick-access-card {
  background: white;
  padding: 32px 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.quick-access-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-teal), var(--secondary-green));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.quick-access-card:hover::before {
  opacity: 1;
}\`
);

// Admin stat card redesign
cssContent = cssContent.replace(
\`.admin-stat-card {
  background: white;
  padding: 20px;
  border-radius: 0;
  border-top: 4px solid var(--primary-teal);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.2s;
}\`,
\`.admin-stat-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.admin-stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-teal), var(--secondary-green));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.admin-stat-card:hover::before {
  opacity: 1;
}
.admin-stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}\`
);

// Department button redesign
cssContent = cssContent.replace(
\`.department-card {
  background: white;
  padding: 24px;
  border-radius: 0;
  text-align: center;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}\`,
\`.department-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.department-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-teal);
}\`
);

fs.writeFileSync(cssPath, cssContent);

console.log('Fixed UI design and emojis');
