export const profile = {
  name: 'Yonas Alem',
  role: 'Senior Full-Stack Developer',
  tagline: 'I build reliable backend systems, fast APIs, and clear product experiences for teams that need software to hold up in production.',
  location: 'Addis Ababa, Ethiopia',
  email: 'yonalem21@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yonasalem21',
  github: 'https://github.com/Yonas21',
  resumePath: '/Yonas_Alem_Resume_Updated.pdf',
  availability: 'Open to senior full-stack, backend, and platform-focused remote roles.',
};

export const metrics = [
  {
    value: '6+',
    label: 'years in production engineering',
    detail: 'Backend services, high-traffic APIs, and modern web applications.',
  },
  {
    value: '1.2s to <200ms',
    label: 'API latency improvement',
    detail: 'Query optimization and Redis caching on a real-time gaming platform.',
  },
  {
    value: '70%',
    label: 'manual operations reduced',
    detail: 'Automation across bonuses, deposits, accounting, and reporting workflows.',
  },
  {
    value: '50K+',
    label: 'constituents served',
    detail: 'Citizen complaint, approval, and messaging systems for government workflows.',
  },
];

export const skillGroups = [
  {
    title: 'Backend and Platform',
    items: ['Node.js', 'PHP', 'Python', 'Go', 'gRPC', 'REST APIs', 'Redis', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Frontend and Product',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Design implementation'],
  },
  {
    title: 'Delivery',
    items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'CI/CD', 'Code Review', 'Mentorship'],
  },
];

export const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Mereb Technologies',
    period: 'Apr 2022 – Aug 2025',
    location: 'Addis Ababa, Ethiopia',
    bullets: [
      'Architected backend services with PHP, Protobuf, and gRPC, helping move the platform from monolith to microservices across 5 service domains.',
      'Built automation for bonuses, deposits, and accounting workflows, reducing manual processing by 70% and eliminating reconciliation errors.',
      'Optimized queries and introduced Redis caching, cutting average API response times from 1.2 seconds to under 200 milliseconds.',
      'Maintained stable release cycles through code review, feature testing, and CI/CD pipeline management, with zero critical production incidents over 12 months.',
      'Mentored 4 junior developers through onboarding, technical walkthroughs, and pair debugging.',
    ],
    stack: ['PHP', 'Node.js', 'gRPC', 'Protobuf', 'Redis', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    role: 'Backend Developer',
    company: 'Autobridge Systems',
    period: 'Jan 2025 – Jul 2025',
    location: 'Contract',
    bullets: [
      'Built backend services for citizen complaint submissions, document approvals, and automated messaging workflows serving 50K+ constituents.',
      'Integrated Azure Cognitive Services for voicemail-to-text transcription and message classification, reducing manual triage workload by 55%.',
      'Optimized large-scale database queries through indexing and cursor-based pagination, reducing multi-minute queries to under 2 seconds.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Azure Cognitive Services', 'REST APIs'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Affiliate.com',
    period: 'Feb 2023 – Aug 2023',
    location: 'Remote contract',
    bullets: [
      'Rebuilt a legacy PHP API with Node.js and tRPC, improving reliability by 60% and enabling 3x higher throughput under peak traffic.',
      'Automated finance reporting with Python, reducing weekly manual effort from 8 hours to 30 minutes and improving data accuracy.',
      'Built internal dashboards with React and Tailwind CSS, giving sales and operations teams real-time conversion and engagement visibility.',
    ],
    stack: ['Node.js', 'tRPC', 'React', 'Tailwind CSS', 'Python', 'Express', 'MySQL'],
  },
  {
    role: 'Frontend Developer',
    company: 'Eagleilon Systems Technology',
    period: 'Mar 2021 – Apr 2022',
    location: 'Addis Ababa, Ethiopia',
    bullets: [
      'Delivered production web applications from Adobe XD designs across 6 client projects using React and Next.js.',
      'Integrated Telebirr, Visa, and Mastercard payment APIs with robust validation and error handling, improving transaction success rates by 25%.',
      'Improved load times by 45% through code-splitting, lazy loading, and component refactoring.',
    ],
    stack: ['React', 'Next.js', 'JavaScript', 'REST APIs', 'Bootstrap'],
  },
];

