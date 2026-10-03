import Link from 'next/link';

export default function ExpectationsPage() {
  const expectations = [
    {
      number: '1',
      title: 'Clear Scope & Timelines',
      description: 'Defined project milestones, realistic delivery targets of 1-5 weeks, and no hidden surprises.',
    },
    {
      number: '2',
      title: 'Regular Progress Updates',
      description: 'Consistent communication through brief weekly video previews or live staging updates.',
    },
    {
      number: '3',
      title: 'Pixel-Perfect Execution',
      description: 'Clean, responsive front-end code built to match approved designs and optimized for mobile and desktop screens.',
    },
    {
      number: '4',
      title: 'Structured Revisions & Handoff',
      description: 'Up to two dedicated rounds of revisions, followed by a smooth code handoff and launch support.',
    },
  ];
  const processSteps = [
    {
      title: 'Step 1: Discovery & Briefing',
      description: 'We review design files, align on project goals, and confirm timeline milestones.',
    },
    {
      title: 'Step 2: Build & Feedback',
      description: 'Development begins with regular staging updates so you can preview progress in real time.',
    },
    {
      title: 'Step 3: Refinement & Launch',
      description: 'Final revisions are completed, assets are handed over, and code is deployed to live servers.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#111827] px-6 pb-20 pt-40 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mt-3 py-4 text-4xl font-bold">Working Together</h1>
        <p className="text-2xl font-semibold text-amber-200">Workplace Expectations</p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
          Every project starts with a clear scope and timeline, with regular updates and focused collaboration from kickoff through delivery.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {expectations.map(({ number, title, description }) => (
            <article key={number} className="min-h-52 rounded-2xl bg-white/20 p-6 text-white backdrop-blur-sm">
              <p className="text-4xl font-bold">{number}</p>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
            </article>
          ))}
        </div>

        <section aria-labelledby="work-process-heading" className="mt-20 border-t border-white/15 pt-12">
          <h2 id="work-process-heading" className="text-3xl font-bold text-white">
            How We Work Together
          </h2>
          <p className="mt-3 text-lg font-semibold text-amber-200">
            A simple, transparent 3-step process to bring your vision to life.
          </p>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {processSteps.map(({ title, description }) => (
              <li key={title} className="border-t border-white/15 pt-5">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <Link href="/" className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
          Back to home
        </Link>
      </div>
    </main>
  );
}
