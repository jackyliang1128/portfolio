import type { Profile } from '../data/profile'

type FooterProps = {
  profile: Profile
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-line bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Vite,
          and Tailwind CSS.
        </p>
        <a className="font-semibold text-brand hover:text-brand-dark" href="#home">
          Back to top
        </a>
      </div>
    </footer>
  )
}
