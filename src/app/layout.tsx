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
    default: "Yonas Alem – Senior Software Engineer | Full-Stack Developer",
    template: "%s | Yonas Alem",
  },
  description:
    "Senior Software Engineer with 5+ years experience building scalable web applications. Specialized in full-stack development, microservices, cloud architecture, and performance optimization. Reduced API latency by 40% and saved $22K+ monthly in cloud costs.",
  keywords: [
    "Yonas Alem",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Microservices",
    "Cloud Architecture",
    "AWS",
    "Performance Optimization",
    "API Development",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Go",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "Remote Developer",
    "Ethiopia",
    "Addis Ababa",
    "Open to Work",
    "Available for Hire"
  ],
  applicationName: "Yonas Alem Portfolio",
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
    title: "Yonas Alem – Senior Software Engineer | Full-Stack Developer",
    description:
      "5+ years building scalable web platforms. Achieved 40% API performance improvement and $22K+ monthly cloud savings. Available for remote opportunities worldwide.",
    url: "https://yonasalem.dev",
    siteName: "Yonas Alem Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Yonas Alem - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yonas Alem – Senior Software Engineer",
    description:
      "Full‑stack engineer focused on performance, reliability and business impact. 40% API improvement, $22K+ cloud savings.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/icon.svg" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#6366f1",
    "color-scheme": "dark light",
  },
};

// Enhanced Person schema for SEO
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yonas Alem',
  url: 'https://yonasalem.dev',
  jobTitle: 'Senior Software Engineer',
  description: 'Full-stack developer specializing in scalable web applications, microservices, and cloud architecture',
  knowsAbout: [
    'Full-Stack Development',
    'Microservices Architecture',
    'Cloud Computing',
    'Performance Optimization',
    'API Development',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'AWS',
    'Docker',
    'Kubernetes'
  ],
  sameAs: [
    'https://www.linkedin.com/in/yonasalem21',
    'https://github.com/Yonas21',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Mereb Technologies'
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Affiliate.com'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'Ethiopia'
  },
  knowsLanguage: ['English', 'Amharic', 'Tigrinya']
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Yonas Alem Portfolio',
  url: 'https://yonasalem.dev',
  description: 'Senior Software Engineer portfolio showcasing full-stack development projects and technical expertise',
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
    { '@type': 'ListItem', position: 3, name: 'Experience', item: 'https://yonasalem.dev/#experience' },
    { '@type': 'ListItem', position: 4, name: 'Projects', item: 'https://yonasalem.dev/#projects' },
    { '@type': 'ListItem', position: 5, name: 'Case Studies', item: 'https://yonasalem.dev/#case-studies' },
    { '@type': 'ListItem', position: 6, name: 'Blog', item: 'https://yonasalem.dev/#blog' },
    { '@type': 'ListItem', position: 7, name: 'Contact', item: 'https://yonasalem.dev/#contact' },
  ],
};

// Professional Service schema
const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Yonas Alem - Software Engineering Services',
  description: 'Full-stack development, cloud architecture, and performance optimization services',
  provider: {
    '@type': 'Person',
    name: 'Yonas Alem'
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Full-Stack Development',
    'API Development',
    'Cloud Architecture',
    'Performance Optimization',
    'Microservices Migration',
    'Technical Consulting'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Engineering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full-Stack Development',
          description: 'End-to-end web application development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Performance Optimization',
          description: 'API and application performance improvement'
        }
      }
    ]
  }
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
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
          />
          <AppLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}