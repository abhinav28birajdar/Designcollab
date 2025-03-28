"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavItem } from "../types/navbar";

interface NavListMenuProps {
  items: NavItem[];
}

const NavListMenu: React.FC<NavListMenuProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 py-2 px-4 font-medium text-white hover:text-gray-900"
      >
        Products
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-full left-0 z-10 mt-2 w-60 rounded-md bg-white shadow-lg">
          <div className="p-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href="#"
                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-100"
              >
                <item.icon className="h-5 w-5 text-gray-500" />
                <div>
                  <h6 className="font-medium text-gray-900">{item.title}</h6>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavListMenu;