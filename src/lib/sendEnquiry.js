import { brand } from '../data/site'

/**
 * Posts an enquiry to FormSubmit, which forwards it to the Dough Wives inbox.
 * The first live submission sends a one-time confirmation email to
 * info@doughwives.co.uk — click that link and every later enquiry arrives
 * in the inbox automatically.
 */
export async function sendEnquiry(fields, subject) {
  const response = await fetch(`https://formsubmit.co/ajax/${brand.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
    }),
  })

  if (!response.ok) {
    throw new Error('Could not send your message just now.')
  }

  const data = await response.json()
  if (data.success === false || data.success === 'false') {
    throw new Error(data.message || 'Could not send your message just now.')
  }
}
