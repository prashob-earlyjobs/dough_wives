import { useState } from 'react'
import { Link } from 'react-router-dom'
import { bookingSteps, eventTypes, faqs, packages } from '../data/site'
import { CheckIcon, Icon, PlusIcon } from '../components/Icons'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import usePageMeta from '../hooks/usePageMeta'
import './Catering.css'

function Faq({ item, isOpen, onToggle, id }) {
  return (
    <div className={`faq${isOpen ? ' faq--open' : ''}`}>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-button-${id}`}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <PlusIcon width="18" height="18" />
        </button>
      </h3>
      <div
        className="faq__panel"
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-button-${id}`}
        hidden={!isOpen}
      >
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function Catering() {
  usePageMeta(
    'Catering',
    'Woodfired pizza catering for weddings, parties, festivals and corporate events. Packages from £750.',
  )

  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <PageHero
        eyebrow="Making your event extra special"
        title="Pizza"
        accent="Catering"
        intro="Weddings, birthdays, corporate events or just because — we bring the pizza, you bring the guests. Let’s make it unforgettable."
        image="/brand/gazebo.png"
        imageAlt="The Dough Wives pizza stall ready for service"
      />

      <section className="section section--white">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">What we cater</p>
            <h2 className="section-title">
              Every kind of <span className="accent">party</span>
            </h2>
          </div>

          <div className="cater-types">
            {eventTypes.map((type, index) => (
              <Reveal className="cater-type card" key={type.title} delay={index * 90}>
                <span className="icon-badge">
                  <Icon name={type.icon} />
                </span>
                <h3>{type.title}</h3>
                <p>{type.body}</p>
                <ul>
                  {type.points.map((point) => (
                    <li key={point}>
                      <CheckIcon width="15" height="15" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Packages</p>
            <h2 className="section-title">
              Pick your <span className="accent">pizza party</span>
            </h2>
            <p>
              Every package includes the pink gazebo, the woodfired oven, all serveware and two Dough
              Wives running service. Prices are a guide — we’ll always quote for your day.
            </p>
          </div>

          <div className="packages">
            {packages.map((pack, index) => (
              <Reveal
                className={`package${pack.featured ? ' package--featured' : ''}`}
                key={pack.name}
                delay={index * 90}
              >
                {pack.featured ? <span className="package__flag">Most booked</span> : null}
                <h3 className="package__name script">{pack.name}</h3>
                <p className="package__guests">{pack.guests}</p>
                <p className="package__price">{pack.price}</p>
                <ul>
                  {pack.includes.map((line) => (
                    <li key={line}>
                      <CheckIcon width="15" height="15" />
                      {line}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`btn btn--block${pack.featured ? '' : ' btn--outline'}`}
                >
                  Enquire
                  <span className="btn__heart" aria-hidden="true">
                    ♥
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 className="section-title">
              Four steps to <span className="accent">pizza</span>
            </h2>
          </div>

          <ol className="steps">
            {bookingSteps.map((step, index) => (
              <Reveal as="li" className="step" key={step.step} delay={index * 80}>
                <span className="step__num script">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">
              Frequently asked <span className="accent">questions</span>
            </h2>
          </div>

          <div className="faqs">
            {faqs.map((item, index) => (
              <Faq
                key={item.q}
                id={index}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title="Check your date is"
        accent="free."
        body="Send us the details and we’ll come back within 48 hours with availability and a quote."
        primary={{ to: '/book', label: 'Start your booking' }}
        secondary={{ to: '/contact', label: 'Ask a question' }}
      />
    </>
  )
}
