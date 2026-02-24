const fs = require('fs');

// 1. Update Student Resources Data
let dataPath = './src/data/studentResourcesData.js';
let dataContent = fs.readFileSync(dataPath, 'utf8');

if (!dataContent.includes('lucide-react')) {
    dataContent = "import React from 'react';\nimport { Book, BookOpen, FileCode, Zap, Radio, Laptop, TestTube, FileText } from 'lucide-react';\n\n" + dataContent;
}

dataContent = dataContent
    .replace(/icon: '📘'/g, 'icon: <Book className="w-12 h-12 text-teal-600 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />')
    .replace(/icon: '🔥'/g, 'icon: <Zap className="w-12 h-12 text-orange-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />')
    .replace(/icon: '📡'/g, 'icon: <Radio className="w-12 h-12 text-indigo-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />')
    .replace(/icon: '💻'/g, 'icon: <Laptop className="w-12 h-12 text-blue-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />')
    .replace(/icon: '⚡'/g, 'icon: <Zap className="w-12 h-12 text-yellow-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />')
    .replace(/icon: '🧪'/g, 'icon: <TestTube className="w-12 h-12 text-green-500 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />')
    .replace(/icon: '💾'/g, 'icon: <BookOpen className="w-12 h-12 text-teal-600 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300" />');

fs.writeFileSync(dataPath, dataContent);

// 2. Update StudentDashboard.jsx
let sdPath = './src/pages/StudentDashboard.jsx';
let sdContent = fs.readFileSync(sdPath, 'utf8');

if (!sdContent.includes('lucide-react')) {
    sdContent = sdContent.replace("import { useNavigate } from 'react-router-dom';", "import { useNavigate } from 'react-router-dom';\nimport { BookOpen, Save, Download, Mail, Megaphone, LogOut, LayoutDashboard } from 'lucide-react';");
}

sdContent = sdContent
    .replace('<div className="quick-icon">📚</div>', '<div className="text-teal-600 flex justify-center mb-3"><BookOpen size={40} /></div>')
    .replace('<div className="quick-icon">💾</div>', '<div className="text-teal-600 flex justify-center mb-3"><Save size={40} /></div>')
    .replace('<div className="quick-icon">📥</div>', '<div className="text-teal-600 flex justify-center mb-3"><Download size={40} /></div>')
    .replace('<div className="quick-icon">✉️</div>', '<div className="text-teal-600 flex justify-center mb-3"><Mail size={40} /></div>')
    .replace('<span className="nav-icon">📊</span>', '<span className="nav-icon"><LayoutDashboard size={20} /></span>')
    .replace('<span className="nav-icon">📚</span>', '<span className="nav-icon"><BookOpen size={20} /></span>')
    .replace('<span className="nav-icon">💾</span>', '<span className="nav-icon"><Save size={20} /></span>')
    .replace('<span className="nav-icon">📥</span>', '<span className="nav-icon"><Download size={20} /></span>')
    .replace('<span className="nav-icon">✉️</span>', '<span className="nav-icon"><Mail size={20} /></span>')
    .replace('<span className="nav-icon">📢</span>', '<span className="nav-icon"><Megaphone size={20} /></span>')
    .replace('<span className="nav-icon">🚪</span>', '<span className="nav-icon"><LogOut size={20} /></span>');

fs.writeFileSync(sdPath, sdContent);

// 3. Update AdminDashboard.jsx
let adPath = './src/pages/AdminDashboard.jsx';
let adContent = fs.readFileSync(adPath, 'utf8');

if (!adContent.includes('lucide-react')) {
    adContent = adContent.replace("import { useNavigate } from 'react-router-dom';", "import { useNavigate } from 'react-router-dom';\nimport { BookOpen, Save, Download, Mail, Users, Megaphone, Settings, LogOut, LayoutDashboard } from 'lucide-react';");
}

adContent = adContent
    .replace('<div className="stat-icon">📚</div>', '<div className="stat-icon flex items-center justify-center rounded-xl bg-teal-50 text-teal-600 p-3 h-14 w-14"><BookOpen size={36} /></div>')
    .replace('<div className="stat-icon">👥</div>', '<div className="stat-icon flex items-center justify-center rounded-xl bg-green-50 text-green-600 p-3 h-14 w-14"><Users size={36} /></div>')
    .replace('<div className="stat-icon">📥</div>', '<div className="stat-icon flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 p-3 h-14 w-14"><Download size={36} /></div>')
    .replace('<div className="stat-icon">✉️</div>', '<div className="stat-icon flex items-center justify-center rounded-xl bg-orange-50 text-orange-600 p-3 h-14 w-14"><Mail size={36} /></div>')
    .replace('<span className="nav-icon">📊</span>', '<span className="nav-icon"><LayoutDashboard size={20} /></span>')
    .replace('<span className="nav-icon">📚</span>', '<span className="nav-icon"><BookOpen size={20} /></span>')
    .replace('<span className="nav-icon">👥</span>', '<span className="nav-icon"><Users size={20} /></span>')
    .replace('<span className="nav-icon">✉️</span>', '<span className="nav-icon"><Mail size={20} /></span>')
    .replace('<span className="nav-icon">📢</span>', '<span className="nav-icon"><Megaphone size={20} /></span>')
    .replace('<span className="nav-icon">⚙️</span>', '<span className="nav-icon"><Settings size={20} /></span>')
    .replace('<span className="nav-icon">🚪</span>', '<span className="nav-icon"><LogOut size={20} /></span>');

fs.writeFileSync(adPath, adContent);

// 4. Update index.css admin stat cards
let cssPath = './src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(
    ".admin-stat-card {\\n  background: white;\\n  padding: 20px;\\n  border-radius: 0;\\n  border-top: 4px solid var(--primary-teal);\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n  transition: transform 0.2s;\\n}",
    ".admin-stat-card {\\n  background: white;\\n  padding: 24px;\\n  border-radius: 16px;\\n  border: 1px solid #e2e8f0;\\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n  transition: all 0.3s ease;\\n  position: relative;\\n  overflow: hidden;\\n}\\n.admin-stat-card::before {\\n  content: '';\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 4px;\\n  background: linear-gradient(90deg, var(--primary-teal), var(--secondary-green));\\n  opacity: 0;\\n  transition: opacity 0.3s ease;\\n}\\n.admin-stat-card:hover::before {\\n  opacity: 1;\\n}\\n.admin-stat-card:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\\n}"
);

cssContent = cssContent.replace(
    ".department-card {\\n  background: white;\\n  padding: 24px;\\n  border-radius: 0;\\n  text-align: center;\\n  border: 1px solid var(--border-color);\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\\n  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;\\n}",
    ".department-card {\\n  background: white;\\n  padding: 24px;\\n  border-radius: 16px;\\n  text-align: center;\\n  border: 1px solid #e2e8f0;\\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\\n  transition: all 0.3s ease;\\n}\\n.department-card:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\\n  border-color: var(--primary-teal);\\n}"
);
fs.writeFileSync(cssPath, cssContent);
console.log('Fixed gracefully!');
