import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ThemeProvider from "./theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://yonasalem.dev"),
  title: {
    default: "Yonas Alem – Senior Software Engineer",
    template: "%s | Yonas Alem",
  },
  description:
    "Senior Software Engineer specializing in high-performance full‑stack systems, microservices and cloud cost optimization.",
  keywords: [
    "Yonas Alem",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Microservices",
    "Next.js",
    "TypeScript",
    "AWS",
  ],
  applicationName: "Yonas Alem",
  authors: [{ name: "Yonas Alem", url: "https://yonasalem.dev" }],
  creator: "Yonas Alem",
  publisher: "Yonas Alem",
  category: "Technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Yonas Alem – Senior Software Engineer",
    description:
      "5+ years building scalable web platforms, 40% API perf gains and $22K/mo cloud savings.",
    url: "https://yonasalem.dev",
    siteName: "Yonas Alem",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yonas Alem – Senior Software Engineer",
    description:
      "Full‑stack engineer focused on performance, reliability and business impact.",
  },
  icons: {
    icon: [{ url: "/icon.svg" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  manifest: "/manifest.webmanifest",
};

// Basic Person schema for SEO
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yonas Alem',
  url: 'https://yonasalem.dev',
  jobTitle: 'Senior Software Engineer',
  sameAs: [
    'https://www.linkedin.com/in/yonasalem21',
    'https://github.com/Yonas21',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Yonas Alem',
  url: 'https://yonasalem.dev',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://yonasalem.dev/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const breadcrumbsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yonasalem.dev' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://yonasalem.dev/#about' },
    { '@type': 'ListItem', position: 3, name: 'Projects', item: 'https://yonasalem.dev/#projects' },
    { '@type': 'ListItem', position: 4, name: 'Contact', item: 'https://yonasalem.dev/#contact' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AppLoader = dynamic(() => import("./components/AppLoader"), { ssr: false });
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider>
          {/* Accessibility: Skip to content */}
          <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-brand-500 focus:text-white focus:px-3 focus:py-2">Skip to content</a>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
          />
          <AppLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}