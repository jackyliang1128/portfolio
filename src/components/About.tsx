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
      title="Full-stack development grounded in systems thinking."
    >
      <div className="about-card card" data-reveal>
        <div className="about-section__copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}
