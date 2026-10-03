import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const siteLinks = [
  { label: 'Home', href: '/' },
  { label: 'My Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Expectations', href: '/expectations' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c1220] px-6 pb-6 pt-14 text-white sm:px-8 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="Ashinyokem Jeffery home">
              <span className="grid size-10 place-items-center border border-white/30 text-sm font-semibold text-amber-300 transition-colors group-hover:border-amber-300">
                AJ
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.12em]">ASHINYOKEM</span>
                <span className="mt-1 text-[10px] font-medium tracking-[0.22em] text-white/55">JEFFERY</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
              Front-end developer creating thoughtful, responsive web experiences for businesses and people with ideas to bring to life.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
              {siteLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/75 transition-colors hover:text-amber-200 focus-visible:text-amber-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Let&apos;s connect</h2>
            <a
              href="mailto:ashinjefferywebdev@gmail.com"
              className="mt-4 inline-flex items-center gap-1 break-all text-sm font-medium text-amber-200 transition-colors hover:text-amber-100"
            >
              ashinjefferywebdev@gmail.com
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeffery-ashinyokem-01a0233aa"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-fit items-center gap-1 text-sm text-white/75 transition-colors hover:text-amber-200"
            >
              LinkedIn
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ashinyokem Jeffery. All rights reserved.</p>
          <Link href="/contact" className="w-fit transition-colors hover:text-amber-200">
            Have a project in mind? Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
