import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  return (
    <main className="min-h-screen bg-[#111827] px-6 pb-20 pt-40 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <h1 className="mt-3 py-2 max-w-xl text-4xl font-bold sm:text-5xl">
            Let&apos;s Build Something Great Together.
          </h1>
          <p className="text-2xl py-2 font-semibold text-amber-200">Start a Conversation</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
            Tell me what you&apos;re planning, and I&apos;ll get back to you to discuss the right scope and timeline.
          </p>

          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="text-sm font-medium text-white/60">Prefer email?</p>
            <a
              href="mailto:ashinjefferywebdev@gmail.com"
              className="mt-2 inline-block break-all text-lg font-semibold text-amber-200 transition-colors hover:text-amber-100"
            >
              ashinjefferywebdev@gmail.com
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/jeffery-ashinyokem-01a0233aa"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-amber-200"
            >
              <FaLinkedin aria-hidden="true" className="size-4" />
              LinkedIn Profile
            </a>
          </div>

          <Link href="/" className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Back to home
          </Link>
        </div>

        <ContactForm endpoint={formspreeEndpoint} />
      </div>
    </main>
  );
}
