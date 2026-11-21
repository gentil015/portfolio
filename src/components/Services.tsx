import { services } from '../data/portfolio'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="section-label">What I Offer</p>
          <h2 className="section-title" id="services-title">
            Services.
          </h2>
          <p className="section-sub">
            From concept to deployment — I deliver clean, scalable solutions with attention to
            detail.
          </p>
        </div>
        <div className="services-bento">
          {services.map((service, index) => (
            <article
              className={`service-card bento-card reveal${index < 2 ? ' service-featured' : ''}`}
              key={service.title}
            >
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <span className="card-index" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
