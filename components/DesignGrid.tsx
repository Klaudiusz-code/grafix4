"use client";
import { useRef, useEffect } from "react";

const services = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=900&q=80",
    title: "Identyfikacja Wizualna",
    tags: ["Logo", "Typografia", "Kolorystyka"],
  },
  {
    src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    title: "Projektowanie Opakowań",
    tags: ["Food & Beverage", "Luxury", "Retail"],
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    title: "Materiały Reklamowe",
    tags: ["Print", "Digital", "Social Media"],
  },
];

export default function DesignGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    el.querySelectorAll(".reveal").forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="design"
      className="py-28 lg:py-36 bg-white border-t border-black/[0.04]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        {/* Nagłówek */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14 reveal">
          <div className="md:col-span-5">
            <p className="text-[#aaa] text-[11px] tracking-[0.25em] uppercase mb-4">
              Studio
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.2rem)] tracking-tight text-[#1A1A1A] leading-[1.08]">
              Grafika&nbsp;Komputerowa
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-7 flex items-end">
            <p className="text-[#888] text-[15px] font-light leading-relaxed">
              Od spójnego systemu wizualnego po pojedyncze materiały — każdy
              element buduje rozpoznawalność Twojej marki.
            </p>
          </div>
        </div>

        {/* Siatka: duży kafelek 3k/2r + dwa małe 2k/1r */}
        <div
          className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5"
          style={{ gridAutoRows: "280px" }}
        >
          {/* DUŻY — lewa kolumna, pełna wysokość */}
          <div className="reveal group relative overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto md:col-span-3 md:row-span-2">
            <img
              src={services[0].src}
              alt={services[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {services[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.15em] uppercase text-white/70 bg-white/[0.12] backdrop-blur-sm px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-white text-2xl lg:text-3xl tracking-tight">
                {services[0].title}
              </h3>
              <div className="mt-4 overflow-hidden h-5">
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-white/0 font-medium group-hover:text-white/80 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  Zobacz realizacje
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
                </span>
              </div>
            </div>
          </div>

          {/* MAŁY 1 — prawy górny */}
          <div
            className="reveal group relative overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto md:col-span-2"
            style={{ transitionDelay: "0.12s" }}
          >
            <img
              src={services[1].src}
              alt={services[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {services[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.15em] uppercase text-white/70 bg-white/[0.12] backdrop-blur-sm px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-white text-lg lg:text-xl tracking-tight">
                {services[1].title}
              </h3>
            </div>
          </div>

          {/* MAŁY 2 — prawy dolny */}
          <div
            className="reveal group relative overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto md:col-span-2"
            style={{ transitionDelay: "0.24s" }}
          >
            <img
              src={services[2].src}
              alt={services[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {services[2].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.15em] uppercase text-white/70 bg-white/[0.12] backdrop-blur-sm px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-white text-lg lg:text-xl tracking-tight">
                {services[2].title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #design .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        #design .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
