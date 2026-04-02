import { caseStudies } from '../content';

export default function CaseStudies() {
  return (
    <section id="work" className="section-frame">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.65rem]">Three projects that reflect how I work.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-500">
            I prefer showing the shape of the problem, the decisions made, and the measurable outcome. That is more useful than listing every tool on a project.
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((study) => (
            <article key={study.id} className="surface-panel p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">{study.company}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">{study.title}</h3>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{study.role} · {study.period}</p>
                  <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{study.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <span key={tech} className="surface-muted rounded-md px-3 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <section className="surface-card p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">Challenge</h4>
                    <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">{study.challenge}</p>
                  </section>

                  <section className="surface-card p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">Actions</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                      {study.actions.map((action) => (
                        <li key={action} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="surface-card p-5 md:col-span-2">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">Outcomes</h4>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {study.outcomes.map((outcome) => (
                        <div key={outcome} className="surface-muted rounded-xl p-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
