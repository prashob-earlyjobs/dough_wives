# Dough Wives — Woodfired Pizza website

A React website for Dough Wives, built from the brand board: bubblegum pink, gold, cream and
charcoal, with the circular logo, the `Good Pizza. Good Vibes. Happy Wives.` motto and the pink
gazebo photography.

Nine routes: Home, Our Story, Menu, Events, Gallery, Catering, Merch, Contact and Book Us, plus a
404 page.

## Getting started

Requires Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
public/brand/            Brand imagery used by the site (logo, gazebo, merch, packaging)
brand-source/            Original brand board and homepage mockup (not shipped in the build)
src/data/site.js         All site copy: brand details, menu, prices, packages, events, FAQs
src/styles/tokens.css    Colour palette, fonts, radii, shadows
src/styles/global.css    Reset, typography, buttons, sections, forms, scroll-reveal
src/components/          Header, Footer, PageHero, CtaBand, Newsletter, Marquee, Field, Icons
src/hooks/               usePageMeta (titles/descriptions), useForm (validation)
src/pages/               One component + stylesheet per route
```

### Editing content

Almost everything readable on the site comes from `src/data/site.js` — menu items and prices,
catering packages, upcoming event dates, testimonials, merch, FAQs and the contact details used in
the header, footer and forms. Change it there once and every page updates.

Page-specific prose (the Our Story timeline, for example) lives at the top of that page's
component.

## Placeholders to replace before going live

These are stand-ins so the site renders as a finished product. Swap them for real details:

- **Contact details** in `src/data/site.js`: `email`, `phone`, `serviceArea` and the social URLs.
- **Prices and packages** — menu prices and the three catering packages are realistic examples.
- **Event dates** in `upcomingEvents`.
- **Testimonials** in `testimonials`.
- **Photography**: images in `public/brand/` are crops taken from the supplied brand board, so they
  are low resolution. Replace them with full-size photos using the same filenames and everything
  keeps working.

## Forms

The booking and contact forms validate on submit (required fields, email format, past dates) and
show an inline success state, but nothing is sent anywhere — there is no backend. To make them
live, add a handler to the `onSubmit` option in `useForm` and post to your provider of choice
(Formspree, Netlify Forms, Resend, or your own API).

## Accessibility and performance notes

- Skip link, focus-visible outlines, labelled form fields with `aria-invalid` and `role="alert"`
  error messages.
- Mobile menu and gallery lightbox are keyboard operable and close on `Escape`; the lightbox also
  moves with the arrow keys.
- All motion, including the scrolling marquee and scroll-reveal animation, is disabled under
  `prefers-reduced-motion`.
- Per-route `document.title` and meta description via `usePageMeta`.

## Deployment

The build output in `dist/` is a static site. Because routing is client-side, the host needs to
serve `index.html` for unknown paths:

- **Netlify**: handled by `public/_redirects`.
- **Vercel**: handled by `vercel.json`.
- **Other hosts**: add an equivalent rewrite of `/*` to `/index.html`.
