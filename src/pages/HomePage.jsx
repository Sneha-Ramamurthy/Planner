import { Link } from 'react-router-dom'

export default function HomePage({ city }) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 text-center">
      <p className="font-body text-[13px] tracking-wideish text-burgundy">
        {city ? `Planning in ${city}` : 'Your wedding home'}
      </p>
      <h1 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
        Your personalized wedding homepage
      </h1>
      <p className="mt-4 font-body text-charcoal/60">
        This is where your dashboard, vendor marketplace and bookings will live once the
        logged-in application is built. For now, this placeholder confirms the flow from
        landing page → login → start planning → city selection works end to end.
      </p>
      <Link
        to="/"
        className="mt-10 inline-block border border-charcoal/20 px-6 py-3 font-body text-sm text-charcoal/80 hover:border-burgundy hover:text-burgundy"
      >
        ← Back to WedPlan
      </Link>
    </div>
  )
}
