import type { CSSProperties } from 'react'
import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="section-inner">
        <p className="section-label reveal">Technical Skills</p>
        <h2 className="section-title reveal" id="skills-title">
          My toolkit.
        </h2>
        <p className="section-sub reveal">
          A curated set of technologies I use to bring ideas to life — with more being added
          every day.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-category card-hover reveal" key={group.title}>
              <h3 className="skill-cat-title">
                <span className="skill-cat-icon" aria-hidden="true">
                  {group.icon}
                </span>
                {group.title}
              </h3>
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}</span>
                  </div>
                  <div
                    className="skill-bar"
                    role="meter"
                    aria-label={skill.name}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="skill-fill"
                      style={{ '--pct': `${skill.percent}%` } as CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
