import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Thamindu Weerasinghe - Data Science & Full Stack Developer",
  description: "Professional portfolio showcasing data science expertise, full-stack development, and innovative software solutions. Specializing in Python, React, Next.js, machine learning, and cloud technologies.",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  keywords: ["data science", "full-stack development", "machine learning", "python", "react", "next.js", "web development", "software engineering", "cloud computing", "analytics", "dashboard"],
  authors: [{ name: "Thamindu Weerasinghe", url: "https://nadeeja.com" }],
  creator: "Thamindu Weerasinghe",
  openGraph: {
    title: "Thamindu Weerasinghe - Data Science & Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing data science expertise and full-stack development projects with modern design and smooth animations.",
    url: "https://nadeeja.com",
    siteName: "Thamindu Weerasinghe Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nadeeja.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thamindu Nadeeja Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Thamindu Weerasinghe - Data Science & Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing data science expertise and full-stack development projects with modern design and smooth animations.",
    images: [
      {
        url: "https://nadeeja.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thamindu Nadeeja Portfolio"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: false,
      follow: false
    },
    nocache: true
  },
  manifest: "/manifest.json"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}