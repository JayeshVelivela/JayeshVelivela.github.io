'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { experiences, nowCards, profile, projects, skillGroups } from '@/lib/portfolio'

const lenses = [
  {
    name: 'Systems',
    title: 'Backend platforms with real constraints',
    detail:
      'APIs, data boundaries, tenant isolation, cache paths, CI/CD, and tests. I like work where architecture has to survive actual users.',
  },
  {
    name: 'Product',
    title: 'Usable software, not just services',
    detail:
      'React Native, real-time feeds, dashboards, and workflow design. I care about how engineering decisions show up in the user experience.',
  },
  {
    name: 'Delivery',
    title: 'Execution habits from internships and projects',
    detail:
      'Automated tests, deployment pipelines, measurable performance work, and clean handoffs across technical and nontechnical teams.',
  },
]

const signalScans = [
  {
    label: 'Impact',
    metric: '35%',
    title: 'Backend response-time improvement',
    proof: 'Optimized high-volume fintech and healthcare APIs during software engineering internship work.',
  },
  {
    label: 'Reliability',
    metric: '91%',
    title: 'Test coverage after expansion',
    proof: 'Authored 150+ automated tests across unit, integration, and UI testing layers.',
  },
  {
    label: 'Velocity',
    metric: '85%',
    title: 'Deployment time reduction',
    proof: 'Automated CI/CD with GitHub Actions and Azure DevOps for more consistent production pushes.',
  },
]

const skillStories: Record<string, string> = {
  All: 'A systems-leaning toolkit that spans backend services, infrastructure, product interfaces, data workflows, and testing.',
  Languages: 'Comfortable moving between lower-level systems thinking, backend implementation, scripting, and product-facing TypeScript.',
  'Backend & Systems':
    'The center of gravity: APIs, auth, distributed-system concepts, data modeling, performance, and production-minded service design.',
  'Infrastructure & DevOps':
    'Cloud and deployment work that makes software repeatable: Docker, CI/CD, GitHub Actions, Azure DevOps, and Kubernetes foundations.',
  'Product & Data Tools':
    'Enough frontend, mobile, analytics, and workflow automation range to connect technical systems to people actually using them.',
}

const personalPhotos = [
  {
    src: '/about/game-day.jpg',
    alt: 'Jayesh with friends at a Michigan game day',
    label: 'Game day',
    caption: 'I love the energy of Michigan game days and being around friends.',
  },
  {
    src: '/about/friends-night.jpg',
    alt: 'Jayesh with friends outside at night',
    label: 'Friends',
    caption: 'A lot of my best memories come from hanging out, meeting new people, and saying yes to plans.',
  },
  {
    src: '/about/family-birthday.jpg',
    alt: 'Jayesh with family at a birthday celebration',
    label: 'Home',
    caption: 'Family keeps me grounded and reminds me who I am building toward.',
  },
  {
    src: '/about/formal-night.jpg',
    alt: 'Jayesh dressed up for a night out',
    label: 'Nights out',
    caption: 'I love spending time with the ones I love.',
  },
]

const personalInterests = ['Basketball', 'Swimming', 'Video games', 'Daily Wordle', 'Meeting people']

