"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";
import heroImage from "./football-background-hero.png";
import davidImg from "./david.png";
import jamesImg from "./james.png";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const EASE: [number, number, number, number] = [0.22, 0.12, 0.12, 0.98];

const programmeCards = [
  {
    title: "1:1 Elite Sessions",
    subtitle: "Detail, focus, standards.",
    desc: "Laser-focused work on technique, movement and decision making. Built for players who actually want to improve.",
    bullets: [
      "Position-specific work and habits.",
      "Fix weak areas with clear, tracked progress.",
      "Sessions tailored around upcoming fixtures.",
    ],
  },
  {
    title: "Small-Group Training",
    subtitle: "Pressure, decisions, competition.",
    desc: "Game-realistic drills in a tight group. Tempo and decisions under pressure, not slow drills in lines.",
    bullets: [
      "Max 6 players per group.",
      "Game-like practices and constraints.",
      "Instant feedback and standards.",
    ],
  },
  {
    title: "Camps & Clinics",
    subtitle: "Blocks that change a season.",
    desc: "Holiday and pre-season blocks for sharpness, fitness and confidence before the season starts.",
    bullets: [
      "Focused themes: finishing, 1v1s, scanning.",
      "Mix of technical and game situations.",
      "Keeps players sharp when others switch off.",
    ],
  },
];

const focusAreas = [
  {
    label: "Technique under pressure",
    detail: "First touch, striking and receiving with pressure, not cones.",
  },
  {
    label: "Game decisions",
    detail: "Scanning, angles, and choices when time and space are tight.",
  },
  {
    label: "Mindset & standards",
    detail: "Turning up focused, competing properly, feedback you can use.",
  },
  {
    label: "Position habits",
    detail: "Runs, body shape and choices that match your role on matchday.",
  },
];

const coaches = [
  {
    name: "David Lawn",
    role: "Lead coach",
    roleTone: "emerald" as const,
    img: davidImg,
    bullets: ["Technical detail & decision making.", "Session design & standards."],
    tagline:
      "Sessions that look and feel like match pictures — clear feedback, mindset and habits that translate on Sunday.",
  },
  {
    name: "James Lawn",
    role: "Assistant coach",
    roleTone: "indigo" as const,
    img: jamesImg,
    bullets: ["Energy & tempo in group blocks.", "Helps turn drills into match habits."],
    tagline:
      "Supports small-group and camp intensity; builds confidence in decisions and communication under pressure.",
  },
];

