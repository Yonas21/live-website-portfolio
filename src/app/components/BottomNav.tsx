'use client';
import React, { useMemo } from 'react';
import { FiBriefcase, FiHome, FiLayers, FiMail, FiUser } from 'react-icons/fi';
import { useActiveSection } from './useActiveSection';

const items = [
  { href: '#top', label: 'Home', icon: FiHome },
  { href: '#about', label: 'About', icon: FiUser },
  { href: '#experience', label: 'Roles', icon: FiBriefcase },
  { href: '#work', label: 'Work', icon: FiLayers },
  { href: '#contact', label: 'Contact', icon: FiMail },
];

export default function BottomNav() {
  const ids = useMemo(() => ['top', 'about', 'experience', 'work', 'approach', 'contact'], []);
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
    const offset = 100;
    const targetY = rect.top + pageY - offset;
    window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-[rgba(247,243,236,0.84)] backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[rgba(13,17,23,0.94)]">
      <ul className="grid grid-cols-5">
        {items.map((item) => {
          const id = item.href.replace('#', '');
          const Icon = item.icon;
          const isActive = active === id;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollTo(id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
