"use client";
import { useRef, useEffect } from "react";

const steps = [
  {
    num: "1",
    title: "Brief",
    desc: "Rozmawiamy o marce, celach i oczekiwaniach. Dobieram kierunek wizualny, który pasuje do Twojego produktu.",
  },
  {
    num: "2",
    title: "Koncepcja",
    desc: "Przygotowuję moodboard, paletę kolorów i propozycję stylu. Wspólnie zatwierdzamy kierunek przed produkcją.",
  },
  {
    num: "3",
    title: "Produkcja",
    desc: "Sesja zdjęciowa, projekt graficzny, retusz. Każdy krok z dbałością o detale — od światła po teksturę.",
  },
  {
    num: "4",
    title: "Dostawa",
    desc: "Gotowe pliki w pełnej resolucji, zoptymalizowane pod print i digital. Wszystko na czas.",
  },
];

export default function Process() {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    el.querySelectorAll(".reveal").forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="proces" className="py-28 lg:py-36 bg-[#0a0908]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 reveal">
          <div className="md:col-span-5">
            <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-4">
              Jak pracuję
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.2rem)] tracking-tight text-white/95 leading-[1.08]">
              Proces
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-7 flex items-end">
            <p className="text-white/30 text-[15px] font-light leading-relaxed">
              Od pierwszej rozmowy do gotowych plików — cztery etapy, jeden
              spójny wynik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal bg-[#0a0908] p-8 lg:p-12 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="block text-[clamp(3rem,5vw,4.5rem)] font-[family-name:var(--font-display)] leading-none text-white/[0.06] group-hover:text-white/[0.12] transition-colors duration-500 mb-6">
                {step.num}
              </span>

              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl text-white/90 tracking-tight mb-3">
                {step.title}
              </h3>

              <p className="text-white/30 text-[15px] font-light leading-relaxed max-w-md">
                {step.desc}
              </p>

              <div className="mt-8 h-px bg-white/[0.04] group-hover:bg-white/[0.12] transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        #proces .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        #proces .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
