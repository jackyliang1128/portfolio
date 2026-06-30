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
        {credibilityItems.map((item) => (
          <span key={item} className="credibility-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
