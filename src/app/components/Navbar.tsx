'use client';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../app/theme/ThemeProvider';
import { profile } from '../content';

const items = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 hidden border-b border-black/10 bg-[rgba(247,243,236,0.78)] backdrop-blur-xl md:block dark:border-neutral-800 dark:bg-[rgba(9,9,11,0.88)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors hover:text-neutral-950 dark:text-white dark:hover:text-neutral-100">
          {profile.name}
        </a>
        <ul className="flex items-center gap-7">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black/10 bg-white/42 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-white/65 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.05]"
            >
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white/42 p-2 text-neutral-700 transition-colors hover:bg-white/65 hover:text-neutral-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
