import type { Profile } from '../data/profile'

type HeroProps = {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
    >
      <div>
        <p className="inline-flex rounded-full border border-brand/20 bg-white/80 px-4 py-2 text-sm font-semibold text-brand shadow-sm">
          {profile.availability}
        </p>
        <h1 className="mt-8 max-w-4xl text-balance text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-xl font-semibold text-brand-dark">{profile.role}</p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{profile.summary}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-brand px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-brand-dark focus-visible:outline-brand"
          >
            View projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-line bg-white px-6 py-3 text-center text-sm font-bold text-ink transition hover:border-brand hover:text-brand focus-visible:outline-brand"
          >
            Email me
          </a>
        </div>
      </div>
      <aside className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-2xl shadow-slate-300/50">
        <div className="rounded-[1.5rem] bg-ink p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Snapshot</p>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm text-slate-300">Location</dt>
              <dd className="mt-1 text-lg font-semibold">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-300">Focus</dt>
              <dd className="mt-1 text-lg font-semibold">
                Full-stack web, test automation, reliable systems
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-300">Current stack</dt>
              <dd className="mt-1 text-lg font-semibold">
                React, Java, PostgreSQL, PHP, Azure, Playwright
              </dd>
            </div>
          </dl>
        </div>
      </aside>
    </section>
  )
}
