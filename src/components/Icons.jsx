const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function FlameIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.7c2.6 3 4.2 5 4.2 7a4.2 4.2 0 0 1-8.4 0c0-.9.3-1.7.8-2.6" />
      <path d="M12 21.3a5.6 5.6 0 0 0 5.6-5.6c0-2.2-1-3.7-2.4-5.4" />
      <path d="M12 21.3a5.6 5.6 0 0 1-5.6-5.6c0-1.6.6-2.9 1.5-4.2" />
    </svg>
  )
}

export function HeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.3 4.7 13a4.6 4.6 0 0 1 6.5-6.5l.8.8.8-.8a4.6 4.6 0 0 1 6.5 6.5Z" />
    </svg>
  )
}

export function LeafIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20c0-8.3 5.2-13.4 16-14-.4 10.6-5.5 15.8-13.7 15.8H4Z" />
      <path d="M6.5 17.5C9 14 12.4 11.6 16.6 10" />
    </svg>
  )
}

export function SliceIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.4 5.6c5.9-2.8 11.3-2.8 17.2 0L12 21.2Z" />
      <path d="M5.6 10.1c4.2-1.6 8.6-1.6 12.8 0" />
      <circle cx="10" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.4" cy="14.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.2" y="5" width="17.6" height="16" rx="2.6" />
      <path d="M3.2 10h17.6M8 3v4M16 3v4" />
    </svg>
  )
}

export function ChefIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 12.5a3.9 3.9 0 0 1 .6-7.7 4.3 4.3 0 0 1 8-1.1 3.7 3.7 0 0 1 3.4 8.8v.1" />
      <path d="M6 12.4h12v5.2H6zM6 17.6h12V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
    </svg>
  )
}

export function TruckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.8 6.6h10.6v10.8H2.8zM13.4 10.4h4l3.8 3.6v3.4h-7.8z" />
      <circle cx="7" cy="18.6" r="1.9" />
      <circle cx="17" cy="18.6" r="1.9" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
      <path d="m3.6 6.6 8.4 6.6 8.4-6.6" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7.2 3.5h3l1.4 4-2 1.4a10.8 10.8 0 0 0 5.5 5.5l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 5.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.4c4-4.2 6-7.3 6-10a6 6 0 1 0-12 0c0 2.7 2 5.8 6 10Z" />
      <circle cx="12" cy="11" r="2.4" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3.4 2" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.6 12h14.2M13.4 6.4 19 12l-5.6 5.6" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m4.8 12.6 4.6 4.4 9.8-10" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5.4v13.2M5.4 12h13.2" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.6 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.5A22 22 0 0 0 15.4 3c-2.4 0-4 1.4-4 4.1V9.8H8.7V13h2.7v8Z" />
    </svg>
  )
}

export function TikTokIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.6 3.2c.4 2.3 1.8 3.7 4 4v2.9a6.8 6.8 0 0 1-4-1.4v5.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3a2.6 2.6 0 1 0 1.8 2.5V3.2Z" />
    </svg>
  )
}

export const iconMap = {
  flame: FlameIcon,
  heart: HeartIcon,
  leaf: LeafIcon,
  slice: SliceIcon,
  calendar: CalendarIcon,
  chef: ChefIcon,
  truck: TruckIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  clock: ClockIcon,
}

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] ?? HeartIcon
  return <Cmp {...props} />
}
