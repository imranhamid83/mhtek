"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type CarouselSlide = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export default function Carousel({ slides, intervalMs = 4500 }: { slides: CarouselSlide[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const clampedSlides = useMemo(() => slides.filter(Boolean), [slides]);

  useEffect(() => {
    if (clampedSlides.length <= 1) return;
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % clampedSlides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [clampedSlides.length, intervalMs]);

  if (!clampedSlides.length) return null;

  const current = clampedSlides[index];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
      <img
        src={current.imageUrl}
        alt={current.title}
        className="h-64 w-full object-cover md:h-96"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-semibold drop-shadow-sm">{current.title}</h3>
        {current.subtitle && <p className="text-white/90">{current.subtitle}</p>}
      </div>
      <div className="absolute bottom-3 right-4 flex gap-2">
        {clampedSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}


