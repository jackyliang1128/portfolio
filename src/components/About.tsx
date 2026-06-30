import type { Profile } from '../data/profile'

type AboutProps = {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="section about-section">
      <div className="about-section__content">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title">A developer with full-stack, QA, and systems thinking.</h2>
        <div className="about-section__copy">
          <p>
            I enjoy building software that is practical, maintainable, and easy to use. My
            background combines full-stack development, software testing, and engineering systems,
            which helps me think about both product experience and technical reliability.
          </p>
          <p>
            I have worked on production web platforms, automated testing workflows, deployment
            improvements, and data-backed applications. I am especially interested in full-stack
            roles where I can contribute across frontend, backend, testing, and delivery.
          </p>
        </div>
      </div>

      <div className="about-card-grid">
        {profile.highlights.map((highlight) => (
          <article key={highlight.title} className="about-card card">
            <div className="about-card__metric">{highlight.metric}</div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
