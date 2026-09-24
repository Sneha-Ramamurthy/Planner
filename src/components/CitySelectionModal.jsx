import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { popularCities } from '../data/cities'

export default function CitySelectionModal({ open, onSelect }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      popularCities.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/60 p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md bg-warmwhite p-8 sm:p-10"
          >
            <h3 className="font-display text-3xl text-charcoal">Where is the celebration?</h3>
            <p className="mt-2 font-body text-sm text-charcoal/60">
              Choose your city so we can curate wedding services for you.
            </p>

            <div className="relative mt-6">
              <Search
                size={17}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your city"
                className="w-full border border-charcoal/20 bg-transparent py-3 pl-10 pr-3 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-burgundy"
              />
            </div>

            <p className="mt-6 font-body text-[11px] tracking-wideish text-charcoal/45">
              Popular cities
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelect(c.name)}
                  className="border border-charcoal/20 px-4 py-2 font-body text-sm text-charcoal/80 transition-colors hover:border-burgundy hover:text-burgundy"
                >
                  {c.name}
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="font-body text-sm text-charcoal/45">No matching cities.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
