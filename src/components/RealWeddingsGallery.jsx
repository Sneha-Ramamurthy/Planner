import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { weddings, cities, cultures, themes } from '../data/weddings'

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-body text-[11px] tracking-wideish text-charcoal/45">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-charcoal/20 bg-warmwhite px-3 py-2.5 font-body text-sm text-charcoal focus:border-burgundy"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function RealWeddingsGallery({ limit }) {
  const [city, setCity] = useState('')
  const [culture, setCulture] = useState('')
  const [theme, setTheme] = useState('')

  const filtered = useMemo(() => {
    let list = weddings.filter(
      (w) =>
        (!city || w.city === city) &&
        (!culture || w.culture === culture) &&
        (!theme || w.theme === theme)
    )
    if (limit) list = list.slice(0, limit)
    return list
  }, [city, culture, theme, limit])

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
        Find inspiration for your celebration.
      </h2>

      <div className="mt-10 flex flex-wrap gap-4 border-b border-charcoal/10 pb-8">
        <FilterSelect label="City" value={city} onChange={setCity} options={cities} />
        <FilterSelect label="Culture" value={culture} onChange={setCulture} options={cultures} />
        <FilterSelect label="Theme" value={theme} onChange={setTheme} options={themes} />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-14 font-body text-charcoal/50">
          No weddings match those filters yet — try a different combination.
        </p>
      ) : (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <div key={w.id} className="group">
              <Link to={`/real-weddings/${w.id}`} className="block overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={w.heroImage}
                    alt={`${w.coupleNames} wedding in ${w.city}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="mt-4">
                <p className="font-display text-xl text-charcoal">{w.coupleNames}</p>
                <p className="mt-1 font-body text-sm text-charcoal/55">
                  {w.city} · {w.culture} · {w.theme}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  <Link
                    to={`/real-weddings/${w.id}`}
                    className="font-body text-sm text-burgundy underline decoration-burgundy/40 underline-offset-4 hover:decoration-burgundy"
                  >
                    View Wedding
                  </Link>
                  <Link
                    to="/start-planning"
                    state={{ city: w.city, style: w.theme }}
                    className="font-body text-sm text-charcoal/60 underline decoration-charcoal/20 underline-offset-4 hover:text-charcoal hover:decoration-charcoal/50"
                  >
                    Plan a celebration like this
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
