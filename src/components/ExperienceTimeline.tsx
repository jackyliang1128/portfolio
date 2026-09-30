import type { CSSProperties } from 'react'
import type { Experience } from '../data/profile'
import { Section } from './Section'

type ExperienceTimelineProps = {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <Section id="experience" title="My Experience">
      <ol className="timeline">
        {experiences.map((experience, index) => (
          <li
            key={`${experience.role}-${experience.organization}`}
            className={`timeline-item timeline-item--${index % 2 === 0 ? 'left' : 'right'}`}
            data-reveal
            style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
          >
            <span className="timeline-item__marker" aria-hidden="true" />
            <time className="timeline-item__period">{experience.period}</time>
            <article className="timeline-card">
              <header className="timeline-card__header">
                <div
                  className={`timeline-card__logo${experience.logo.layout ? ` timeline-card__logo--${experience.logo.layout}` : ''}`}
                >
                  <img
                    src={experience.logo.src}
                    alt={experience.logo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="timeline-card__heading">
                  <h3>{experience.role}</h3>
                  <p>{experience.organization}</p>
                </div>
              </header>
              <ul className="timeline-card__highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
