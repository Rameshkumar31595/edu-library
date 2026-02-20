import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">
                📚
              </div>
              <h3 className="text-xl font-bold">NDL</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              National Digital Library provides access to millions of knowledge resources for students, researchers, and educators across India.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Browse Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Advanced Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  New Additions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Popular Items
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Help & Support</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Report an Issue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-bold mb-4">Policies</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Copyright
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 py-8"></div>

        {/* Ministry Section */}
        <div className="bg-blue-800 rounded-lg padding p-6 text-center mb-8">
          <p className="text-blue-100 text-sm mb-2">An Initiative by</p>
          <h3 className="text-2xl font-bold mb-2">Ministry of Education</h3>
          <p className="text-blue-200 text-sm">
            Department of Higher Education | Government of India
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="text-center md:text-left">
              <p className="text-blue-100 text-sm">
                <strong>Email:</strong> info@ndl.gov.in
              </p>
            </div>
            <div className="text-center">
              <p className="text-blue-100 text-sm">
                <strong>Phone:</strong> +91-11-2696 5000
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-100 text-sm">
                <strong>Location:</strong> New Delhi, India
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-blue-800">
            <p className="text-blue-200 text-sm">
              &copy; 2026 National Digital Library of India. All rights reserved.
            </p>
            <p className="text-blue-300 text-xs mt-2">
              Made with ❤️ for Knowledge Seekers | Empowering India Through Universal Access to Knowledge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
