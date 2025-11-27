"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Review {
  name: string;
  rating: number; // 1-5
  text: string;
}

const reviews: Review[] = [
  {
    name: "Linda",
    rating: 5,
    text:
      "David was a fantastic coach to my 13 year old and was super kind and friendly towards him. He showed him methods that worked well for his ability and also helped him in games when he played on a Sunday",
  },
  {
    name: "Jason",
    rating: 5,
    text:
      "It was really helpful having David train my son, it gave him the extra advantage when it came to playing on weekends and improved his game massively",
  },
  {
    name: "Megan",
    rating: 5,
    text:
      "The coaching really payed off for my teenage son as I could see how he came on leaps and bounds since starting his 1 to 1 training, it was totally worth it for the value it provided",
  },
];

const AUTOPLAY_MS = 6500;

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [next, paused, index]);

  const active = reviews[index];

  return (
    <div
      className="flex flex-col gap-4"
      aria-label="Customer reviews carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-50">Customer Reviews</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 hover:bg-slate-800"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 hover:bg-slate-800"
          >
            →
          </button>
        </div>
      </div>
      <p className="text-sm text-slate-300">Don&apos;t just take our word for it, here&apos;s what the customers say about us…</p>

      <div className="relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 0.12, 0.12, 0.98] }}
            className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4"
          >
            <p className="font-semibold text-slate-50">
              {active.name} {" "}
              {"★ ".repeat(active.rating).trim()}
            </p>
            <p className="mt-2 text-sm text-slate-200">“{active.text}”.</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-1 flex justify-center gap-2" aria-label="Select review">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition-colors " +
              (i === index ? "bg-emerald-400" : "bg-slate-600 hover:bg-slate-500")
            }
          />
        ))}
      </div>

      <div className="mt-2 text-center text-[11px] text-slate-500">
        {paused ? "Paused" : "Auto-cycling"} · {index + 1} / {reviews.length}
      </div>
    </div>
  );
}
