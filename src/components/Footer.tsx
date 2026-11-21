import { site } from '../data/portfolio'

export function Footer() {
  return (
    <footer>
      <p className="footer-logo">{site.name}</p>
      <p className="footer-text">
        © {new Date().getFullYear()} {site.name} · Founder of {site.company} · Built with passion
        from Rwanda 🇷🇼
      </p>
    </footer>
  )
}
