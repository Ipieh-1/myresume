import Link from 'next/link';

export default function AboutPage() {
  const principles = [
    {
      number: '1',
      title: 'Rapid Turnaround',
      description: 'Landing pages and multi-page sites are planned around clear milestones, with typical timelines of 1-4 weeks depending on scope.',
    },
    {
      number: '2',
      title: 'Responsive Architecture',
      description: 'Mobile-first layouts and maintainable front-end structures are built to work smoothly across phones, tablets, and desktops.',
    },
    {
      number: '3',
      title: 'Seamless Collaboration',
      description: 'Clear scope, regular progress previews, and direct communication carry each project from the initial brief through launch.',
    },
  ];

  const toolsets = [
    {
      title: 'Languages & Core',
      items: 'HTML5, CSS3, JavaScript (ES6+), React, Next.js',
    },
    {
      title: 'Styling & Frameworks',
      items: 'Tailwind CSS, Responsive Web Design, Flexbox, CSS Grid',
    },
    {
      title: 'Tools & Workflow',
      items: 'Git, GitHub, Figma-to-Code, Vercel, VS Code',
    },
  ];

  return (
    <main className="min-h-screen bg-[#111827] px-6 pb-20 pt-40 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mt-3 text-4xl font-bold">About</h1>
        <p className="text-2xl py-2 font-semibold text-amber-200">About The Developer</p>
        <p className="mt-5 max-w-3xl py-2 text-lg leading-8 text-white/70">
          I&apos;m Ashinyokem Jeffery, a front-end developer focused on building responsive, conversion-minded, fast-loading web experiences. I turn visual concepts into polished, interactive interfaces that work smoothly across devices.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
          My approach combines modern front-end practices with streamlined development workflows to help businesses, startups, and creators launch their landing pages and web applications quickly without sacrificing quality or performance.
        </p>

        <section aria-labelledby="principles-heading" className="mt-16 border-t border-white/15 pt-12">
          <p className="mt-3 text-3xl uppercase font-bold">How I work</p>
          <h2 id="principles-heading" className="text-lg font-semibold text-amber-200">Core Principles</h2>
          <ol className="mt-8">
            {principles.map(({ number, title, description }) => (
              <li key={number} className="grid gap-3 border-t border-white/15 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="text-xl font-semibold text-amber-200">{number}</p>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 max-w-3xl leading-7 text-white/70">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="tooling-heading" className="mt-16 border-t border-white/15 pt-12">
          <p className=" uppercase  mt-3 text-3xl font-bold">Built with</p>
          <h2 id="tooling-heading" className="text-lg font-semibold text-amber-200">Tech Stack &amp; Tooling</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {toolsets.map(({ title, items }) => (
              <div key={title} className="border-t border-white/15 pt-5">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{items}</p>
              </div>
            ))}
          </div>
        </section>

        <Link href="/" className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
          Back to home
        </Link>
      </div>
    </main>
  );
}
