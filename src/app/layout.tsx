import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thaminduweerasinghe-portfolio.vercel.app"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thamindu Weerasinghe | Data Science Undergraduate & Full Stack Developer",
  description:
    "Official portfolio of Thamindu Weerasinghe, a Data Science undergraduate at SLIIT with experience in full-stack development, data analytics, Power BI, React, Next.js, Node.js, and machine learning projects.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  keywords: [
    "Thamindu Weerasinghe",
    "Thamindu Weerasinghe Portfolio",
    "Data Science Undergraduate",
    "SLIIT",
    "Full Stack Developer",
    "Data Analytics",
    "Power BI",
    "React Developer",
    "Next.js Developer",
    "Machine Learning Projects",
  ],
  authors: [{ name: "Thamindu Weerasinghe", url: siteUrl }],
  creator: "Thamindu Weerasinghe",
  applicationName: "Thamindu Weerasinghe Portfolio",
  openGraph: {
    title: "Thamindu Weerasinghe | Portfolio",
    description:
      "Data Science undergraduate and full-stack developer portfolio showcasing projects, skills, certifications, and contact information.",
    url: siteUrl,
    siteName: "Thamindu Weerasinghe Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Thamindu Weerasinghe professional portfolio profile image",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thamindu Weerasinghe | Portfolio",
    description:
      "Data Science undergraduate and full-stack developer portfolio showcasing projects, skills, certifications, and contact information.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    },
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
