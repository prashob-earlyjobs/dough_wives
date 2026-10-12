import { Link } from 'react-router-dom'
import { brand } from '../data/site'
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TikTokIcon,
} from '../components/Icons'
import Field from '../components/Field'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Newsletter from '../components/Newsletter'
import useForm, { isEmail } from '../hooks/useForm'
import { sendEnquiry } from '../lib/sendEnquiry'
import usePageMeta from '../hooks/usePageMeta'
import './Contact.css'

const SUBJECTS = [
  'What’s it about?',
  'Event enquiry',
  'Market or festival pitch',
  'Press or collaboration',
  'Something else',
]

const initialValues = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'We need an email to reply to.'
  else if (!isEmail(values.email)) errors.email = 'That email doesn’t look quite right.'
  if (!values.subject) errors.subject = 'Pick the closest subject.'
  if (values.message.trim().length < 10) errors.message = 'A little more detail, please.'
  return errors
}

export default function Contact() {
  usePageMeta(
    'Contact',
    `Get in touch with the Dough Wives — ${brand.email}. Event enquiries and market pitches.`,
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
            subject: fields.subject,
            message: fields.message,
          },
          `Dough Wives website — ${fields.subject}`,
        ),
    })

  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Get in"
        accent="Touch"
        intro="Questions about a booking or a market pitch? Drop us a message and one of us will reply personally."
        image="/brand/wives-portrait.jpg"
        imageAlt="Illustrated portrait of the Dough Wives"
      />

      <section className="section section--white">
        <div className="container contact__inner">
          <Reveal className="contact__details">
            <p className="eyebrow">Details</p>
            <h2 className="section-title">
              Two wives, one <span className="accent">inbox</span>
            </h2>
            <p className="lead">
              We answer everything ourselves, usually within 48 hours. For urgent event questions,
              phone is fastest.
            </p>

            <ul className="contact__list">
              <li>
                <span className="icon-badge">
                  <MailIcon />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </div>
              </li>
              <li>
                <span className="icon-badge">
                  <PhoneIcon />
                </span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
                </div>
              </li>
              <li>
                <span className="icon-badge">
                  <PinIcon />
                </span>
                <div>
                  <strong>Where we travel</strong>
                  <span>{brand.serviceArea}</span>
                </div>
              </li>
            </ul>

            <div className="contact__social">
              <p className="eyebrow">Follow along</p>
              <ul>
                <li>
                  <a href={brand.instagram} target="_blank" rel="noreferrer">
                    <InstagramIcon width="18" height="18" />
                    {brand.handle}
                  </a>
                </li>
                <li>
                  <a href={brand.facebook} target="_blank" rel="noreferrer">
                    <FacebookIcon width="18" height="18" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={brand.tiktok} target="_blank" rel="noreferrer">
                    <TikTokIcon width="18" height="18" />
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            <p className="contact__nudge">
              Ready to check a date? The{' '}
              <Link to="/book">booking form</Link> gets you a quote fastest.
            </p>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            {submitted ? (
              <div className="form-success" role="status">
                <h3>Message sent ♥</h3>
                <p>
                  Thanks {values.name.split(' ')[0]}, it’s landed. We’ll reply to{' '}
                  <strong>{values.email}</strong> as soon as we’re out of the pizza queue.
                </p>
                <button type="button" className="btn btn--outline" onClick={reset}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="contact__form-title">Send us a message</h2>

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
                  label="Subject"
                  name="subject"
                  type="select"
                  required
                  options={SUBJECTS}
                  value={values.subject}
                  error={errors.subject}
                  onChange={handleChange}
                />
                <Field
                  label="Message"
                  name="message"
                  type="textarea"
                  required
                  placeholder="Tell us everything…"
                  value={values.message}
                  error={errors.message}
                  onChange={handleChange}
                />

                <button type="submit" className="btn btn--block" disabled={sending}>
                  {sending ? 'Sending…' : 'Send message'}
                  <span className="btn__heart" aria-hidden="true">
                    ♥
                  </span>
                </button>
                {submitError ? (
                  <p className="field__error" role="alert">
                    {submitError} You can also email us directly at{' '}
                    <a href={`mailto:${brand.email}`}>{brand.email}</a>.
                  </p>
                ) : null}
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Newsletter />
        </div>
      </section>
    </>
  )
}
