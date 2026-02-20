"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/assets/space/logo.svg";

const navigation = [
  { name: "About us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Journey", href: "/Journey" },
  {
    name: "Internships",
    href: "https://hephaestus.international/internships",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4">
      <div
        className="
          bg-black/80 backdrop-blur-sm border border-white/10
          md:rounded-full rounded-2xl
          px-6
        ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Space Ventures Institute"
              width={50}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="hidden sm:block text-base md:text-lg font-medium text-white hover:text-blue-400 transition-colors">
              Space Ventures Institute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-3 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white py-2 text-base font-medium hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
