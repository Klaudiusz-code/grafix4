"use client";
import { useRef, useEffect } from "react";

export default function About() {
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
      { threshold: 0.1 }
    );

    el.querySelectorAll(".reveal").forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="omnie"
      className="py-28 lg:py-36 bg-white border-t border-black/[0.04]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Zdjęcie — lewa kolumna */}
          <div className="lg:col-span-5 reveal">
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                alt="Magdalena Chojnacka"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Treść — prawa kolumna */}
          <div className="lg:col-span-7 lg:pt-4">
            {/* Etykieta + tytuł */}
            <div className="reveal" style={{ transitionDelay: "0.08s" }}>
              <p className="text-[#aaa] text-[11px] tracking-[0.25em] uppercase mb-4">
                O mnie
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.2rem)] tracking-tight text-[#1A1A1A] leading-[1.08]">
                Magdalena Chojnacka
              </h2>
              <p className="text-[#aaa] text-[12px] tracking-[0.2em] uppercase font-light mt-3 mb-8">
                Fotografia &middot; Obraz &middot; Design
              </p>
            </div>

            {/* Opis */}
            <div
              className="space-y-5 text-[#666] text-[15px] font-light leading-[1.75] reveal"
              style={{ transitionDelay: "0.16s" }}
            >
              <p>
                Tworzę wizualny content dla marek z branży kulinarnej i
                lifestyle&apos;owej. Łączę fotografię z projektowaniem
                graficznym, dzięki czemu każda realizacja jest spójna od
                pierwszego kadru po finalny layout.
              </p>
              <p>
                Wierzę, że dobre zdjęcie to nie przypadek — to wynik
                procesu, w którym każda decyzja ma znaczenie. Światło,
                tekstura, kąt, kolor. Detale tworzące całość.
              </p>
            </div>

            {/* Statystyki */}
            <div
              className="mt-12 pt-8 border-t border-black/[0.08] grid grid-cols-3 gap-8 reveal"
              style={{ transitionDelay: "0.24s" }}
            >
              <div>
                <p className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[#1A1A1A] leading-none">
                  8+
                </p>
                <p className="text-[#aaa] text-[10px] tracking-[0.2em] uppercase mt-2">
                  Lat doświadczenia
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[#1A1A1A] leading-none">
                  200+
                </p>
                <p className="text-[#aaa] text-[10px] tracking-[0.2em] uppercase mt-2">
                  Realizacji
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3vw,2.5rem)] text-[#1A1A1A] leading-none">
                  50+
                </p>
                <p className="text-[#aaa] text-[10px] tracking-[0.2em] uppercase mt-2">
                  Klientów
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #omnie .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        #omnie .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}