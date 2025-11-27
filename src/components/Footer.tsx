"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function Footer() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Later: wire this up to your email provider / API.
  }

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-slate-800 bg-slate-950/95 overflow-hidden">
      {/* Background glow / texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),rgba(15,23,42,1))]" />
        <div className="absolute -right-32 bottom-[-6rem] h-52 w-52 rounded-full bg-slate-500/10 blur-3xl" />
      </div>

      <div className="container py-10 space-y-8">
        {/* Newsletter */}
        <div className="flex flex-col items-center text-center gap-4 sm:items-start sm:text-left">
          <h2 className="font-serif text-xl font-semibold text-slate-50">
            Stay ahead of the game.
          </h2>
          <p className="max-w-lg text-xs text-slate-300 sm:text-sm">
            Short, occasional emails with training ideas, camp dates and
            updates. No spam, no fluff.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
            />
            <button
              type="submit"
              className="rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.8)] hover:bg-white"
            >
              Join newsletter
            </button>
          </form>
          <p className="text-[11px] text-slate-400">
            Parents &amp; players only. You can unsubscribe in one click.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:text-left">
          {/* Left: copyright + social */}
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left">
            <p className="text-slate-400">
              © {year} Gamechangers Football Coaching.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Link
                href="https://www.instagram.com/football.gamechangers/"
                target="_blank"
                className="rounded-full border border-slate-700 px-3 py-1 hover:border-slate-400 hover:text-slate-100"
              >
                Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@footballgamechangers24"
                target="_blank"
                className="rounded-full border border-slate-700 px-3 py-1 hover:border-slate-400 hover:text-slate-100"
              >
                TikTok
              </Link>
              <Link
                href="https://calendly.com/footballgamechangers1/30min"
                target="_blank"
                className="rounded-full border border-slate-700 px-3 py-1 hover:border-slate-400 hover:text-slate-100"
              >
                Book a call
              </Link>
            </div>
          </div>

          {/* Right: removed external credit */}
          <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-right" />
        </div>
      </div>
    </footer>
  );
}
