import { aboutParagraphs, interests, stats } from '../data/portfolio'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="section-inner">
        <div className="about-bento">
          <div className="about-title-card bento-card reveal">
            <p className="section-label">About Me</p>
            <h2 className="section-title" id="about-title">
              Building with
              <br />
              purpose.
            </h2>
            <span className="card-index" aria-hidden="true">
              01
            </span>
          </div>
          {stats.map((stat, index) => (
            <div className="stat-card bento-card reveal" key={stat.label}>
              <span className="stat-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="about-story">
          {aboutParagraphs.map((paragraph, index) => (
            <div className="story-card bento-card reveal" key={paragraph.emphasis}>
              <span className="story-index" aria-hidden="true">
                0{index + 1}
              </span>
              <p className="about-text">
                {paragraph.before}
                <strong>{paragraph.emphasis}</strong>
                {paragraph.after}
              </p>
            </div>
          ))}
        </div>
        <div className="about-pills reveal">
          {interests.map((interest) => (
            <span className="pill" key={interest}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
