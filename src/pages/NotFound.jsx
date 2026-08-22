import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import './NotFound.css'

export default function NotFound() {
  usePageMeta('Page not found', 'That page has gone the way of the last slice.')

  return (
    <section className="section notfound">
      <div className="container container--narrow text-center">
        <img src="/brand/logo-circle.png" alt="" width="150" height="150" />
        <p className="eyebrow">Error 404</p>
        <h1 className="section-title">
          This slice has <span className="accent">gone</span>
        </h1>
        <p className="lead">
          Someone got here before you. Let’s get you back to the good stuff.
        </p>
        <div className="btn-row notfound__actions">
          <Link to="/" className="btn">
            Back home
            <span className="btn__heart" aria-hidden="true">
              ♥
            </span>
          </Link>
          <Link to="/menu" className="btn btn--outline">
            See the menu
          </Link>
        </div>
      </div>
    </section>
  )
}
