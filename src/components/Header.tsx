"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";

const links = [{ href: "/", label: "Home" }];

function normalize(path: string) {
  const cleaned = path.replace(/\/+$/, "");
  return cleaned === "" ? "/" : cleaned;
}

export default function Header() {
  const pathname = usePathname();
  const current = normalize(pathname ?? "/");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [current]);

  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Static banner */}
      <div className="sticky top-0 z-50 overflow-hidden border-b border-amber-300/35 bg-gradient-to-r from-amber-400/25 via-amber-300/15 to-indigo-500/25 backdrop-blur-xl">
        <div className="relative h-8">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.55),transparent_70%)]"
          />
          <div className="flex h-full items-center justify-center px-4">
            <p className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.26em] text-slate-950/90">
              Free intro call · See if we&apos;re a good fit
            </p>
          </div>
        </div>
      </div>

      <header
        className={clsx(
          "sticky inset-x-0 top-8 z-40",
          "backdrop-blur-md transition-shadow",
          scrolled ? "shadow-[0_14px_40px_rgba(15,23,42,0.9)]" : "shadow-none",
        )}
      >
        <div className="border-b border-slate-800/80 bg-slate-950/92">
          <div className="container flex h-16 items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-baseline gap-2">
              <span className="text-[11px] uppercase tracking-[0.28em] text-slate-100">
                Gamechangers
              </span>
              <span className="hidden text-[11px] text-slate-400 sm:inline">
                Football Coaching · Leeds
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 text-xs sm:flex sm:text-sm">
              {links.map((link) => {
                const active = current === normalize(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                      active
                        ? "border-amber-300 bg-slate-50 text-slate-950"
                        : "border-transparent text-slate-200 hover:border-amber-300/70 hover:bg-slate-900",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop socials + CTA */}
            <div className="hidden items-center gap-2 sm:flex">
              <a
                href="https://www.instagram.com/football.gamechangers/"
                target="_blank"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:border-amber-300/70 hover:bg-slate-900"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-amber-300" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@footballgamechangers24"
                target="_blank"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-100 hover:border-amber-300/70 hover:bg-slate-900"
              >
                <TikTokIcon className="h-3.5 w-3.5 text-amber-300" />
                <span>TikTok</span>
              </a>
              <a
                href="https://calendly.com/footballgamechangers1/30min"
                target="_blank"
                className="rounded-full bg-amber-300 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.9)] hover:bg-amber-200"
              >
                Book a call
              </a>
            </div>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-100 sm:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="relative block h-3.5 w-4">
                <span className="absolute inset-x-0 top-0 h-[2px] rounded-full bg-slate-100" />
                <span className="absolute inset-x-0 top-1.5 h-[2px] rounded-full bg-slate-100" />
                <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-slate-100" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile side drawer */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden" aria-modal="true" role="dialog">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
          />
          <div className="absolute top-0 right-0 w-2/3 max-w-sm rounded-l-3xl border border-amber-300/40 bg-gradient-to-br from-amber-500/40 via-amber-400/20 to-indigo-600/40 shadow-[0_24px_80px_rgba(15,23,42,0.75)] backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-800/80 px-5 py-4">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.28em] text-amber-100">
                  Gamechangers
                </span>
                <span className="text-[11px] text-slate-100">
                  Football Coaching · Leeds
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/60 bg-slate-950/70 text-amber-100"
                aria-label="Close menu"
              >
                <span className="relative block h-3.5 w-3.5">
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rotate-45 rounded-full bg-slate-100" />
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 -rotate-45 rounded-full bg-slate-100" />
                </span>
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-4 py-4 text-sm">
              {links.map((link) => {
                const active = current === normalize(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "w-full rounded-xl px-4 py-3 text-center text-sm font-medium transition-colors border",
                      active
                        ? "bg-slate-50 text-slate-900 border-slate-50/80"
                        : "bg-black/40 text-slate-50 border-white/10 hover:bg-black/60",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/football.gamechangers/"
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300/50 bg-slate-950/60 px-4 py-3 text-xs font-medium text-amber-50 hover:bg-slate-950"
                >
                  <InstagramIcon className="h-4 w-4 text-amber-300" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@footballgamechangers24"
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300/50 bg-slate-950/60 px-4 py-3 text-xs font-medium text-amber-50 hover:bg-slate-950"
                >
                  <TikTokIcon className="h-4 w-4 text-amber-300" />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://calendly.com/footballgamechangers1/30min"
                  target="_blank"
                  className="w-full rounded-xl bg-gradient-to-r from-amber-300 to-amber-200 px-4 py-3 text-xs font-semibold text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.6)] hover:from-amber-200 hover:to-amber-100 text-center"
                >
                  Book a call
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

// Simple SVG icons
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.4" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17" cy="7" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M14 3c.3 2 1.4 3.3 3.2 3.4v2.3c-1.3.05-2.4-.37-3.2-1.02v6.07c0 2.77-2.24 4.99-5 4.99A5 5 0 0 1 4 13.8c1.4.94 3.2 1.07 4.7.3v2.13a2.3 2.3 0 0 0 2.3 2.3c1.27 0 2.3-1.03 2.3-2.3V3h.7Z" />
    </svg>
  );
}
