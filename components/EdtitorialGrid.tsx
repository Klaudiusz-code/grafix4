"use client";
import { useRef, useEffect } from "react";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80",
    title: "Owoce leśne w kadru",
    cat: "Editorial",
    colSpan: "md:col-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    title: "Złote pączki",
    cat: "Packaging",
    colSpan: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    title: "Klasyka włoska",
    cat: "Campaign",
    colSpan: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    title: "Healthy bowl",
    cat: "Social Media",
    colSpan: "md:col-span-3",
  },
];

export default function EditorialGrid() {
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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    el.querySelectorAll(".reveal").forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="prace"
      className="py-28 lg:py-36 bg-[#FAFAF8] border-t border-black/[0.04]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        {/* Nagłówek */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 reveal">
          <div className="md:col-span-5">
            <p className="text-[#aaa] text-[11px] tracking-[0.25em] uppercase mb-4">
              01 / Portfolio
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.2rem)] tracking-tight text-[#1A1A1A] leading-[1.08]">
              Wybrane prace
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-7 flex items-end">
            <p className="text-[#888] text-[15px] font-light leading-relaxed">
              Zestawienie projektów z pogranicza fotografii kulinarnej i grafiki
              reklamowej.
            </p>
          </div>
        </div>

        {/* Siatka portfolio — zigzag 3+2 / 2+3 */}
        <div
          className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5"
          style={{ gridAutoRows: "360px" }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto ${project.colSpan}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Zdjęcie — proste absolute inset-0 bez żadnych konfliktów */}
              <img
                src={project.src}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />

              {/* Overlay — gradient od dołu, pojawia się na hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/80 via-[#0a0908]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Numerek — zawsze widoczny */}
              <span className="absolute top-4 left-4 lg:top-5 lg:left-5 text-[11px] font-light text-white/30 tabular-nums z-10">
                0{i + 1}
              </span>

              {/* Kategoria — pojawia się na hover, zjeżdża z góry */}
              <span className="absolute top-4 right-4 lg:top-5 lg:right-5 text-[10px] tracking-[0.2em] uppercase text-white/0 group-hover:text-white/50 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 z-10">
                {project.cat}
              </span>

              {/* Tytuł + CTA — pojawia się na hover, wjeżdża z dołu */}
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7 z-10">
                <h3 className="font-[family-name:var(--font-display)] text-white text-xl lg:text-2xl tracking-tight translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {project.title}
                </h3>
                <div className="mt-3 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-white/50 font-medium group-hover:text-white/80 transition-colors duration-300">
                    Zobacz projekt
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
          ))}
        </div>

        {/* Link do wszystkich prac */}
        <div
          className="mt-14 flex justify-center reveal"
          style={{ transitionDelay: "0.45s" }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[12px] tracking-[0.15em] uppercase font-medium text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#888] hover:border-[#888] transition-colors duration-300 group"
          >
            Wszystkie realizacje
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

      <style>{`
        #prace .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        #prace .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
