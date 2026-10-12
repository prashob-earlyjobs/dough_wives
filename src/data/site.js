/**
 * Single source of truth for site copy, menu, pricing and contact details.
 * Update the values here and every page picks up the change.
 */

export const brand = {
  name: 'Dough Wives',
  strapline: 'Woodfired Pizza',
  established: '2026',
  motto: 'Good Pizza. Good Vibes. Happy Wives.',
  email: 'info@doughwives.co.uk',
  phone: '07816 969 868',
  serviceArea: 'Serving London, Surrey, Sussex, Hampshire & surrounding areas',
  instagram: 'https://instagram.com/doughwives',
  facebook: 'https://facebook.com/doughwives',
  tiktok: 'https://tiktok.com/@doughwives',
  handle: '@doughwives',
}

export const about = [
  'We never really planned to start a pizza business — Dough Wives began with two wives, a love of good food, and an idea that somehow got completely out of hand.',
  'What started with firing up the pizza oven and seeing what we could create quickly turned into something we absolutely fell in love with. There’s something pretty special about stretching the dough, adding fresh toppings and watching a pizza cook in front of you — especially when you get to hand it straight to someone and see their reaction.',
  'Now, our signature pink setup travels to weddings, parties, celebrations, corporate events and private gatherings across London, Surrey and Hampshire, bringing freshly baked, stone-fired pizza and a little bit of Dough Wives personality wherever we go.',
  'We want Dough Wives to feel like more than just grabbing a pizza. It’s about great food, a bit of theatre, plenty of laughs and creating something people remember long after the last slice has disappeared.',
  'And yes… despite being married, we still fully intend to argue over who makes the better Margherita.',
]

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Menu', to: '/menu' },
  { label: 'Catering', to: '/catering' },
  { label: 'Contact', to: '/contact' },
]

export const features = [
  {
    icon: 'flame',
    title: 'Woodfired\nto perfection',
    body: 'Cooked in our Gozney oven for the perfect crust and unforgettable flavour.',
  },
  {
    icon: 'heart',
    title: 'Made\nwith love',
    body: 'Every pizza is handmade with passion by your Dough Wives.',
  },
  {
    icon: 'leaf',
    title: 'Quality\ningredients',
    body: 'We use the best, from our 48-hour dough to our toppings.',
  },
  {
    icon: 'slice',
    title: 'Good pizza\nGood vibes',
    body: "It's more than pizza — it's a whole mood, wherever we park up.",
  },
]

export const menu = {
  pizza: [
    {
      name: 'Margherita',
      price: '£10',
      description: 'San Marzano tomato, fior di latte, fresh basil, cold-pressed olive oil.',
      tags: ['v'],
    },
    {
      name: 'Pepperoni',
      price: '£12',
      description: 'Double Neapolitan pepperoni, tomato, mozzarella, a whisper of oregano.',
      tags: [],
    },
    {
      name: 'Veggie Garden',
      price: '£12',
      description: 'Roasted courgette, red pepper, red onion, cherry tomato, basil pesto.',
      tags: ['v'],
    },
    {
      name: 'Hot Honey',
      price: '£13',
      description: 'Spicy salami, mozzarella, chilli-infused honey drizzle, pecorino.',
      tags: ['spicy'],
    },
    {
      name: 'The Wives Special',
      price: '£14',
      description: 'Our rotating showstopper — ask us what came out of the oven today.',
      tags: ['seasonal'],
    },
  ],
  extras: [
    {
      name: 'Garlic Bread',
      price: '£6',
      description: 'Woodfired dough, garlic butter, parsley, sea salt. Add mozzarella £1.',
      tags: ['v'],
    },
    {
      name: 'Dough Balls & Dips',
      price: '£5',
      description: 'Six pillowy dough balls with garlic butter and marinara.',
      tags: ['v'],
    },
    {
      name: 'Nutella Pizza Pie',
      price: '£7',
      description: 'Folded dough, Nutella, strawberries, icing sugar snowfall.',
      tags: ['v'],
    },
    {
      name: 'Cold Drinks',
      price: '£2.50',
      description: 'Craft sodas, sparkling water and juices — served ice cold.',
      tags: [],
    },
  ],
}

export const menuLegend = [
  { key: 'v', label: 'Vegetarian' },
  { key: 'spicy', label: 'Bit of a kick' },
  { key: 'seasonal', label: 'Seasonal special' },
]

export const eventTypes = [
  {
    icon: 'calendar',
    title: 'Private Events',
    body: 'Weddings, birthdays and anniversaries. Tailored packages for your perfect day.',
    points: ['Menu tasting included', 'Unlimited pizza options', 'Setup & clear-down handled'],
  },
  {
    icon: 'chef',
    title: 'Festivals & Markets',
    body: 'Find our pink gazebo at a market near you, slinging pizza all weekend long.',
    points: ['High-volume service', 'Fully licensed & insured', 'Instagram-ready stall'],
  },
  {
    icon: 'heart',
    title: 'Corporate Catering',
    body: 'Team socials, launch parties and away days. Impress your team with seriously good pizza.',
    points: ['Invoiced billing', 'Dietary options covered', 'On-site in under an hour'],
  },
]

