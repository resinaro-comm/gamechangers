// app/insights/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Football Coaching Insights – Guides for Parents & Players",
  description:
    "Football coaching insights from Gamechangers in Leeds. Practical guides on 1:1 coaching, kids’ sessions, academy pathways, small-group training and off-season work.",
};

const posts = [
  {
    slug: "1-1-football-coaching-leeds-guide",
    title: "1:1 football coaching in Leeds: when it actually helps.",
    badge: "Parent guide",
    readingTime: "6 min read",
    summary:
      "How to know if 1:1 football coaching is right for your child, what age it makes sense and what a good session should look like.",
  },
  {
    slug: "football-coaching-for-kids-leeds",
    title: "Football coaching for kids in Leeds: what parents should look for.",
    badge: "For younger players",
    readingTime: "7 min read",
    summary:
      "A simple checklist to judge kids’ coaching environments: enjoyment, standards, coach behaviour and red flags.",
  },
  {
    slug: "how-to-get-into-football-academy-leeds",
    title: "How to get into a football academy in Leeds.",
    badge: "Academy pathway",
    readingTime: "7 min read",
    summary:
      "What academies actually notice, common mistakes families make and how extra coaching can genuinely help preparation.",
  },
  {
    slug: "small-group-vs-team-training-football",
    title: "Small-group vs team training: what actually helps players improve.",
    badge: "Training structure",
    readingTime: "5 min read",
    summary:
      "Where team training is irreplaceable, where small-groups add value and how to balance both without overload.",
  },
  {
    slug: "off-season-football-training-leeds",
    title:
      "Off-season football training in Leeds: staying sharp when others switch off.",
    badge: "Off-season planning",
    readingTime: "6 min read",
    summary:
      "How to use school holidays and pre-season in a smart way so players return sharper, not burnt out.",
  },
];

export default function InsightsIndexPage() {
  return (
    <main className="container max-w-4xl space-y-10 py-12">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
          Insights
        </p>
        <h1 className="font-serif text-3xl font-semibold text-slate-50">
          Football coaching insights for Leeds parents &amp; players.
        </h1>
        <p className="max-w-2xl text-sm text-slate-200">
          Short, honest guides based on what we see every week on the pitch:
          1:1 work, kids&apos; coaching, academy pathways, small-group sessions
          and off-season planning. Written for families who take development
          seriously – without the jargon.
        </p>
      </header>

      {/* Highlight strip */}
      <section className="rounded-2xl border border-amber-300/30 bg-[#020920]/95 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
          Start here
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-slate-200">
            Not sure which article to read first? If you&apos;re thinking about
            extra coaching for your child, this is usually the best place to
            start.
          </p>
          <Link
            href="/insights/1-1-football-coaching-leeds-guide"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200 sm:mt-0"
          >
            Read the 1:1 coaching guide ↗
          </Link>
        </div>
      </section>

      {/* Posts grid */}
      <section className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex h-full flex-col justify-between rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-amber-300/60"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.18em]">
                <span className="rounded-full bg-[#020617] px-3 py-1 text-amber-200">
                  {post.badge}
                </span>
                <span className="text-slate-400">{post.readingTime}</span>
              </div>
              <h2 className="text-base font-semibold text-slate-50 group-hover:text-amber-200">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-slate-200">{post.summary}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Written for families in Leeds &amp; West Yorkshire.</span>
              <Link
                href={`/insights/${post.slug}`}
                className="inline-flex items-center gap-1 text-amber-200 hover:text-amber-100"
              >
                Read insight
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Soft CTA back to coaching offers */}
      <section className="space-y-3 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
        <h2 className="text-sm font-semibold text-slate-50">
          Want to talk through your player&apos;s situation?
        </h2>
        <p className="text-sm text-slate-200">
          Every player is different. If you&apos;d rather talk through where your
          child is at and whether 1:1, small-group or camps make sense, we&apos;ll
          give you an honest view – even if the answer is &quot;not yet&quot;.
        </p>
        <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/447727668884?text=Hi%20David%2C%20I%27m%20reading%20your%20insights%20and%20want%20to%20chat%20about%20coaching%20in%20Leeds."
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200"
            >
              Message on WhatsApp ↗
            </a>
          <Link
            href="/#programmes"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-5 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900"
          >
            See coaching options
          </Link>
        </div>
      </section>
    </main>
  );
}
