import { Link } from 'react-router-dom'
import { brand, bookingSteps, menu } from '../data/site'
import Field from '../components/Field'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import useForm, { isEmail } from '../hooks/useForm'
import { sendEnquiry } from '../lib/sendEnquiry'
import usePageMeta from '../hooks/usePageMeta'
import './Book.css'

const EVENT_TYPES = [
  'Select event type',
  'Wedding',
  'Birthday or anniversary',
  'Corporate or team event',
  'Festival or market',
  'Something else',
]

const GUEST_RANGES = [
  'Select guest numbers',
  'Up to 50',
  'Up to 80',
  'Up to 100',
  '100+',
]

const initialValues = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guests: '',
  location: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'We need an email to reply to.'
  else if (!isEmail(values.email)) errors.email = 'That email doesn’t look quite right.'
  if (!values.eventType) errors.eventType = 'Choose the closest event type.'
  if (!values.eventDate) errors.eventDate = 'Which date are you hoping for?'
  else if (new Date(values.eventDate) < new Date(new Date().toDateString()))
    errors.eventDate = 'Please pick a date in the future.'
  if (!values.guests) errors.guests = 'A rough guest count helps us quote.'
  if (!values.location.trim()) errors.location = 'Where is the event taking place?'

  return errors
}

export default function Book() {
  usePageMeta(
    'Book Us',
    'Check your date and get a woodfired pizza catering quote from the Dough Wives within 48 hours.',
  )

  const { values, errors, submitted, sending, submitError, handleChange, handleSubmit, reset } =
    useForm({
      initialValues,
      validate,
      onSubmit: (fields) =>
        sendEnquiry(
          {
            name: fields.name,
            email: fields.email,
            _replyto: fields.email,
            phone: fields.phone || 'Not given',
            eventType: fields.eventType,
            eventDate: fields.eventDate,
            guests: fields.guests,
            location: fields.location,
            message: fields.message || 'No extra notes',
          },
          `Dough Wives booking enquiry — ${fields.eventType} on ${fields.eventDate}`,
        ),
    })

  return (
    <>
      <PageHero
        eyebrow="Let’s pizza party"
        title="Book"
        accent="Us"
        intro="Fill in the form and we’ll come back within 48 hours with availability, a quote and a few menu ideas. No obligation, no hard sell."
        image="/brand/book-pizza.jpg"
        imageAlt="Freshly baked woodfired pizza in a pink Dough Wives box"
      />

      <section className="section section--white book">
        <div className="container book__inner">
          <Reveal className="book__form-wrap">
            {submitted ? (
              <div className="form-success" role="status">
                <img src="/brand/logo-circle.png" alt="" width="110" height="110" />
                <h3>Enquiry sent ♥</h3>
                <p>
                  Thanks {values.name.split(' ')[0]}! We’ve got your details and will reply to{' '}
                  <strong>{values.email}</strong> within 48 hours. Keep an eye on your spam folder
                  just in case.
                </p>
                <button type="button" className="btn btn--outline" onClick={reset}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="book__form-title">Your event details</h2>

                <div className="form-grid">
                  <Field
                    label="Your name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Wives"
                    value={values.name}
                    error={errors.name}
                    onChange={handleChange}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Optional"
                    value={values.phone}
                    error={errors.phone}
                    onChange={handleChange}
                  />
                  <Field
                    label="Event type"
                    name="eventType"
                    type="select"
                    required
                    options={EVENT_TYPES}
                    value={values.eventType}
                    error={errors.eventType}
                    onChange={handleChange}
                  />
                  <Field
                    label="Event date"
                    name="eventDate"
                    type="date"
                    required
                    value={values.eventDate}
                    error={errors.eventDate}
                    onChange={handleChange}
                  />
                  <Field
                    label="Guest numbers"
                    name="guests"
                    type="select"
                    required
                    options={GUEST_RANGES}
                    value={values.guests}
                    error={errors.guests}
                    onChange={handleChange}
                  />
                  <Field
                    label="Location or postcode"
                    name="location"
                    required
                    full
                    placeholder="Venue name, town or postcode"
                    value={values.location}
                    error={errors.location}
                    onChange={handleChange}
                  />
                  <Field
                    label="Tell us about your day"
                    name="message"
                    type="textarea"
                    full
                    placeholder="Timings, dietary requirements, menu favourites, anything else we should know…"
                    value={values.message}
                    error={errors.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn" disabled={sending}>
                  {sending ? 'Sending…' : 'Send my enquiry'}
                  <span className="btn__heart" aria-hidden="true">
                    ♥
                  </span>
                </button>
                {submitError ? (
                  <p className="field__error" role="alert">
                    {submitError} You can also email us directly at{' '}
                    <a href={`mailto:${brand.email}`}>{brand.email}</a>.
                  </p>
                ) : (
                  <p className="form-note">
                    Fields marked * are required. Your enquiry is sent to {brand.email}. We only use
                    your details to answer you — never for anything else.
                  </p>
                )}
              </form>
            )}
          </Reveal>

          <aside className="book__aside">
            <Reveal className="book__card">
              <h3>What happens next</h3>
              <ol className="book__steps">
                {bookingSteps.map((step) => (
                  <li key={step.step}>
                    <span className="script">{step.step}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="book__card book__card--pink" delay={120}>
              <h3>Prefer to talk it through?</h3>
              <p>
                Call or email us and we’ll happily chat through options before you fill anything in.
              </p>
              <a href={`mailto:${brand.email}`} className="book__contact">
                {brand.email}
              </a>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="book__contact">
                {brand.phone}
              </a>
            </Reveal>

            <Reveal className="book__card" delay={200}>
              <h3>Popular choices</h3>
              <ul className="book__menu">
                {menu.pizza.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>
              <Link to="/menu" className="link-underline">
                Full menu
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
