export default function Field({
  label,
  name,
  type = 'text',
  required = false,
  error,
  value,
  onChange,
  options,
  full = false,
  ...rest
}) {
  const id = `field-${name}`
  const describedBy = error ? `${id}-error` : undefined
  const shared = {
    id,
    name,
    value,
    onChange,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    required: required || undefined,
    ...rest,
  }

  return (
    <label
      className={`field${error ? ' field--error' : ''}`}
      htmlFor={id}
      style={full ? { gridColumn: '1 / -1' } : undefined}
    >
      <span className="field__label">
        {label} {required ? <span className="req">*</span> : null}
      </span>

      {type === 'textarea' ? (
        <textarea {...shared} />
      ) : type === 'select' ? (
        <select {...shared}>
          {options.map((option) => (
            <option key={option} value={option === options[0] ? '' : option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} {...shared} />
      )}

      {error ? (
        <span className="field__error" id={`${id}-error`} role="alert">
          {error}
        </span>
      ) : null}
    </label>
  )
}
