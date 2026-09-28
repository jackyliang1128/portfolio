import type { Profile } from '../data/profile'

type HeroProps = {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="hero section">
      <div className="hero__content">
        <p className="badge">{profile.availability}</p>
        <p className="hero__eyebrow">UBC Computer Science · {profile.location}</p>
        <h1 className="hero__title">
          Hi, I&apos;m {profile.name}. I build full-stack software for real people and real workflows.
        </h1>
        <p className="hero__summary">{profile.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="button button--primary">
            View Projects
          </a>
          <a className="button button--secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
