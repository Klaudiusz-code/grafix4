"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const links = [
    { label: "Portfolio", href: "#prace" },
    { label: "Proces", href: "#proces" },
    { label: "Usługi", href: "#design" },
    { label: "O mnie", href: "#omnie" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-[#FAFAF8]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-1 group"
          >
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-[0.02em] text-[#1A1A1A]">
              GRAFIK
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#1A1A1A] text-[#FAFAF8] font-[family-name:var(--font-display)] text-sm rounded-full -translate-y-1 group-hover:scale-110 transition-transform duration-300">
              4
            </span>
          </Link>

          {/* Desktop nawigacja */}
          <div className="hidden lg:flex items-center h-full">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative flex items-center h-full px-6 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#1A1A1A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative z-10 text-[13px] font-medium tracking-[0.1em] uppercase text-[#1A1A1A] group-hover:text-[#FAFAF8] transition-colors duration-500">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#kontakt"
            className="hidden lg:flex items-center gap-2.5 bg-[#1A1A1A] text-[#FAFAF8] text-[12px] tracking-[0.15em] uppercase font-bold px-7 py-4 hover:bg-[#333] transition-colors duration-300 shadow-lg shadow-black/10"
          >
            Zapytaj o wycenę
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative z-50 w-8 h-6 flex flex-col justify-between"
            aria-label="Menu"
          >
            <span
              className={`block h-[2px] w-full bg-[#1A1A1A] rounded-full origin-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMobileOpen ? "rotate-45 translate-y-[10px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-[#1A1A1A] rounded-full transition-all duration-300 ${
                isMobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-[#1A1A1A] rounded-full origin-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMobileOpen ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          clipPath: isMobileOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        }}
      >
        <div className="px-8 flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,6rem)] leading-none text-white/90 hover:text-white transition-colors transform translate-y-12 opacity-0 border-b border-white/10 pb-4"
              style={{
                animation: isMobileOpen
                  ? `mobileReveal 0.8s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.08}s forwards`
                  : "none",
              }}
            >
              {link.label}
            </a>
          ))}

          <div
            className="mt-8 transform translate-y-8 opacity-0"
            style={{
              animation: isMobileOpen
                ? "mobileReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.55s forwards"
                : "none",
            }}
          >
            <a
              href="#kontakt"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex items-center gap-4 text-white text-sm tracking-widest uppercase hover:gap-6 transition-all duration-300"
            >
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              Zapytaj o wycenę
            </a>
          </div>

          {/* Kontakt w menu mobile */}
          <div
            className="mt-auto pt-12 transform translate-y-8 opacity-0"
            style={{
              animation: isMobileOpen
                ? "mobileReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.7s forwards"
                : "none",
            }}
          >
            <div className="h-px bg-white/10 mb-8" />
            <div className="flex flex-col gap-3 text-white/50 text-sm font-light">
              <a
                href="tel:512681102"
                className="hover:text-white transition-colors w-fit"
              >
                512 681 102
              </a>
              <a
                href="mailto:magdalenachojnacka@grafix4.pl"
                className="hover:text-white transition-colors w-fit text-[13px]"
              >
                magdalenachojnacka@grafix4.pl
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes mobileReveal {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
