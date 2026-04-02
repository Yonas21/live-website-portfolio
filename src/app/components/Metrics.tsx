import { metrics } from '../content';

export default function Metrics() {
  return (
    <section className="section-frame">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Results</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.65rem]">A few numbers worth trusting.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-500">
            These are the outcomes I can stand behind from recent work across production systems, workflow automation, and performance-focused delivery.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <article key={item.label} className="surface-card p-6">
              <div className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">{item.value}</div>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-500">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
