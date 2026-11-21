import { aboutParagraphs, interests, stats } from '../data/portfolio'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-left reveal">
            <p className="section-label">About Me</p>
            <h2 className="section-title" id="about-title">
              Building with
              <br />
              purpose.
            </h2>
            <div className="about-stat-row">
              {stats.map((stat) => (
                <div className="stat-card card-hover" key={stat.label}>
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-right reveal">
            {aboutParagraphs.map((paragraph) => (
              <p className="about-text" key={paragraph.emphasis}>
                {paragraph.before}
                <strong>{paragraph.emphasis}</strong>
                {paragraph.after}
              </p>
            ))}
            <div className="about-pills">
              {interests.map((interest) => (
                <span className="pill" key={interest}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
