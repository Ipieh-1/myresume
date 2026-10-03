'use client';

import { useState } from 'react';

const filters = [
  { label: 'All work', value: 'all' },
  { label: 'Landing pages', value: 'landing' },
  { label: 'Business sites', value: 'business' },
  { label: 'Web apps', value: 'app' },
];

const projects = [
  {
    number: '1',
    name: 'Solace',
    category: 'landing',
    categoryLabel: 'Landing page concept',
    description: 'A calm, welcoming landing page concept for a modern wellness practice, designed to make the first step feel simple.',
    stack: ['React', 'Tailwind CSS', 'Responsive UI'],
    palette: 'from-[#d9e7dc] via-[#eef1e7] to-[#e9d8c6]',
    accent: 'bg-[#57715d]',
    preview: 'solace',
  },
  {
    number: '2',
    name: 'Forma Studio',
    category: 'business',
    categoryLabel: 'Business website concept',
    description: 'A considered digital home for an independent architecture studio, pairing strong typography with a clear project-led layout.',
    stack: ['Next.js', 'Tailwind CSS', 'Accessible layout'],
    palette: 'from-[#ddd3c5] via-[#ece6dc] to-[#c8d0c6]',
    accent: 'bg-[#292d29]',
    preview: 'forma',
  },
  {
    number: '3',
    name: 'Orbit',
    category: 'app',
    categoryLabel: 'Web app concept',
    description: 'A lightweight project dashboard concept that brings team activity, progress, and upcoming work into one readable view.',
    stack: ['React', 'JavaScript', 'Dashboard UI'],
    palette: 'from-[#dce5f2] via-[#e8e9f2] to-[#d6d8ec]',
    accent: 'bg-[#6557b7]',
    preview: 'orbit',
  },
  {
    number: '4',
    name: 'Kindred Market',
    category: 'landing',
    categoryLabel: 'Landing page concept',
    description: 'A bright storefront landing page concept for a small-batch home and pantry shop, with a warm product story and a clear path to explore.',
    stack: ['React', 'Tailwind CSS', 'E-commerce UI'],
    palette: 'from-[#f3d5b8] via-[#f8ead7] to-[#e8c5a0]',
    preview: 'kindred',
  },
  {
    number: '5',
    name: 'Northline',
    category: 'business',
    categoryLabel: 'Business website concept',
    description: 'A confident, editorial website concept for a creative strategy studio, built around clear services and a strong point of view.',
    stack: ['Next.js', 'Tailwind CSS', 'Brand storytelling'],
    palette: 'from-[#d1dce1] via-[#e8ece9] to-[#bdcbd0]',
    preview: 'northline',
  },
  {
    number: '6',
    name: 'Ledger',
    category: 'app',
    categoryLabel: 'Web app concept',
    description: 'A personal finance dashboard concept that makes monthly spending, budgets, and recent activity quick to understand at a glance.',
    stack: ['React', 'JavaScript', 'Data visualisation'],
    palette: 'from-[#d8e9e0] via-[#ecf1e9] to-[#c7ddd4]',
    preview: 'ledger',
  },
];

