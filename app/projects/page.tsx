import Link from 'next/link'
import { profile, projects } from '@/lib/portfolio'

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#101513] pt-24 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-[#48f2b5]">Projects</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Systems I have designed and built.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-md border border-white/12 bg-white/[0.07] p-6">
              <p className="text-sm font-bold uppercase text-[#48f2b5]">{project.date}</p>
              <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>
              <p className="mt-4 leading-7 text-white/72">{project.summary}</p>
              <p className="mt-4 text-sm leading-6 text-white/58">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/12 px-3 py-1 text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link ?? profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-md border border-[#48f2b5] px-4 py-2 text-sm font-bold text-[#48f2b5] transition hover:bg-[#48f2b5] hover:text-[#07120f]"
              >
                {project.link ? 'View repo' : 'GitHub profile'}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
