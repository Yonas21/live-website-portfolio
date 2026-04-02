import { skillGroups } from '../content';

export default function About() {
  return (
    <section id="about" className="section-frame">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">Engineering with operational awareness.</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-8 text-neutral-700 dark:text-neutral-400 md:text-base">
              <p>
                I am a full-stack engineer with 6+ years of experience across gaming, government, affiliate platforms, and internal product systems. Most of my strongest work sits at the intersection of backend reliability, API performance, and product delivery.
              </p>
              <p>
                I am most useful when a team has a real bottleneck to solve: a slow system, a fragile release process, a repetitive workflow, or a product surface that needs to become clearer and easier to maintain.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {skillGroups.map((group) => (
              <section key={group.title} className="surface-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-500">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="surface-muted rounded-md px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
