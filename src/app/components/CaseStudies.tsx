"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const studies = [
    {
      title: 'Real Gaming Poker Platform – Cost and Scale',
      problem: 'High infra costs and latency under load affected margins and UX.',
      solution:
        'Re-architected to microservices (gRPC), optimized DB schema and caching, and redesigned infra topology.',
      results: ['40% latency reduction', '$22K+/mo savings', 'Zero financial discrepancies at scale'],
      diagram:
        'sequenceDiagram\n  participant Client\n  participant API\n  participant GameSvc\n  participant Cache\n  participant DB\n  Client->>API: Place bet\n  API->>Cache: Read game state\n  alt cache miss\n    API->>GameSvc: Fetch state\n    GameSvc->>DB: Query\n    DB-->>GameSvc: Rows\n    GameSvc-->>Cache: Set state\n  end\n  API-->>Client: Response',
    },
  ];

  return (
    <section className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {studies.map((s, i) => (
            <motion.div key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
              <h3 className="text-xl font-semibold mb-2 text-brand-500">{s.title}</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <div className="text-sm"><span className="font-semibold">Problem:</span> {s.problem}</div>
                  <div className="text-sm mt-2"><span className="font-semibold">Solution:</span> {s.solution}</div>
                  <ul className="text-sm mt-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {s.results.map((r, ri) => (<li key={ri}>{r}</li>))}
                  </ul>
                </div>
                <div>
                  <pre className="text-xs overflow-auto rounded-md border border-gray-200 dark:border-gray-800 p-3 bg-gray-50 dark:bg-gray-950">{s.diagram}</pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
