import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Using generic names if available, or just keeping default
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ageng | Software Engineer",
    template: "%s | Ageng"
  },
  description: "Software Engineer specializing in Next.js, TypeScript, and Cloud Architecture. Building high-performance digital experiences.",
  openGraph: {
    title: "Ageng | Software Engineer",
    description: "Software Engineer specializing in Next.js, TypeScript, and Cloud Architecture.",
    url: "https://your-portfolio.com",
    siteName: "Ageng Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ageng",
    card: "summary_large_image",
  },
};

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import CommandMenu from "@/components/layout/CommandMenu";
import GridBackground from "@/components/layout/GridBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-transparent text-foreground font-sans antialiased selection:bg-emerald-500/30"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GridBackground />
          <ScrollProgress />
          <Navbar />
          <CommandMenu />
          <main className="pt-24 pb-16 min-h-[calc(100vh-80px)]">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
