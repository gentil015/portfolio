import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <p className="section-label reveal">Portfolio</p>
        <h2 className="section-title reveal" id="projects-title">
          What I've built.
        </h2>
        <p className="section-sub reveal">Real projects. Real problems solved. Real code shipped.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card card-hover reveal" key={project.title}>
              <div className="project-thumb">
                <div className="project-thumb-glow" aria-hidden="true" />
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                ) : (
                  <span className="project-thumb-icon" aria-hidden="true">
                    {project.icon}
                  </span>
                )}
              </div>
              <div className="project-body">
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
                      Live Demo
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
                      GitHub
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
