import Link from 'next/link';
import ProjectGallery from '@/components/project-gallery';

export const metadata = {
  title: 'My Projects | Ashinyokem Jeffery',
  description: 'Explore front-end concept projects by Ashinyokem Jeffery, including landing pages, business websites, and web application interfaces.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111827] px-6 pb-20 pt-36 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <section aria-labelledby="projects-heading" className="relative py-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="relative max-w-4xl">
            <h1 id="projects-heading" className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Thoughtful design.
              <span className="block mt-2 text-white/45">Careful front-end.</span>
            </h1>
            <p className="flex items-center mt-3 gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
              <span className="h-px w-8 bg-amber-200" />
              Selected work
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              A collection of interface concepts showing how I approach clear, responsive experiences for the web.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#project-gallery"
                className="inline-flex items-center gap-3 rounded-full bg-amber-200 px-6 py-3 text-sm font-bold text-[#111827] transition-colors hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
              >
                Explore the work <span aria-hidden="true">↓</span>
              </Link>
              <span className="text-sm text-white/50">Scroll to explore · 6 concepts</span>
            </div>
          </div>
          <div className="relative mt-16 grid grid-cols-2 border-y border-white/10 py-6 sm:mt-20 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-white">01—06</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Selected concepts</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="text-2xl font-semibold text-white">Web-first</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Responsive by design</p>
            </div>
            <div className="col-span-2 mt-6 border-t border-white/10 pt-5 sm:col-span-1 sm:ml-6 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <p className="text-2xl font-semibold text-white">Built with care</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Details matter</p>
            </div>
          </div>
        </section>

        <section id="project-gallery" aria-labelledby="gallery-heading" className="scroll-mt-10 pt-14 sm:pt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">The portfolio</p>
              <h2 id="gallery-heading" className="mt-2 text-3xl font-bold sm:text-4xl">Selected concepts</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55">
              These are concept projects created to demonstrate my design and front-end approach, not commissioned client work.
            </p>
          </div>
          <ProjectGallery />
        </section>

        <section aria-labelledby="project-cta-heading" className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:mt-28 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">Have a project in mind?</p>
              <h2 id="project-cta-heading" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Let&apos;s make your next idea feel effortless to use.
              </h2>
              <p className="mt-4 leading-7 text-white/60">
                Tell me what you&apos;re building and we can work out the right scope, timeline, and next step together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-amber-200/70 px-6 py-3 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-200 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section aria-labelledby="key-projects-heading" className="mt-20 border-t border-white/10 pt-12 sm:mt-28 sm:pt-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">Live work</p>
              <h2 id="key-projects-heading" className="mt-2 text-3xl font-bold sm:text-4xl">Key Project(s)</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55">
              A selection of live projects I&apos;ve designed and built.
            </p>
          </div>
          <article className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-9 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">Featured project</p>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Apex GT Motors</h3>
              <p className="mt-2 text-sm text-white/60">Front-End Web Developer</p>
              <a
                href="https://apexgtmotors.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
              >
                View live project <span aria-hidden="true">↗</span>
              </a>
              <div className="mt-7">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Technologies</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Git', 'Vercel'].map((technology) => (
                    <li key={technology} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70">
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="space-y-4 border-t border-white/10 pt-6 text-sm leading-6 text-white/65 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <li>
                Built a responsive luxury automotive showcase application using Next.js, React, and Tailwind CSS, featuring dark glassmorphic UI components, dynamic vehicle catalog routing, and custom editorial layouts.
              </li>
              <li>
                Designed custom React state components, including frosted-glass dropdowns and interactive cards, to replace default browser elements and maintain a seamless dark-mode aesthetic across devices.
              </li>
              <li>
                Optimized production builds and static page generation, resolved cross-platform deployment issues, and hosted the live application via Vercel edge networks with zero build errors.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
