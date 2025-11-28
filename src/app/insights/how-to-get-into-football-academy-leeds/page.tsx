// app/insights/how-to-get-into-football-academy-leeds/page.tsx
import Link from "next/link";
            <a
              href="https://wa.me/447727668884?text=Hi%20David%2C%20just%20contacting%20you%20about%20football%20coaching.%20My%20name%20is%20"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200"
            >
              Message on WhatsApp ↗
            </a>
export default function AcademyLeedsPage() {
  return (
    <main className="container max-w-3xl space-y-10 py-12">
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
          Insights
        </p>
        <h1 className="font-serif text-3xl font-semibold text-slate-50">
          How to get into a football academy in Leeds.
        </h1>
        <p className="text-sm text-slate-200">
          There are no magic trials, only preparation. This guide breaks down
          what academy staff really notice in players – and how serious training
          in Leeds can put your child in a better place if an opportunity
          appears.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          What academies actually look for.
        </h2>
        <p className="text-sm text-slate-200">
          Every club has their own language, but you&apos;ll see the same themes
          across Leeds and beyond:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>
            <span className="font-semibold text-amber-200">
              First touch:
            </span>{" "}
            can they get the ball under control quickly and away from pressure?
          </li>
          <li>
            <span className="font-semibold text-amber-200">Awareness:</span>{" "}
            do they scan before the ball arrives and make decisions early?
          </li>
          <li>
            <span className="font-semibold text-amber-200">Game bravery:</span>{" "}
            not just tackling – taking the ball in tight spaces, offering for
            the ball, competing properly.
          </li>
          <li>
            <span className="font-semibold text-amber-200">Coachability:</span>{" "}
            how they react to feedback, body language when things go wrong.
          </li>
        </ul>
        <p className="text-sm text-slate-200">
          Extra football coaching should build those habits, not just flashy
          tricks that don&apos;t show up in academy games.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          How extra coaching in Leeds can help.
        </h2>
        <p className="text-sm text-slate-200">
          Players aiming for academies often benefit from focused 1:1 or small
          group work alongside their team training:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>
            Cleaning up first touch and body shape in realistic situations.
          </li>
          <li>
            Repeating specific match pictures they struggle with on Sundays.
          </li>
          <li>
            Building confidence in weaker areas (weaker foot, heading, 1v1s).
          </li>
          <li>
            Understanding expectations: intensity, communication, standards.
          </li>
        </ul>
        <p className="text-sm text-slate-200">
          At Gamechangers, we&apos;ve worked with players who have gone on to
          Premier League and EFL academies. The common thread: they took
          responsibility for their own development and trained with purpose.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          Common mistakes parents and players make.
        </h2>
        <p className="text-sm text-slate-200">
          A few patterns we see around Leeds:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>
            Chasing every &quot;trial&quot; instead of building the player first.
          </li>
          <li>
            Switching teams constantly, hoping a new badge will change things.
          </li>
          <li>
            Ignoring basics like sleep, nutrition and how often they actually
            touch a ball.
          </li>
          <li>
            Training only when a scout is watching, instead of year-round habits.
          </li>
        </ul>
        <p className="text-sm text-slate-200">
          The players who last in academies don&apos;t just arrive there – they
          arrive prepared and ready for the standards.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
        <h2 className="text-lg font-semibold text-slate-50">
          Where to start if your child has academy ambition.
        </h2>
        <p className="text-sm text-slate-200">
          If your player trains and plays regularly in Leeds and wants to push
          towards academy level, we usually suggest:
        </p>
        <ol className="list-decimal space-y-1.5 pl-5 text-sm text-slate-200">
          <li>Get honest about their strengths and gaps right now.</li>
          <li>
            Commit to a small block of focused training (6–8 weeks) on those
            gaps.
          </li>
          <li>
            Keep enjoying football – pressure is normal, but they still need to
            love the game.
          </li>
        </ol>
        <p className="text-sm text-slate-200">
          We&apos;re happy to give a straight opinion, even if that means saying
          &quot;not yet&quot;. That honesty tends to help more in the long run.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/447727668884?text=Hi%20David%2C%20just%20contacting%20you%20about%20football%20coaching.%20My%20name%20is%20"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200"
          >
            Book an academy-focused intro call ↗
          </a>
          <Link
            href="/#programmes"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-5 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900"
          >
            See our training blocks
          </Link>
        </div>
      </section>
    </main>
  );
}
