import { coursework, nowCards, profile } from '@/lib/portfolio'

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f7f4] pt-24">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase text-[#0b7a5c]">About Jayesh</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{profile.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3f4945]">{profile.summary}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {nowCards.map((card) => (
            <article key={card.title} className="rounded-md border border-[#dce6dd] bg-white p-5">
              <p className="text-sm font-bold uppercase text-[#0b7a5c]">{card.label}</p>
              <h2 className="mt-2 text-xl font-bold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4b5550]">{card.detail}</p>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-md border border-[#dce6dd] bg-white p-6">
          <h2 className="text-2xl font-bold">Relevant coursework</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span key={course} className="rounded-full bg-[#eef5f0] px-3 py-2 text-sm font-semibold text-[#3f4945]">
                {course}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
