import { skillGroups } from '@/lib/portfolio'

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#eef5f0] pt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-[#0b7a5c]">Skills</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">A toolkit for backend and product engineering.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.name} className="rounded-md border border-[#d4ded5] bg-white p-6">
              <h2 className="text-2xl font-bold">{group.name}</h2>
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
    </div>
  )
}
