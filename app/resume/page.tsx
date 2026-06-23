import Link from 'next/link'
import { profile } from '@/lib/portfolio'

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#f6f7f4] pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-[#0b7a5c]">Resume</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">June 2026 resume</h1>
        <p className="mt-6 text-lg leading-8 text-[#3f4945]">
          Download the latest resume included with this portfolio update.
        </p>
        <Link
          href={profile.resume}
          className="mt-8 inline-flex rounded-md bg-[#101513] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b7a5c]"
        >
          Download resume PDF
        </Link>
      </div>
    </div>
  )
}
