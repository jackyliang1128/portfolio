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
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => (
          <section key={category.name} className="rounded-3xl border border-line bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-ink">{category.name}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-surface px-3 py-2 text-sm font-semibold text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  )
}
