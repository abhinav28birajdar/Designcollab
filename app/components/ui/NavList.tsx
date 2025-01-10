import React from 'react';
import Link from 'next/link';
import NavListMenu from './NavListMenu';
import { NavListProps } from '../../types/navbar';
const NavList: React.FC<NavListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link href="/" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
          Home
        </Link>
      </li>
    
      <li>
        <NavListMenu items={items} />
      </li>
      <li>
        <Link href="/" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
          Design
        </Link>
      </li>
      <li>
        <Link href="/" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
        Chat
        </Link>
      </li>
      <li>
        <Link href="/contact" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
          Contact Us
        </Link>
      </li>
      <li>
        <Link href="/contact" className="w-full rounded-md bg-[#6810c1] py-3 px-5 p text-sm font-medium text-white hover:bg-[#c61d79]">
          Help Ai
        </Link>
      </li>
   
    </ul>
  );
};

export default NavList;