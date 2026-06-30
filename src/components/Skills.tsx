import type { CSSProperties } from 'react'
import type { SkillCategory } from '../data/profile'
import { Section } from './Section'

type SkillsProps = {
  skillCategories: SkillCategory[]
}

export function Skills({ skillCategories }: SkillsProps) {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical toolkit across frontend, backend, data, testing, and cloud."
      description="A practical toolkit built around shipping reliable web applications, testing user flows, and supporting maintainable systems."
    >
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <article
            key={category.name}
            className="skill-card card"
            data-reveal
            style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
          >
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <div className="skill-card__tags">
              {category.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
