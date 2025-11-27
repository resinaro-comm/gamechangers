import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

export const metadata: Metadata = {
  title: {
    default: "Gamechangers Football Coaching",
    template: "%s | Gamechangers Football Coaching",
  },
  description:
    "1:1 and group football coaching for academy-level players in Leeds. Structured sessions, clear feedback, and a focus on results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {/* Global background glow */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl" />
          <div className="absolute bottom-[-18rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/5 blur-3xl" />
        </div>

        <div className="flex min-h-screen flex-col">
          <Header />
          {/* Header is fixed h-16 → give pages breathing room */}
          <main className="flex-1 pb-12">{children}</main>
          <Footer />
          <LeadPopup />
        </div>
      </body>
    </html>
  );
}
