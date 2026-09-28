import type { CSSProperties } from 'react'
import type { Project, ProjectImage } from '../data/profile'
import { Section } from './Section'

type ProjectsProps = {
  projects: Project[]
}

type ProjectMediaProps = {
  image: ProjectImage
  eager?: boolean
}

function ProjectMedia({ image, eager = false }: ProjectMediaProps) {
  return (
    <figure className="project-media">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
      />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  )
}

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.tier === 'featured'

  return (
    <article
      className={`project-card project-card--${project.tier}`}
      data-reveal
      style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
    >
      {project.primaryImage ? (
        <div className="project-card__media">
          <ProjectMedia image={project.primaryImage} eager={index === 0} />
        </div>
      ) : null}

      <div className="project-card__body">
        <div className="project-card__stack" aria-label={`${project.name} technologies`}>
          {project.stack.map((technology) => (
            <span key={technology} className="tag">
              {technology}
            </span>
          ))}
        </div>

        {isFeatured ? <h3>{project.name}</h3> : <h4>{project.name}</h4>}
        <p className="project-card__summary">{project.summary}</p>

        <div className="project-card__actions">
          {project.demoUrl ? (
            <a className="button button--primary" href={project.demoUrl} target="_blank" rel="noreferrer">
              {project.demoLabel ?? 'Live Demo'}
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a className="button button--secondary" href={project.sourceUrl} target="_blank" rel="noreferrer">
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>

        <details className="project-details">
          <summary>Engineering details</summary>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          {project.gallery?.length ? (
            <div className="project-gallery">
              {project.gallery.map((image) => (
                <ProjectMedia key={image.src} image={image} />
              ))}
            </div>
          ) : null}
        </details>
      </div>
    </article>
  )
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((project) => project.tier === 'featured')
  const supportingProjects = projects.filter((project) => project.tier === 'supporting')

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Real products, open and ready to explore."
      description="Two deployed projects lead the way, with supporting work that shows my range across web, games, and data-backed applications."
    >
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="supporting-projects">
        <h3 className="supporting-projects__title">More projects</h3>
        <div className="supporting-projects__grid">
          {supportingProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
          ))}
        </div>
      </div>
    </Section>
  )
}
