import { services } from '../data/portfolio'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <div className="section-inner">
        <p className="section-label reveal">What I Offer</p>
        <h2 className="section-title reveal" id="services-title">
          Services.
        </h2>
        <p className="section-sub reveal">
          From concept to deployment — I deliver clean, scalable solutions with attention to
          detail.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card card-hover reveal" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
