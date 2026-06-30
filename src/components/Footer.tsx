import type { Profile } from '../data/profile'

type FooterProps = {
  profile: Profile
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Vite,
          and custom CSS.
        </p>
        <a href="#home">
          Back to top
        </a>
      </div>
    </footer>
  )
}
