import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile } from '../content';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[linear-gradient(to_bottom,#121821_0%,#0d1117_100%)] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)] md:grid-cols-[1fr_auto] md:items-end md:p-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">Contact</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.7rem]">
              If you need a senior engineer who can improve a system without turning it into theater, let’s talk.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-neutral-300 md:text-base">
              I am open to remote roles where reliability, product clarity, and engineering judgment matter. The best conversations usually start with a real system problem, not a buzzword list.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-white"
            >
              <FiMail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/12 px-5 py-3 text-sm font-medium text-neutral-100 transition-colors hover:bg-white/[0.05]"
            >
              Open resume
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <FiMapPin size={16} />
              Location
            </div>
            <p className="mt-3 text-sm text-neutral-300">{profile.location}</p>
          </div>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.05]">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <FiLinkedin size={16} />
              LinkedIn
            </div>
            <p className="mt-3 text-sm text-neutral-300">linkedin.com/in/yonasalem21</p>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.05]">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <FiGithub size={16} />
              GitHub
            </div>
            <p className="mt-3 text-sm text-neutral-300">github.com/Yonas21</p>
          </a>
        </div>
      </div>
    </section>
  );
}