const successPlayers = [
  {
    name: "Archie Gray",
    tag: "Tottenham Hotspur · Leeds United · England U21",
  },
  {
    name: "Jamie Shackleton",
    tag: "Leeds United",
  },
  {
    name: "Harry Leonard",
    tag: "Blackburn Rovers",
  },
  {
    name: "Will Hugill",
    tag: "Burnley F.C.",
  },
];

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -16]);

  const reducedAttr = useMemo(
    () =>
      prefersReducedMotion
        ? ({ "data-reduced": "true" } as const)
        : ({ "data-reduced": "false" } as const),
    [prefersReducedMotion],
  );

  return (
    <main>
      {/* HERO (full-bleed) */}
      <section aria-label="Hero">
        <div className="relative ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] w-screen">
          <div
            ref={heroRef}
            className="relative isolate overflow-hidden bg-slate-950"
          >
            {/* Background image */}
            <motion.div
              aria-hidden
              className="absolute inset-0 z-0"
              style={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: bgScale,
                      opacity: bgOpacity,
                    }
              }
            >
              <Image
                src={heroImage}
                alt="Football pitch at sunrise"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Overlays */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                backgroundImage: [
                  "linear-gradient(to bottom, rgba(3,7,18,0.9) 0%, rgba(3,7,18,0.72) 34%, rgba(3,7,18,0.78) 60%)",
                  "linear-gradient(to top, rgba(245,158,11,0.32) 0%, rgba(245,158,11,0.0) 42%)",
                  "radial-gradient(1200px 720px at 50% 20%, rgba(15,23,42,0.0) 0%, rgba(15,23,42,0.7) 60%, rgba(15,23,42,1) 100%)",
                ].join(","),
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-[46%] left-1/2 z-10 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full blur-[130px] opacity-55"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,191,36,0.75) 0%, rgba(251,191,36,0.0) 65%)",
              }}
            />

            {/* Content */}
            <div className="relative z-20 px-4 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 md:px-12 md:pt-24 lg:px-20 lg:pb-20">
              <motion.div
                style={{ y: badgeY }}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE }}
                className="flex justify-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-black/55 px-4 py-1 text-[11px] uppercase tracking-[0.26em] text-slate-100/90">
                  <span className="h-1 w-1 rounded-full bg-amber-300" />
                  <span>Leeds · Football Coaching</span>
                </div>
              </motion.div>

              <motion.div
                style={{ y: headlineY }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                className="mt-5 text-center"
                {...reducedAttr}
              >
                <h1 className="mx-auto max-w-3xl font-serif text-[32px] font-semibold leading-[1.08] tracking-tight text-slate-50 drop-shadow-[0_18px_60px_rgba(0,0,0,0.7)] sm:text-[40px] md:text-[52px] lg:text-[56px]">
                  Academy-level football coaching
                  <span className="block">for players who want more.</span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-100/90 sm:text-[15px]">
                  1:1 and small-group sessions that sharpen technique,
                  decision-making and confidence. Built for players who take
                  their development seriously.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
                className="mt-7 flex flex-wrap items-center justify-center gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  href="https://calendly.com/footballgamechangers1"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.9)] hover:bg-amber-200"
                >
                  Book an intro call
                  <span aria-hidden className="ml-2 text-[13px]">↗</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  href="#programmes"
                  className="inline-flex items-center justify-center rounded-full border border-amber-300/70 bg-black/40 px-6 py-2.5 text-sm font-medium text-slate-50 hover:bg-black/60"
                >
                  See training options
                </motion.a>
              </motion.div>

              {/* Hero stats strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: EASE, delay: 0.6 }}
                className="mt-10"
              >
                <div className="flex flex-wrap items-center justify-center gap-4 rounded-full border border-amber-300/35 bg-black/45 px-4 py-3 text-[11px] text-slate-100 sm:text-xs md:px-6 md:py-3.5">
                  <HeroStat label="2k+ followers" detail="TikTok · Instagram" />
                  <Dot />
                  <HeroStat
                    label="Regular content"
                    detail="Training & match clips"
                  />
                  <Dot />
                  <HeroStat label="Sessions in Leeds" detail="Group & 1:1" />
                  <Dot />
                  <HeroStat
                    label="Focused on academy level"
                    detail="Serious standards only"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLING STRIP */}
      <section
        aria-label="Focus strip"
        className="border-t border-amber-400/30 bg-slate-950"
      >
        <div className="relative overflow-hidden">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 32,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            className="flex min-w-full gap-10 whitespace-nowrap py-3 text-[11px] uppercase tracking-[0.28em] text-amber-200"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex gap-6">
                <span>First touch</span>
                <span>1v1s</span>
                <span>Scanning</span>
                <span>Decision making</span>
                <span>Body shape</span>
                <span>Mindset</span>
                <span>Match realism</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section id="programmes" className="container mt-10 space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Training options
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-50 sm:text-[26px]">
              What we offer.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-200">
              Each option is built around serious players. No time wasting,
              gimmicks or endless lines of cones.
            </p>
          </div>
          <a
            href="https://calendly.com/footballgamechangers1"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-amber-300/70 bg-slate-950 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900/80"
          >
            Not sure which fits? Book a call ↗
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {programmeCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: EASE, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#020920]/90 p-5 text-sm shadow-[0_16px_60px_rgba(15,23,42,0.65)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,hsl(40,95%,72%)/0.16,transparent_60%)]" />
              </div>
              <div className="relative space-y-3">
                <h3 className="font-semibold text-slate-50">{card.title}</h3>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300/85">
                  {card.subtitle}
                </p>
                <p className="text-slate-100">{card.desc}</p>
                <ul className="mt-2 space-y-1.5 text-[13px] text-slate-200/95">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1 w-1 rounded-full bg-emerald-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="pt-3 text-xs font-medium text-amber-200"
                >
                  See session examples on TikTok →
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="container mt-12 mb-6 space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              What we actually train
            </p>
            <h2 className="mt-1 font-serif text-xl font-semibold text-slate-50 sm:text-[22px]">
              The details that show up on matchday.
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-200 sm:text-[13px]">
            Everything is built around real game pictures. Players should feel
            the difference on Sunday, not just look better on a drill.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-slate-50 transition-colors group-hover:text-emerald-300">
                  {area.label}
                </h3>
                <span className="mt-0.5 text-xs text-slate-500 transition-colors group-hover:text-slate-200">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-200">{area.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MEET THE TEAM – moved up, more visual */}
      <section
        id="coaches"
        className="container mb-12 mt-10 space-y-6"
        aria-label="Meet the team"
      >
        <div className="space-y-2 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Coaches
          </p>
          <h2 className="font-serif text-2xl font-semibold text-slate-50">
            Coaches on the pitch with your player.
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-200">
            Two brothers who still love the game — and care about the details
            that show up on matchday.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {coaches.map((coach, idx) => (
            <motion.article
              key={coach.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: idx * 0.06 }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -6, scale: 1.01, transition: { duration: 0.25 } }
              }
              className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-br from-[#020920] via-[#050b1c] to-[#020617] p-5"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,hsl(40,96%,72%)/0.16,transparent_60%)]" />
              </div>

              <div className="relative flex flex-col gap-4 sm:flex-row">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-slate-600 bg-slate-900">
                  <Image
                    src={coach.img}
                    alt={coach.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex-1 text-sm">
                  <p
                    className={[
                      "text-xs uppercase tracking-[0.22em]",
                      coach.roleTone === "emerald"
                        ? "text-emerald-300"
                        : "text-indigo-300",
                    ].join(" ")}
                  >
                    {coach.role}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-50">
                    {coach.name}
                  </h3>
                  <ul className="mt-2 space-y-1 text-slate-200">
                    {coach.bullets.map((b) => (
                      <li key={b}>· {b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="relative mt-3 text-sm text-slate-200">
                {coach.tagline}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* REVIEWS & PHILOSOPHY + SUCCESS STRIP */}
      <section
        className="container mb-12 space-y-8"
        aria-label="Reviews and coaching philosophy"
      >
        {/* Section header */}
        <header className="max-w-2xl space-y-2 text-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Proof &amp; coaching approach
          </p>
          <h2 className="font-serif text-2xl font-semibold text-slate-50">
            What results look like — and how we coach to get there.
          </h2>
        </header>

        {/* Top row: player stories + reviews */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Player stories card */}
          <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
            <h3 className="text-lg font-semibold text-slate-50">
              Player stories
            </h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200">
              Real outcomes from 6–12 week blocks.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              <li>
                <span className="font-semibold text-slate-50">
                  Academy place (U15)
                </span>
                <span className="block text-slate-300">
                  After a focused 6-month block building confidence on the ball
                  and game understanding.
                </span>
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  More confident GK
                </span>
                <span className="block text-slate-300">
                  Better decisions, communication and bravery coming for crosses
                  and 1v1s.
                </span>
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Calmer on the ball
                </span>
                <span className="block text-slate-300">
                  Players staying composed under pressure instead of just
                  clearing it.
                </span>
              </li>
            </ul>
          </div>

          {/* Reviews card (carousel inside) */}
          <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
            <ReviewsCarousel />
          </div>
        </div>

        {/* Bottom row: younger vs older players + CTA */}
        <div className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Younger players */}
            <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
              <h3 className="text-lg font-semibold text-slate-50">
                Younger players
              </h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                Fun, confidence, foundations.
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
                <li>· Enjoyment first — high-energy, game-style practices.</li>
                <li>
                  · Strong basics — first touch, striking and movement with the
                  ball.
                </li>
                <li>
                  · Good habits — listening, effort, respect and teamwork from
                  an early age.
                </li>
              </ul>
            </div>

            {/* Older players */}
            <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
              <h3 className="text-lg font-semibold text-slate-50">
                Older players
              </h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-300">
                Sharpening for academy &amp; 11-a-side football.
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
                <li>
                  · Tactical understanding — positions, roles and what to look
                  for.
                </li>
                <li>
                  · Match realism — game pictures, pressure and decision making,
                  not cone mazes.
                </li>
                <li>
                  · Mentality — standards, resilience and coping when things
                  don&apos;t go to plan.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                Modern, FA-aligned coaching. DBS checked and fully insured.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <a
              href="https://calendly.com/footballgamechangers1/30min"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-amber-300/70 bg-[#020617] px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-900"
            >
              Ask if it&apos;s right for your player ↗
            </a>
          </div>
        </div>

        {/* Upgraded Success Stories card */}
        <div className="space-y-4 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
          <h2 className="text-lg font-semibold text-slate-50">
            Players we&apos;ve worked with (even briefly).
          </h2>
          <p className="text-sm text-slate-200">
            Now playing at Premier League &amp; EFL clubs. This is the standard
            we build towards — whatever level your player is at right now.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {successPlayers.map((player) => (
              <div
                key={player.name}
                className="rounded-xl border border-slate-700/80 bg-[#020617] px-3 py-3"
              >
                <p className="text-sm font-semibold text-slate-50">
                  {player.name}
                </p>
                <p className="mt-2 inline-flex items-center rounded-full bg-[#020920] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                  {player.tag}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm text-slate-200">
            <p className="text-xs text-slate-400">
              Not every player ends up pro — but everyone here trains with the
              same attention to detail and standards.
            </p>
            <a
              href="https://calendly.com/footballgamechangers1/30min"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-amber-300/70 bg-[#020617] px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-900"
            >
              See if our blocks are a good fit ↗
            </a>
          </div>
        </div>
      </section>

      {/* LATEST FROM SOCIAL – phone-style featured reel */}
      <section
        className="container mb-16 space-y-8"
        aria-label="Latest from social media"
      >
        <div className="space-y-2 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
            Latest Content
          </p>
          <h2 className="font-serif text-2xl font-semibold text-slate-50">
            Latest from our social media
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-200">
            Quick coaching clips your player can copy straight away. Same
            content as TikTok &amp; Instagram — just without the scroll.
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* soft glow behind phone */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 bottom-0 top-6 -z-10 rounded-full bg-[radial-gradient(circle_at_top,#fbbf24_0%,transparent_55%)] opacity-30"
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.25 },
                  }
            }
            className="relative w-full max-w-xs rounded-[2.5rem] border border-slate-700/80 bg-gradient-to-b from-[#020617] via-black to-[#020617] px-3 pt-3 pb-4 shadow-[0_24px_80px_rgba(0,0,0,0.75)]"
          >
            {/* top notch */}
            <div className="mx-auto mb-3 flex h-5 w-24 items-center justify-center rounded-full border border-slate-800 bg-black/70">
              <span className="h-1 w-10 rounded-full bg-slate-500/60" />
            </div>

            {/* video inside phone */}
            <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-800 bg-black">
              <video
                controls
                playsInline
                muted
                preload="metadata"
                crossOrigin="anonymous"
                className="h-full w-full object-cover"
                poster="/reels/shooting-technique.jpg"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.outerHTML = '<div class="p-4 text-center text-xs text-slate-300">Video failed to load on this device. <a href="https://www.tiktok.com/@footballgamechangers24" target="_blank" class="underline">Open on TikTok ↗</a></div>';
                }}
              >
                {/* Baseline H.264 (mobile-first) */}
                <source src="/reels/shooting-technique-mobile.mp4" type="video/mp4" />
                {/* Original VP9 + AAC */}
                <source src="/reels/shooting-technique.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* caption + meta */}
            <div className="mt-3 space-y-1.5 text-center text-xs">
              <p className="font-semibold text-slate-50">
                4 ways to improve your shooting technique
              </p>
              <p className="text-[11px] text-slate-400">
                21.8k views · 0:27 · Finishing
              </p>
            </div>
          </motion.div>
        </div>

        {/* platform + CTA pills */}
        <div className="mt-4 space-y-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            <span className="rounded-full bg-[#020920] px-3 py-1 text-slate-200">
              TikTok
            </span>
            <span className="rounded-full bg-[#020920] px-3 py-1 text-slate-200">
              Instagram
            </span>
            <span className="rounded-full bg-[#020920] px-3 py-1 text-slate-200">
              Updated weekly
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href="https://www.tiktok.com/@footballgamechangers24"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-amber-300/70 bg-[#020920] px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900"
            >
              Open on TikTok ↗
            </a>
            <a
              href="https://www.instagram.com/football.gamechangers/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-[#020617] px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900"
            >
              See more drills
            </a>
            <a
              href="https://calendly.com/footballgamechangers1/30min"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200"
            >
              Book a call after watching ↗
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD for local SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Gamechangers Football Coaching",
            description:
              "Academy-level football coaching in Leeds. 1:1 and group sessions for serious players.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Leeds",
              addressRegion: "West Yorkshire",
              addressCountry: "GB",
            },
            url: "https://www.gamechangers-football-site.com",
            sameAs: [
              "https://www.instagram.com/football.gamechangers/",
              "https://www.tiktok.com/@footballgamechangers24",
            ],
          }),
        }}
      />
    </main>
  );
}

type HeroStatProps = {
  label: string;
  detail: string;
};

function HeroStat({ label, detail }: HeroStatProps) {
  return (
    <span className="inline-flex flex-col items-center text-center sm:flex-row sm:gap-2">
      <span className="font-medium text-slate-50">{label}</span>
      <span className="hidden text-amber-200 sm:inline">·</span>
      <span className="text-slate-200">{detail}</span>
    </span>
  );
}

function Dot() {
  return (
    <span className="hidden h-1 w-1 rounded-full bg-amber-300 sm:inline-block" />
  );
}
