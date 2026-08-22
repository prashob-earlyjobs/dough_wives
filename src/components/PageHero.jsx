import './PageHero.css'

export default function PageHero({ eyebrow, title, accent, intro, image, imageAlt = '' }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner container">
        <div className="page-hero__text">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero__title script">
            {title}
            {accent ? <span className="accent"> {accent}</span> : null}
            <span className="page-hero__heart" aria-hidden="true">
              ♥
            </span>
          </h1>
          {intro ? <p className="page-hero__intro">{intro}</p> : null}
        </div>

        {image ? (
          <div className="page-hero__media">
            <img src={image} alt={imageAlt} loading="eager" />
          </div>
        ) : null}
      </div>
    </section>
  )
}
