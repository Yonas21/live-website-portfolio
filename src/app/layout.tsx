import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import ThemeProvider from './theme/ThemeProvider';
import { profile } from './content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

const themeInitScript = `(() => {
  try {
    const saved = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved === 'light' || saved === 'dark' ? saved : (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  } catch {}
})();`;

export const metadata: Metadata = {
  metadataBase: new URL('https://yonasalem.dev'),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    'Senior full-stack developer with 6+ years of experience building backend services, high-traffic APIs, and modern web applications. Focused on reliability, performance, and maintainable delivery.',
  keywords: [
    'Yonas Alem',
    'Senior Full-Stack Developer',
    'Backend Developer',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'gRPC',
    'Redis',
    'PostgreSQL',
    'AWS',
  ],
  applicationName: 'Yonas Alem Portfolio',
  authors: [{ name: profile.name, url: 'https://yonasalem.dev' }],
  creator: profile.name,
  publisher: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description:
      'Backend systems, high-traffic APIs, and modern web applications with an emphasis on reliability, performance, and clean delivery.',
    url: 'https://yonasalem.dev',
    siteName: 'Yonas Alem Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.role}`,
    description:
      'Senior full-stack developer focused on backend systems, API performance, reliability, and maintainable product delivery.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/icon.svg' }],
    shortcut: ['/icon.svg'],
    apple: ['/icon.svg'],
  },
  manifest: '/manifest.webmanifest',
  other: {
    'theme-color': '#0f172a',
    'color-scheme': 'dark light',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: 'https://yonasalem.dev',
  jobTitle: profile.role,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'Ethiopia',
  },
  email: profile.email,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    'Full-Stack Development',
    'Backend Engineering',
    'API Performance',
    'Microservices',
    'React',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Redis',
    'AWS',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-primary-600 focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
