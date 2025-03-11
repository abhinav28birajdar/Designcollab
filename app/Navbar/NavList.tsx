"use client";
import React from "react";
import Link from "next/link";
import NavListMenu from "./NavListMenu";
import { NavListProps } from "../types/navbar";
import { useAuth } from "@/app/auth/AuthContext";

const NavList: React.FC<NavListProps> = ({ items }) => {
  const { user } = useAuth();

  return (
    <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link href="/" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900">
          Home
        </Link>
      </li>
      <li>
        <NavListMenu items={items} />
      </li>
      <li>
        <Link href="/Design" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900">
          Design
        </Link>
      </li>
      <li>
        <Link href="/chat" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900">
          Chat
        </Link>
      </li>
      <li>
        <Link href="/Contact" className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900">
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/Helpai"
          className="block rounded-md bg-[#6810c1] py-3 px-5 text-sm font-medium text-white hover:bg-[#c61d79]"
        >
          Help AI
        </Link>
      </li>
      {user ? (
        <li>
          <Link
            href="/profile"
            className="block py-2 px-4 font-medium text-gray-700 hover:text-gray-900"
          >
            Profile
          </Link>
        </li>
      ) : null}
    </ul>
  );
};

export default NavList;