import type { Education, Experience } from '../data/profile'
import { Section } from './Section'

type ExperienceTimelineProps = {
  experiences: Experience[]
  education: Education[]
}

export function ExperienceTimeline({ experiences, education }: ExperienceTimelineProps) {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title="Production delivery, automated quality, teaching, and engineering foundations."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.organization}`}
              className="rounded-3xl border border-line bg-card p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink">{experience.role}</h3>
                  <p className="mt-1 font-semibold text-brand">{experience.organization}</p>
                </div>
                <p className="text-sm font-semibold text-muted">{experience.period}</p>
              </div>
              <p className="mt-4 leading-7 text-muted">{experience.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <aside className="rounded-3xl border border-line bg-ink p-6 text-white shadow-xl shadow-slate-300/60 lg:sticky lg:top-28 lg:self-start">
          <h3 className="text-xl font-bold">Education</h3>
          <div className="mt-6 space-y-6">
            {education.map((item) => (
              <article key={item.degree} className="border-l border-accent/70 pl-4">
                <h4 className="font-bold">{item.degree}</h4>
                <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
                <p className="mt-2 text-sm font-semibold text-accent">{item.period}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  )
}