export default function Home() {
  const [activeLens, setActiveLens] = useState(0)
  const [activeScan, setActiveScan] = useState(0)
  const [activeProject, setActiveProject] = useState(0)
  const [activeSkillGroup, setActiveSkillGroup] = useState('All')
  const [openExperience, setOpenExperience] = useState(0)
  const [activePhoto, setActivePhoto] = useState(0)
  const [showPersonal, setShowPersonal] = useState(false)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })

  const selectedProject = projects[activeProject]
  const selectedLens = lenses[activeLens]
  const selectedScan = signalScans[activeScan]
  const selectedPhoto = personalPhotos[activePhoto]
  const skillFilters = useMemo(() => ['All', ...skillGroups.map((group) => group.name)], [])
  const visibleSkillGroups =
    activeSkillGroup === 'All' ? skillGroups : skillGroups.filter((group) => group.name === activeSkillGroup)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0b1020] text-[#eef2ff]">
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#0b1020]"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          setSpotlight({
            x: Math.round(((event.clientX - rect.left) / rect.width) * 100),
            y: Math.round(((event.clientY - rect.top) / rect.height) * 100),
          })
        }}
      >
        <Image
          src="/jayesh.jpg"
          alt="Jayesh Velivela"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-[50%_34%] opacity-74 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/96 via-[#0b1020]/84 to-[#0b1020]/42" />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(244, 184, 96, 0.22), transparent 26rem), linear-gradient(135deg, rgba(125, 211, 252, 0.12), transparent 42rem)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0b1020] to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-4 pb-8 pt-28 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
          <div className="max-w-3xl pb-6 text-white">
            <p className="reveal mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
              Michigan CS - Accenture Summer 2026 - backend and distributed systems
            </p>
            <h1 className="reveal text-4xl font-black leading-none sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="reveal mt-5 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              {profile.headline}
            </p>
            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="rounded-md bg-[#f4b860] px-6 py-3 text-center text-sm font-black text-[#111827] shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:bg-[#ffd38a]"
              >
                Explore the system
              </a>
              <a
                href="#lenses"
                className="rounded-md border border-white/28 bg-white/12 px-6 py-3 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/22"
              >
                Pick a lens
              </a>
            </div>
          </div>

          <div className="reveal mb-4 rounded-md border border-[#2a3553] bg-[#121a2f]/88 p-4 text-[#eef2ff] shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/12 pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f4b860]">Impact snapshot</p>
                <h2 className="mt-2 text-2xl font-black">Click a metric to see the proof.</h2>
              </div>
              <span className="h-3 w-3 rounded-full bg-[#f4b860] shadow-[0_0_18px_rgba(244,184,96,0.8)]" />
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {signalScans.map((scan, index) => {
                const isActive = activeScan === index
                return (
                  <button
                    key={scan.label}
                    type="button"
                    onClick={() => setActiveScan(index)}
                    className={`rounded-md border p-3 text-left transition duration-300 ${
                      isActive
                        ? 'border-[#f4b860] bg-[#f4b860] text-[#111827]'
                        : 'border-[#2a3553] bg-black/24 text-[#eef2ff] hover:-translate-y-0.5 hover:border-[#f4b860]/70 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className={`text-xs font-black uppercase tracking-[0.18em] ${isActive ? 'text-[#6f4208]' : 'text-[#f4b860]'}`}>
                      {scan.label}
                    </span>
                    <span className="mt-1 block text-2xl font-black">{scan.metric}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-4 rounded-md border border-[#2a3553] bg-black/28 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7dd3fc]">{selectedScan.label} proof</p>
                  <h3 className="mt-2 text-2xl font-black">{selectedScan.title}</h3>
                </div>
                <span className="text-4xl font-black text-[#f4b860]">{selectedScan.metric}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/70">{selectedScan.proof}</p>
              <div className="signal-bars mt-5" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lenses" className="border-y border-[#26324f] bg-[#0f172a] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Snapshot</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Three signals from recent work.</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {nowCards.map((card, index) => (
              <button
                key={card.title}
                type="button"
                onClick={() => setActiveLens(index)}
                className={`reveal group min-h-52 rounded-md border p-6 text-left transition duration-300 ${
                  activeLens === index
                    ? 'border-[#f4b860] bg-[#f4b860] text-[#111827] shadow-2xl shadow-[#f4b860]/10'
                    : 'border-[#26324f] bg-[#121a2f] text-[#eef2ff] hover:-translate-y-1 hover:border-[#f4b860]/70 hover:shadow-xl hover:shadow-black/20'
                }`}
              >
                <p className={`text-sm font-black uppercase tracking-[0.18em] ${activeLens === index ? 'text-[#6f4208]' : 'text-[#f4b860]'}`}>
                  {card.label}
                </p>
                <h3 className="mt-3 text-2xl font-black">{card.title}</h3>
                <p className={`mt-4 overflow-hidden leading-7 transition-all duration-300 ${
                  activeLens === index ? 'max-h-40 opacity-80' : 'max-h-0 opacity-0'
                }`}>
                  {card.detail}
                </p>
                <span className="mt-5 inline-flex text-sm font-black">
                  {activeLens === index ? 'Open' : 'Reveal'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#0b1020] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:px-8">
          <div className="reveal">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">About</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">The person behind the systems.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/68">
              I care about building serious things, but I am at my best around people, competition, and small daily rituals.
            </p>
          </div>

          <div className="reveal grid gap-5">
            <button
              type="button"
              onClick={() => setShowPersonal((isOpen) => !isOpen)}
              className="group rounded-md border border-[#26324f] bg-[#121a2f] p-6 text-left shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#f4b860]/70"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Learn more about me</p>
                  <h3 className="mt-2 text-2xl font-black">Basketball, friends, swimming, games, and the daily Wordle.</h3>
                </div>
                <span className="rounded-full border border-white/14 bg-black/22 px-4 py-2 text-sm font-black text-[#7dd3fc] transition group-hover:border-[#f4b860]/70">
                  {showPersonal ? 'Hide' : 'Open'}
                </span>
              </div>
              <p
                className={`overflow-hidden leading-7 text-white/72 transition-all duration-300 ${
                  showPersonal ? 'mt-5 max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                Outside of school and work, I love playing basketball, swimming, playing video games, doing the daily
                Wordle, hanging out with friends, and meeting new people. I like being around people who make ordinary
                days feel memorable, whether that is a late-night hangout, a game day, or a quick competitive run.
              </p>
              <div
                className={`flex flex-wrap gap-2 overflow-hidden transition-all duration-300 ${
                  showPersonal ? 'mt-5 max-h-24 opacity-100' : 'mt-0 max-h-0 opacity-0'
                }`}
              >
                {personalInterests.map((interest) => (
                  <span key={interest} className="rounded-full border border-[#2a3553] bg-black/22 px-3 py-1 text-sm font-bold text-white/76">
                    {interest}
                  </span>
                ))}
              </div>
            </button>

            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] overflow-hidden rounded-md border border-[#26324f] bg-[#121a2f] shadow-2xl shadow-black/20">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">{selectedPhoto.label}</p>
                  <p className="mt-2 max-w-xl text-lg font-black text-white">{selectedPhoto.caption}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {personalPhotos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    className={`group relative min-h-36 overflow-hidden rounded-md border text-left transition hover:-translate-y-1 ${
                      activePhoto === index ? 'border-[#f4b860]' : 'border-[#26324f] hover:border-[#f4b860]/70'
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 18vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-black/8" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">
                      {photo.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-[#26324f] bg-[#121a2f] p-6 shadow-2xl shadow-black/20">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Work lens</p>
            <div className="grid gap-4 md:grid-cols-3">
              {lenses.map((lens, index) => (
                <button
                  key={lens.name}
                  type="button"
                  onClick={() => setActiveLens(index)}
                  className={`rounded-md border p-4 text-left transition ${
                    activeLens === index
                      ? 'border-[#f4b860] bg-[#f4b860] text-[#111827]'
                      : 'border-[#2a3553] bg-black/20 text-[#eef2ff] hover:-translate-y-0.5 hover:border-[#f4b860]/70'
                  }`}
                >
                  <p className={`text-sm font-black uppercase tracking-[0.16em] ${activeLens === index ? 'text-[#6f4208]' : 'text-[#f4b860]'}`}>{lens.name}</p>
                  <p className="mt-2 text-base font-black">{lens.title}</p>
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-[#0f172a] p-6 text-[#eef2ff]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7dd3fc]">{selectedLens.name}</p>
              <h3 className="mt-2 text-2xl font-black">{selectedLens.title}</h3>
              <p className="mt-4 leading-7 text-white/76">{selectedLens.detail}</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#0f172a] py-20 text-[#eef2ff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Project deck</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Three builds. One active at a time.</h2>
            </div>
            <p className="max-w-xl leading-7 text-white/66">
              Click to read more.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.2fr]">
            <div className="grid gap-3" role="tablist" aria-label="Featured projects">
              {projects.map((project, index) => {
                const isActive = activeProject === index
                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveProject(index)}
                    className={`reveal project-card group relative overflow-hidden rounded-md border p-5 text-left transition duration-300 ${
                      isActive
                        ? 'border-[#f4b860] bg-[#f4b860] text-[#111827]'
                        : 'border-[#26324f] bg-[#121a2f] text-[#eef2ff] hover:-translate-y-1 hover:border-[#f4b860]/60 hover:bg-[#17213a]'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span className={`text-xs font-black uppercase tracking-[0.18em] ${isActive ? 'text-[#6f4208]' : 'text-[#f4b860]'}`}>
                      {project.date}
                    </span>
                    <span className="mt-2 block text-2xl font-black">{project.title}</span>
                    <span className={`mt-3 block text-sm leading-6 ${isActive ? 'text-[#3b2a0a]' : 'text-white/62'}`}>
                      {project.summary}
                    </span>
                    <span className="mt-5 inline-flex text-sm font-black">
                      {isActive ? 'Opened' : 'Open details'}
                    </span>
                  </button>
                )
              })}
            </div>

            <article className="reveal rounded-md border border-[#26324f] bg-[#121a2f] p-6 shadow-2xl shadow-black/20">
              <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Active build</p>
                  <h3 className="mt-2 text-3xl font-black">{selectedProject.title}</h3>
                </div>
                <Link
                  href={selectedProject.link ?? profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[#2a3553] px-4 py-2 text-sm font-black text-[#eef2ff] transition hover:border-[#f4b860] hover:text-[#f4b860]"
                >
                  {selectedProject.link ? 'View repo' : 'GitHub'}
                </Link>
              </div>

              <p className="mt-6 text-lg leading-8 text-white/82">{selectedProject.impact}</p>
              <div className="mt-6 grid gap-3">
                {selectedProject.details.map((detail, index) => (
                  <div key={detail} className="rounded-md border border-[#26324f] bg-[#0f172a] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7dd3fc]">Layer {index + 1}</p>
                    <p className="mt-2 leading-7 text-white/74">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#26324f] bg-[#0f172a] px-3 py-1 text-sm font-semibold text-white/82">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#0b1020] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Experience</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">A compact timeline that opens on demand.</h2>
          </div>

          <div className="space-y-4">
            {experiences.map((experience, index) => {
              const isOpen = openExperience === index
              return (
                <article key={`${experience.company}-${experience.role}`} className="reveal rounded-md border border-[#26324f] bg-[#121a2f]">
                  <button
                    type="button"
                    onClick={() => setOpenExperience(isOpen ? -1 : index)}
                    className="flex w-full flex-col justify-between gap-4 p-6 text-left text-[#eef2ff] transition hover:bg-[#17213a] md:flex-row md:items-center"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black">{experience.role}</h3>
                        {experience.current ? (
                            <span className="rounded-full bg-[#f4b860] px-3 py-1 text-xs font-black uppercase text-[#111827]">
                            Current
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-lg font-bold text-white/62">{experience.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="rounded-full border border-[#2a3553] px-4 py-2 text-sm font-black text-white/70">
                        {experience.dates}
                      </p>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f4b860] text-lg font-black text-[#111827]">
                        {isOpen ? '-' : '+'}
                      </span>
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="grid gap-4 border-t border-[#26324f] p-6 md:grid-cols-3">
                        {experience.bullets.map((bullet) => (
                          <p key={bullet} className="rounded-md border border-[#26324f] bg-[#0f172a] p-4 text-sm leading-6 text-white/74 shadow-sm">
                            {bullet}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#0f172a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Skill map</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Filter first. Details second.</h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Skill filters">
              {skillFilters.map((filter) => {
                const isActive = activeSkillGroup === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveSkillGroup(filter)}
                    className={`rounded-full px-4 py-2 text-sm font-black transition ${
                      isActive
                        ? 'bg-[#f4b860] text-[#111827]'
                        : 'border border-[#2a3553] bg-[#121a2f] text-white/70 hover:border-[#f4b860] hover:text-[#f4b860]'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="reveal mb-5 rounded-md border border-[#26324f] bg-[#121a2f] p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7dd3fc]">{activeSkillGroup}</p>
            <p className="mt-2 max-w-3xl leading-7 text-white/62">{skillStories[activeSkillGroup]}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleSkillGroups.map((group) => (
              <article key={group.name} className="reveal rounded-md border border-[#26324f] bg-[#121a2f] p-6 shadow-sm">
                <h3 className="text-xl font-black">{group.name}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip rounded-full border border-[#26324f] bg-[#0f172a] px-3 py-2 text-sm font-bold text-white/74">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0b1020] py-20 text-[#eef2ff]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="reveal">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4b860]">Contact</p>
            <h2 className="mt-2 text-4xl font-black">Want the full file?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              The page gives the compact story. The resume and links carry the rest.
            </p>
          </div>
          <div className="reveal rounded-md border border-[#26324f] bg-[#121a2f] p-6">
            <div className="space-y-4">
              <a href={`mailto:${profile.email}`} className="block rounded-md bg-[#f4b860] px-5 py-4 font-black text-[#111827] transition hover:-translate-y-1 hover:bg-[#ffd38a]">
                {profile.email}
              </a>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border border-[#2a3553] px-5 py-4 font-black text-[#eef2ff] transition hover:-translate-y-1 hover:border-[#f4b860] hover:text-[#f4b860]"
              >
                {profile.linkedinLabel}
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border border-[#2a3553] px-5 py-4 font-black text-[#eef2ff] transition hover:-translate-y-1 hover:border-[#f4b860] hover:text-[#f4b860]"
              >
                {profile.githubLabel}
              </Link>
              <Link
                href={profile.resume}
                className="block rounded-md border border-[#7dd3fc] px-5 py-4 font-black text-[#7dd3fc] transition hover:-translate-y-1 hover:bg-[#7dd3fc] hover:text-[#111827]"
              >
                Download the June 2026 resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
