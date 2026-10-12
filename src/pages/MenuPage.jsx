import { Link } from 'react-router-dom'
import { menu, menuLegend } from '../data/site'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import usePageMeta from '../hooks/usePageMeta'
import './MenuPage.css'

const tagLabels = menuLegend.reduce((acc, item) => ({ ...acc, [item.key]: item.label }), {})

function MenuList({ title, subtitle, items }) {
  return (
    <div className="menu-card">
      <div className="menu-card__head">
        <h2 className="script">{title}</h2>
        <p>{subtitle}</p>
      </div>

      <ul className="menu-list">
        {items.map((item, index) => (
          <Reveal as="li" className="menu-item" key={item.name} delay={index * 60}>
            <div className="menu-item__top">
              <h3>{item.name}</h3>
              <span className="menu-item__dots" aria-hidden="true" />
              <span className="menu-item__price">{item.price}</span>
            </div>
            <p className="menu-item__desc">{item.description}</p>
            {item.tags.length ? (
              <ul className="menu-item__tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tagLabels[tag] ?? tag}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}
      </ul>
    </div>
  )
}

export default function MenuPage() {
  usePageMeta(
    'Menu',
    'Woodfired pizza, garlic bread, dough balls and dessert pizza — the full Dough Wives menu.',
  )

  return (
    <>
      <PageHero
        eyebrow="Good pizza, good vibes"
        title="The"
        accent="Menu"
        intro="Slow-fermented 48-hour dough, San Marzano tomatoes and fior di latte, blistered in 90 seconds at 450°C. Simple done properly."
        image="/brand/book-pizza.jpg"
        imageAlt="A freshly baked woodfired margherita pizza"
      />

      <section className="section section--white menu-section">
        <div className="container menu-grid">
          <MenuList
            title="Woodfired Pizza"
            subtitle="12 inch, hand-stretched, cooked in front of you."
            items={menu.pizza}
          />
          <MenuList
            title="Extras & Sweets"
            subtitle="Because one pizza is never quite enough."
            items={menu.extras}
          />
        </div>

        <div className="container">
          <div className="divider-hearts">♥</div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container menu-info">
          <Reveal className="menu-info__card card">
            <h3>Dietary requirements</h3>
            <p>
              Vegetarian options are marked on the menu, and we can swap in vegan mozzarella at no
              extra cost. Gluten-free bases are available with 10 days notice and prepped on a
              separate board.
            </p>
            <p>
              Let us know about allergies when you book and we’ll walk you through exactly how each
              pizza is made.
            </p>
          </Reveal>

          <Reveal className="menu-info__card card" delay={110}>
            <h3>How service works</h3>
            <p>
              Pizzas come out of the oven continuously and are served by the slice or whole box,
              whichever suits your event. We usually plate around 60 pizzas an hour.
            </p>
            <p>
              For weddings and private parties we agree your menu in advance so there’s nothing to
              decide on the day.
            </p>
          </Reveal>

          <Reveal className="menu-info__legend" delay={220}>
            <h3>Menu key</h3>
            <ul>
              {menuLegend.map((item) => (
                <li key={item.key}>
                  <span className="menu-info__tag">{item.label}</span>
                </li>
              ))}
            </ul>
            <p className="menu-info__note">
              Prices shown are per pizza for market service. Event packages are priced per head —
              see <Link to="/catering">catering</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to eat"
        title="Bring this menu to"
        accent="your event."
        body="Pick your favourites and we’ll build a package around them, whether that’s three pizzas or the whole list."
        secondary={{ to: '/catering', label: 'View packages' }}
      />
    </>
  )
}
