"use client";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { slug: "blodtester", name: "Blodtester" },
  { slug: "hormontester", name: "Hormontester" },
  { slug: "sti-tester", name: "STI-tester" },
  { slug: "vitamintester", name: "Vitamintester" },
  { slug: "allergitester", name: "Allergi & Intolerans" },
  { slug: "tarmhalsa", name: "Tarmhälsa" },
  { slug: "cancermarkorer", name: "Cancermarkörer" },
  { slug: "kolesteroltester", name: "Kolesterol" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span className="text-xl font-bold text-gray-900">
              Testa<span className="text-teal-600">Hemma</span>
              <span className="text-gray-400 text-sm font-normal">.se</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors">
                Kategorier
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-3 grid grid-cols-2 gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${cat.slug}/`}
                      className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/basta-hemtest/" className="text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors">
              Bästa hemtest
            </Link>
            <Link href="/guider/" className="text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors">
              Guider
            </Link>
            <Link href="/om-oss/" className="text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors">
              Om oss
            </Link>
          </nav>

          <Link
            href="/basta-hemtest/"
            className="hidden md:flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            Hitta ditt test
          </Link>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Oppna meny"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          <Link href="/basta-hemtest/" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-teal-50 font-medium" onClick={() => setMobileOpen(false)}>
            Bästa hemtest
          </Link>
          <div className="pt-2 pb-1">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Kategorier</p>
          </div>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/`}
              className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-teal-50 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/guider/" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-teal-50" onClick={() => setMobileOpen(false)}>
            Guider
          </Link>
          <Link href="/om-oss/" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-teal-50" onClick={() => setMobileOpen(false)}>
            Om oss
          </Link>
        </div>
      )}
    </header>
  );
}
