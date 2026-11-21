import { site } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'

export function Hero() {
  const typed = useTypewriter(site.typedPhrases)

  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">{site.eyebrow}</p>
          <h1 className="hero-name" id="hero-title">
            {site.firstName}
            <br />
            <span>{site.lastName}</span>
          </h1>
          <p className="hero-role">{site.role}</p>
          <p className="hero-founder">
            <span className="dot" aria-hidden="true" />
            Founder, {site.company}
          </p>
          <p className="hero-headline">
            <span className="hero-typed">{typed}</span>
            <span className="cursor-blink" aria-hidden="true">
              |
            </span>
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit-container">
            <div className="orbit-ring orbit-ring-1">
              <span className="orbit-dot orbit-dot-1" />
            </div>
            <div className="orbit-ring orbit-ring-2">
              <span className="orbit-dot orbit-dot-2" />
            </div>
            <div className="orbit-ring orbit-ring-3">
              <span className="orbit-dot orbit-dot-3" />
            </div>
            <div className="avatar-area">
              <img src={site.portrait} alt={`Portrait of ${site.name}`} className="avatar-photo" />
            </div>
            <span className="orbit-label label-ai">⚡ AI / ML</span>
            <span className="orbit-label label-bot">🤖 Robotics</span>
            <span className="orbit-label label-auto">⚙️ Automation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
