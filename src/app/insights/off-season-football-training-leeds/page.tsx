// app/insights/off-season-football-training-leeds/page.tsx
import Link from "next/link";
            <a
              href="https://wa.me/447727668884?text=Hi%20David%2C%20just%20contacting%20you%20about%20football%20coaching.%20My%20name%20is%20"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200"
            >
              Message on WhatsApp ↗
            </a>
export default function OffSeasonLeedsPage() {
  return (
    <main className="container max-w-3xl space-y-10 py-12">
      <header className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
          Insights
        </p>
        <h1 className="font-serif text-3xl font-semibold text-slate-50">
          Off-season football training in Leeds: staying sharp when others switch off.
        </h1>
        <p className="text-sm text-slate-200">
          The gap between seasons is when some players jump levels and others go
          backwards. Here&apos;s how to use off-season and school holidays in
          Leeds without burning your child out.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1–2 weeks completely off is fine.
        </h2>
        <p className="text-sm text-slate-200">
          For most young players, a short break helps more than it hurts:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>Let the body recover from knocks and minor injuries.</li>
          <li>Mentally reset after a long school and football schedule.</li>
          <li>Return fresher and more motivated for the next block.</li>
        </ul>
        <p className="text-sm text-slate-200">
          Completely switching off all summer, though, usually shows when
          pre-season starts in Leeds and the tempo jumps again.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          What a good off-season week might look like.
        </h2>
        <p className="text-sm text-slate-200">
          After that initial break, many players benefit from a simple pattern:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>
            2–3 technical sessions (ball mastery, first touch, weak foot).
          </li>
          <li>
            1–2 conditioning sessions (short, sharp, football-based where
            possible).
          </li>
          <li>Plenty of informal play: parks, cages, garden football.</li>
        </ul>
        <p className="text-sm text-slate-200">
          At Gamechangers, our camps and clinics in Leeds are built to plug
          into that type of week – not replace all other activity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          What we focus on in off-season blocks.
        </h2>
        <p className="text-sm text-slate-200">
          Off-season and holiday blocks are a chance to work on things that are
          harder to do during busy league schedules:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-200">
          <li>First touch and receiving in tight areas.</li>
          <li>1v1 defending and attacking habits.</li>
          <li>Finishing reps under different types of pressure.</li>
          <li>Fitness built through realistic game practices, not just running.</li>
        </ul>
        <p className="text-sm text-slate-200">
          We want players returning to their teams in Leeds feeling sharper,
          fitter and more confident – not just &quot;more tired&quot; from
          endless sessions.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-700/80 bg-[#020920]/95 p-5">
        <h2 className="text-lg font-semibold text-slate-50">
          Planning your child&apos;s next off-season.
        </h2>
        <p className="text-sm text-slate-200">
          If you know when the next break or holiday window is, it&apos;s worth
          planning now:
        </p>
        <ol className="list-decimal space-y-1.5 pl-5 text-sm text-slate-200">
          <li>Block out a short complete rest (no football).</li>
          <li>
            Choose 1–2 themes to focus on (e.g. weak foot + 1v1 defending).
          </li>
          <li>
            Add a camp or coaching block that lines up with those themes.
          </li>
        </ol>
        <p className="text-sm text-slate-200">
          We can help map an off-season that fits your child&apos;s age, current
          level and upcoming goals.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#programmes"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 px-5 py-2 text-xs font-medium text-slate-100 hover:bg-slate-900"
          >
            See our camps &amp; clinic options
          </Link>
          <a
            href="https://wa.me/447727668884?text=Hi%20David%2C%20just%20contacting%20you%20about%20football%20coaching.%20My%20name%20is%20"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-200"
          >
            Plan an off-season block ↗
          </a>
        </div>
      </section>
    </main>
  );
}
