import type { Profile } from '../data/profile'

type HeroProps = {
  profile: Profile
}

const focusAreas = ['Full-stack web', 'Testing', 'Reliable systems']
const stack = ['React', 'TypeScript', 'Java', 'PostgreSQL', 'PHP', 'Azure', 'Playwright']
const pipelineSteps = ['Plan', 'Build', 'Test', 'Ship']

export function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="hero section section--wide">
      <div className="hero__content">
        <p className="badge">
          {profile.availability}
        </p>
        <p className="hero__intro">Hi, I am {profile.name}.</p>
        <h1 className="hero__title">
          Full-stack developer building reliable, testable web systems.
        </h1>
        <p className="hero__summary">
          I am a UBC Computer Science student and junior full-stack software engineer candidate
          with experience in production web platforms, QA automation, CI/CD workflows, and backend
          systems.
        </p>
        <div className="hero__actions">
          <a
            href="#projects"
            className="button button--primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="button button--secondary"
          >
            Contact Me
          </a>
        </div>
      </div>

      <aside className="snapshot-card" aria-label="Professional snapshot">
        <div className="snapshot-card__header">
          <p className="snapshot-card__eyebrow">System Snapshot</p>
          <span className="snapshot-card__status">Open to opportunities</span>
        </div>
        <dl className="snapshot-card__grid">
          <div className="snapshot-panel snapshot-panel--wide">
            <dt>Role</dt>
            <dd>Junior Full-Stack Software Engineer</dd>
          </div>
          <div className="snapshot-panel">
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className="snapshot-panel">
            <dt>Current focus</dt>
            <dd>Production platforms + automation</dd>
          </div>
          <div className="snapshot-panel snapshot-panel--wide">
            <dt>Focus areas</dt>
            <dd className="snapshot-card__tags">
              {focusAreas.map((focusArea) => (
                <span key={focusArea} className="tag">{focusArea}</span>
              ))}
            </dd>
          </div>
          <div className="snapshot-panel snapshot-panel--wide">
            <dt>Stack</dt>
            <dd className="snapshot-card__tags">
              {stack.map((technology) => (
                <span key={technology} className="tag">{technology}</span>
              ))}
            </dd>
          </div>
        </dl>
        <ol className="snapshot-pipeline" aria-label="Build pipeline">
          {pipelineSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </aside>
    </section>
  )
}
