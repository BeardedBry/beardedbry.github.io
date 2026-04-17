import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Header from './components/header'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'DevBry',
    template: '%s | DevBry',
  },
  description: 'Web and Game Developer',
  openGraph: {
    title: 'DevBry',
    description: 'Web and Game Developer',
    url: baseUrl,
    siteName: 'DevBry',
    locale: 'en_US',
    type: 'website',
  },
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'dark text-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen">
        <main className="mx-auto w-full max-w-5xl min-h-screen flex-auto min-w-0 flex flex-col bg-gray-100/5 px-2 pt-8 md:px-4">
          <Header />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
