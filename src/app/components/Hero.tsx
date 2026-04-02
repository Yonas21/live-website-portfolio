import Image from 'next/image';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { metrics, profile } from '../content';

const heroHighlights = [
  'Backend services and APIs for production systems',
  'Performance tuning, workflow automation, and platform reliability',
  'Strong delivery habits: code review, CI/CD, mentorship, and clean handoff',
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-black/10 bg-transparent pt-28 dark:border-neutral-800 dark:bg-transparent md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-start md:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
            {profile.role}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700 dark:text-neutral-300 md:text-[1.35rem]">
            {profile.tagline}
          </p>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
            {profile.location} · {profile.availability}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white"
            >
              <FiMail size={16} />
              Email me
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/42 px-5 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-white/65 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-100 dark:hover:bg-white/[0.05]"
            >
              View resume
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md px-1 py-3 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              Selected work
              <FiArrowRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-neutral-600 dark:text-neutral-400">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100">
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-100">
              <FiGithub size={16} /> GitHub
            </a>
          </div>

          <ul className="mt-12 grid gap-5 border-t border-black/10 pt-8 dark:border-neutral-800 md:grid-cols-3 md:gap-6">
            {heroHighlights.map((item) => (
              <li key={item} className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                <span className="mb-3 block h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 md:pt-2">
          <div className="surface-panel p-6">
            <div className="flex items-start gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white/70 dark:border-neutral-700 dark:bg-neutral-800">
                <Image
                  src="/profile-photo.png"
                  alt="Yonas Alem"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-base font-semibold text-neutral-950 dark:text-white">Current focus</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  Building systems that reduce operational friction, improve reliability, and give teams confidence in production.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((item) => (
              <div key={item.label} className="surface-card p-5">
                <div className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">{item.value}</div>
                <div className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">{item.label}</div>
                <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
