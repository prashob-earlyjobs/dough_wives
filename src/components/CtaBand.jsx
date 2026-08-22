import { Link } from 'react-router-dom'
import { brand } from '../data/site'
import Reveal from './Reveal'
import './CtaBand.css'

export default function CtaBand({
  eyebrow = 'Hungry yet?',
  title = 'Let’s get the oven',
  accent = 'lit.',
  body = 'Tell us your date and guest numbers and we’ll come back with availability, a quote and a menu built around you.',
  primary = { to: '/book', label: 'Book your event' },
  secondary = { to: '/menu', label: 'See the menu' },
}) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner container">
        <Reveal className="cta-band__text">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">
            {title} <span className="accent">{accent}</span>
          </h2>
          <p>{body}</p>
          <div className="btn-row">
            <Link to={primary.to} className="btn btn--light">
              {primary.label}
              <span className="btn__heart" aria-hidden="true">
                ♥
              </span>
            </Link>
            {secondary ? (
              <Link to={secondary.to} className="btn btn--ghost-light">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Reveal>

        <Reveal className="cta-band__card" delay={120}>
          <img src="/brand/logo-circle.png" alt="" width="150" height="150" />
          <p className="cta-band__motto script">{brand.motto}</p>
          <a href={`mailto:${brand.email}`} className="cta-band__email">
            {brand.email}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
