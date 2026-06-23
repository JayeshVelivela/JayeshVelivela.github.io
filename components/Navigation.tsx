'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { profile } from '@/lib/portfolio'

const navItems = [
  { label: 'Now', id: 'now' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(!isHome)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(!isHome || window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => {
    if (!isHome) {
      setActiveSection('')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.2, 0.4, 0.6] },
    )

    const sectionIds = ['home', ...navItems.map((item) => item.id)]

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [isHome])

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) {
      setIsMenuOpen(false)
      return
    }

    const element = document.getElementById(id)
    if (!element) return

    event.preventDefault()
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  const shellClass = isScrolled
    ? 'border-[#dce6dd] bg-white/92 text-[#161616] shadow-sm backdrop-blur-xl'
    : 'border-transparent bg-transparent text-white'

  const linkBase = isScrolled
    ? 'text-[#3f4945] hover:text-[#0b7a5c]'
    : 'text-white/78 hover:text-white'

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${shellClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/#home"
            onClick={(event) => handleSectionClick(event, 'home')}
            className="text-base font-black transition hover:text-[#0b7a5c]"
          >
            Jayesh Velivela
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(event) => handleSectionClick(event, item.id)}
                  className={`rounded-full px-3 py-2 text-sm font-bold transition ${linkBase} ${
                    isActive && isScrolled ? 'bg-[#e6f8ee] text-[#0b7a5c]' : ''
                  } ${isActive && !isScrolled ? 'bg-white/14 text-white' : ''}`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href={profile.resume}
              className={`ml-2 rounded-full px-4 py-2 text-sm font-black transition ${
                isScrolled
                  ? 'bg-[#101513] text-white hover:bg-[#0b7a5c]'
                  : 'border border-white/24 bg-white/12 text-white hover:bg-white/22'
              }`}
            >
              Resume
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`rounded-full px-4 py-2 text-sm font-black transition md:hidden ${
              isScrolled ? 'bg-[#101513] text-white' : 'border border-white/24 bg-white/12 text-white'
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </div>

        {isMenuOpen ? (
          <div className={`grid gap-1 border-t py-3 md:hidden ${isScrolled ? 'border-[#dce6dd]' : 'border-white/15'}`}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={(event) => handleSectionClick(event, item.id)}
                className={`rounded-md px-3 py-3 text-sm font-bold transition ${linkBase}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={profile.resume}
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-md px-3 py-3 text-sm font-black transition ${
                isScrolled ? 'bg-[#101513] text-white' : 'border border-white/18 text-white'
              }`}
            >
              Resume
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