function ProjectPreview({ project }) {
  if (project.preview === 'solace') {
    return (
      <div className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-xl bg-[#f8f7f1] p-5 text-[#26352c] sm:min-h-72 sm:p-7">
        <div className="flex items-center justify-between border-b border-[#26352c]/10 pb-3">
          <span className="font-serif text-lg font-semibold tracking-tight">solace</span>
          <span className="text-[8px] uppercase tracking-[0.18em]">Care, at your pace</span>
          <span className="rounded-full bg-[#26352c] px-3 py-1.5 text-[8px] font-medium text-white">Book a visit</span>
        </div>
        <div className="relative mt-5 flex flex-1 items-center">
          <div className="relative z-10 max-w-[62%]">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#57715d]">Space to feel like you</p>
            <p className="mt-2 font-serif text-3xl leading-[1.02] sm:text-5xl">A little more room to breathe.</p>
            <p className="mt-3 max-w-44 text-[9px] leading-4 text-[#26352c]/65">Thoughtful support for your everyday wellbeing.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[8px] font-semibold">Find your next step <span aria-hidden="true">↗</span></span>
          </div>
          <div aria-hidden="true" className="absolute -right-10 bottom-0 h-[86%] w-[52%] rounded-t-[48%] bg-[#c6d3c3]">
            <div className="absolute left-1/2 top-5 h-20 w-20 -translate-x-1/2 rounded-full bg-[#e4c1a0]/80" />
            <div className="absolute -bottom-8 left-1/2 h-40 w-32 -translate-x-1/2 rounded-t-[48%] bg-[#718875]" />
          </div>
        </div>
        <div className="mt-4 flex gap-2 text-[7px] uppercase tracking-[0.15em] text-[#26352c]/60">
          <span>Personalised care</span><span>·</span><span>In person & online</span>
        </div>
      </div>
    );
  }

  if (project.preview === 'forma') {
    return (
      <div className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-xl bg-[#f5f2ec] p-5 text-[#292d29] sm:min-h-72 sm:p-7">
        <div className="flex items-center justify-between border-b border-[#292d29]/15 pb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">FORMA / STUDIO</span>
          <span className="text-[8px] uppercase tracking-[0.16em]">Work&nbsp;&nbsp; Studio&nbsp;&nbsp; Contact</span>
        </div>
        <div className="relative mt-5 flex flex-1 flex-col justify-between overflow-hidden bg-[#d8d2c7] p-4 sm:p-6">
          <div className="relative z-10">
            <p className="text-[8px] uppercase tracking-[0.18em]">Independent architecture</p>
            <p className="mt-2 max-w-52 font-serif text-3xl leading-[0.98] sm:text-5xl">Spaces for the way we live.</p>
          </div>
          <div aria-hidden="true" className="absolute -bottom-16 right-3 h-[82%] w-[49%] rotate-[-8deg] border-[10px] border-[#9c9b8d] bg-[#bfc1b5] sm:right-8 sm:border-[14px]">
            <div className="absolute inset-y-0 left-1/2 w-2 bg-[#9c9b8d]" />
            <div className="absolute inset-x-0 top-[58%] h-2 bg-[#9c9b8d]" />
            <div className="absolute inset-2 bg-gradient-to-br from-[#d9ded2] via-[#c8c9bc] to-[#a5afa2]" />
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.15em]">Selected work — 2025</span>
            <span aria-hidden="true" className="grid size-7 place-items-center rounded-full border border-[#292d29]/40 text-xs">↗</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.preview === 'kindred') {
    return (
      <div className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-xl bg-[#fffaf2] p-5 text-[#352c25] sm:min-h-72 sm:p-7">
        <div className="flex items-center justify-between border-b border-[#352c25]/10 pb-3">
          <span className="font-serif text-base font-semibold tracking-tight">kindred market</span>
          <span className="text-[8px] uppercase tracking-[0.15em]">Shop&nbsp;&nbsp; Our story&nbsp;&nbsp; Journal</span>
          <span className="grid size-6 place-items-center rounded-full border border-[#352c25]/20 text-[9px]">2</span>
        </div>
        <div className="relative mt-4 flex flex-1 flex-col justify-center overflow-hidden rounded-lg bg-[#f0d9c1] p-4 sm:p-6">
          <div className="relative z-10 max-w-[58%]">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9b6042]">Good things, made slowly</p>
            <p className="mt-2 font-serif text-3xl leading-[0.98] sm:text-5xl">A little joy for the everyday.</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#9b6042] px-3 py-2 text-[8px] font-medium text-white">Browse the collection <span aria-hidden="true">↗</span></span>
          </div>
          <div aria-hidden="true" className="absolute -right-5 bottom-0 h-[88%] w-[49%] rounded-t-[50%] bg-[#c88963]">
            <div className="absolute left-[18%] top-[19%] h-24 w-16 rotate-[-16deg] rounded-[50%_0_50%_0] bg-[#75805b]" />
            <div className="absolute right-[10%] top-[11%] h-20 w-14 rotate-[20deg] rounded-[50%_0_50%_0] bg-[#8d936a]" />
            <div className="absolute -bottom-4 left-1/2 h-28 w-32 -translate-x-1/2 rounded-t-[45%] bg-[#e8c697]" />
          </div>
          <span className="absolute bottom-3 left-4 text-[7px] uppercase tracking-[0.16em] text-[#352c25]/60 sm:left-6">Small makers · Thoughtful finds</span>
        </div>
      </div>
    );
  }

  if (project.preview === 'northline') {
    return (
      <div className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-xl bg-[#f2f3ef] p-5 text-[#25353b] sm:min-h-72 sm:p-7">
        <div className="flex items-center justify-between border-b border-[#25353b]/15 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.19em]">NORTHLINE<span className="text-[#c06c4d]">®</span></span>
          <span className="text-[8px] uppercase tracking-[0.15em]">What we do&nbsp;&nbsp; Selected work</span>
          <span className="text-[8px] font-semibold">Let&apos;s talk ↗</span>
        </div>
        <div className="relative mt-4 flex flex-1 flex-col justify-between overflow-hidden bg-[#dce4e1] p-4 sm:p-6">
          <div className="relative z-10 max-w-[78%]">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#58716e]">Independent creative studio</p>
            <p className="mt-2 font-serif text-3xl leading-[0.98] sm:text-5xl">Find your true north.</p>
            <p className="mt-3 max-w-48 text-[9px] leading-4 text-[#25353b]/65">We help ambitious teams make their next move matter.</p>
          </div>
          <div aria-hidden="true" className="absolute -bottom-20 -right-5 size-52 rounded-full border-[28px] border-[#849d98] sm:size-64 sm:border-[36px]">
            <div className="absolute -left-16 top-1/2 h-1 w-48 rotate-[-42deg] bg-[#c06c4d] sm:w-64" />
          </div>
          <div className="relative z-10 flex items-center justify-between text-[8px] uppercase tracking-[0.15em]">
            <span>Clarity · Direction · Momentum</span>
            <span aria-hidden="true" className="grid size-7 place-items-center rounded-full border border-[#25353b]/35">↓</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.preview === 'orbit') return (
    <div className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-xl bg-[#f5f6fa] p-5 text-[#202237] sm:min-h-72 sm:p-7">
      <div className="flex items-center justify-between border-b border-[#202237]/10 pb-3">
        <span className="text-[10px] font-bold tracking-tight">orbit<span className="text-[#6557b7]">.</span></span>
        <span className="text-[8px] text-[#202237]/45">⌕ &nbsp; Search anything</span>
        <span className="grid size-6 place-items-center rounded-full bg-[#ddd9f2] text-[8px] font-semibold">AJ</span>
      </div>
      <div className="mt-5 grid flex-1 grid-cols-[4rem_1fr] gap-3 sm:grid-cols-[5rem_1fr] sm:gap-5">
        <div className="space-y-2 border-r border-[#202237]/10 pr-2 text-[7px] text-[#202237]/50">
          <p className="rounded-md bg-[#e9e6f6] px-2 py-1.5 font-semibold text-[#6557b7]">Overview</p>
          <p className="px-2 py-1">My projects</p>
          <p className="px-2 py-1">Team</p>
          <p className="px-2 py-1">Settings</p>
        </div>
        <div>
          <p className="text-[8px] text-[#202237]/50">Monday, October 6</p>
          <p className="mt-1 text-sm font-semibold sm:text-lg">Good morning, Jeffery</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[['12', 'Active'], ['08', 'In review'], ['04', 'Complete']].map(([value, label]) => (
              <div key={label} className="rounded-md border border-[#202237]/10 bg-white p-2">
                <p className="text-base font-semibold">{value}</p>
                <p className="text-[6px] text-[#202237]/50 sm:text-[7px]">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-md border border-[#202237]/10 bg-white p-2">
            <div className="flex justify-between text-[7px] font-semibold"><span>Project momentum</span><span className="text-[#6557b7]">This week</span></div>
            <div className="mt-3 flex h-9 items-end gap-1">
              {[35, 54, 43, 72, 58, 90, 66, 80, 48, 73, 100, 69].map((height, index) => (
                <span key={index} className={`flex-1 rounded-t-sm ${index > 8 ? 'bg-[#6557b7]' : 'bg-[#d8d3ed]'}`} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-xl bg-[#f4f8f5] p-5 text-[#21352c] sm:min-h-72 sm:p-7">
      <div className="flex items-center justify-between border-b border-[#21352c]/10 pb-3">
        <span className="text-[10px] font-bold tracking-tight">ledger<span className="text-[#3a8f6b]">.</span></span>
        <span className="text-[8px] text-[#21352c]/45">October 2025&nbsp;&nbsp;⌄</span>
        <span className="grid size-6 place-items-center rounded-full bg-[#dcece2] text-[8px] font-semibold">AJ</span>
      </div>
      <div className="mt-4 grid flex-1 grid-cols-[1fr_1.3fr] gap-3 sm:gap-5">
        <div className="flex flex-col">
          <p className="text-[8px] text-[#21352c]/55">Good morning, Jeffery</p>
          <p className="mt-1 text-sm font-semibold sm:text-lg">Your money, in focus.</p>
          <div className="mt-3 rounded-lg bg-[#203b30] p-3 text-white">
            <p className="text-[7px] uppercase tracking-[0.12em] text-white/60">Available balance</p>
            <p className="mt-1 text-xl font-semibold sm:text-2xl">₦842,500</p>
            <p className="mt-2 text-[7px] text-[#a9e0bd]">↑ 8.4% <span className="text-white/55">this month</span></p>
          </div>
          <div className="mt-2 flex-1 rounded-lg border border-[#21352c]/10 bg-white p-2">
            <p className="text-[7px] font-semibold">Recent activity</p>
            <div className="mt-2 space-y-2 text-[7px]">
              <div className="flex justify-between"><span>Groceries</span><span>− ₦18,400</span></div>
              <div className="flex justify-between"><span>Client payment</span><span className="text-[#3a8f6b]">+ ₦95,000</span></div>
              <div className="flex justify-between"><span>Internet</span><span>− ₦12,000</span></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg border border-[#21352c]/10 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-semibold">Spending overview</p>
            <span className="text-[7px] text-[#21352c]/50">This month</span>
          </div>
          <p className="mt-2 text-lg font-semibold sm:text-2xl">₦264,800</p>
          <div className="mt-3 flex flex-1 items-end gap-1.5">
            {[36, 55, 44, 72, 62, 48, 82, 66, 94, 56, 76, 61].map((height, index) => (
              <span key={index} className={`flex-1 rounded-t-sm ${index === 8 ? 'bg-[#3a8f6b]' : 'bg-[#cfe3d5]'}`} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[6px] text-[#21352c]/45"><span>Oct 1</span><span>Oct 31</span></div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.055]">
      <div className={`bg-gradient-to-br ${project.palette} p-4 sm:p-6`}>
        <div className="relative">
          <ProjectPreview project={project} />
          <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-white/75 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#111827] backdrop-blur-sm">
            Concept
          </span>
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">{project.categoryLabel}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
          </div>
          <span className="text-sm font-medium text-white/35">{project.number}</span>
        </div>
        <p className="mt-4 min-h-20 text-sm leading-6 text-white/65">{project.description}</p>
        <ul aria-label={`${project.name} technologies and focus`} className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/65">{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div role="group" aria-label="Filter projects by type" className="mb-7 flex flex-wrap gap-2">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            aria-pressed={activeFilter === value}
            onClick={() => setActiveFilter(value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 ${
              activeFilter === value
                ? 'border-amber-200 bg-amber-200 text-[#111827]'
                : 'border-white/15 text-white/65 hover:border-white/40 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </>
  );
}
