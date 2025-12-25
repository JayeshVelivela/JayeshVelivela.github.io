import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Jayesh Velivela - Software Engineer | Portfolio',
  description: 'Jayesh Velivela is a software engineer and student at the University of Michigan. Building scalable backend systems and production-ready software. View projects, experience, and skills.',
  keywords: ['Jayesh Velivela', 'Software Engineer', 'University of Michigan', 'Backend Developer', 'Full Stack Developer', 'React Native', 'Python', 'Java', 'Portfolio'],
  authors: [{ name: 'Jayesh Velivela' }],
  creator: 'Jayesh Velivela',
  openGraph: {
    title: 'Jayesh Velivela - Software Engineer',
    description: 'Software engineer building scalable backend systems and production-ready software. Student at the University of Michigan.',
    url: 'https://jayeshvelivela.com',
    siteName: 'Jayesh Velivela Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayesh Velivela - Software Engineer',
    description: 'Software engineer building scalable backend systems and production-ready software.',
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

