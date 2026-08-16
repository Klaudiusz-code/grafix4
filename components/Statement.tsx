'use client';
import { useRef, useEffect } from 'react';

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }}); }, { threshold: 0.2 });
    if(ref.current) obs.observe(ref.current);
  }, []);

  return (
    <section className="py-24 lg:py-36 bg-white border-y border-[rgba(0,0,0,0.05)]" ref={ref}>
      <div className="max-w-[1000px] mx-auto px-6 text-center reveal-up">
        <h2 className="font-[family-name:var(--font-display)] text-[#1A1A1A] text-3xl sm:text-4xl lg:text-[3.5rem] leading-[1.2] tracking-tight">
          „Obraz, który sprawia, że chcesz zobaczyć więcej. Smak zaczyna się od estetyki.”
        </h2>
        <div className="w-10 h-[1px] bg-[#1A1A1A] mx-auto mt-10"></div>
      </div>
    </section>
  );
}