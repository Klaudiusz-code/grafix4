"use client";

import { useState, useEffect, useCallback } from "react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1800&q=80",
      label: "Fotografia Kulinarna",
      title: "Estetyka smaku",
      desc: "Zamykam smak w kadrze. Każde danie opowiada historię, która zaczyna się w oczach.",
    },
    {
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=80",
      label: "Branding & Design",
      title: "Charakter marki",
      desc: "Od pierwszego szkicu po finalny layout. Buduję wizualne światy, w które chce się zanurzyć.",
    },
    {
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1800&q=80",
      label: "Kampanie Reklamowe",
      title: "Apetyt na więcej",
      desc: "Obraz, który prowokuje zmysły i sprawia, że klient sięga po produkt.",
    },
  ];

  const slideDuration = 7000;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (slideDuration / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[activeSlide];

  return (
    <section className="relative h-screen w-full bg-[#0a0908] overflow-hidden">
      {/* === Tła ze zdjęciami === */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              i === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {i === activeSlide && (
              <img
                src={s.img}
                alt={s.title}
                className="hero-bg-img w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* === Gradient — jedna warstwa zamiast dwóch === */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#0a0908]/85 via-[#0a0908]/40 to-transparent" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#0a0908]/50 via-transparent to-[#0a0908]/15" />

      {/* === Subtelny szum dla tekstury === */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* === Treść główna === */}
      <div className="relative z-30 h-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center">
        <div className="max-w-xl" key={`c-${activeSlide}`}>
          <p className="hero-reveal hero-d1 text-[11px] tracking-[0.3em] uppercase text-white/35 font-light">
            {slide.label}
          </p>

          <h1 className="hero-reveal hero-d2 font-[family-name:var(--font-display)] text-[clamp(2.6rem,5vw,5.5rem)] leading-[0.92] tracking-tight text-white/95 mt-4">
            {slide.title}
          </h1>

          <p className="hero-reveal hero-d3 text-[clamp(0.9rem,1.1vw,1.1rem)] text-white/40 font-light leading-relaxed mt-5 max-w-md">
            {slide.desc}
          </p>

          <div className="hero-reveal hero-d4 mt-9">
            <a
              href="#prace"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase font-medium text-white/85 bg-white/[0.07] backdrop-blur-sm border border-white/[0.12] px-6 py-3.5 hover:bg-white hover:text-[#0a0908] hover:border-white transition-all duration-300 group"
            >
              Zobacz portfolio
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </div>

      {/* === Dolny panel === */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        {/* Linia postępu */}
        <div className="w-full h-px bg-white/[0.08]">
          <div
            className="h-full bg-white/40 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 py-5 flex items-center justify-between">
          {/* Licznik */}
          <span className="text-sm font-light tracking-wider text-white/25">
            <span className="text-white/60 tabular-nums font-medium">
              0{activeSlide + 1}
            </span>
            <span className="mx-1.5 text-white/10">/</span>
            <span className="tabular-nums">0{slides.length}</span>
          </span>

          {/* Podpis */}
          <p className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-white/[0.12] font-light">
            Magdalena Chojnacka
          </p>

          {/* Strzałki */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20 transition-all duration-300"
              aria-label="Poprzedni slajd"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20 transition-all duration-300"
              aria-label="Następny slajd"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* === Animacje CSS — pewne, bez zależności od Tailwind arbitraries === */}
      <style jsx>{`
        @keyframes kenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.06);
          }
        }
        .hero-bg-img {
          animation: kenBurns 10s ease-out forwards;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-reveal {
          opacity: 0;
          animation: heroReveal 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-d1 {
          animation-delay: 0.1s;
        }
        .hero-d2 {
          animation-delay: 0.2s;
        }
        .hero-d3 {
          animation-delay: 0.38s;
        }
        .hero-d4 {
          animation-delay: 0.52s;
        }
      `}</style>
    </section>
  );
}
