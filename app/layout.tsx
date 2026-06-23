import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  metadataBase: new URL('https://jayeshvelivela.github.io'),
  title: 'Jayesh Velivela - Computer Science Student & Software Engineer',
  description: 'Jayesh Velivela is a University of Michigan computer science student building backend platforms, distributed systems, APIs, and production-minded software.',
  keywords: ['Jayesh Velivela', 'Software Engineer', 'University of Michigan', 'Backend Developer', 'Distributed Systems', 'FastAPI', 'React Native', 'TypeScript', 'Java', 'Portfolio'],
  authors: [{ name: 'Jayesh Velivela' }],
  creator: 'Jayesh Velivela',
  openGraph: {
    title: 'Jayesh Velivela - Software Engineer Portfolio',
    description: 'Computer science student at the University of Michigan building backend platforms, distributed systems, and product-focused software.',
    url: 'https://jayeshvelivela.github.io',
    siteName: 'Jayesh Velivela Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayesh Velivela - Software Engineer Portfolio',
    description: 'Backend platforms, distributed systems, APIs, and production-minded software.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
