import type { NavigationLink } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

type NavigationProps = {
  links: NavigationLink[]
  name: string
}

export function Navigation({ links, name }: NavigationProps) {
  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <a href="#home" className="brand" aria-label={`${name} home`}>
          <span className="brand__mark" aria-hidden="true">JL</span>
          <span className="brand__text">{name}</span>
        </a>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <a
            href="#contact"
            className="button button--secondary button--compact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
