<<<<<<< HEAD
// components/AboutDropdown.tsx
=======
>>>>>>> 58679f06028c61014437a4f961917e6f6127e575
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AboutDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

<<<<<<< HEAD
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative flex items-center h-full"
=======
  return (
    <div 
      ref={dropdownRef}
      className="relative flex items-center h-full" // Added flex items-center to ensure vertical alignment
>>>>>>> 58679f06028c61014437a4f961917e6f6127e575
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
<<<<<<< HEAD
        className="flex items-center nav-link text-base font-medium hover:text-[#F2C94C] transition-colors focus:outline-none"
=======
        // ADDED: text-sm (to match nav), hover color, and transition
       className="flex items-center nav-link text-base font-medium hover:text-[#F2C94C] transition-colors focus:outline-none"
>>>>>>> 58679f06028c61014437a4f961917e6f6127e575
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        About Us
        {isOpen ? (
          <ChevronUp className="ml-1 w-4 h-4" />
        ) : (
          <ChevronDown className="ml-1 w-4 h-4" />
        )}
      </button>
      
      <div 
        className={`absolute left-0 top-full mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <Link 
<<<<<<< HEAD
          href="/about#our-story" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B3E2A]"
          onClick={handleLinkClick}
          scroll={false}
=======
          href="/about" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B3E2A]"
          onClick={() => setIsOpen(false)}
>>>>>>> 58679f06028c61014437a4f961917e6f6127e575
        >
          Our Story
        </Link>
        <Link 
          href="/about#mission" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B3E2A]"
<<<<<<< HEAD
          onClick={handleLinkClick}
          scroll={false}
=======
          onClick={() => setIsOpen(false)}
>>>>>>> 58679f06028c61014437a4f961917e6f6127e575
        >
          Our Mission & Vision
        </Link>
        <Link 
          href="/about#team" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B3E2A]"
<<<<<<< HEAD
          onClick={handleLinkClick}
          scroll={false}
        >
          Organizational Chart
=======
          onClick={() => setIsOpen(false)}
        >
          Our Team
>>>>>>> 58679f06028c61014437a4f961917e6f6127e575
        </Link>
        <Link 
          href="/about#partners" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1B3E2A]"
<<<<<<< HEAD
          onClick={handleLinkClick}
          scroll={false}
=======
          onClick={() => setIsOpen(false)}
>>>>>>> 58679f06028c61014437a4f961917e6f6127e575
        >
          Partners & Sponsors
        </Link>
      </div>
    </div>
  );
};

export default AboutDropdown;