import type { CSSProperties } from 'react'
import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title" id="skills-title">
            My toolkit.
          </h2>
          <p className="section-sub">
            A curated set of technologies I use to bring ideas to life — with more being added
            every day.
          </p>
        </div>
        <div className="skills-bento">
          {skillGroups.map((group, index) => (
            <div className="skill-category bento-card reveal" key={group.title}>
              <div className="skill-cat-header">
                <div className="skill-cat-title">
                  <span className="skill-cat-icon" aria-hidden="true">
                    {group.icon}
                  </span>
                  {group.title}
                </div>
                <span className="card-index" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <div className="skill-list">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
