import { useState } from 'react'

/**
 * Controlled-form helper: values, per-field errors and an async submit
 * guard. `validate` receives all values and returns an errors object.
 * `onSubmit` should return a promise (e.g. sendEnquiry) so the form can
 * show sending / error states.
 */
export default function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      const firstField = document.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)
      firstField?.focus()
      return
    }

    setErrors({})
    setSubmitError('')

    if (!onSubmit) {
      setSubmitted(true)
      return
    }

    setSending(true)
    try {
      await onSubmit(values)
      setSubmitted(true)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong sending your message. Please email us instead.',
      )
    } finally {
      setSending(false)
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
    setSending(false)
    setSubmitError('')
  }

  return {
    values,
    errors,
    submitted,
    sending,
    submitError,
    handleChange,
    handleSubmit,
    reset,
  }
}

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
