/**
 * Single source of truth for site copy, menu, pricing and contact details.
 * Update the values here and every page picks up the change.
 */

export const brand = {
  name: 'Dough Wives',
  strapline: 'Woodfired Pizza',
  established: '2026',
  motto: 'Good Pizza. Good Vibes. Happy Wives.',
  email: 'hello@doughwives.co.uk',
  phone: '07000 000 000',
  serviceArea: 'Serving the Midlands & surrounding counties',
  instagram: 'https://instagram.com/doughwives',
  facebook: 'https://facebook.com/doughwives',
  tiktok: 'https://tiktok.com/@doughwives',
  handle: '@doughwives',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Menu', to: '/menu' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Catering', to: '/catering' },
  { label: 'Merch', to: '/merch' },
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
    name: 'The Party Slice',
    guests: 'Up to 40 guests',
    price: 'from £750',
    includes: [
      '2 hours of continuous service',
      'Choice of 3 pizzas from our menu',
      'Pink gazebo, oven and full setup',
      'Two Dough Wives on the paddles',
    ],
  },
  {
    name: 'The Wedding Wives',
    guests: '40 – 120 guests',
    price: 'from £1,450',
    includes: [
      '3 hours of continuous service',
      'Choice of 5 pizzas plus garlic bread',
      'Styled stall, signage and string lights',
      'Menu tasting for two before the day',
      'Late-night pizza box send-off',
    ],
    featured: true,
  },
  {
    name: 'The Full Dough',
    guests: '120+ guests',
    price: "let's talk",
    includes: [
      'Multi-oven service for big crowds',
      'Bespoke menu built with you',
      'Dessert pizza and drinks station',
      'Branded boxes for your guests',
    ],
  },
]

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

export const upcomingEvents = [
  {
    date: '2026-09-05',
    day: '05',
    month: 'Sep',
    name: 'Riverside Street Food Market',
    location: 'Riverside Park, Nottingham',
    time: '11:00 – 20:00',
    status: 'Open to all',
  },
  {
    date: '2026-09-19',
    day: '19',
    month: 'Sep',
    name: 'Harvest Food & Craft Festival',
    location: 'Bakewell Showground, Derbyshire',
    time: '10:00 – 18:00',
    status: 'Open to all',
  },
  {
    date: '2026-10-03',
    day: '03',
    month: 'Oct',
    name: 'Pink Party Fundraiser',
    location: 'The Old Mill, Loughborough',
    time: '17:00 – 23:00',
    status: 'Ticketed',
  },
  {
    date: '2026-10-25',
    day: '25',
    month: 'Oct',
    name: 'Autumn Twilight Market',
    location: 'Market Square, Leicester',
    time: '12:00 – 21:00',
    status: 'Open to all',
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

export const gallery = [
  { src: '/brand/gazebo.png', alt: 'The pink Dough Wives gazebo set up with the woodfired oven', span: 'wide' },
  { src: '/brand/pizza-pink.png', alt: 'Freshly baked margherita pizza on a pink cloth' },
  { src: '/brand/wives-back.png', alt: 'The Dough Wives in branded t-shirts and aprons' },
  { src: '/brand/pizza-boxes.png', alt: 'Branded pink Dough Wives pizza boxes' },
  { src: '/brand/neon-sign.png', alt: 'Neon sign reading good pizza, good vibes, happy wives' },
  { src: '/brand/uniforms.png', alt: 'Dough Wives team uniforms — tees, aprons and caps', span: 'wide' },
  { src: '/brand/hero-gazebo.png', alt: 'Evening service under string lights at the pizza stall' },
  { src: '/brand/pizza-box-open.png', alt: 'An open pizza box with a margherita inside' },
  { src: '/brand/takeaway-bag.png', alt: 'Pink branded takeaway bag' },
  { src: '/brand/pink-cups.png', alt: 'Branded pink drinks cups' },
  { src: '/brand/menu-card.png', alt: 'Printed Dough Wives menu card' },
  { src: '/brand/merch-row.png', alt: 'Branded cap, apron and embroidered tee', span: 'wide' },
  { src: '/brand/merch-embroidery.png', alt: 'Close-up of the embroidered Dough Wives logo' },
]

export const merch = [
  {
    name: 'Dough Wives Tee',
    price: '£24',
    image: '/brand/uniforms.png',
    description: 'Soft cotton tee with the circular logo printed large across the back.',
    options: 'XS – XXL · White or cream',
  },
  {
    name: 'Signature Apron',
    price: '£28',
    image: '/brand/merch-apron.png',
    description: 'Bubblegum pink apron with front pocket and embroidered logo.',
    options: 'One size · Adjustable ties',
  },
  {
    name: 'Logo Cap',
    price: '£18',
    image: '/brand/merch-cap.png',
    description: 'Six-panel pink cap with embroidered heart detail on the side.',
    options: 'One size · Strap back',
  },
  {
    name: 'Tote & Box Bundle',
    price: '£16',
    image: '/brand/takeaway-bag.png',
    description: 'Branded tote plus a pack of two collector pizza boxes for your next night in.',
    options: 'Limited run',
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
    a: `${brand.serviceArea}. The first 30 miles are included; beyond that we add a small mileage charge, quoted upfront.`,
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
