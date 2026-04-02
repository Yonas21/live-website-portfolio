import { profile } from '../content';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-transparent py-8 dark:border-neutral-800 dark:bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-neutral-600 dark:text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js, TypeScript, and a bias toward clarity.</p>
      </div>
    </footer>
  );
}
