import type { Profile } from '../data/profile'
import { Section } from './Section'

type AboutProps = {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="about" title="About Me">
      <div className="about-card card" data-reveal>
        <div className="about-section__copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-section__portrait" role="img" aria-label="Profile photo placeholder">
          <span className="about-section__initials">JL</span>
          <span className="about-section__portrait-label">Profile photo</span>
        </div>
      </div>
    </Section>
  )
}
