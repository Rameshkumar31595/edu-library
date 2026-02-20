import React, { useRef, useEffect, useState } from 'react';
import { BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ===================================
   AUTO-SCROLLING CAROUSEL COMPONENT
   Completely isolated - uses unique "autoScrollSection-" prefixes
   No external carousel libraries - Pure React + CSS animation
   =================================== */

export const AutoScrollCarousel = () => {
  const scrollContainerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Card data for the carousel
  const carouselCards = [
    {
      id: 1,
      title: 'SCHOOL TEXTBOOKS',
      icon: '📚',
      bgColor: 'from-blue-600 to-blue-800',
      links: ['NCERT Books', 'State Boards', 'Question Banks'],
      bgImage: 'from-blue-500 via-blue-600 to-blue-700',
    },
    {
      id: 2,
      title: 'ENGINEERING',
      icon: '⚙️',
      bgColor: 'from-purple-600 to-purple-800',
      links: ['BTech Resources', 'Project Guides', 'Assignments'],
      bgImage: 'from-purple-500 via-purple-600 to-purple-700',
    },
    {
      id: 3,
      title: 'RESEARCH PAPERS',
      icon: '🔬',
      bgColor: 'from-green-600 to-green-800',
      links: ['IEEE Papers', 'Journals', 'Theses'],
      bgImage: 'from-green-500 via-green-600 to-green-700',
    },
    {
      id: 4,
      title: 'LITERATURE',
      icon: '📖',
      bgColor: 'from-pink-600 to-pink-800',
      links: ['Novels', 'Poetry', 'Classic Works'],
      bgImage: 'from-pink-500 via-pink-600 to-pink-700',
    },
    {
      id: 5,
      title: 'HUMANITIES',
      icon: '🎓',
      bgColor: 'from-amber-600 to-amber-800',
      links: ['History', 'Philosophy', 'Culture'],
      bgImage: 'from-amber-500 via-amber-600 to-amber-700',
    },
    {
      id: 6,
      title: 'LAW & LEGAL',
      icon: '⚖️',
      bgColor: 'from-red-600 to-red-800',
      links: ['Acts & Bills', 'Cases', 'Legal Books'],
      bgImage: 'from-red-500 via-red-600 to-red-700',
    },
  ];

  // Initialize carousel with duplicated cards for infinite effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calculate animation duration based on number of cards
    // Each card takes ~5.5s to scroll (increased from 4s for slower, smoother scrolling)
    const totalDuration = carouselCards.length * 5.5;
    setAnimationDuration(totalDuration);

    // Add animation to container
    const style = document.createElement('style');
    style.textContent = `
      @keyframes autoScrollLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .autoScrollSection-container {
        animation: autoScrollLeft ${totalDuration}s linear infinite;
        animation-play-state: running;
      }

      .autoScrollSection-container.autoScrollSection-paused {
        animation-play-state: paused;
      }

      /* ARROW BUTTON STYLES - Isolated with manualScrollFix- prefix */
      .manualScrollFix-arrowBtn {
        -webkit-user-select: none;
        user-select: none;
      }

      /* FIX: Arrows now positioned relative to outer wrapper (not clipped by overflow-hidden) */
      .manualScrollFix-arrowLeft {
        left: -46px; /* 12px padding + 2px gap from outer wrapper */
      }

      .manualScrollFix-arrowRight {
        right: -46px; /* 12px padding + 2px gap from outer wrapper */
      }

      /* Responsive: Show arrows only on medium screens and up */
      @media (max-width: 768px) {
        .manualScrollFix-arrowBtn {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [carouselCards.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.add('autoScrollSection-paused');
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove('autoScrollSection-paused');
    }
  };

  // MANUAL SCROLL HANDLER - Left Arrow Click
  const handleScrollLeft = () => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollBy({
        left: -350, // Scroll left by one card width + gap
        behavior: 'smooth',
      });
    }
  };

  // MANUAL SCROLL HANDLER - Right Arrow Click
  const handleScrollRight = () => {
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollBy({
        left: 350, // Scroll right by one card width + gap
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="autoScrollSection-wrapper py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Featured Collections
          </h2>
          <p className="text-gray-600">
            Explore our curated collections across various disciplines
          </p>
        </div>

        {/* Auto-Scroll Carousel Container - OUTER WRAPPER FOR FIXED ARROWS */}
        <div className="autoScrollSection-outerWrapper relative">
          {/* Scroll Container - INNER CONTAINER WITH OVERFLOW HIDDEN */}
          <div
            ref={scrollWrapperRef}
            className="autoScrollSection-scrollWrapper overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          {/* Cards Container with Animation */}
          <div
            ref={scrollContainerRef}
            className="autoScrollSection-container flex gap-6 w-max"
            style={{
              // Double the width to accommodate duplicated cards
              minWidth: 'fit-content',
            }}
          >
            {/* Original Cards */}
            {carouselCards.map((card) => (
              <CarouselCard key={`original-${card.id}`} card={card} />
            ))}

            {/* Duplicated Cards for Infinite Effect */}
            {carouselCards.map((card) => (
              <CarouselCard key={`duplicate-${card.id}`} card={card} />
            ))}
          </div>
          {/* END OF SCROLL CONTAINER */}
          </div>

          {/* MANUAL SCROLL ARROWS - NOW OUTSIDE SCROLL CONTAINER & POSITIONED RELATIVE TO OUTER WRAPPER */}
          {/* MANUAL SCROLL ARROW - Left Button */}
          <button
            onClick={handleScrollLeft}
            className="manualScrollFix-arrowBtn manualScrollFix-arrowLeft absolute top-1/2 left-0 transform -translate-y-1/2 z-40 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 group"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-blue-900 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* MANUAL SCROLL ARROW - Right Button */}
          <button
            onClick={handleScrollRight}
            className="manualScrollFix-arrowBtn manualScrollFix-arrowRight absolute top-1/2 right-0 transform -translate-y-1/2 z-40 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 group"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-blue-900 group-hover:text-blue-600 transition-colors" />
          </button>
        {/* END OF OUTER WRAPPER */}
        </div>

        {/* Pause Indicator */}
        {isPaused && (
          <div className="text-center mt-6 text-sm text-gray-500">
            ⏸ Scrolling paused • Move mouse to resume
          </div>
        )}
      </div>
    </section>
  );
};

/* ===================================
   INDIVIDUAL CAROUSEL CARD COMPONENT
   Self-contained card with all styling
   =================================== */

const CarouselCard = ({ card }) => {
  return (
    <div
      className={`autoScrollSection-card flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer relative`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.bgImage} opacity-90`}
      ></div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        {/* Top Section - Icon and Title */}
        <div className="space-y-4">
          {/* Circular Icon */}
          <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-4xl border border-white border-opacity-30 group-hover:bg-opacity-30 transition-all duration-300">
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold uppercase tracking-wider leading-tight">
            {card.title}
          </h3>
        </div>

        {/* Bottom Section - Links and CTA */}
        <div className="space-y-4">
          {/* Sub-links List */}
          <div className="space-y-2">
            {card.links.map((link, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-white opacity-90 hover:opacity-100 transition-opacity"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white opacity-60"></span>
                {link}
              </div>
            ))}
          </div>

          {/* Explore More Link */}
          <div className="flex items-center gap-2 text-sm font-semibold pt-2 opacity-100 group-hover:opacity-100 cursor-pointer hover:gap-3 transition-all duration-300">
            <span>Explore More Contents</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
