import type { NavigationLink } from '../data/profile'

type NavigationProps = {
  links: NavigationLink[]
}

export function Navigation({ links }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-surface/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <a href="#home" className="text-sm font-bold uppercase tracking-[0.3em] text-ink">
          JL
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-brand focus-visible:outline-brand" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand focus-visible:outline-brand"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
