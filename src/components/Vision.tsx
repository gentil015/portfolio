import { timeline } from '../data/portfolio'

export function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-title">
      <div className="section-inner">
        <div className="vision-header reveal">
          <p className="section-label">Long-Term Goals</p>
          <h2 className="section-title" id="vision-title">
            The Future I'm Building
          </h2>
          <p className="section-sub">
            From a curious developer in Rwanda to a global technology leader — this is the
            roadmap I'm committed to.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className={`timeline-item ${item.side} reveal`} key={item.period}>
              <div className="timeline-node">
                <span className="timeline-dot" aria-hidden="true" />
              </div>
              <div className="timeline-content card-hover">
                <span className="timeline-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="timeline-year">{item.period}</p>
                <h3 className="timeline-t">{item.title}</h3>
                <p className="timeline-d">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
