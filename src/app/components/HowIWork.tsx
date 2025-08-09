"use client";
import React from 'react';
import { FiTarget, FiCpu, FiShield, FiTrendingDown } from 'react-icons/fi';

const items = [
  { icon: <FiTarget />, title: 'Outcome-first', text: 'Drive measurable KPIs: latency, cost, reliability.' },
  { icon: <FiCpu />, title: 'Pragmatic engineering', text: 'Bias to simple, observable, testable solutions.' },
  { icon: <FiShield />, title: 'Reliability', text: 'SLOs, error budgets, robust rollouts and on-call hygiene.' },
  { icon: <FiTrendingDown />, title: 'Cost awareness', text: 'Track unit economics and reduce waste continuously.' },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How I Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-brand-500 text-2xl mb-3">{it.icon}</div>
              <div className="font-semibold mb-1">{it.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
