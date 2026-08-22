import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../data/site'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import './Gallery.css'

export default function Gallery() {
  usePageMeta(
    'Gallery',
    'Pink gazebo, woodfired pizza and happy guests — photos from Dough Wives events.',
  )

  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const step = useCallback(
    (direction) =>
      setActiveIndex((current) =>
        current === null ? current : (current + direction + gallery.length) % gallery.length,
      ),
    [],
  )

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close, step])

  const active = isOpen ? gallery[activeIndex] : null

  return (
    <>
      <PageHero
        eyebrow="The pink stuff"
        title="Our"
        accent="Gallery"
        intro="Pizza, gazebos, aprons and a lot of pink. Here’s what a Dough Wives event actually looks like."
        image="/brand/pizza-boxes.png"
        imageAlt="Stacked pink Dough Wives pizza boxes"
      />

      <section className="section section--white">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <Reveal
                className={`gallery-tile${item.span === 'wide' ? ' gallery-tile--wide' : ''}`}
                key={item.src + index}
                delay={(index % 4) * 70}
              >
                <button type="button" onClick={() => setActiveIndex(index)}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <span className="gallery-tile__zoom" aria-hidden="true">
                    ♥
                  </span>
                  <span className="visually-hidden">View larger: {item.alt}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {isOpen ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt}>
          <button
            type="button"
            className="lightbox__backdrop"
            aria-label="Close gallery"
            onClick={close}
          />
          <div className="lightbox__panel">
            <img src={active.src} alt={active.alt} />
            <p className="lightbox__caption">{active.alt}</p>

            <button type="button" className="lightbox__close" onClick={close} aria-label="Close">
              ×
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      ) : null}

      <CtaBand
        eyebrow="Want in on the fun?"
        title="Your event could be"
        accent="next."
        body="Tell us the date and we’ll bring the gazebo, the oven and the good vibes."
        secondary={{ to: '/events', label: 'Upcoming dates' }}
      />
    </>
  )
}
