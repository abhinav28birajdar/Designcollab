'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { NavListMenuProps } from '../../types/navbar';

const NavListMenu: React.FC<NavListMenuProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderItems = items.map(({ icon: Icon, title, description }, key) => (
    <Link href="#" key={key} className="block">
      <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100 transition duration-150 ease-in-out">
        <div className="rounded-lg bg-blue-50 p-2">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center gap-2 py-2 px-4 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
      >
        Resources
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isMenuOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-screen-lg rounded-xl bg-white p-2 shadow-lg lg:grid lg:grid-cols-3 gap-4">
          {renderItems}
        </div>
      )}
    </div>
  );
};

export default NavListMenu;
