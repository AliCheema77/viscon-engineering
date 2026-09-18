"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero/residential-farmhouse.jpg",
    alt: "Completed farmhouse residence with landscaped grounds and infinity pool",
  },
  {
    src: "/images/hero/structural-formwork.jpg",
    alt: "Rebar and formwork on a Viscon Engineering structural site",
  },
  {
    src: "/images/hero/mep-substation.jpg",
    alt: "Electrical substation MEP installation on a Viscon Engineering project",
  },
  {
    src: "/images/hero/chemical-proofing.jpg",
    alt: "Chemical waterproofing coating applied inside a Viscon Engineering building",
  },
];

const SLIDE_INTERVAL_MS = 3000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isPaused || prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative h-[80vh] min-h-[480px] w-full overflow-hidden bg-brand-deep"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-brand-deep/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand-tint">
          Viscon Engineering
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl">
          Beyond construction, turning vision into reality
        </h1>
        <p className="mt-4 max-w-xl font-sans text-base text-white/80">
          Smart technology and engineering excellence across civil,
          architectural, MEP, and chemical proofing works.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === activeIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
