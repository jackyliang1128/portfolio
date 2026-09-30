import type { Profile } from '../data/profile'

type FooterProps = {
  profile: Profile
}

type FooterIconProps = {
  label: string
}

function FooterIcon({ label }: FooterIconProps) {
  if (label === 'GitHub') {
    return <span className="footer-link__github" aria-hidden="true" />
  }

  if (label === 'LinkedIn') {
    return (
      <svg className="footer-link__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.34 3.5a2.34 2.34 0 1 1 0 4.68 2.34 2.34 0 0 1 0-4.68ZM3.32 9.72h4.04V21H3.32V9.72Zm6.59 0h3.87v1.54h.05c.54-1.02 1.85-2.09 3.82-2.09 4.09 0 4.85 2.69 4.85 6.19V21h-4.04v-5c0-1.19-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.65V21h-4.04V9.72Z"
        />
      </svg>
    )
  }

  if (label === 'Resume') {
    return (
      <svg
        className="footer-link__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 2h9l4 4v16H6z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </svg>
    )
  }

  return (
    <svg
      className="footer-link__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function Footer({ profile }: FooterProps) {
  const links = [{ label: 'Email', href: `mailto:${profile.email}` }, ...profile.socials]

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

        <nav className="footer-links" aria-label="Contact links">
          {links.map((link) => {
            const opensNewTab = link.label !== 'Email'

            return (
              <a
                key={link.label}
                className="footer-link"
                href={link.href}
                target={opensNewTab ? '_blank' : undefined}
                rel={opensNewTab ? 'noreferrer' : undefined}
                aria-label={link.label}
              >
                <FooterIcon label={link.label} />
                <span className="footer-link__tooltip">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <a className="site-footer__back-to-top" href="#home">
          Back to top
        </a>
      </div>
    </footer>
  )
}
