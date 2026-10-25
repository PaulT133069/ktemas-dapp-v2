"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
        <Link href="/gouvernance" className="hover:text-[#0f1c32] transition-colors">Gouvernance</Link>
        <Link href="/documentation" className="hover:text-[#0f1c32] transition-colors">Documentation</Link>
      </div>

      {/* Zone d'action */}
      <div className="flex items-center gap-4">
        {/* 
          🔮 EMPLACEMENT RÉSERVÉ POUR LE BOUTON CONNECT WALLET 
          On le rajoutera ici plus tard, sans toucher au reste.
        */}
        
        <Link href="/app">
          <button className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-2 rounded-full transition-colors">
            Lancer l'App
          </button>
        </Link>
      </div>
    </nav>
  );
}