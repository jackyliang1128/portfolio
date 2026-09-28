import type { Profile } from '../data/profile'
type ContactProps = {
  profile: Profile
}

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="section">
      <div className="contact-card" data-reveal>
        <p className="section__eyebrow">Contact</p>
        <h2>Let&apos;s build reliable software.</h2>
        <p>
          I&apos;m open to software engineering opportunities. If my work fits what your team is
          building, I&apos;d be happy to connect.
        </p>
        <div className="contact-card__actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          {profile.socials.map((social) => (
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
