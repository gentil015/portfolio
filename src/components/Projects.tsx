import { projects } from '../data/portfolio'

const hostname = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, '') : '')

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title" id="projects-title">
            What I've built.
          </h2>
          <p className="section-sub">Real projects. Real problems solved. Real code shipped.</p>
        </div>
        <div className="projects-showcase">
          {projects.map((project, index) => (
            <article className="project-feature bento-card reveal" key={project.title}>
              <div className="project-visual">
                <div className="visual-grid" aria-hidden="true" />
                <div className="visual-orbit" aria-hidden="true" />
                <div className="visual-content">
                  <span className="visual-index" aria-hidden="true">
                    0{index + 1} / 0{projects.length}
                  </span>
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  ) : (
                    <span className="project-thumb-icon" aria-hidden="true">
                      {project.icon}
                    </span>
                  )}
                  {hostname(project.liveUrl) && (
                    <span className="visual-domain">{hostname(project.liveUrl)}</span>
                  )}
                </div>
              </div>
              <div className="project-content">
                <span className="card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="featured-label">Featured Project</span>
                <p className="project-tag">{project.tag}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span className="stack-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="btn-sm btn-sm-p"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="btn-sm btn-sm-muted">Demo soon</span>
                  )}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="btn-sm btn-sm-g"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="btn-sm btn-sm-muted">Code soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
