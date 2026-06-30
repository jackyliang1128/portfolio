import type { CSSProperties } from 'react'
import type { Project } from '../data/profile'
import { Section } from './Section'

type ProjectsProps = {
  projects: Project[]
}

type ProjectVisualProps = {
  project: Project
}

function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div
      className={`project-visual project-visual--${project.visualKind}`}
      role="img"
      aria-label={`${project.name} visual mockup`}
    >
      {project.visualKind === 'database' ? (
        <div className="mock-database">
          <div className="mock-toolbar">
            <span>OutdoorDB</span>
            <span>16 schemas</span>
          </div>
          <div className="schema-map">
            <span className="schema-node schema-node--primary">Activities</span>
            <span className="schema-node">Users</span>
            <span className="schema-node">Bookings</span>
            <span className="schema-node">Reviews</span>
            <span className="schema-node">Weather</span>
          </div>
        </div>
      ) : null}

      {project.visualKind === 'fitness' ? (
        <div className="mock-app-window">
          <div className="mock-toolbar">
            <span>FitTrack</span>
            <span>Weekly Activity</span>
          </div>
          <div className="fitness-dashboard">
            <div className="progress-ring">78%</div>
            <div className="fitness-stats">
              <span>Workouts</span>
              <strong>5 / week</strong>
              <span>Streak</span>
              <strong>12 days</strong>
            </div>
          </div>
        </div>
      ) : null}

      {project.visualKind === 'accessibility' ? (
        <div className="mock-audit">
          <div className="mock-toolbar">
            <span>WCAG Scan Report</span>
            <span>Score 92</span>
          </div>
          <div className="audit-list">
            {['Contrast', 'Alt Text', 'ARIA Labels', 'Keyboard Nav'].map((item, index) => (
              <div key={item} className="audit-row">
                <span>{item}</span>
                <strong>{index === 1 ? 'Warning' : index === 3 ? 'Review' : 'Pass'}</strong>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {project.visualKind === 'pipeline' ? (
        <div className="mock-pipeline">
          {['Flex Sensors', 'Microcontroller', 'Processing', 'Gesture Output'].map((step) => (
            <span key={step} className="pipeline-node">
              {step}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected projects with product context and technical depth."
      description="Selected projects that demonstrate full-stack development, accessibility, data modeling, product thinking, and engineering systems work."
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="project-card"
            data-reveal
            style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
          >
            <ProjectVisual project={project} />

            <div className="project-card__body">
              <div className="project-card__stack">
                {project.stack.map((technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ))}
              </div>

              <h3>{project.name}</h3>
              <p className="project-card__summary">{project.summary}</p>
              <p className="project-card__impact">{project.impact}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="project-card__footer">
                <div className="project-card__proof">
                  <span>Showcase plan</span>
                  <p>{project.showcasePlan}</p>
                </div>

                {project.sourceUrl || project.demoUrl ? (
                  <div className="project-card__actions">
                    {project.sourceUrl ? (
                      <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                        Source Code
                      </a>
                    ) : null}
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
