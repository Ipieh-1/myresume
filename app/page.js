
import Link from 'next/link';
import { ClipboardCheck, Hourglass, MessageSquare, Timer } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: 'EFFICIENT SCOPE',
      description: 'Clear deliverables and milestones from the start.',
      Icon: Hourglass,
    },
    {
      title: 'CLEAR COMMUNICATION',
      description: 'Regular updates and direct collaboration throughout.',
      Icon: MessageSquare,
    },
    {
      title: 'READY-TO-DEVELOP PROCESS',
      description: 'Organized, tested work prepared for development.',
      Icon: ClipboardCheck,
    },
    {
      title: 'FAST DELIVERY',
      description: 'Focused timelines without losing attention to detail.',
      Icon: Timer,
    },
  ];

  const services = [
    {
      number: '1',
      title: 'LANDING PAGES (1-2 WEEKS)',
      description: 'High-conversion single pages.',
    },
    {
      number: '2',
      title: 'MULTIPAGE SITES(2-3 WEEKS)',
      description: 'Custom structure, SEO-focused.',
    },
    {
      number: '3',
      title: 'FRONT-END APPLICATIONS(3-4 WEEKS)',
      description: 'React, performance optimization.',
    },
    {
      number:'4',
      title: 'CUSTOM SOLUTION(4+ WEEKS)',
      description: 'Unique features,integrations.',
    },
  ];

  return (
    <div>
      <header className="flex min-h-[80vh] w-full flex-col bg-[#111827] px-6 pb-16 pt-32 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="text-left text-2xl uppercase text-white/40">
           ASHINYOKEM JEFFERY | FRONT-END DEVELOPER
          </h1>
          <p className="mt-3 max-w-5xl text-4xl font-semibold leading-tight uppercase text-yellow-100 sm:text-5xl">
            CRAFTING, ENGAGING,<br></br> HIGH-PERFORMANCE <br></br> WEB EXPERIENCES.
          </p>
          <div className="text-2xl text-white/50 py-4 ">
            I build responsive, modern interfaces that convert and <br></br> connect. Specializing in standard and custom projects <br></br> delivered within strict timelines (2-5 weeks).
          </div>
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            VIEW MY WORK
          </Link>
        </div>
      </header>

      <section aria-label="Services" className="bg-[#111827] px-6 py-16">
        <p className="mb-10 text-center text-3xl font-bold uppercase text-white">
          WHY WE DELIVER WITHIN WEEKS (NOT MONTHS)
        </p>
        <div aria-label="Project features" className="mb-16 border-y border-white/10 py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, description, Icon }) => (
              <article key={title} className="flex flex-col items-center text-center">
                <Icon aria-hidden="true" className="mb-4 size-9 text-amber-200" strokeWidth={1.7} />
                <h2 className="text-sm font-semibold text-white">{title}</h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          SERVICE OVERVIEW &amp; TIMELINES
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ number, title, description }) => (
            <article key={number} className="min-h-52 rounded-2xl bg-white/20 p-6 text-white backdrop-blur-sm">
              <p className="text-4xl font-bold">{number}</p>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">{description}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-4xl text-center text-4xl font-semibold text-white">
          READY TO BUILD THE FRONT-END OF YOUR SITE IN 2 to 5 WEEKS? LET&apos;S TALK
        </p>
      </section>
    </div>

  );
}