"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Petit composant pour les menus déroulants
function Dropdown({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-[#0f1c32] transition-colors flex items-center gap-1 py-2">
        {title}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-zinc-100 py-2 -mt-1">
          {items.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="block px-4 py-2 hover:bg-zinc-50 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const appItems = [
    { name: "Gouvernance", href: "/gouvernance" },
    { name: "Treasury", href: "/tresorerie" },
    { name: "Vault", href: "/app" },
  ];

  const toolsItems = [
    { name: "Yield", href: "/yield" }, // À créer plus tard
    { name: "Integration", href: "/integration" }, // À créer plus tard
  ];

  const ecosystemItems = [
    { name: "Ktemas Ecosystem", href: "/ecosysteme" },
    { name: "Global Ecosystem", href: "/ecosysteme/global" },
  ];

  const moreItems = [
    { name: "Documentation", href: "/documentation" }, // À créer plus tard
    { name: "Improvements", href: "/roadmap" }, // À créer plus tard
    { name: "About", href: "/about" }, // À créer plus tard
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/90 backdrop-blur-lg border-zinc-100 py-3 shadow-md" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold text-[#0f1c32] tracking-tighter">
          Ktemas
        </Link>
      </div>

      {/* Liens centraux */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <Dropdown title="App" items={appItems} />
        <Dropdown title="Tools" items={toolsItems} />
        <Dropdown title="Ecosystem" items={ecosystemItems} />
        <Dropdown title="More" items={moreItems} />
      </div>

      {/* Bouton d'action */}
      <div>
        <Link href="/app">
          <button className="bg-[#0f1c32] hover:bg-[#1a2d4a] text-white font-medium px-6 py-2 rounded-full transition-all active:scale-95">
            Lancer l'App
          </button>
        </Link>
      </div>
    </nav>
  );
}