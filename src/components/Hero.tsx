import { site, skillGroups } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { Ticker } from './Ticker'

const tickerItems = skillGroups.slice(0, 3).flatMap((group) => group.skills.map((skill) => skill.name))

export function Hero() {
  const typed = useTypewriter(site.typedPhrases)

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {site.eyebrow}
          </p>
          <h1 className="hero-name" id="hero-title">
            <span className="hero-line">{site.firstName}</span>
            <span className="hero-line gradient">
              {site.lastName}
              <span className="hero-period">.</span>
            </span>
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
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="hero-stage">
          <div className="stage-grid" aria-hidden="true" />
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
              <span className="avatar-scan" aria-hidden="true" />
            </div>
          </div>
          <span className="stage-chip chip-1">⚡ Next.js</span>
          <span className="stage-chip chip-2">🛠️ NestJS</span>
          <span className="stage-chip chip-3">🗄️ PostgreSQL</span>
          <span className="stage-badge">Founder · {site.company}</span>
        </div>
      </div>
      <Ticker items={tickerItems} />
    </section>
  )
}
