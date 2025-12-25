'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-16 sm:h-16 py-4 sm:py-0">
          <Link 
            href="/#home" 
            onClick={(e) => handleClick(e, '#home')}
            className="text-xl font-semibold mb-4 sm:mb-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Jayesh Velivela
          </Link>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="#about"
              onClick={(e) => handleClick(e, '#about')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleClick(e, '#projects')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => handleClick(e, '#experience')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => handleClick(e, '#skills')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
