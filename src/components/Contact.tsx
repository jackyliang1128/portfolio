import type { Profile } from '../data/profile'
type ContactProps = {
  profile: Profile
}

export function Contact({ profile }: ContactProps) {
  const readySocials = profile.socials.filter((social) => social.href && social.status === 'ready')

  return (
    <section id="contact" className="section">
      <div className="contact-card">
        <p className="section__eyebrow">Contact</p>
        <h2>Let&apos;s build reliable software.</h2>
        <p>
          I am open to junior software engineer, full-stack developer, internship, and new grad
          opportunities. If my background fits your team, I would be happy to connect.
        </p>
        <div className="contact-card__actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          {readySocials.map((social) => (
            <a
              key={social.label}
              className="button button--secondary"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
        <a className="contact-card__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </section>
  )
}
