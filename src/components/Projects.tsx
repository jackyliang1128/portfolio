import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import type { Project, ProjectImage } from '../data/profile'
import { Section } from './Section'

type ProjectsProps = {
  projects: Project[]
}

type ProjectMediaProps = {
  image: ProjectImage
  images: ProjectImage[]
  projectName: string
  eager?: boolean
  onOpen: () => void
}

function ProjectMedia({ image, images, projectName, eager = false, onOpen }: ProjectMediaProps) {
  const previewImages = images.slice(0, 5)
  const remainingImages = previewImages.slice(1)
  const primaryInsertIndex = Math.ceil(remainingImages.length / 2)
  const fanImages = [
    ...remainingImages.slice(0, primaryInsertIndex),
    previewImages[0],
    ...remainingImages.slice(primaryInsertIndex),
  ].filter((previewImage): previewImage is ProjectImage => Boolean(previewImage))

  return (
    <figure className="project-media">
      <button
        className="project-media__button"
        type="button"
        aria-label={`Open ${projectName} screenshot gallery with ${images.length} ${images.length === 1 ? 'image' : 'images'}`}
        onClick={onOpen}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
        />
        <span className="project-media__gallery-preview" aria-hidden="true">
          <span className="project-media__fan">
            {fanImages.map((previewImage, previewIndex) => {
              const fanOffset = previewIndex - (fanImages.length - 1) / 2
              const maximumDistance = Math.max((fanImages.length - 1) / 2, 1)
              const distanceFromCenter = Math.abs(fanOffset) / maximumDistance

              return (
                <span
                  className="project-media__fan-card"
                  style={
                    {
                      '--fan-delay': `${Math.abs(fanOffset) * 28}ms`,
                      '--fan-layer': Math.round(100 - Math.abs(fanOffset) * 10),
                      '--fan-rotation': `${fanOffset * 14}deg`,
                      '--fan-rise': `${-14 + distanceFromCenter * 12}px`,
                      '--fan-scale': 1 - distanceFromCenter * 0.07,
                      '--fan-x': `${fanOffset * 42}px`,
                    } as CSSProperties
                  }
                  key={previewImage.src}
                >
                  <img
                    src={previewImage.src}
                    alt=""
                    width={previewImage.width}
                    height={previewImage.height}
                    loading="lazy"
                  />
                </span>
              )
            })}
          </span>
          <span className="project-media__gallery-label">
            See Gallery
            <span>{images.length}</span>
          </span>
        </span>
      </button>
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  )
}

function ProjectMediaPlaceholder({ projectName }: { projectName: string }) {
  return (
    <div
      className="project-media-placeholder"
      role="img"
      aria-label={`${projectName} screenshot coming soon`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15.5z" />
        <path d="m6.5 14 3.2-3.2 2.5 2.5 1.7-1.7 3.6 3.6" />
        <circle cx="15.5" cy="8" r="1.25" />
        <path d="M9 20h6" />
      </svg>
      <span>Screenshot coming soon</span>
    </div>
  )
}

type ProjectCardProps = {
  project: Project
  index: number
  onGalleryOpen: (project: Project) => void
}

function ProjectCard({ project, index, onGalleryOpen }: ProjectCardProps) {
  const projectImages = project.primaryImage
    ? [project.primaryImage, ...(project.gallery ?? [])]
    : []

  return (
    <article
      className="project-card"
      data-reveal
      style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
    >
      <div className="project-card__media">
        {project.primaryImage ? (
          <ProjectMedia
            image={project.primaryImage}
            images={projectImages}
            projectName={project.name}
            eager={index === 0}
            onOpen={() => onGalleryOpen(project)}
          />
        ) : (
          <ProjectMediaPlaceholder projectName={project.name} />
        )}
      </div>

      <div className="project-card__body">
        <header className="project-card__header">
          <h3 title={project.name}>{project.name}</h3>
          <p className="project-card__summary">{project.summary}</p>
        </header>

        <div className="project-card__technologies">
          <p>Technologies</p>
          <div className="project-card__stack" aria-label={`${project.name} technologies`}>
            {project.stack.map((technology) => (
              <span key={technology} className="tag">
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="project-card__actions">
          {project.demoUrl ? (
            <a
              className="button button--primary project-action"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.demoLabel ?? 'View Live App'}: ${project.name}`}
            >
              <svg
                className="project-action__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
              </svg>
              <span className="project-action__tooltip">
                {project.demoLabel ?? 'View Live App'}
              </span>
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a
              className="button button--secondary project-action"
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} on GitHub`}
            >
              <span className="github-mark" aria-hidden="true" />
              <span className="project-action__tooltip">View on GitHub</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

type ProjectLightboxProps = {
  project: Project
  onClose: () => void
}

function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const images = project.primaryImage
    ? [project.primaryImage, ...(project.gallery ?? [])]
    : (project.gallery ?? [])
  const activeImage = images[activeIndex] ?? images[0]
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    const dialog = dialogRef.current
    function handleKeyDown(event: KeyboardEvent) {
      if (images.length < 2) return

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((current) => (current + 1) % images.length)
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((current) => (current - 1 + images.length) % images.length)
      }
    }

    dialog?.addEventListener('keydown', handleKeyDown)
    if (dialog && !dialog.open) dialog.showModal()

    return () => {
      dialog?.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length])

  if (!activeImage) return null

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) event.currentTarget.close()
  }

  return (
    <dialog
      className="project-lightbox"
      ref={dialogRef}
      aria-label={`${project.name} screenshot gallery`}
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <div className="project-lightbox__content">
        <header className="project-lightbox__header">
          <div>
            <h2>{project.name}</h2>
            <p>Project gallery</p>
          </div>
        </header>
        <button
          className="project-lightbox__close"
          type="button"
          aria-label="Close image preview"
          onClick={() => dialogRef.current?.close()}
          autoFocus
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <figure>
          <div className="project-lightbox__stage">
            <img
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
            />
            {hasMultipleImages ? (
              <>
                <button
                  className="project-lightbox__nav project-lightbox__nav--previous"
                  type="button"
                  aria-label={`Previous ${project.name} screenshot`}
                  onClick={() =>
                    setActiveIndex((current) => (current - 1 + images.length) % images.length)
                  }
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="project-lightbox__nav project-lightbox__nav--next"
                  type="button"
                  aria-label={`Next ${project.name} screenshot`}
                  onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </>
            ) : null}
          </div>
          <figcaption>
            <span>{activeImage.caption ?? activeImage.alt}</span>
            {hasMultipleImages ? (
              <span className="project-lightbox__counter" aria-live="polite">
                {activeIndex + 1} / {images.length}
              </span>
            ) : null}
          </figcaption>
        </figure>
      </div>
    </dialog>
  )
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <Section id="projects" title="My Projects">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onGalleryOpen={setSelectedProject}
            />
          ))}
        </div>
      </Section>

      {selectedProject ? (
        <ProjectLightbox
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </>
  )
}
