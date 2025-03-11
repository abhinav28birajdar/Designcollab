"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  SquaresPlusIcon,
  UserGroupIcon,
  Bars4Icon,
  SunIcon,
  GlobeAmericasIcon,
  PhoneIcon,
  NewspaperIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import NavList from "./NavList";
import { NavItem } from "../types/navbar";
import { useAuth } from "@/app/auth/AuthContext";
import Image from "next/image";

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
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-3xl flex items-start font-bold text-[#6810c1]">Designcollab</span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <NavList items={navListMenuItems} />
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {user ? (
              <div className="flex items-center gap-2">
                {user.photoURL && (
                  <Image
                    src={user.photoURL}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span className="text-gray-700">{user.displayName}</span>
                <button
                  onClick={logout}
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Log In
                  </button>
                </Link>
                <Link href="/Signuppage">
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
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
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavList items={navListMenuItems} />
            <div className="mt-4 flex flex-col gap-2">
              {user ? (
                <button
                  onClick={logout}
                  className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link href="/login">
                    <button className="w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Log In
                    </button>
                  </Link>
                  <Link href="/Signuppage">
                    <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}