import type { CSSProperties } from 'react'
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
      <div className="experience-layout">
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.role}-${experience.organization}`}
              className="timeline-card"
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
            >
              <div className="timeline-card__header">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.organization}</p>
                </div>
                <span>{experience.period}</span>
              </div>
              <p className="timeline-card__summary">{experience.summary}</p>
              {experience.highlights.some((highlight) => highlight.includes('4 hours to 30 minutes')) ? (
                <div className="metric-card">
                  <span>Deployment downtime reduced</span>
                  <strong>4 hours to 30 minutes</strong>
                </div>
              ) : null}
              <ul className="timeline-card__highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <aside className="education-card" data-reveal>
          <h3>Education</h3>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.degree}>
                <h4>{item.degree}</h4>
                <p>{item.institution}</p>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  )
}
