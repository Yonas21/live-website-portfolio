"use client";
import React, { useMemo } from 'react';
import { FiHome, FiUser, FiGrid, FiMessageSquare, FiBookOpen } from 'react-icons/fi';
import { useActiveSection } from './useActiveSection';

const items = [
  { href: '#top', label: 'Home', icon: (active: boolean) => <FiHome size={22} className={active ? 'scale-110' : ''} /> },
  { href: '#about', label: 'About', icon: (active: boolean) => <FiUser size={22} className={active ? 'scale-110' : ''} /> },
  { href: '#projects', label: 'Projects', icon: (active: boolean) => <FiGrid size={22} className={active ? 'scale-110' : ''} /> },
  { href: '#how-i-work', label: 'How I Work', icon: (active: boolean) => <FiBookOpen size={22} className={active ? 'scale-110' : ''} /> },
  { href: '#contact', label: 'Contact', icon: (active: boolean) => <FiMessageSquare size={22} className={active ? 'scale-110' : ''} /> },
];

export default function BottomNav() {
  const ids = useMemo(() => ['top', 'about', 'experience', 'projects', 'how-i-work', 'contact'], []);
  const active = useActiveSection(ids, 180);

  const smoothScrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pageY = window.pageYOffset || document.documentElement.scrollTop;
    // account for fixed elements/top spacing (nav + breathing room)
    const offset = 120;
    const targetY = rect.top + pageY - offset;
    window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
  };
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-white/90 backdrop-blur shadow-[0_-4px_12px_rgba(0,0,0,0.06)] border-gray-200 dark:bg-black/50 dark:border-gray-800">
      <ul className="grid grid-cols-5">
        {items.map((it) => {
          const id = it.href.replace('#', '');
          const isActive = active === id || (id === 'projects' && active === 'case-studies');
          return (
          <li key={it.href}>
            <a
              href={it.href}
              onClick={(e) => { e.preventDefault(); smoothScrollTo(id); }}
              aria-current={isActive ? 'page' : undefined}
              className={"flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium transition-colors " + (isActive ? 'text-brand-600 dark:text-brand-300' : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white')}
            >
              <span className="transition-transform">{it.icon(isActive)}</span>
              <span>{it.label}</span>
              <span aria-hidden className={isActive ? 'mt-0.5 h-0.5 w-6 rounded bg-brand-600 dark:bg-brand-300' : 'mt-0.5 h-0.5 w-6 rounded bg-transparent'} />
            </a>
          </li>
          );
        })}
      </ul>
    </nav>
  );
}
