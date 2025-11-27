"use client";
import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  // Avoid showing repeatedly if dismissed this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem("gc_lead_popup_dismissed");
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 4000); // 4 seconds
    return () => clearTimeout(t);
  }, []);

  function close() {
    sessionStorage.setItem("gc_lead_popup_dismissed", "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Lead capture"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />
      <div className="relative w-full max-w-sm rounded-3xl border border-emerald-300/40 bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-500 p-[2px] shadow-2xl">
        <div className="rounded-[calc(theme(borderRadius.3xl)-2px)] bg-slate-950/95 px-6 py-7 text-center">
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-600/40 bg-slate-800/70 text-[11px] font-medium text-slate-200 hover:bg-slate-700/80 hover:text-white"
          >
            ×
          </button>
          <h2 className="font-serif text-xl font-semibold tracking-tight text-white">
            Interested in improving your game?
          </h2>
          <p className="mt-3 text-[13px] text-slate-300">
            Drop your phone number below and we can send a quick message to see what would help most.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const input = form.elements.namedItem("phone") as HTMLInputElement | null;
              if (input?.value) {
                // Placeholder: you can hook this to an API route later
                console.log("Captured phone:", input.value);
              }
              close();
            }}
            className="mt-5 space-y-3"
          >
            <input
              required
              name="phone"
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2.5 text-center text-sm text-white placeholder-slate-400 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow hover:from-emerald-300 hover:to-cyan-300"
            >
              Send
            </button>
          </form>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
            no spam, just value
          </p>
        </div>
      </div>
    </div>
  );
}