export const caseStudies = [
  {
    id: 'poker-platform',
    title: 'Real Gaming Poker Platform',
    role: 'Senior Full-Stack Developer',
    company: 'Mereb Technologies',
    period: 'Apr 2022 – Aug 2025',
    summary: 'I worked on a real-time gaming platform where reliability, latency, and operational correctness mattered more than visual polish.',
    challenge:
      'The business needed to scale beyond a monolith while keeping gameplay and accounting flows stable. Slow APIs and manual back-office workflows were limiting growth and introducing operational risk.',
    actions: [
      'Designed and shipped backend services with PHP, Protobuf, and gRPC across five service domains.',
      'Added Redis caching and query tuning on critical paths to reduce response times under load.',
      'Automated bonuses, deposits, and accounting tasks that had previously required manual handling.',
      'Supported release quality through code review discipline, testing, and CI/CD improvements.',
    ],
    outcomes: [
      'Average API latency dropped from 1.2 seconds to under 200 milliseconds.',
      'Manual processing fell by 70% and reconciliation errors were eliminated.',
      'The team maintained zero critical production incidents over a 12-month period.',
      'The platform gained cleaner service boundaries and better deployment independence.',
    ],
    stack: ['PHP', 'Node.js', 'gRPC', 'Protobuf', 'Redis', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'affiliate-platform',
    title: 'Affiliate Marketing Platform',
    role: 'Full-Stack Developer',
    company: 'Affiliate.com',
    period: 'Feb 2023 – Aug 2023',
    summary: 'This work combined API modernization, internal tooling, and workflow automation for a revenue-sensitive business.',
    challenge:
      'A legacy PHP API and fragmented reporting process were slowing the business down. Teams lacked reliable internal visibility and the platform struggled under peak load.',
    actions: [
      'Rebuilt the legacy API using Node.js and tRPC to improve maintainability and runtime behavior.',
      'Automated finance reporting in Python so recurring operational tasks no longer depended on manual spreadsheets.',
      'Built React dashboards for sales and operations to monitor funnel and engagement data in real time.',
      'Worked across backend and operations to diagnose bottlenecks across three integrated systems.',
    ],
    outcomes: [
      'System reliability improved by 60%.',
      'Peak throughput increased by 3x.',
      'Weekly reporting effort fell from 8 hours to 30 minutes.',
      'Internal teams gained live visibility into conversion and engagement performance.',
    ],
    stack: ['Node.js', 'tRPC', 'React', 'Tailwind CSS', 'Python', 'Express', 'MySQL'],
  },
  {
    id: 'autobridge-platform',
    title: 'Government Constituent Platform',
    role: 'Backend Developer',
    company: 'Autobridge Systems',
    period: 'Jan 2025 – Jul 2025',
    summary: 'The focus here was operational throughput: faster triage, better query performance, and dependable citizen-facing workflows.',
    challenge:
      'The platform needed to support large volumes of citizen submissions, approvals, and message handling without creating a growing manual workload for staff.',
    actions: [
      'Built backend services for complaint intake, approvals, and automated messaging.',
      'Integrated Azure Cognitive Services for voicemail transcription and intelligent message classification.',
      'Reworked large queries using indexing and cursor-based pagination for predictable performance at scale.',
      'Treated response time and triage efficiency as product-level outcomes, not just backend metrics.',
    ],
    outcomes: [
      'The system supported workflows serving 50K+ constituents.',
      'Manual triage workload dropped by 55%.',
      'Queries that previously took minutes were reduced to under 2 seconds.',
      'Citizen response workflows became faster and more operationally sustainable.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Azure Cognitive Services', 'REST APIs'],
  },
];

export const principles = [
  {
    title: 'Own the bottleneck',
    text: 'I prefer work where the technical problem is attached to a clear business constraint: latency, reliability, workflow friction, or delivery risk.',
  },
  {
    title: 'Keep systems understandable',
    text: 'I favor designs that are observable, maintainable, and easy for other engineers to extend after I leave the codebase.',
  },
  {
    title: 'Treat delivery as engineering',
    text: 'Code review quality, testing discipline, release stability, and mentorship are part of the job, not support work around it.',
  },
];
