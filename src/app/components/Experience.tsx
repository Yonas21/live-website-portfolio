import { experience } from '../content';

export default function Experience() {
  return (
    <section id="experience" className="section-frame">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.65rem]">Built in production, not just prototypes.</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="surface-panel p-6 md:p-8">
              <div className="flex flex-col gap-4 border-b border-neutral-200 pb-5 dark:border-neutral-800 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950 dark:text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{item.company} · {item.location}</p>
                </div>
                <div className="text-sm font-medium text-neutral-500 dark:text-neutral-500">{item.period}</div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
                <ul className="space-y-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {item.stack.map((tech) => (
                    <span key={tech} className="surface-muted rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
