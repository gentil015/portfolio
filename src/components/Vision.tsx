import { timeline } from '../data/portfolio'

export function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-title">
      <div className="section-inner">
        <div className="section-heading centered reveal">
          <p className="section-label">Long-Term Goals</p>
          <h2 className="section-title" id="vision-title">
            The Future I'm Building
          </h2>
          <p className="section-sub">
            From a curious developer in Rwanda to a global technology leader — this is the
            roadmap I'm committed to.
          </p>
        </div>
        <div className="vision-board">
          {timeline.map((item, index) => (
            <article className={`vision-card bento-card reveal ${item.side}`} key={item.period}>
              <div className="vision-card-top">
                <span className="vision-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="timeline-icon" aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <p className="timeline-year">{item.period}</p>
              <h3 className="timeline-t">{item.title}</h3>
              <p className="timeline-d">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
