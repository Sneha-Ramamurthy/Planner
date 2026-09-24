import { Link, useParams } from 'react-router-dom'
import { weddings } from '../data/weddings'

export default function RealWeddingDetailPage() {
  const { id } = useParams()
  const wedding = weddings.find((w) => w.id === id)

  if (!wedding) {
    return (
      <div className="mx-auto max-w-xl px-6 pt-40 pb-24 text-center">
        <h1 className="font-display text-3xl text-charcoal">We couldn’t find that wedding.</h1>
        <Link
          to="/real-weddings"
          className="mt-6 inline-block font-body text-sm text-burgundy hover:underline"
        >
          ← Back to Real Weddings
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="relative flex h-[70vh] min-h-[420px] items-end bg-charcoal">
        <img
          src={wedding.heroImage}
          alt={`${wedding.coupleNames} wedding in ${wedding.city}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
          <p className="font-body text-[13px] tracking-wideish text-champagne">
            {wedding.city} · {wedding.month} {wedding.year}
          </p>
          <h1 className="mt-3 font-display text-5xl text-warmwhite sm:text-6xl">
            {wedding.coupleNames}
          </h1>
          <p className="mt-2 font-body text-warmwhite/75">{wedding.style}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="max-w-2xl font-body text-lg leading-relaxed text-charcoal/70">
          {wedding.summary}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {wedding.gallery.map((src, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-5 border-t border-charcoal/10 pt-10">
          <Link
            to="/start-planning"
            state={{ city: wedding.city, style: wedding.theme }}
            className="border border-burgundy bg-burgundy px-7 py-3.5 font-body text-[15px] text-warmwhite transition-colors duration-300 hover:bg-burgundy-dark"
          >
            Plan a celebration like this →
          </Link>
          <Link to="/real-weddings" className="font-body text-sm text-charcoal/60 hover:text-burgundy">
            ← Back to Real Weddings
          </Link>
        </div>
      </div>
    </div>
  )
}
