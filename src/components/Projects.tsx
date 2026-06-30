import type { Project } from '../data/profile'
import { Section } from './Section'

type ProjectsProps = {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Project case studies built around engineering decisions, not just demos."
      description="Not every strong software project needs a hosted demo. These cards focus on problem, implementation, technical depth, and the best proof to add next."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/60"
          >
            <div className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-brand"
                >
                  {technology}
                </span>
              ))}
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink">{project.name}</h3>
            <p className="mt-3 leading-7 text-muted">{project.summary}</p>
            <p className="mt-4 rounded-2xl bg-surface p-4 text-sm font-medium leading-6 text-ink">
              {project.impact}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-1 items-end">
              <div className="w-full rounded-2xl border border-dashed border-line bg-white/70 p-4">
                <p className="text-sm font-semibold text-ink">Showcase plan</p>
                <p className="mt-1 text-sm leading-6 text-muted">{project.showcasePlan}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.sourceUrl ? (
                    <a className="text-sm font-bold text-brand hover:text-brand-dark" href={project.sourceUrl}>
                      Source code
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-muted">GitHub link pending</span>
                  )}
                  {project.demoUrl ? (
                    <a className="text-sm font-bold text-brand hover:text-brand-dark" href={project.demoUrl}>
                      Live demo
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-muted">Demo optional</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
