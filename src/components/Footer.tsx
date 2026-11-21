import { contactLinks, site } from '../data/portfolio'

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <p className="footer-logo">{site.name}</p>
          <p className="footer-text">Software developer & founder · {site.company}</p>
        </div>
        <div className="footer-links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Built with passion from Rwanda 🇷🇼</span>
      </div>
    </footer>
  )
}
