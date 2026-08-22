import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand, nav } from '../data/site'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header__inner container">
          <Link to="/" className="header__logo" aria-label={`${brand.name} home`}>
            <img src="/brand/logo-circle.png" alt="" width="72" height="72" />
            <span className="header__logo-text">
              <span className="script">Dough Wives</span>
              <span className="header__logo-sub">Woodfired Pizza</span>
            </span>
          </Link>

          <nav className="header__nav" aria-label="Main">
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `header__link${isActive ? ' header__link--active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/book" className="btn btn--sm header__cta">
            Book Us
            <span className="btn__heart" aria-hidden="true">
              ♥
            </span>
          </Link>

          <button
            type="button"
            className={`header__burger${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Kept outside <header> so the fixed drawer isn't trapped by the
          header's backdrop-filter containing block. */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/book" className="btn btn--block">
          Book Us
          <span className="btn__heart" aria-hidden="true">
            ♥
          </span>
        </Link>
        <p className="mobile-menu__motto script">{brand.motto}</p>
      </div>
    </>
  )
}
