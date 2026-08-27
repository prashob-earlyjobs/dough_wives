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
src/lib/sendEnquiry.js   Forwards booking and contact forms to info@doughwives.co.uk
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

- **Social URLs** in `src/data/site.js` (`instagram`, `facebook`, `tiktok`).
- **Event dates** in `upcomingEvents`.
- **Testimonials** in `testimonials`.
- **Photography**: swap remaining low-resolution brand-board crops in `public/brand/` for full-size
  photos using the same filenames.

## Forms

The booking and contact forms send to **info@doughwives.co.uk** via [FormSubmit](https://formsubmit.co).

The first live enquiry triggers a one-time confirmation email to that inbox. Click the confirm link
in that email and every later submission arrives automatically. Until that link is clicked, new
enquiries are held.

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
