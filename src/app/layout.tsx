import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gamechangers-football-coaching.vercel.app"),
  title: {
    default: "Football Coaching Leeds | Academy-Level 1:1 & Group",
    template: "%s | Gamechangers Football Coaching",
  },
  description:
    "Gamechangers Football Coaching in Leeds: academy-level 1:1 football coaching and small-group training. Clear feedback, structured blocks, and match-realistic sessions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://gamechangers-football-coaching.vercel.app/",
    title: "Football Coaching Leeds | Academy-Level 1:1 & Group",
    description:
      "Elite football coaching in Leeds. 1 to 1 and group sessions focused on technique, decision making and confidence.",
    siteName: "Gamechangers Football Coaching",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gamechangers Football Coaching — academy-level sessions in Leeds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Football Coaching Leeds | Academy-Level 1:1 & Group",
    description:
      "Elite football coaching in Leeds — 1:1 and small-group training that improves technique, decisions and confidence.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/gamechangers-logo.jpg",
    apple: "/gamechangers-logo.jpg",
  },
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
          {/* Vercel instrumentation */}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
