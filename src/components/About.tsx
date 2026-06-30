import type { Profile } from '../data/profile'
import { Section } from './Section'

type AboutProps = {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering discipline from software and mechanical systems."
      description="I bring hands-on production software experience, test automation practice, and an engineering background focused on reliable systems."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {profile.highlights.map((highlight) => (
          <article
            key={highlight.title}
            className="rounded-3xl border border-line bg-card/85 p-6 shadow-sm shadow-slate-200/70"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
              {highlight.metric}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-ink">{highlight.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{highlight.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
