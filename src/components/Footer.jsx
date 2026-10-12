import { Link } from 'react-router-dom'
import { brand, nav } from '../data/site'
import { FacebookIcon, InstagramIcon, MailIcon, TikTokIcon } from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <img src="/brand/logo-circle.png" alt="" width="96" height="96" />
          <p className="footer__motto script">{brand.motto}</p>
          <p className="footer__area">{brand.serviceArea}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <div>
            <h3>Explore</h3>
            <ul>
              {nav.slice(0, 3).map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>More</h3>
            <ul>
              {nav.slice(3).map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/book">Book Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get in touch</h3>
            <ul>
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              </li>
              <li>{brand.handle}</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__bar">
        <div className="footer__bar-inner container">
          <span className="footer__wordmark script">Dough Wives ♥</span>

          <ul className="footer__social">
            <li>
              <a href={brand.instagram} aria-label="Dough Wives on Instagram" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={brand.facebook} aria-label="Dough Wives on Facebook" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href={brand.tiktok} aria-label="Dough Wives on TikTok" target="_blank" rel="noreferrer">
                <TikTokIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} aria-label={`Email ${brand.name}`}>
                <MailIcon />
              </a>
            </li>
          </ul>

          <p className="footer__legal">
            © {brand.established} {brand.name} · Made with love ♥
          </p>
        </div>
      </div>
    </footer>
  )
}
