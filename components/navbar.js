"use client"
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'My Projects', href: '/projects' },
    { label: 'Expectations', href: '/expectations' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
  ];
  const currentPage = links.find(({ href }) => href === pathname);

  return (
    <nav className="absolute inset-x-4 top-4 z-50 rounded-2xl bg-white/15 text-white backdrop-blur-sm" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Ashinyokem Jeffery home">
          <span className="grid size-10 place-items-center border border-white/30 text-sm font-semibold text-amber-300 transition-colors group-hover:border-amber-300">
            AJ
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.12em]">ASHINYOKEM</span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.22em] text-white/60">JEFFERY</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors ${pathname === href ? 'text-white' : 'text-white/75 hover:text-white'}`}
              >
                {label}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-amber-300 transition-transform duration-300 ${pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <span className="max-w-28 truncate text-xs font-semibold text-white">
            {currentPage?.label ?? 'Page'}
          </span>
          <button
            type="button"
            className="grid size-11 place-items-center border border-white/25 text-white transition-colors hover:border-amber-300 hover:text-amber-300"
            aria-label={dropDown ? 'Close navigation menu' : `Open navigation menu, current page: ${currentPage?.label ?? 'Page'}`}
            aria-expanded={dropDown}
            aria-controls="mobile-navigation"
            onClick={() => setDropDown(!dropDown)}
          >
            {dropDown ? <RxCross2 className="size-5" /> : <RxHamburgerMenu className="size-5" />}
          </button>
        </div>
      </div>

      {dropDown && (
        <div id="mobile-navigation" className="mx-4 border border-white/15 bg-[#111827]/95 px-5 py-3 backdrop-blur-md md:hidden">
          <ul className="flex flex-col">
            {links.map(({ label, href }) => (
              <li key={label} className="border-b border-white/10 last:border-b-0">
                <Link
                  href={href}
                  onClick={() => setDropDown(false)}
                  aria-current={pathname === href ? 'page' : undefined}
                  className={`block border-l-2 py-3 pl-3 text-sm font-medium transition-colors ${pathname === href ? 'border-amber-200 text-white' : 'border-transparent text-white/80 hover:text-amber-300'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}