import { useEffect, useId, useState } from 'react'
import type { NavigationLink } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

type NavigationProps = {
  links: NavigationLink[]
  name: string
}

export function Navigation({ links, name }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

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
            className="button button--secondary button--compact nav-actions__contact"
          >
            Contact
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`nav-toggle__bars${isMenuOpen ? ' nav-toggle__bars--open' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        className={`mobile-menu${isMenuOpen ? ' mobile-menu--open' : ''}`}
        hidden={!isMenuOpen}
      >
        <ul className="mobile-menu__list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="mobile-menu__link"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="button button--primary mobile-menu__cta"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
