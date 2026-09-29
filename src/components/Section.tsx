import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section__header" data-reveal>
        {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
        <h2 className="section__title">{title}</h2>
        {description ? <p className="section__description">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
