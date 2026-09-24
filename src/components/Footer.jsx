import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Discover',
    links: [
      { label: 'Real Weddings', to: '/real-weddings' },
      { label: 'Vendors', to: '/vendors' },
      { label: 'Packages', to: '/packages' },
    ],
  },
  {
    title: 'WedPlan',
    links: [
      { label: 'How It Works', to: '/#how-it-works' },
      { label: 'Start Planning', to: '/start-planning' },
      { label: 'Login', to: '/login' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-2xl text-charcoal">WedPlan</span>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-charcoal/55">
              A premium wedding-planning platform bringing every idea, vendor and detail of your
              celebration together in one place.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-body text-[13px] tracking-wideish text-charcoal/45">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-body text-sm text-charcoal/70 hover:text-burgundy"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-charcoal/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-charcoal/45">
            © {new Date().getFullYear()} WedPlan. All rights reserved.
          </p>
          <p className="font-body text-xs text-charcoal/45">Made for couples planning something beautiful.</p>
        </div>
      </div>
    </footer>
  )
}
