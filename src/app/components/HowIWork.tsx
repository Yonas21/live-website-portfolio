import { principles } from '../content';

export default function HowIWork() {
  return (
    <section id="approach" className="section-frame">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <p className="eyebrow">Approach</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.45rem]">What I optimize for.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
