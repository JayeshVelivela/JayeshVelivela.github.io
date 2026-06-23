import { experiences } from '@/lib/portfolio'

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#f6f7f4] pt-24">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-[#0b7a5c]">Experience</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Engineering, data, and delivery experience.</h1>
        <div className="mt-10 space-y-5">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="rounded-md border border-[#dce6dd] bg-white p-6">
              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h2 className="text-2xl font-bold">{experience.role}</h2>
                  <p className="mt-1 text-lg font-semibold text-[#3f4945]">{experience.company}</p>
                  <p className="text-sm text-[#6b746f]">{experience.location}</p>
                </div>
                <p className="text-sm font-bold text-[#0b7a5c]">{experience.dates}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="leading-7 text-[#4b5550]">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
