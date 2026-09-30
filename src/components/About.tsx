import type { Profile } from '../data/profile'
import { Section } from './Section'

type AboutProps = {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="about" title="About Me">
      <div className="about-card card" data-reveal>
        <div className="about-section__copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-section__portrait">
          <img
            src="/about/me.PNG"
            alt="me"
            width="864"
            height="1184"
            loading="eager"
          />
        </div>
      </div>

      <div className="technical-skills" role="region" aria-label="Technical skills" data-reveal>
        <div className="technical-skills__groups">
          {profile.skillGroups.map((group) => (
            <article className="skill-group" key={group.label}>
              <h4>{group.label}</h4>
              <p className="skill-group__description">{group.description}</p>
              <ul className="skill-group__list">
                {group.skills.map((skill) => (
                  <li className="skill-item" key={skill.name} tabIndex={0}>
                    <span className="skill-item__logos" aria-hidden="true">
                      {skill.icons.map((icon) => (
                        <img
                          src={icon}
                          alt=""
                          width="40"
                          height="40"
                          loading="lazy"
                          key={icon}
                        />
                      ))}
                    </span>
                    <span className="skill-item__name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
