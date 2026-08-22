import { brand, merch } from '../data/site'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import CtaBand from '../components/CtaBand'
import usePageMeta from '../hooks/usePageMeta'
import './Merch.css'

export default function Merch() {
  usePageMeta(
    'Merch',
    'Dough Wives tees, aprons, caps and totes. Wear the pink, spread the good vibes.',
  )

  return (
    <>
      <PageHero
        eyebrow="Wear the pink"
        title="Dough Wives"
        accent="Merch"
        intro="Small batch, printed locally, and worn by everyone who has ever helped us at a service. Drop us a line to order — we’ll sort payment and postage."
        image="/brand/merch-row.png"
        imageAlt="Branded cap, apron and embroidered tee"
      />

      <section className="section section--white">
        <div className="container">
          <div className="merch-grid">
            {merch.map((item, index) => (
              <Reveal className="merch-card" key={item.name} delay={index * 90}>
                <div className="merch-card__media">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="merch-card__body">
                  <div className="merch-card__head">
                    <h2>{item.name}</h2>
                    <span className="merch-card__price">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                  <p className="merch-card__options">{item.options}</p>
                  <a
                    className="btn btn--outline btn--sm"
                    href={`mailto:${brand.email}?subject=${encodeURIComponent(
                      `Merch order — ${item.name}`,
                    )}`}
                  >
                    Order by email
                    <span className="btn__heart" aria-hidden="true">
                      ♥
                    </span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={['Limited Runs', 'Printed Locally', 'Small Batch', 'Made With Love']} />

      <section className="section section--tint">
        <div className="container container--narrow text-center">
          <p className="eyebrow">Coming soon</p>
          <h2 className="section-title">
            A proper <span className="accent">online shop</span>
          </h2>
          <p className="lead">
            We’re building a checkout so you can order merch without emailing us at midnight. Join the
            Wives List and you’ll be first to know when it opens.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Bulk orders"
        title="Kitting out a"
        accent="team?"
        body="We can print aprons and tees with your own branding alongside ours for corporate events and hen parties."
        primary={{ to: '/contact', label: 'Talk to us' }}
        secondary={{ to: '/catering', label: 'Catering packages' }}
      />
    </>
  )
}
