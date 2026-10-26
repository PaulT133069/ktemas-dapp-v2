"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-zinc-100 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold text-[#0f1c32] tracking-tighter">
          Ktemas
        </Link>
      </div>

      {/* Liens */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <Link href="/app" className="hover:text-[#0f1c32] transition-colors">App</Link>
        
        {/* Menu déroulant Écosystème */}
        <div 
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="hover:text-[#0f1c32] transition-colors flex items-center gap-1">
            Écosystème
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-zinc-100 py-2">
              <Link href="/ecosysteme" className="block px-4 py-2 hover:bg-zinc-50 transition-colors">
                L'écosystème Ktemas
              </Link>
              <Link href="/ecosysteme/global" className="block px-4 py-2 hover:bg-zinc-50 transition-colors">
                L'écosystème global
              </Link>
            </div>
          )}
        </div>

        <Link href="/gouvernance" className="hover:text-[#0f1c32] transition-colors">Gouvernance</Link>
        <Link href="/tresorerie" className="hover:text-[#0f1c32] transition-colors">Trésorerie</Link>
        <Link href="/documentation" className="hover:text-[#0f1c32] transition-colors">Documentation</Link>
      </div>

      {/* Bouton d'action */}
      <div>
        <Link href="/app">
          <button className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-2 rounded-full transition-colors">
            Lancer l'App
          </button>
        </Link>
      </div>
    </nav>
  );
}