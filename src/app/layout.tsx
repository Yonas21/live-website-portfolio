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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AppLoader = dynamic(() => import("./components/AppLoader"), { ssr: false });
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider>
          <AppLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}