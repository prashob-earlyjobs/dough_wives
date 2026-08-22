import { brand, features } from '../data/site'
import { Icon } from '../components/Icons'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Marquee from '../components/Marquee'
import usePageMeta from '../hooks/usePageMeta'
import './Story.css'

const timeline = [
  {
    year: '2023',
    title: 'A garden oven and a big idea',
    body: 'One Gozney oven, two very patient neighbours and a summer of Friday night pizza for anyone who would eat it.',
  },
  {
    year: '2024',
    title: 'The 48-hour dough',
    body: 'After more test batches than we care to admit, we landed on the slow-fermented dough that everyone now asks about.',
  },
  {
    year: '2025',
    title: 'Our first proper booking',
    body: 'A friend’s wedding, ninety guests and one nervous service. They ate every last slice, so we kept going.',
  },
  {
    year: '2026',
    title: 'Dough Wives goes pink',
    body: 'We built the pink gazebo, printed the boxes, ordered far too many aprons and made it official.',
  },
]

const values = [
  {
    title: 'Everything handmade',
    body: 'Dough stretched by hand, sauce made from San Marzano tomatoes, nothing pre-made or frozen.',
  },
  {
    title: 'Local where we can',
    body: 'We buy from independent suppliers and use British flour and cheese wherever possible.',
  },
  {
    title: 'Low waste service',
    body: 'Recyclable boxes, compostable cutlery, and leftover dough goes home with the team.',
  },
]

export default function Story() {
  usePageMeta(
    'Our Story',
    'Two wives, a love for food and a dream to bring people together over incredible woodfired pizza.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We’re the"
        accent="Dough Wives"
        intro="Two wives, a love for food and a dream to bring people together over incredible pizza. From private parties to festivals, we create unforgettable experiences with our woodfired pizzas and feel-good vibes."
        image="/brand/wives-back.png"
        imageAlt="The Dough Wives wearing their branded tees and pink aprons"
      />

      <section className="section section--white story-intro">
        <div className="container story-intro__inner">
          <Reveal className="story-intro__text">
            <p className="eyebrow">How it started</p>
            <h2 className="section-title">
              It began with a <span className="accent">Friday night</span> tradition
            </h2>
            <p>
              We never planned to start a pizza business. It started as something to do on a Friday
              night — fire up the oven, invite whoever was around, and see who could stretch the
              roundest base. Spoiler: neither of us could, at first.
            </p>
            <p>
              Three years and a few thousand pizzas later, we know exactly how our dough behaves on a
              cold morning, how long the oven needs before the first bake, and how good it feels
              handing someone a pizza they will talk about for months.
            </p>
            <p>
              Today the pink gazebo travels to weddings, festivals and back gardens.{' '}
              {brand.serviceArea.toLowerCase()} — and we still argue about who makes the better
              margherita.
            </p>
          </Reveal>

          <Reveal className="story-intro__media" delay={140}>
            <div className="photo-frame">
              <img src="/brand/gazebo.png" alt="The Dough Wives pizza stall set up outdoors" />
            </div>
            <div className="story-intro__quote">
              <p className="script">{brand.motto}</p>
              <span>Est. {brand.established}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="section section--tint timeline-section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">The journey</p>
            <h2 className="section-title">
              From garden to <span className="accent">gazebo</span>
            </h2>
          </div>

          <ol className="timeline">
            {timeline.map((item, index) => (
              <Reveal as="li" className="timeline__item" key={item.year} delay={index * 90}>
                <span className="timeline__year script">{item.year}</span>
                <div className="timeline__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we stand for</p>
            <h2 className="section-title">
              The <span className="accent">non-negotiables</span>
            </h2>
          </div>

          <div className="values">
            {values.map((value, index) => (
              <Reveal className="value card" key={value.title} delay={index * 90}>
                <span className="value__num script">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Why people book us</p>
            <h2 className="section-title">
              Four things we <span className="accent">never</span> cut corners on
            </h2>
          </div>

          <div className="promise-grid">
            {features.map((feature, index) => (
              <Reveal className="promise" key={feature.title} delay={index * 80}>
                <span className="icon-badge">
                  <Icon name={feature.icon} />
                </span>
                <div>
                  <h3>{feature.title.replace('\n', ' ')}</h3>
                  <p>{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come say hi"
        title="Let’s make your event"
        accent="delicious."
        body="Whether it’s a wedding for 120 or a birthday for 30, we’d love to hear about it."
      />
    </>
  )
}
