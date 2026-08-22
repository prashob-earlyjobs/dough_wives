import { useState } from 'react'

/**
 * Minimal controlled-form helper: values, per-field errors and a submit
 * guard. `validate` receives all values and returns an errors object.
 *
 * There is no backend wired up, so a successful submit resolves locally.
 * Swap `onSubmit` for a real API/email call when one is available.
 */
export default function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      const firstField = document.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)
      firstField?.focus()
      return
    }

    setErrors({})
    setSubmitted(true)
    onSubmit?.(values)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
  }

  return { values, errors, submitted, handleChange, handleSubmit, reset }
}

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
