import type { CSSProperties } from 'react'

const credibilityItems = [
  'UBC Computer Science',
  'Production Web Platforms',
  'React + TypeScript',
  'Java + SQL',
  'CI/CD + Playwright',
  'Full-Stack Development',
]

export function CredibilityStrip() {
  return (
    <section className="credibility-section" aria-label="Professional credibility highlights">
      <div className="credibility-strip">
        {credibilityItems.map((item, index) => (
          <span
            key={item}
            className="credibility-item"
            data-reveal
            style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