export const packages = [
  {
    name: 'The Little Wife',
    tagline: 'Perfect for smaller weddings & intimate celebrations',
    guests: 'Up to 50 guests',
    price: 'from £795',
    perfectFor: 'Intimate weddings, registry celebrations & evening food',
    includes: [
      'Freshly fired pizzas',
      'Choice of 3 pizza flavours',
      'Vegetarian option included',
      'Cooked fresh in a Gozney Dome Gen 2',
      'Dough Wives pink event setup',
      'Napkins & serving essentials',
      'Dough Wives team for up to 2 hours',
    ],
  },
  {
    name: 'The Big Wife',
    tagline: 'Our signature wedding package',
    guests: 'Up to 80 guests',
    price: 'from £1,195',
    perfectFor: 'Wedding receptions & evening catering',
    includes: [
      'Choice of 4 pizza flavours',
      'Vegetarian option included',
      'Gozney-fired throughout your service',
      'Full Dough Wives pink event setup',
      'Two simple side dishes',
      'Garlic breads for the tables',
      'Napkins & serving essentials',
      'Dough Wives team for up to 3 hours',
    ],
    featured: true,
  },
  {
    name: 'The Full Wife',
    tagline: 'Go on then. Let’s make a thing of it.',
    guests: 'Up to 100 guests',
    price: 'from £1,595',
    perfectFor: 'Bigger wedding parties who want the full experience',
    includes: [
      'Choice of 5 pizza flavours',
      'One personalised Bride & Groom pizza',
      'Vegetarian option included',
      'Garlic breads and two sides',
      'Gozney-fired pizza throughout service',
      'Full styled Dough Wives setup',
      'Personalised wedding menu board',
      'Napkins & serving essentials',
      'Dough Wives team for up to 3 hours',
      'Pizza boxes for any remaining pizza',
    ],
  },
]

export const packageExtras = {
  extraGuests: 'Need more pizza? Additional guests from £12.50 per person.',
  extras: [
    'Desserts',
    'Children’s pizzas',
    'Late-night pizza',
    'Additional service time',
    'Personalised pizza boxes',
  ],
  note: 'Travel charges may apply. Final pricing is confirmed on enquiry. Please tell us about allergies before you book.',
}

export const bookingSteps = [
  {
    step: '01',
    title: 'Say hello',
    body: 'Send us your date, location and rough guest numbers using the form.',
  },
  {
    step: '02',
    title: 'Build your menu',
    body: 'We reply within 48 hours with availability, a quote and menu ideas.',
  },
  {
    step: '03',
    title: 'Save the date',
    body: 'A 20% deposit locks in your booking. The rest is due a week before.',
  },
  {
    step: '04',
    title: 'Pizza party',
    body: 'We arrive early, set up the pink gazebo and light the oven. You relax.',
  },
]

export const testimonials = [
  {
    quote:
      'The pink gazebo was the star of our wedding. Guests are still talking about the hot honey pizza six months later.',
    author: 'Ellie & Sam',
    detail: 'Wedding, Derbyshire',
  },
  {
    quote:
      'Fed 90 people in under two hours without a single queue moan. Faultless, friendly and unbelievably tasty.',
    author: 'Priya K.',
    detail: 'Corporate summer social',
  },
  {
    quote:
      'Best pizza on the market circuit, hands down. That 48-hour dough makes all the difference.',
    author: 'Tom H.',
    detail: 'Riverside Market regular',
  },
]

export const faqs = [
  {
    q: 'How much space do you need?',
    a: 'Our pink gazebo needs roughly 4m x 4m of level ground with clearance above, plus a metre behind for the oven and prep. Grass, gravel or hardstanding all work.',
  },
  {
    q: 'Do you need power or water?',
    a: 'No. The oven runs on wood and we bring our own water and hand-wash station, so we are fully self-sufficient. A nearby tap is a bonus, never a requirement.',
  },
  {
    q: 'Can you cater for dietary requirements?',
    a: 'Yes. We offer vegetarian and vegan cheese options and gluten-free bases with 10 days notice. Tell us about allergies when you book and we prep separately.',
  },
  {
    q: 'How far do you travel?',
    a: `${brand.serviceArea}. Travel charges may apply depending on the venue — we’ll always quote these upfront.`,
  },
  {
    q: 'How do we secure our date?',
    a: 'A 20% deposit confirms the booking, with the balance due seven days before your event. Dates move fast in summer, so get in touch early.',
  },
  {
    q: 'Are you insured?',
    a: 'Fully. We hold public liability insurance, a Level 2 Food Hygiene certificate and a 5-star hygiene rating. Paperwork is available for venues on request.',
  },
]
