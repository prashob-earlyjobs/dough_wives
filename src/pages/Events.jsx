import { Link } from 'react-router-dom'
import { brand, upcomingEvents } from '../data/site'
import { ClockIcon, PinIcon, InstagramIcon } from '../components/Icons'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import usePageMeta from '../hooks/usePageMeta'
import './Events.css'

export default function Events() {
  usePageMeta(
    'Events',
    'Catch the Dough Wives pink gazebo at markets, festivals and pop-ups near you.',
  )

  return (
    <>
      <PageHero
        eyebrow="Where to find us"
        title="Upcoming"
        accent="Events"
        intro="Markets, festivals and pop-ups. Come and say hello, grab a box and see the oven in action."
        image="/brand/hero-gazebo.png"
        imageAlt="The pizza stall under string lights at an evening event"
      />

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Diary</p>
            <h2 className="section-title">
              The next few <span className="accent">dates</span>
            </h2>
            <p>
              Dates are added throughout the season. Follow {brand.handle} for last-minute pop-ups and
              weather updates.
            </p>
          </div>

          <ul className="event-list">
            {upcomingEvents.map((event, index) => (
              <Reveal as="li" className="event-card" key={event.date} delay={index * 80}>
                <div className="event-card__date">
                  <span className="script">{event.day}</span>
                  <span className="event-card__month">{event.month}</span>
                </div>

                <div className="event-card__body">
                  <h3>{event.name}</h3>
                  <ul className="event-card__meta">
                    <li>
                      <PinIcon width="16" height="16" />
                      {event.location}
                    </li>
                    <li>
                      <ClockIcon width="16" height="16" />
                      {event.time}
                    </li>
                  </ul>
                </div>

                <div className="event-card__side">
                  <span
                    className={`event-card__status${
                      event.status === 'Ticketed' ? ' event-card__status--ticketed' : ''
                    }`}
                  >
                    {event.status}
                  </span>
                  <Link to="/contact" className="btn btn--sm btn--outline">
                    Details
                  </Link>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container events-split">
          <Reveal>
            <p className="eyebrow">Organisers & venues</p>
            <h2 className="section-title">
              Want us at <span className="accent">your</span> event?
            </h2>
            <p>
              We’re a fully insured, self-sufficient street food trader with a 5-star hygiene rating.
              We bring our own gazebo, oven, water, waste and hand-wash station — all we need is
              4m x 4m of level ground.
            </p>
            <p>
              Send us your event details and we’ll reply with pitch requirements, insurance documents
              and everything your risk assessment needs.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn">
                Get our trader pack
                <span className="btn__heart" aria-hidden="true">
                  ♥
                </span>
              </Link>
              <a className="link-underline" href={brand.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon width="16" height="16" />
                See us in action
              </a>
            </div>
          </Reveal>

          <Reveal className="events-facts" delay={140}>
            {[
              ['4m x 4m', 'Pitch space needed'],
              ['60 / hr', 'Pizzas out of the oven'],
              ['No power', 'Fully self-sufficient'],
              ['5 star', 'Food hygiene rating'],
            ].map(([value, label]) => (
              <div className="events-fact" key={label}>
                <strong className="script">{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Private bookings"
        title="Or have us all to"
        accent="yourself."
        body="Prefer the gazebo in your own back garden? That’s our favourite kind of booking."
        secondary={{ to: '/catering', label: 'Catering packages' }}
      />
    </>
  )
}
