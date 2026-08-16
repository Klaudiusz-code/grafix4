import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0908]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] text-white/90 tracking-tight leading-[0.95]">
            Masz pomysł?
            <br />
            Porozmawiajmy.
          </h2>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-white text-[#0a0908] text-[12px] tracking-[0.15em] uppercase font-bold px-8 py-4 hover:bg-white/90 transition-colors duration-300 shrink-0"
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
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-1 group mb-5">
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-[0.02em] text-white/90">
              GRAFIK
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 bg-white text-[#0a0908] font-[family-name:var(--font-display)] text-sm rounded-full -translate-y-1 group-hover:scale-110 transition-transform duration-300">
              4
            </span>
          </Link>
          <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs">
            Fotografia kulinarna i grafika reklamowa. Tworzę wizualne świata, w
            których chce się zanurzyć.
          </p>
        </div>

        <div>
          <p className="text-white/20 text-[10px] tracking-[0.25em] uppercase mb-5">
            Nawigacja
          </p>
          <ul className="space-y-3">
            {[
              { label: "Portfolio", href: "#prace" },
              { label: "Proces", href: "#proces" },
              { label: "Usługi", href: "#design" },
              { label: "O mnie", href: "#omnie" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/50 text-sm font-light hover:text-white/90 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white/20 text-[10px] tracking-[0.25em] uppercase mb-5">
            Kontakt
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:magdalenachojnacka@grafix4.pl"
                className="text-white/50 text-sm font-light hover:text-white/90 transition-colors duration-300 break-all"
              >
                magdalenachojnacka@grafix4.pl
              </a>
            </li>
            <li>
              <a
                href="tel:512681102"
                className="text-white/50 text-sm font-light hover:text-white/90 transition-colors duration-300"
              >
                512 681 102
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white/20 text-[10px] tracking-[0.25em] uppercase mb-5">
            Social
          </p>
          <ul className="space-y-3">
            {[
              { label: "Instagram", href: "#" },
              { label: "Behance", href: "#" },
              { label: "Pinterest", href: "#" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/50 text-sm font-light hover:text-white/90 transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  {link.label}
                  <svg
                    className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[11px] tracking-wider font-light">
            © {new Date().getFullYear()} Magdalena Chojnacka. Wszelkie prawa
            zastrzeżone.
          </p>

          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/20 hover:text-white/50 transition-colors duration-300 text-[11px] tracking-wider font-light"
          >
            Realizacja:
            <img
              src="https://klaudiuszdev.pl/hello.svg"
              alt="KlaudiuszDev"
              className="w-4 h-4"
            />
            klaudiuszdev.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
