import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      number: '1',
      title: 'High-Converting Landing Pages',
      description: 'Focused, persuasive single-page experiences designed to turn qualified visits into meaningful enquiries or sales.',
      turnaround: '1–2 Weeks',
      bestFor: ['Product Launches', 'Marketing Campaigns', 'Waitlists'],
      deliverables: ['Figma to Code', 'Mobile-First UI', 'Form Integration'],
      details: [
        'Clear content hierarchy and calls to action',
        'Responsive layouts for mobile, tablet, and desktop',
        'Fast-loading pages built around your campaign goals',
        'Lead-capture forms with clear next steps',
      ],
    },
    {
      number: '2',
      title: 'Custom Multi-page Business Websites',
      description: 'Polished business websites that communicate your value clearly and give every important page a purposeful place.',
      turnaround: '2–4 Weeks',
      bestFor: ['Startups', 'Small Businesses', 'Agencies'],
      deliverables: ['Multi-Page Setup', 'SEO-Optimized Structure'],
      details: [
        'Custom page structure aligned with your brand',
        'Consistent navigation and responsive interactions',
        'Search-friendly foundations and accessible markup',
        'Reusable page sections for services, team, and testimonials',
      ],
    },
    {
      number: '3',
      title: 'Web Application Front-End Development',
      description: 'Reliable, component-driven interfaces that make complex products and workflows feel intuitive to use.',
      turnaround: '3–5 Weeks',
      bestFor: ['SaaS Platforms', 'Dashboards', 'Web Apps'],
      deliverables: ['React/Next.js Architecture', 'API Integration', 'State Management'],
      details: [
        'Reusable React components and interface patterns',
        'Interactive views for product features and workflows',
        'Performance-minded implementation and API integration',
        'Accessible loading, error, and empty states',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#111827] px-6 pb-20 pt-40 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mt-3 py-4 text-4xl font-bold">Services</h1>
        <p className="text-2xl font-semibold text-amber-200">What I do</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
          Expert front-end services, thoughtfully scoped to your goals, audience, and timeline.
        </p>

        <ol className="mt-10">
          {services.map(({ number, title, description, turnaround, bestFor, deliverables, details }) => (
            <li key={number} className="grid gap-5 border-t border-white/15 py-8 md:grid-cols-[5rem_1fr] md:gap-8">
              <p className="text-3xl font-semibold text-amber-200">{number}</p>
              <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-white/70">{description}</p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/75 sm:grid-cols-2">
                  {details.map((detail) => (
                    <li key={detail} className="list-disc pl-1 marker:text-amber-200">{detail}</li>
                  ))}
                </ul>
                <dl className="mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Turnaround</dt>
                    <dd className="mt-2">
                      <span className="inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-3 py-1.5 text-sm font-medium text-amber-100">
                        {turnaround}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Best for</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {bestFor.map((item) => (
                        <span key={item} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Deliverables</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {deliverables.map((item) => (
                        <span key={item} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>

        <Link href="/" className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
          Back to home
        </Link>
      </div>
    </main>
  );
}
