import { Link } from 'react-router-dom'
import {
  about,
  brand,
  features,
  eventTypes,
  menu,
  testimonials,
} from '../data/site'
import { Icon, ArrowIcon, InstagramIcon } from '../components/Icons'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import Newsletter from '../components/Newsletter'
import usePageMeta from '../hooks/usePageMeta'
import './Home.css'

const socialTiles = [
  { src: '/brand/book-pizza.jpg', alt: 'Margherita pizza fresh from the oven' },
  { src: '/brand/neon-sign.jpg', alt: 'Neon sign reading good pizza, good vibes, happy wives' },
  { src: '/brand/gazebo.png', alt: 'The pink gazebo and woodfired oven at an event' },
  { src: '/brand/wives-back.jpg', alt: 'The Dough Wives in branded tees and aprons' },
]

export default function Home() {
  usePageMeta(
    null,
    'Dough Wives serve authentic woodfired pizza at weddings, parties, celebrations and corporate events across London, Surrey, Sussex and Hampshire.',
  )

  const highlights = menu.pizza.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__inner container">
          <div className="hero__text">
            <p className="eyebrow eyebrow--gold">Est. {brand.established} · {brand.strapline}</p>
            <h1 className="hero__title script">
              Woodfired Pizza.
              <br />
              <span className="accent">Made with Love.</span>
              <span className="hero__heart" aria-hidden="true">
                ♥
              </span>
            </h1>
            <p className="hero__lead">
              Authentic woodfired pizza, made with quality ingredients and a whole lot of passion.
              Perfect for any occasion.
            </p>
            <div className="btn-row">
              <Link to="/book" className="btn">
                Book us for your event
                <span className="btn__heart" aria-hidden="true">
                  ♥
                </span>
              </Link>
              <Link to="/menu" className="link-underline">
                View our menu
                <ArrowIcon width="16" height="16" />
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__photo">
              <img
                src="/brand/gazebo.png"
                alt="The pink Dough Wives gazebo with the woodfired oven ready to serve"
                width="555"
                height="419"
              />
            </div>
            <div className="hero__badge">
              <span className="script">Good pizza</span>
              <span className="script">Good vibes</span>
              <span className="script">Happy wives ♥</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Features */}
      <section className="section section--tint features">
        <div className="container">
          <div className="features__grid">
            {features.map((feature, index) => (
              <Reveal className="feature" key={feature.title} delay={index * 90}>
                <span className="icon-badge">
                  <Icon name={feature.icon} />
                </span>
                <h3 className="feature__title">
                  {feature.title.split('\n').map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p>{feature.body}</p>
                <span className="feature__heart" aria-hidden="true">
                  ♥
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section section--white story">
        <div className="container story__inner">
          <Reveal className="story__text">
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">
              We’re the <span className="accent">Dough Wives</span> ♥
            </h2>
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <Link to="/our-story" className="btn btn--outline">
              Read our story
              <span className="btn__heart" aria-hidden="true">
                ♥
              </span>
            </Link>
          </Reveal>

          <Reveal className="story__collage" delay={140}>
            <div className="photo-frame story__tile story__tile--main">
              <img src="/brand/wives-portrait.jpg" alt="Illustrated portrait of the Dough Wives" />
            </div>
            <div className="photo-frame story__tile story__tile--box">
              <img src="/brand/book-pizza.jpg" alt="An open Dough Wives pizza box" />
            </div>
            <div className="photo-frame story__tile story__tile--cups">
              <img src="/brand/pink-cups.jpg" alt="Branded pink drinks cups" />
            </div>
            <div className="photo-frame story__tile story__tile--neon">
              <img
                src="/brand/neon-sign.jpg"
                alt="Neon sign reading good pizza, good vibes, happy wives"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="section section--cream highlights">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Straight from the oven</p>
            <h2 className="section-title">
              Crowd <span className="accent">favourites</span>
            </h2>
            <p>
              Slow-fermented 48-hour dough, blistered in 90 seconds at 450°C. Here’s what disappears
              fastest.
            </p>
          </div>

          <div className="highlights__grid">
            {highlights.map((item, index) => (
              <Reveal className="highlight card" key={item.name} delay={index * 90}>
                <div className="highlight__head">
                  <h3>{item.name}</h3>
                  <span className="highlight__price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>

          <div className="highlights__foot">
            <Link to="/menu" className="btn btn--outline">
              See the full menu
              <ArrowIcon width="16" height="16" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pizza party */}
      <section className="section section--pink party">
        <div className="container party__inner">
          <Reveal className="party__intro">
            <p className="eyebrow">Making your event extra special</p>
            <h2 className="section-title">
              Let’s Pizza Party! <span aria-hidden="true">♥</span>
            </h2>
            <p>
              Weddings, birthdays, corporate events or just because — we bring the pizza, you bring
              the guests. Let’s make it unforgettable.
            </p>
            <Link to="/catering" className="btn btn--light">
              Enquire now
              <span className="btn__heart" aria-hidden="true">
                ♥
              </span>
            </Link>
          </Reveal>

          <div className="party__grid">
            {eventTypes.map((type, index) => (
              <Reveal className="party__card" key={type.title} delay={index * 90}>
                <span className="icon-badge icon-badge--light">
                  <Icon name={type.icon} />
                </span>
                <h3>{type.title}</h3>
                <p>{type.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--white quotes">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Kind words</p>
            <h2 className="section-title">
              Happy <span className="accent">guests</span>
            </h2>
          </div>

          <div className="quotes__grid">
            {testimonials.map((item, index) => (
              <Reveal className="quote" key={item.author} delay={index * 90}>
                <p className="quote__mark script" aria-hidden="true">
                  ”
                </p>
                <blockquote>{item.quote}</blockquote>
                <p className="quote__author">
                  {item.author}
                  <span>{item.detail}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social + newsletter */}
      <section className="section section--white social">
        <div className="container social__inner">
          <div className="social__feed">
            <p className="eyebrow">Follow our journey</p>
            <h2 className="section-title">
              <span className="accent">{brand.handle}</span> ♥
            </h2>
            <div className="social__tiles">
              {socialTiles.map((tile) => (
                <div className="photo-frame" key={tile.src}>
                  <img src={tile.src} alt={tile.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <a
              className="btn btn--outline"
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon width="16" height="16" />
              Follow us on Instagram
            </a>
          </div>

          <div className="social__newsletter">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  )
}
