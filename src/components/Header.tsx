"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { content } from "@/content/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-light"
          : "bg-light-bg/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo Oficial Samantha Saurino */}
          <Link href="/" className="flex items-center gap-2 group">
            <picture>
              <source srcSet="/logo-samantha.webp" type="image/webp" />
              <img
                src="/logo-samantha.png"
                alt="Samantha Saurino"
                width={220}
                height={42}
                className="h-8 w-auto sm:h-9 lg:h-10 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navegación principal"
          >
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-brand-black transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://belle364.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5"
            >
              <span className="h-2 w-2 rounded-full bg-belle-cream animate-pulse" />
              Tienda Belle 364
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-black transition-colors hover:bg-primary/10 lg:hidden"
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMobileOpen
            ? "max-h-96 border-t border-border-light bg-white shadow-lg"
            : "max-h-0"
        }`}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Menú móvil">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-light-bg hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://belle364.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-2 block w-full rounded-full bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-center text-sm font-bold text-white shadow-md"
          >
            Visitar Belle 364 (belle364.com)
          </a>
        </nav>
      </div>
    </header>
  );
}
