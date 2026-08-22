import { useState } from 'react'
import './Newsletter.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('error')
      return
    }
    setStatus('done')
    setEmail('')
  }

  return (
    <div className="newsletter">
      <p className="eyebrow">Good pizza, straight to your inbox</p>
      <h2 className="newsletter__title script">
        Join the <span className="accent">Wives List</span>
      </h2>
      <p className="newsletter__body">
        Sign up for updates on events, special offers and all things Dough Wives. No spam, just
        pizza.
      </p>

      {status === 'done' ? (
        <p className="newsletter__done" role="status">
          You’re on the list ♥ Check your inbox for a hello from us.
        </p>
      ) : (
        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <label className="newsletter__label" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="newsletter__row">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              autoComplete="email"
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === 'error') setStatus('idle')
              }}
            />
            <button type="submit" className="btn">
              Sign me up
              <span className="btn__heart" aria-hidden="true">
                ♥
              </span>
            </button>
          </div>
          {status === 'error' ? (
            <span className="field__error" id="newsletter-error">
              Please enter a valid email address.
            </span>
          ) : null}
        </form>
      )}
    </div>
  )
}
