import './Marquee.css'

const DEFAULT_ITEMS = [
  'Good Pizza',
  'Good Vibes',
  'Happy Wives',
  'Woodfired Since 2026',
  'Made With Love',
]

export default function Marquee({ items = DEFAULT_ITEMS }) {
  const track = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
            <span className="marquee__heart">♥</span>
          </span>
        ))}
      </div>
    </div>
  )
}
