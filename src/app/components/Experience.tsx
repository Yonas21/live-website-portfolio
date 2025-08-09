import React from 'react';

const Experience = () => {
  const roles = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Mereb Technologies',
      period: 'Apr 2022 – Present · Addis Ababa, Ethiopia',
      bullets: [
        'Improved API latency by 40% with Redis caching and query optimization',
        'Migrated monolith to gRPC microservices increasing throughput by 35%',
        'Reduced infra spend by $8,000/month via S3 cold storage strategy',
        'Mentored 4 engineers; implemented CI/CD with 60% fewer deployment errors',
      ],
      stack: ['TypeScript', 'Node.js', 'React', 'gRPC', 'Redis', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
    },
    {
      role: 'Full-Stack Developer (Remote)',
      company: 'Affiliate.com',
      period: 'Feb 2023 – Aug 2023 · Israel (Contract)',
      bullets: [
        'Modernized legacy PHP to Node.js microservices with tRPC for 10K+ daily txns',
        'Automated reporting in Python saving 20+ hours/month and improving accuracy 95%',
        'Built internal analytics dashboards used by 200+ users',
      ],
      stack: ['Node.js', 'TypeScript', 'tRPC', 'React', 'Python', 'Tailwind', 'PostgreSQL'],
    },
    {
      role: 'Frontend Developer',
      company: 'Eagleilon Systems Technology',
      period: 'Mar 2021 – Apr 2022 · Addis Ababa, Ethiopia',
      bullets: [
        'Delivered 4+ production web apps from design to deployment',
        'Integrated secure payments (Visa, Mastercard, Telebirr)',
        'Raised Lighthouse performance from 45% to 97% via code-splitting and optimization',
      ],
      stack: ['React', 'Next.js', 'JavaScript', 'CSS3'],
    },
  ];

  return (
    <section id="experience" className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-20 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="space-y-4 md:space-y-6">
            {roles.map((r, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-2">
                  <h3 className="text-lg md:text-xl font-semibold"><span className="text-brand-300">{r.role}</span> · {r.company}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{r.period}</span>
                </div>
                <ul className="mt-3 md:mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {r.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                  {r.stack.map((tech, ti) => (
                    <span key={ti} className="bg-brand-50 text-brand-700 dark:bg-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-md border border-brand-200 dark:border-gray-700">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
