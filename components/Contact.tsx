"use client";
import { useRef, useEffect } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal-up")
      .forEach((el) => obs.observe(el));
  }, []);

  return (
    <section
      id="kontakt"
      className="py-28 lg:py-36 bg-white border-t border-black/[0.04]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
        {/* Nagłówek sekcji */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Lewa kolumna — tekst i dane */}
          <div className="lg:col-span-5 reveal-up">
            <p className="text-[#999] text-[11px] tracking-[0.25em] uppercase mb-5">
              Kontakt
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.2rem)] tracking-tight text-[#1A1A1A] leading-[1.08]">
              Porozmawiajmy&nbsp;o&nbsp;Twoim projekcie.
            </h2>
            <p className="mt-5 text-[#777] text-[15px] font-light leading-relaxed max-w-sm">
              Opisz krótko swój pomysł — odezwę się w ciągu 24 godzin z wstępną
              koncepcją i wyceną.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:magdalenachojnacka@grafix4.pl"
                className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#555] transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-black/25 transition-colors">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span className="text-sm font-light">
                  magdalenachojnacka@grafix4.pl
                </span>
              </a>
              <a
                href="tel:512681102"
                className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#555] transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-black/25 transition-colors">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-light">512 681 102</span>
              </a>
            </div>
          </div>

          {/* Prawa kolumna — formularz */}
          <div className="lg:col-span-7 reveal-up">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-7">
              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2">
                  Imię i nazwisko
                </label>
                <div className="border-b border-black/10 focus-within:border-[#1A1A1A] transition-colors duration-300">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent text-[#1A1A1A] text-[15px] font-light py-2.5 focus:outline-none placeholder:text-[#ccc]"
                    placeholder="Jan Kowalski"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2">
                  Adres email
                </label>
                <div className="border-b border-black/10 focus-within:border-[#1A1A1A] transition-colors duration-300">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent text-[#1A1A1A] text-[15px] font-light py-2.5 focus:outline-none placeholder:text-[#ccc]"
                    placeholder="jan@firma.pl"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#aaa] mb-2">
                  Opisz swój projekt
                </label>
                <div className="border-b border-black/10 focus-within:border-[#1A1A1A] transition-colors duration-300">
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-transparent text-[#1A1A1A] text-[15px] font-light py-2.5 focus:outline-none placeholder:text-[#ccc] resize-none"
                    placeholder="Rodzaj usług, budżet, termin realizacji..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 bg-[#1A1A1A] text-[#FAFAF8] text-[12px] tracking-[0.15em] uppercase font-medium px-8 py-4 hover:bg-[#333] transition-colors duration-300 group"
              >
                Wyślij wiadomość
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
