import Link from 'next/link'
import { profile } from '@/lib/portfolio'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#101513] pt-24 text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-[#48f2b5]">Contact</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Reach out to Jayesh.</h1>
        <div className="mt-10 grid gap-4">
          <a href={`mailto:${profile.email}`} className="rounded-md bg-white px-5 py-4 font-bold text-[#101513] transition hover:-translate-y-0.5">
            {profile.email}
          </a>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/16 px-5 py-4 font-bold transition hover:-translate-y-0.5 hover:border-[#48f2b5] hover:text-[#48f2b5]"
          >
            {profile.linkedinLabel}
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/16 px-5 py-4 font-bold transition hover:-translate-y-0.5 hover:border-[#48f2b5] hover:text-[#48f2b5]"
          >
            {profile.githubLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
