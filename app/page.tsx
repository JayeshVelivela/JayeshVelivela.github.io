'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { experiences, nowCards, profile, projects, proofPoints, skillGroups } from '@/lib/portfolio'

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [skillFilter, setSkillFilter] = useState('All')

  const selectedProject = projects[activeProject]
  const skillFilters = useMemo(() => ['All', ...skillGroups.map((group) => group.name)], [])
  const visibleSkillGroups =
    skillFilter === 'All' ? skillGroups : skillGroups.filter((group) => group.name === skillFilter)

  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#161616]">
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#111111]">
        <Image
          src="/jayesh.jpg"
          alt="Jayesh Velivela"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/58 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />

        <div className="relative z-10 flex min-h-screen items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur">
                Michigan CS - Accenture Technology Summer Analyst - Backend and distributed systems
              </p>
              <h1 className="text-5xl font-bold leading-none sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-white/88">
                {profile.headline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-md bg-[#48f2b5] px-6 py-3 text-center text-sm font-bold text-[#07120f] shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#77ffd0] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Explore the work
                </a>
                <Link
                  href={profile.resume}
                  className="rounded-md border border-white/30 bg-white/12 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/22 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Download resume
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-md border border-white/30 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Contact Jayesh
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((item) => (
                <div key={item.value} className="rounded-md border border-white/14 bg-white/10 p-4 text-white backdrop-blur">
                  <p className="text-3xl font-black text-[#48f2b5]">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-white/78">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="now" className="border-y border-[#dfe7df] bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#0b7a5c]">Current snapshot</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What I am doing now</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#4b5550]">
              This section is based on the June 2026 resume you provided, with the current focus framed around
              your Summer 2026 Accenture role and Michigan CS path.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {nowCards.map((card) => (
              <article key={card.title} className="rounded-md border border-[#dce6dd] bg-[#f6f7f4] p-6 transition hover:-translate-y-1 hover:border-[#77d8b6] hover:shadow-xl">
                <p className="text-sm font-bold uppercase text-[#0b7a5c]">{card.label}</p>
                <h3 className="mt-3 text-2xl font-bold">{card.title}</h3>
                <p className="mt-4 leading-7 text-[#4b5550]">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f6f7f4] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-[#0b7a5c]">About</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">A builder who cares about the system behind the screen.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#3f4945]">
            <p>{profile.summary}</p>
            <p>
              I am drawn to problems where correctness, performance, and user experience all matter at once.
              That is why my projects tend to look like production systems: authentication, tenant boundaries,
              queues and caching, CI/CD, tests, observability-minded design, and clear interfaces.
            </p>
            <p>
              My recent work includes secure agent coordination, multi-tenant document processing, and a
              real-time mobile fitness app. Across those projects, the through-line is ownership: understand the
              domain, design the architecture, ship the pieces, and make the tradeoffs visible.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#101513] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#48f2b5]">Project spotlight</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Interactive systems, not just class projects.</h2>
            </div>
            <p className="max-w-xl leading-7 text-white/70">
              Pick a project to see the architecture story, proof points, and tech stack. Each one is pulled from
              your resume and tuned for portfolio scanning.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="space-y-3" role="tablist" aria-label="Featured projects">
              {projects.map((project, index) => {
                const isActive = activeProject === index
                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveProject(index)}
                    className={`w-full rounded-md border p-5 text-left transition ${
                      isActive
                        ? 'border-[#48f2b5] bg-[#48f2b5] text-[#07120f] shadow-xl shadow-[#48f2b5]/10'
                        : 'border-white/12 bg-white/6 text-white hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span className={`text-xs font-bold uppercase ${isActive ? 'text-[#075640]' : 'text-[#48f2b5]'}`}>
                      {project.date}
                    </span>
                    <span className="mt-2 block text-xl font-bold">{project.title}</span>
                    <span className={`mt-3 block text-sm leading-6 ${isActive ? 'text-[#12382e]' : 'text-white/62'}`}>
                      {project.summary}
                    </span>
                  </button>
                )
              })}
            </div>

            <article className="rounded-md border border-white/12 bg-white/[0.07] p-6 shadow-2xl shadow-black/20">
              <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-bold uppercase text-[#48f2b5]">Selected build</p>
                  <h3 className="mt-2 text-3xl font-bold">{selectedProject.title}</h3>
                </div>
                {selectedProject.link ? (
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/18 px-4 py-2 text-sm font-bold text-white transition hover:border-[#48f2b5] hover:text-[#48f2b5]"
                  >
                    View repo
                  </Link>
                ) : (
                  <Link
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/18 px-4 py-2 text-sm font-bold text-white transition hover:border-[#48f2b5] hover:text-[#48f2b5]"
                  >
                    GitHub profile
                  </Link>
                )}
              </div>

              <p className="mt-6 text-lg leading-8 text-white/82">{selectedProject.impact}</p>
              <ul className="mt-6 space-y-4">
                {selectedProject.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-white/76">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#48f2b5]" />
                    <span className="leading-7">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-sm text-white/82">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#0b7a5c]">Experience</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">A timeline of software, systems, and data work.</h2>
          </div>

          <div className="space-y-5">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.role}`} className="rounded-md border border-[#dce6dd] bg-[#f6f7f4] p-6">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold">{experience.role}</h3>
                      {experience.current ? (
                        <span className="rounded-full bg-[#dff8ec] px-3 py-1 text-xs font-bold uppercase text-[#0b7a5c]">
                          Current focus
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-lg font-semibold text-[#3f4945]">{experience.company}</p>
                    <p className="text-sm text-[#6b746f]">{experience.location}</p>
                  </div>
                  <p className="rounded-full border border-[#d4ded5] px-4 py-2 text-sm font-bold text-[#3f4945]">
                    {experience.dates}
                  </p>
                </div>
                <ul className="mt-6 grid gap-4 md:grid-cols-3">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-md bg-white p-4 text-sm leading-6 text-[#4b5550] shadow-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#eef5f0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#0b7a5c]">Skills</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Filter the toolkit.</h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Skill filters">
              {skillFilters.map((filter) => {
                const isActive = skillFilter === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSkillFilter(filter)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                      isActive
                        ? 'bg-[#101513] text-white'
                        : 'border border-[#cbd8cf] bg-white text-[#3f4945] hover:border-[#0b7a5c] hover:text-[#0b7a5c]'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleSkillGroups.map((group) => (
              <article key={group.name} className="rounded-md border border-[#d4ded5] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{group.name}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-[#f1f7f3] px-3 py-2 text-sm font-semibold text-[#3f4945]">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#101513] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-[#48f2b5]">Contact</p>
            <h2 className="mt-2 text-4xl font-bold">Let us build something useful.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              I am always glad to talk about backend systems, product engineering, internships, and ambitious
              technical projects.
            </p>
          </div>
          <div className="rounded-md border border-white/12 bg-white/[0.07] p-6">
            <div className="space-y-4">
              <a href={`mailto:${profile.email}`} className="block rounded-md bg-white px-5 py-4 font-bold text-[#101513] transition hover:-translate-y-0.5">
                {profile.email}
              </a>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border border-white/16 px-5 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-[#48f2b5] hover:text-[#48f2b5]"
              >
                {profile.linkedinLabel}
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border border-white/16 px-5 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-[#48f2b5] hover:text-[#48f2b5]"
              >
                {profile.githubLabel}
              </Link>
              <Link
                href={profile.resume}
                className="block rounded-md border border-[#48f2b5] px-5 py-4 font-bold text-[#48f2b5] transition hover:-translate-y-0.5 hover:bg-[#48f2b5] hover:text-[#07120f]"
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
