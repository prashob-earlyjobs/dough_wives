import { useEffect } from 'react'
import { brand } from '../data/site'

/** Keeps the document title and meta description in sync per route. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${brand.name}`
      : `${brand.name} | ${brand.strapline} Catering`

    if (!description) return

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    const previous = tag.getAttribute('content')
    tag.setAttribute('content', description)

    return () => {
      if (previous) tag.setAttribute('content', previous)
    }
  }, [title, description])
}
