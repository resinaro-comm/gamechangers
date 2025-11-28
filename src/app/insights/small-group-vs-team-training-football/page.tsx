// app/insights/small-group-vs-team-training-football/page.tsx
import Link from "next/link";
export default function SmallGroupVsTeamPage() {
  return (
    <main className="container max-w-3xl space-y-10 py-12">
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
          Insights
        </p>
        <h1 className="font-serif text-3xl font-semibold text-slate-50">
          Small-group vs team training: what actually helps players improve.
        </h1>
        <p className="text-sm text-slate-200">
          Parents often ask whether they should add small-group sessions on top
          of team training. The answer isn&apos;t &quot;always yes&quot;. It
          depends what your child needs right now and how their current team
          environment works.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          What team training is great for.
        </h2>
        <p className="text-sm text-slate-200">
          Good team training (grassroots or academy) is where players learn:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>Shapes, positions and how the team wants to play.</li>
          <li>Working with different personalities and teammates.</li>
          <li>Game understanding in bigger numbers and full-pitch spaces.</li>
          <li>Managing emotions: wins, losses, subs, mistakes.</li>
        </ul>
        <p className="text-sm text-slate-200">
          No small-group session can fully replace that. It should complement
          team training, not compete with it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          Where small-group coaching adds something extra.
        </h2>
        <p className="text-sm text-slate-200">
          Small-group football training (3–6 players) gives more touches, more
          decisions and more feedback per minute. It&apos;s especially useful
          when a player needs:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>
            More time on the ball than they get in a big squad session.
          </li>
          <li>
            Extra repetition of specific match pictures (1v1s, receiving under
            pressure, finishing).
          </li>
          <li>
            A slightly tougher or slightly calmer environment than their
            current team.
          </li>
        </ul>
        <p className="text-sm text-slate-200">
          At Gamechangers in Leeds, we use small groups to create game-real
          practices where every player has to think, compete and communicate.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          Signs small-group sessions might help your player.
        </h2>
        <p className="text-sm text-slate-200">
          A few flags we see that suggest small-group work could add value:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>
            They&apos;re clearly good technically but go quiet in busy team
            sessions.
          </li>
          <li>
            They&apos;re confident in training but freeze in matches when space
            is tight.
          </li>
          <li>
            They&apos;re one of many in a large squad and don&apos;t get much
            individual feedback.
          </li>
        </ul>
        <p className="text-sm text-slate-200">
          In a small-group environment, it&apos;s harder to hide – which can be
          exactly what some players need to grow.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
        <h2 className="text-lg font-semibold text-slate-50">
          How we balance team and small-group training.
        </h2>
        <p className="text-sm text-slate-200">
          We encourage players to treat team training as non-negotiable – then
          use small-group or 1:1 blocks to target specific areas. In Leeds, a
          common pattern is:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>2x team sessions + 1x small-group per week in season.</li>
          <li>
            Small-group blocks in school holidays, when team training drops.
          </li>
          <li>Occasional 1:1 sessions before trials or new seasons.</li>
        </ul>
        <p className="text-sm text-slate-200">
          If you&apos;re unsure which mix would suit your child, we&apos;re
          happy to give an honest view.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#programmes"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-5 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900"
          >
            See our 1:1 &amp; small-group options
          </Link>
          <a
            href="https://wa.me/447727668884?text=Hi%20David%2C%20just%20contacting%20you%20about%20football%20coaching.%20My%20name%20is%20"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200"
          >
            Ask which option fits your player ↗
          </a>
        </div>
      </section>
    </main>
  );
}
