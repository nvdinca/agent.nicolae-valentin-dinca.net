"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#properties", label: "Properties" },
  { href: "#areas", label: "Markets" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Link
          href="#"
          className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white shrink-0"
          onClick={closeMenu}
        >
          Global Real Estate Agent
        </Link>

        {/* Desktop nav – ascuns pe mobil */}
        <ul className="hidden md:flex flex-wrap gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-sky-600 dark:hover:text-sky-400 py-2 min-h-[44px] min-w-[44px] inline-flex items-center"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buton hamburger – doar pe mobil */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 min-h-[44px] min-w-[44px] inline-flex items-center justify-center touch-manipulation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Meniu mobil – se deschide la tap pe hamburger */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[height,opacity] duration-200 ease-out ${
          menuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-4 pb-4 pt-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-3.5 px-4 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 min-h-[44px] flex items-center touch-manipulation"
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
