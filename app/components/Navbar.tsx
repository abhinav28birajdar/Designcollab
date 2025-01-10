'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  SquaresPlusIcon,
  UserGroupIcon,
  Bars4Icon,
  SunIcon,
  GlobeAmericasIcon,
  PhoneIcon,
  NewspaperIcon,
  TagIcon,
} from '@heroicons/react/24/solid';
import NavList from './ui/NavList';
import { NavItem } from '../types/navbar';
import SignupPage from './signup-page'; // Import SignupPage component

const navListMenuItems: NavItem[] = [
  { title: "Products", description: "Find the perfect solution for your needs.", icon: SquaresPlusIcon },
  { title: "About Us", description: "Meet and learn about our dedication", icon: UserGroupIcon },
  { title: "Blog", description: "Find the perfect solution for your needs.", icon: Bars4Icon },
  { title: "Services", description: "Learn how we can help you achieve your goals.", icon: SunIcon },
  { title: "Support", description: "Reach out to us for assistance or inquiries", icon: GlobeAmericasIcon },
  { title: "Contact", description: "Find the perfect solution for your needs.", icon: PhoneIcon },
  { title: "News", description: "Read insightful articles, tips, and expert opinions.", icon: NewspaperIcon },
  { title: "Special Offers", description: "Explore limited-time deals and bundles", icon: TagIcon },
];

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // State for signup modal

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignupClick = () => {
    setShowSignup(true); 
  };

  const handleSignupClose = () => {
    setShowSignup(false); // Close signup modal
  };

  return (
    <nav className="bg-white  shadow-md">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-3xl flex items-start font-bold text-[#6810c1]">
                Agraphicart
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <NavList items={navListMenuItems} />
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link href="/signin">
              <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Log In
              </button>
            </Link>
            <button
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {openNav && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 lg:items-center pt-2">
            <NavList items={navListMenuItems} />
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/signin">
                <button className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Log In
                </button>
              </Link>
              <button
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                onClick={handleSignupClick} // Trigger signup modal on click
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
      {showSignup && ( 
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={handleSignupClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <SignupPage onClose={handleSignupClose} /> 
          </div>
        </div>
      )}
    </nav>
  );
}